import { Hono } from 'hono'
import { cors } from 'hono/cors'
// @ts-ignore
import quizUploadJs from '../public/static/quiz-upload.js?raw'
// @ts-ignore
import appJs from '../public/static/app.js?raw'
// @ts-ignore
import appCss from '../public/static/app.css?raw'

// ─── Types ────────────────────────────────────────────────────────────────────
type Bindings = {
  DB: D1Database
  // Payme Business credentials (set via wrangler secret / .dev.vars)
  PAYME_MERCHANT_ID: string   // Merchant ID из кабинета Payme Business
  PAYME_SECRET_KEY: string    // Секретный ключ (production)
  PAYME_TEST_SECRET_KEY: string // Секретный ключ (test/sandbox)
  PAYME_TEST_MODE: string     // 'true' | 'false'  (по умолчанию 'true' до получения прода)
  APP_URL: string             // https://your-domain.pages.dev (для return_url)
}
const app = new Hono<{ Bindings: Bindings }>()

// ─── CORS & Middleware ────────────────────────────────────────────────────────
app.use('/api/*', cors({ origin: '*', allowMethods: ['GET','POST','PUT','DELETE','OPTIONS'] }))

// ─── Helper: nanoid-like ID ───────────────────────────────────────────────────
function nanoid(len = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const arr = new Uint8Array(len)
  crypto.getRandomValues(arr)
  arr.forEach(b => result += chars[b % chars.length])
  return result
}

// ─── Helper: Simple hash (SHA-256) ───────────────────────────────────────────
async function hashPassword(pass: string): Promise<string> {
  const enc = new TextEncoder()
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(pass))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('')
}

// ─── Helper: get user from session token ─────────────────────────────────────
async function getUserFromToken(db: D1Database, token: string | null) {
  if (!token) return null
  const now = Math.floor(Date.now() / 1000)
  const row = await db.prepare(
    'SELECT u.* FROM sessions s JOIN users u ON s.user_id=u.id WHERE s.token=? AND s.expires_at>?'
  ).bind(token, now).first() as any
  return row || null
}

// ─── Helper: get auth token from request ─────────────────────────────────────
function getToken(c: any): string | null {
  const auth = c.req.header('Authorization') || ''
  if (auth.startsWith('Bearer ')) return auth.slice(7)
  return c.req.header('X-Auth-Token') || null
}

// ─── Генерация кода и PIN ─────────────────────────────────────────────────────
function genCode() { return String(Math.floor(100000 + Math.random() * 900000)) }
function genPin()  { return String(Math.floor(1000  + Math.random() * 9000)) }

// ─── Статические файлы ───────────────────────────────────────────────────────
app.get('/static/app.css', (c) => {
  c.header('Content-Type', 'text/css; charset=utf-8')
  c.header('Cache-Control', 'public, max-age=300')
  return c.body(appCss)
})
app.get('/static/app.js', (c) => {
  c.header('Content-Type', 'application/javascript; charset=utf-8')
  c.header('Cache-Control', 'public, max-age=300')
  return c.body(appJs)
})
app.get('/static/quiz-upload.js', (c) => {
  c.header('Content-Type', 'application/javascript; charset=utf-8')
  c.header('Cache-Control', 'public, max-age=300')
  return c.body(quizUploadJs)
})

// ═══════════════════════════════════════════════════════════════════════════════
// AUTH API
// ═══════════════════════════════════════════════════════════════════════════════

// POST /api/auth/register — создать аккаунт по email+password или nickname
app.post('/api/auth/register', async (c) => {
  try {
    const body = await c.req.json() as any
    const { name, email, password, avatar = '🧑', provider = 'email' } = body
    if (!name || name.trim().length < 1) return c.json({ error: 'Name required' }, 400)

    const db = c.env.DB
    const id = nanoid()

    // Check email uniqueness if provided
    if (email) {
      const existing = await db.prepare('SELECT id FROM users WHERE email=?').bind(email.toLowerCase()).first()
      if (existing) return c.json({ error: 'email_taken' }, 409)
    }

    const pwHash = password ? await hashPassword(password) : null
    await db.prepare(
      'INSERT INTO users (id,name,email,avatar,provider,password_hash) VALUES (?,?,?,?,?,?)'
    ).bind(id, name.trim(), email ? email.toLowerCase() : null, avatar, provider, pwHash).run()

    // Create session
    const token = nanoid(32)
    const expires = Math.floor(Date.now() / 1000) + 86400 * 30 // 30 days
    await db.prepare('INSERT INTO sessions (token,user_id,expires_at) VALUES (?,?,?)').bind(token, id, expires).run()

    return c.json({ ok: true, token, user: { id, name: name.trim(), email: email || null, avatar, provider } })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// POST /api/auth/login — войти по email+password
app.post('/api/auth/login', async (c) => {
  try {
    const body = await c.req.json() as any
    const { email, password } = body
    if (!email || !password) return c.json({ error: 'Email and password required' }, 400)

    const db = c.env.DB
    const user = await db.prepare('SELECT * FROM users WHERE email=?').bind(email.toLowerCase()).first() as any
    if (!user) return c.json({ error: 'not_found' }, 404)

    const pwHash = await hashPassword(password)
    if (user.password_hash !== pwHash) return c.json({ error: 'wrong_password' }, 401)

    // Update last seen
    await db.prepare('UPDATE users SET last_seen=unixepoch() WHERE id=?').bind(user.id).run()

    // Create session
    const token = nanoid(32)
    const expires = Math.floor(Date.now() / 1000) + 86400 * 30
    await db.prepare('INSERT INTO sessions (token,user_id,expires_at) VALUES (?,?,?)').bind(token, user.id, expires).run()

    return c.json({ ok: true, token, user: { id: user.id, name: user.name, email: user.email, avatar: user.avatar, provider: user.provider } })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// POST /api/auth/social — вход через соцсеть (провайдер + имя + email)
app.post('/api/auth/social', async (c) => {
  try {
    const body = await c.req.json() as any
    const { provider, name, email, avatar = '🧑' } = body
    if (!provider || !name) return c.json({ error: 'Provider and name required' }, 400)

    const db = c.env.DB
    let user: any = null

    // Try find by email
    if (email) {
      user = await db.prepare('SELECT * FROM users WHERE email=?').bind(email.toLowerCase()).first() as any
    }

    if (!user) {
      // Create new user
      const id = nanoid()
      await db.prepare(
        'INSERT INTO users (id,name,email,avatar,provider) VALUES (?,?,?,?,?)'
      ).bind(id, name.trim(), email ? email.toLowerCase() : null, avatar, provider).run()
      user = { id, name: name.trim(), email: email || null, avatar, provider }
    } else {
      // Update name/avatar/last_seen
      await db.prepare('UPDATE users SET name=?,avatar=?,last_seen=unixepoch() WHERE id=?').bind(name.trim(), avatar, user.id).run()
    }

    const token = nanoid(32)
    const expires = Math.floor(Date.now() / 1000) + 86400 * 30
    await db.prepare('INSERT INTO sessions (token,user_id,expires_at) VALUES (?,?,?)').bind(token, user.id, expires).run()

    return c.json({ ok: true, token, user: { id: user.id, name: user.name, email: user.email, avatar: user.avatar, provider } })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// POST /api/auth/guest — анонимный вход
app.post('/api/auth/guest', async (c) => {
  try {
    const body = await c.req.json().catch(() => ({})) as any
    const name = (body.name || 'Гость').trim()
    const db = c.env.DB
    const id = nanoid()
    await db.prepare('INSERT INTO users (id,name,avatar,provider) VALUES (?,?,?,?)').bind(id, name, '👤', 'guest').run()
    const token = nanoid(32)
    const expires = Math.floor(Date.now() / 1000) + 86400 * 7 // 7 days
    await db.prepare('INSERT INTO sessions (token,user_id,expires_at) VALUES (?,?,?)').bind(token, id, expires).run()
    return c.json({ ok: true, token, user: { id, name, avatar: '👤', provider: 'guest' } })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// GET /api/auth/me — проверить текущую сессию
app.get('/api/auth/me', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  await db.prepare('UPDATE users SET last_seen=unixepoch() WHERE id=?').bind(user.id).run()
  return c.json({ ok: true, user: { id: user.id, name: user.name, email: user.email, avatar: user.avatar, provider: user.provider } })
})

// POST /api/auth/logout
app.post('/api/auth/logout', async (c) => {
  const token = getToken(c)
  if (token) await c.env.DB.prepare('DELETE FROM sessions WHERE token=?').bind(token).run()
  return c.json({ ok: true })
})

// PUT /api/auth/profile — обновить профиль
app.put('/api/auth/profile', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  const body = await c.req.json() as any
  const name = body.name?.trim() || user.name
  const avatar = body.avatar || user.avatar
  await db.prepare('UPDATE users SET name=?,avatar=? WHERE id=?').bind(name, avatar, user.id).run()
  return c.json({ ok: true, user: { ...user, name, avatar } })
})

// ═══════════════════════════════════════════════════════════════════════════════
// QUIZZES API
// ═══════════════════════════════════════════════════════════════════════════════

function quizRow(row: any) {
  return {
    id: row.id,
    code: row.code,
    pin: row.pin,
    ownerId: row.owner_id,
    title: row.title,
    description: row.description,
    category: row.category,
    passingScore: row.passing_score,
    timeLimit: row.time_limit,
    questionTimer: row.question_timer,
    shuffleQuestions: !!row.shuffle_questions,
    shuffleAnswers: !!row.shuffle_answers,
    showExplanations: row.show_explanations,
    maxQuestions: row.max_questions,
    isPublic: !!row.is_public,
    isLocked: !!row.is_locked,
    questions: JSON.parse(row.questions_json || '[]'),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

// GET /api/quizzes — список тестов текущего пользователя
app.get('/api/quizzes', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  const rows = await db.prepare('SELECT * FROM quizzes WHERE owner_id=? ORDER BY updated_at DESC').bind(user.id).all()
  return c.json({ ok: true, quizzes: (rows.results || []).map(quizRow) })
})

// POST /api/quizzes — создать тест
app.post('/api/quizzes', async (c) => {
  try {
    const db = c.env.DB
    const user = await getUserFromToken(db, getToken(c))
    const body = await c.req.json() as any
    const id = body.id || nanoid()
    const code = body.code || genCode()
    const pin  = body.pin  || genPin()

    // Ensure code is unique
    const existing = await db.prepare('SELECT id FROM quizzes WHERE code=?').bind(code).first()
    const finalCode = existing ? genCode() : code

    await db.prepare(`
      INSERT INTO quizzes (id,code,pin,owner_id,title,description,category,passing_score,time_limit,
        question_timer,shuffle_questions,shuffle_answers,show_explanations,max_questions,questions_json,is_public)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      ON CONFLICT(id) DO UPDATE SET
        title=excluded.title, description=excluded.description, category=excluded.category,
        passing_score=excluded.passing_score, time_limit=excluded.time_limit,
        question_timer=excluded.question_timer, shuffle_questions=excluded.shuffle_questions,
        shuffle_answers=excluded.shuffle_answers, show_explanations=excluded.show_explanations,
        max_questions=excluded.max_questions, questions_json=excluded.questions_json,
        is_public=excluded.is_public, updated_at=unixepoch()
    `).bind(
      id, finalCode, pin, user?.id || null,
      body.title || 'Untitled', body.description || '', body.category || '',
      body.passingScore ?? 60, body.timeLimit ?? 0, body.questionTimer ?? 0,
      body.shuffleQuestions ? 1 : 0, body.shuffleAnswers ? 1 : 0,
      body.showExplanations || 'end', body.maxQuestions ?? 0,
      JSON.stringify(body.questions || []),
      body.isPublic !== false ? 1 : 0
    ).run()

    const row = await db.prepare('SELECT * FROM quizzes WHERE id=?').bind(id).first() as any
    return c.json({ ok: true, quiz: quizRow(row) })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// PUT /api/quizzes/:id — обновить тест
app.put('/api/quizzes/:id', async (c) => {
  try {
    const db = c.env.DB
    const user = await getUserFromToken(db, getToken(c))
    const id = c.req.param('id')
    const existing = await db.prepare('SELECT * FROM quizzes WHERE id=?').bind(id).first() as any
    if (!existing) return c.json({ error: 'not_found' }, 404)
    if (existing.owner_id && user?.id !== existing.owner_id) return c.json({ error: 'forbidden' }, 403)

    const body = await c.req.json() as any
    await db.prepare(`
      UPDATE quizzes SET title=?,description=?,category=?,passing_score=?,time_limit=?,
        question_timer=?,shuffle_questions=?,shuffle_answers=?,show_explanations=?,
        max_questions=?,questions_json=?,is_public=?,updated_at=unixepoch()
      WHERE id=?
    `).bind(
      body.title ?? existing.title, body.description ?? existing.description,
      body.category ?? existing.category, body.passingScore ?? existing.passing_score,
      body.timeLimit ?? existing.time_limit, body.questionTimer ?? existing.question_timer,
      body.shuffleQuestions ? 1 : 0, body.shuffleAnswers ? 1 : 0,
      body.showExplanations ?? existing.show_explanations,
      body.maxQuestions ?? existing.max_questions,
      JSON.stringify(body.questions || JSON.parse(existing.questions_json)),
      body.isPublic !== false ? 1 : 0, id
    ).run()

    const row = await db.prepare('SELECT * FROM quizzes WHERE id=?').bind(id).first() as any
    return c.json({ ok: true, quiz: quizRow(row) })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// DELETE /api/quizzes/:id
app.delete('/api/quizzes/:id', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  const id = c.req.param('id')
  const existing = await db.prepare('SELECT * FROM quizzes WHERE id=?').bind(id).first() as any
  if (!existing) return c.json({ error: 'not_found' }, 404)
  if (existing.owner_id && user?.id !== existing.owner_id) return c.json({ error: 'forbidden' }, 403)
  await db.prepare('DELETE FROM quizzes WHERE id=?').bind(id).run()
  return c.json({ ok: true })
})

// GET /api/quizzes/find?code=XXXXXX&pin=YYYY — поиск по коду+PIN (ПУБЛИЧНЫЙ)
app.get('/api/quizzes/find', async (c) => {
  const code = c.req.query('code')?.trim()
  const pin  = c.req.query('pin')?.trim()
  if (!code || !pin) return c.json({ error: 'code and pin required' }, 400)

  const db = c.env.DB
  const row = await db.prepare('SELECT * FROM quizzes WHERE code=? AND pin=?').bind(code, pin).first() as any
  if (!row) return c.json({ error: 'not_found' }, 404)
  if (row.is_locked) return c.json({ error: 'locked', message: 'Quiz is locked by owner' }, 403)

  // Проверяем, не заблокирован ли текущий пользователь
  const user = await getUserFromToken(db, getToken(c))
  if (user) {
    const restriction = await db.prepare(
      'SELECT id FROM quiz_user_restrictions WHERE quiz_id=? AND user_id=?'
    ).bind(row.id, user.id).first()
    if (restriction) return c.json({ error: 'restricted', message: 'You have been restricted from this quiz by its owner' }, 403)
  }

  return c.json({ ok: true, quiz: quizRow(row) })
})

// PATCH /api/quizzes/:id/lock — заблокировать/разблокировать тест
app.patch('/api/quizzes/:id/lock', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  const id = c.req.param('id')
  const quiz = await db.prepare('SELECT * FROM quizzes WHERE id=?').bind(id).first() as any
  if (!quiz) return c.json({ error: 'not_found' }, 404)
  if (quiz.owner_id !== user.id) return c.json({ error: 'forbidden' }, 403)
  const body = await c.req.json() as any
  const locked = body.locked ? 1 : 0
  await db.prepare('UPDATE quizzes SET is_locked=?, updated_at=unixepoch() WHERE id=?').bind(locked, id).run()
  return c.json({ ok: true, isLocked: !!locked })
})

// GET /api/quizzes/:id/accesses — кто имел доступ (только владелец)
app.get('/api/quizzes/:id/accesses', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  const id = c.req.param('id')
  const quiz = await db.prepare('SELECT owner_id FROM quizzes WHERE id=?').bind(id).first() as any
  if (!quiz) return c.json({ error: 'not_found' }, 404)
  if (quiz.owner_id !== user.id) return c.json({ error: 'forbidden' }, 403)
  const rows = await db.prepare(
    'SELECT * FROM quiz_accesses WHERE quiz_id=? ORDER BY accessed_at DESC LIMIT 200'
  ).bind(id).all()
  return c.json({ ok: true, accesses: (rows.results || []).map((r: any) => ({
    id: r.id, userId: r.user_id, userName: r.user_name, userEmail: r.user_email,
    userAvatar: r.user_avatar, accessedAt: r.accessed_at
  }))})
})

// POST /api/quizzes/:id/access — записать факт доступа (при старте теста)
app.post('/api/quizzes/:id/access', async (c) => {
  try {
    const db = c.env.DB
    const user = await getUserFromToken(db, getToken(c))
    const id = c.req.param('id')
    const body = await c.req.json() as any
    if (user?.id) {
      const existing = await db.prepare('SELECT id FROM quiz_accesses WHERE quiz_id=? AND user_id=?').bind(id, user.id).first()
      if (existing) {
        await db.prepare('UPDATE quiz_accesses SET accessed_at=unixepoch() WHERE quiz_id=? AND user_id=?').bind(id, user.id).run()
        return c.json({ ok: true })
      }
    }
    const accessId = nanoid()
    await db.prepare(
      'INSERT INTO quiz_accesses (id,quiz_id,user_id,user_name,user_email,user_avatar) VALUES (?,?,?,?,?,?)'
    ).bind(
      accessId, id, user?.id || null,
      user?.name || body.userName || 'Гость',
      user?.email || null,
      user?.avatar || '🧑'
    ).run()
    return c.json({ ok: true })
  } catch(e: any) { return c.json({ error: e.message }, 500) }
})

// GET /api/quizzes/:id — получить тест по ID (публичный, без ответов)
app.get('/api/quizzes/:id', async (c) => {
  const id = c.req.param('id')
  const db = c.env.DB
  const row = await db.prepare('SELECT * FROM quizzes WHERE id=?').bind(id).first() as any
  if (!row) return c.json({ error: 'not_found' }, 404)
  return c.json({ ok: true, quiz: quizRow(row) })
})

// ═══════════════════════════════════════════════════════════════════════════════
// ATTEMPTS / HISTORY
// ═══════════════════════════════════════════════════════════════════════════════

// POST /api/attempts — сохранить результат прохождения
app.post('/api/attempts', async (c) => {
  try {
    const db = c.env.DB
    const user = await getUserFromToken(db, getToken(c))
    const body = await c.req.json() as any

    // Проверяем, не заблокирован ли пользователь для этого теста
    if (user && body.quizId) {
      const restriction = await db.prepare(
        'SELECT id FROM quiz_user_restrictions WHERE quiz_id=? AND user_id=?'
      ).bind(body.quizId, user.id).first()
      if (restriction) return c.json({ error: 'restricted', message: 'You have been restricted from this quiz' }, 403)
    }

    const id = nanoid()
    await db.prepare(`
      INSERT INTO attempts (id,quiz_id,user_id,user_name,percent,correct,wrong,skipped,total,passed,duration,answers_json)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
    `).bind(
      id, body.quizId, user?.id || null, user?.name || body.userName || 'Гость',
      body.percent || 0, body.correct || 0, body.wrong || 0, body.skipped || 0,
      body.total || 0, body.passed ? 1 : 0, body.duration || 0,
      JSON.stringify(body.answers || {})
    ).run()
    return c.json({ ok: true, id })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// GET /api/attempts?quizId=... — история для конкретного теста
app.get('/api/attempts', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  const quizId = c.req.query('quizId')

  let rows: any
  if (quizId) {
    rows = await db.prepare('SELECT * FROM attempts WHERE quiz_id=? ORDER BY created_at DESC LIMIT 100').bind(quizId).all()
  } else if (user) {
    rows = await db.prepare('SELECT * FROM attempts WHERE user_id=? ORDER BY created_at DESC LIMIT 200').bind(user.id).all()
  } else {
    return c.json({ error: 'unauthorized' }, 401)
  }

  return c.json({
    ok: true,
    attempts: (rows.results || []).map((r: any) => ({
      id: r.id, quizId: r.quiz_id, userId: r.user_id, userName: r.user_name,
      percent: r.percent, correct: r.correct, wrong: r.wrong, skipped: r.skipped,
      total: r.total, passed: !!r.passed, duration: r.duration,
      createdAt: r.created_at,
    }))
  })
})

// GET /api/analytics/:quizId — полная аналитика по тесту
app.get('/api/analytics/:quizId', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  const quizId = c.req.param('quizId')
  const quiz = await db.prepare('SELECT * FROM quizzes WHERE id=?').bind(quizId).first() as any
  if (!quiz) return c.json({ error: 'not_found' }, 404)
  if (quiz.owner_id && user?.id !== quiz.owner_id) return c.json({ error: 'forbidden' }, 403)

  const attempts = await db.prepare(
    'SELECT * FROM attempts WHERE quiz_id=? ORDER BY created_at DESC'
  ).bind(quizId).all()
  const rows = (attempts.results || []) as any[]
  const total = rows.length
  const avgPct = total ? Math.round(rows.reduce((s: number, r: any) => s + r.percent, 0) / total) : 0
  const passedCount = rows.filter((r: any) => r.passed).length
  const avgDuration = total ? Math.round(rows.reduce((s: number, r: any) => s + r.duration, 0) / total) : 0
  return c.json({
    ok: true, quiz: quizRow(quiz),
    stats: { total, avgPercent: avgPct, passedCount, avgDuration },
    attempts: rows.map((r: any) => ({
      id: r.id, userId: r.user_id, userName: r.user_name,
      percent: r.percent, correct: r.correct, wrong: r.wrong,
      skipped: r.skipped, total: r.total, passed: !!r.passed,
      duration: r.duration, createdAt: r.created_at,
      answers: JSON.parse(r.answers_json || '{}')
    }))
  })
})

// GET /api/admin/overview — общая статистика по всем тестам владельца
app.get('/api/admin/overview', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)

  const quizzes = await db.prepare('SELECT * FROM quizzes WHERE owner_id=? ORDER BY updated_at DESC').bind(user.id).all()
  const quizIds = (quizzes.results || []).map((q: any) => q.id)
  if (!quizIds.length) return c.json({ ok: true, quizzes: [], totalAttempts: 0, totalUsers: 0, recentAttempts: [] })

  const placeholders = quizIds.map(() => '?').join(',')
  const attempts = await db.prepare(
    `SELECT a.*, q.title as quiz_title FROM attempts a JOIN quizzes q ON a.quiz_id=q.id WHERE a.quiz_id IN (${placeholders}) ORDER BY a.created_at DESC LIMIT 500`
  ).bind(...quizIds).all()
  const attemptRows = (attempts.results || []) as any[]
  const uniqueUsers = new Set(attemptRows.filter((r: any) => r.user_id).map((r: any) => r.user_id)).size

  const quizStats = (quizzes.results || []).map((q: any) => {
    const qa = attemptRows.filter((r: any) => r.quiz_id === q.id)
    return {
      ...quizRow(q),
      attemptCount: qa.length,
      avgPercent: qa.length ? Math.round(qa.reduce((s: number, r: any) => s + r.percent, 0) / qa.length) : 0,
      passRate: qa.length ? Math.round(qa.filter((r: any) => r.passed).length / qa.length * 100) : 0,
      avgDuration: qa.length ? Math.round(qa.reduce((s: number, r: any) => s + r.duration, 0) / qa.length) : 0,
    }
  })

  return c.json({
    ok: true, totalAttempts: attemptRows.length, totalUsers: uniqueUsers,
    recentAttempts: attemptRows.slice(0, 50).map((r: any) => ({
      id: r.id, quizId: r.quiz_id, quizTitle: r.quiz_title,
      userName: r.user_name, percent: r.percent, passed: !!r.passed,
      duration: r.duration, createdAt: r.created_at
    })),
    quizzes: quizStats
  })
})

// ═══════════════════════════════════════════════════════════════════════════════
// USER RESTRICTIONS — per-user access control on quizzes
// ═══════════════════════════════════════════════════════════════════════════════

// GET /api/quizzes/:id/restrictions — список заблокированных пользователей (только владелец)
app.get('/api/quizzes/:id/restrictions', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  const id = c.req.param('id')
  const quiz = await db.prepare('SELECT owner_id FROM quizzes WHERE id=?').bind(id).first() as any
  if (!quiz) return c.json({ error: 'not_found' }, 404)
  if (quiz.owner_id !== user.id) return c.json({ error: 'forbidden' }, 403)
  const rows = await db.prepare(
    'SELECT * FROM quiz_user_restrictions WHERE quiz_id=? ORDER BY created_at DESC'
  ).bind(id).all()
  return c.json({
    ok: true,
    restrictions: (rows.results || []).map((r: any) => ({
      id: r.id,
      userId: r.user_id,
      userName: r.user_name,
      userEmail: r.user_email,
      reason: r.reason,
      createdAt: r.created_at,
    }))
  })
})

// POST /api/quizzes/:id/restrictions — заблокировать пользователя для теста
app.post('/api/quizzes/:id/restrictions', async (c) => {
  try {
    const db = c.env.DB
    const owner = await getUserFromToken(db, getToken(c))
    if (!owner) return c.json({ error: 'unauthorized' }, 401)
    const quizId = c.req.param('id')
    const quiz = await db.prepare('SELECT owner_id FROM quizzes WHERE id=?').bind(quizId).first() as any
    if (!quiz) return c.json({ error: 'not_found' }, 404)
    if (quiz.owner_id !== owner.id) return c.json({ error: 'forbidden' }, 403)

    const body = await c.req.json() as any
    const { userId, reason = '' } = body
    if (!userId) return c.json({ error: 'userId required' }, 400)
    if (userId === owner.id) return c.json({ error: 'cannot restrict yourself' }, 400)

    // Получаем данные пользователя
    const targetUser = await db.prepare('SELECT id, name, email FROM users WHERE id=?').bind(userId).first() as any
    if (!targetUser) return c.json({ error: 'user_not_found' }, 404)

    const id = nanoid()
    await db.prepare(`
      INSERT INTO quiz_user_restrictions (id, quiz_id, user_id, user_name, user_email, restricted_by, reason)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(quiz_id, user_id) DO UPDATE SET reason=excluded.reason, created_at=unixepoch()
    `).bind(id, quizId, userId, targetUser.name, targetUser.email || null, owner.id, reason).run()

    return c.json({ ok: true, restriction: { id, userId, userName: targetUser.name, userEmail: targetUser.email, reason } })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// DELETE /api/quizzes/:quizId/restrictions/:userId — снять блокировку пользователя
app.delete('/api/quizzes/:quizId/restrictions/:userId', async (c) => {
  const db = c.env.DB
  const owner = await getUserFromToken(db, getToken(c))
  if (!owner) return c.json({ error: 'unauthorized' }, 401)
  const quizId = c.req.param('quizId')
  const userId = c.req.param('userId')
  const quiz = await db.prepare('SELECT owner_id FROM quizzes WHERE id=?').bind(quizId).first() as any
  if (!quiz) return c.json({ error: 'not_found' }, 404)
  if (quiz.owner_id !== owner.id) return c.json({ error: 'forbidden' }, 403)
  await db.prepare('DELETE FROM quiz_user_restrictions WHERE quiz_id=? AND user_id=?').bind(quizId, userId).run()
  return c.json({ ok: true })
})

// GET /api/users/search?q=email_or_name — поиск пользователей для блокировки
app.get('/api/users/search', async (c) => {
  const db = c.env.DB
  const owner = await getUserFromToken(db, getToken(c))
  if (!owner) return c.json({ error: 'unauthorized' }, 401)
  const q = (c.req.query('q') || '').trim()
  if (q.length < 2) return c.json({ ok: true, users: [] })
  // Search both original and lowercase for better unicode support
  const pattern = `%${q}%`
  const patternLower = `%${q.toLowerCase()}%`
  const rows = await db.prepare(
    `SELECT id, name, email, avatar, provider FROM users
     WHERE (email LIKE ? OR name LIKE ? OR email LIKE ? OR name LIKE ?)
       AND id != ? AND provider != 'guest'
     LIMIT 10`
  ).bind(pattern, pattern, patternLower, patternLower, owner.id).all()
  return c.json({
    ok: true,
    users: (rows.results || []).map((u: any) => ({
      id: u.id, name: u.name, email: u.email, avatar: u.avatar, provider: u.provider
    }))
  })
})

// ═══════════════════════════════════════════════════════════════════════════════
// POINTS & LIMITS SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

const PLAN_LIMITS: Record<string, { maxQuizzes: number; maxAttempts: number; maxDevices: number; maxLive: number; dailyPoints: number | null }> = {
  free:     { maxQuizzes: 5,   maxAttempts: 300,   maxDevices: 1,  maxLive: 20,  dailyPoints: 120 },
  teacher:  { maxQuizzes: 75, maxAttempts: 10000, maxDevices: 3,  maxLive: 100, dailyPoints: null },
  business: { maxQuizzes: 500, maxAttempts: 50000, maxDevices: 10, maxLive: 300, dailyPoints: null },
}
const POINT_COSTS: Record<string, number> = {
  create_quiz: 10, import: 15, analytics: 10, export: 10, live_start: 15, attempts_20: 10
}

// Get active plan for user
async function getUserPlan(db: D1Database, userId: string): Promise<{ plan: string; limits: typeof PLAN_LIMITS['free'] }> {
  const now = Math.floor(Date.now() / 1000)
  const sub = await db.prepare(
    `SELECT plan_id, expires_at FROM subscriptions WHERE user_id=? AND status='active' ORDER BY created_at DESC LIMIT 1`
  ).bind(userId).first() as any
  let plan = 'free'
  if (sub && sub.plan_id !== 'free') {
    if (!sub.expires_at || sub.expires_at > now) plan = sub.plan_id
  }
  return { plan, limits: PLAN_LIMITS[plan] || PLAN_LIMITS.free }
}

// Get/refill points for free plan user
async function getPoints(db: D1Database, userId: string): Promise<number> {
  const now = Math.floor(Date.now() / 1000)
  const dayStart = now - (now % 86400)
  let row = await db.prepare('SELECT points, last_refill FROM user_points WHERE user_id=?').bind(userId).first() as any
  if (!row) {
    await db.prepare('INSERT OR IGNORE INTO user_points (user_id, points, last_refill) VALUES (?,120,?)').bind(userId, dayStart).run()
    return 120
  }
  // Refill daily
  if (row.last_refill < dayStart) {
    await db.prepare('UPDATE user_points SET points=120, last_refill=? WHERE user_id=?').bind(dayStart, userId).run()
    return 120
  }
  return row.points
}

// Spend points — returns {ok, balance} or {ok:false, need:N, have:N}
async function spendPoints(db: D1Database, userId: string, action: string): Promise<{ok: boolean; balance?: number; need?: number; have?: number}> {
  const cost = POINT_COSTS[action] || 0
  if (cost === 0) return { ok: true, balance: 0 }
  const points = await getPoints(db, userId)
  if (points < cost) return { ok: false, need: cost, have: points }
  const newBalance = points - cost
  await db.prepare('UPDATE user_points SET points=? WHERE user_id=?').bind(newBalance, userId).run()
  const id = nanoid()
  await db.prepare('INSERT INTO points_log (id,user_id,action,cost,balance) VALUES (?,?,?,?,?)').bind(id, userId, action, cost, newBalance).run()
  return { ok: true, balance: newBalance }
}

// GET /api/billing/points — баллы и статус тарифа
app.get('/api/billing/points', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  const { plan, limits } = await getUserPlan(db, user.id)
  const points = limits.dailyPoints !== null ? await getPoints(db, user.id) : null
  const now = Math.floor(Date.now() / 1000)
  // Monthly attempts count
  const monthStart = now - 30 * 86400
  const attRow = await db.prepare('SELECT COUNT(*) as cnt FROM attempts WHERE user_id=? AND created_at>?').bind(user.id, monthStart).first() as any
  const monthAttempts = attRow?.cnt || 0
  // Quiz count
  const qRow = await db.prepare('SELECT COUNT(*) as cnt FROM quizzes WHERE owner_id=?').bind(user.id).first() as any
  const quizCount = qRow?.cnt || 0
  // Device count
  const dRow = await db.prepare('SELECT COUNT(*) as cnt FROM user_devices WHERE user_id=?').bind(user.id).first() as any
  const deviceCount = dRow?.cnt || 0

  return c.json({
    ok: true, plan,
    points, daily_limit: limits.dailyPoints,
    quiz_count: quizCount, max_quizzes: limits.maxQuizzes,
    month_attempts: monthAttempts, max_attempts: limits.maxAttempts,
    device_count: deviceCount, max_devices: limits.maxDevices,
    max_live: limits.maxLive,
    costs: POINT_COSTS,
  })
})

// POST /api/billing/spend — списать баллы
app.post('/api/billing/spend', async (c) => {
  const db = c.env.DB
  const user = await getUserFromToken(db, getToken(c))
  if (!user) return c.json({ error: 'unauthorized' }, 401)
  const { action } = await c.req.json() as any
  const { plan } = await getUserPlan(db, user.id)
  if (plan !== 'free') return c.json({ ok: true, balance: null, skipped: true })
  const result = await spendPoints(db, user.id, action)
  return c.json({ ok: result.ok, ...result })
})

// ═══════════════════════════════════════════════════════════════════════════════
// LIVE QUIZ SESSION API
// ═══════════════════════════════════════════════════════════════════════════════

function genSessionCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let r = ''
  const arr = new Uint8Array(8)
  crypto.getRandomValues(arr)
  arr.forEach(b => r += chars[b % chars.length])
  return r
}

// POST /api/live/create — создать live-сессию (ведущий)
app.post('/api/live/create', async (c) => {
  const db = c.env.DB
  const host = await getUserFromToken(db, getToken(c))
  if (!host) return c.json({ error: 'unauthorized' }, 401)

  const { quiz_id, q_time_limit = 30 } = await c.req.json() as any
  const quiz = await db.prepare('SELECT * FROM quizzes WHERE id=? AND owner_id=?').bind(quiz_id, host.id).first() as any
  if (!quiz) return c.json({ error: 'quiz_not_found' }, 404)

  // Check plan limits & points
  const { plan, limits } = await getUserPlan(db, host.id)
  if (plan === 'free') {
    const spend = await spendPoints(db, host.id, 'live_start')
    if (!spend.ok) return c.json({ error: 'no_points', need: spend.need, have: spend.have }, 402)
  }

  const sessionId = genSessionCode()
  const id = nanoid()
  await db.prepare(
    `INSERT INTO live_sessions (id, quiz_id, host_id, host_name, status, q_time_limit, max_participants, quiz_json)
     VALUES (?, ?, ?, ?, 'waiting', ?, ?, ?)`
  ).bind(id, quiz_id, host.id, host.name, q_time_limit, limits.maxLive, quiz.questions_json).run()

  return c.json({ ok: true, session_id: id, session_code: id, host_name: host.name, max_participants: limits.maxLive })
})

// POST /api/live/:id/join — участник присоединяется
app.post('/api/live/:id/join', async (c) => {
  const db = c.env.DB
  const sessionId = c.req.param('id')
  const { name, avatar = '🧑' } = await c.req.json() as any
  const user = await getUserFromToken(db, getToken(c))

  const session = await db.prepare('SELECT * FROM live_sessions WHERE id=?').bind(sessionId).first() as any
  if (!session) return c.json({ error: 'session_not_found' }, 404)
  if (session.status === 'finished') return c.json({ error: 'session_finished' }, 410)

  // Count participants
  const cnt = await db.prepare('SELECT COUNT(*) as c FROM live_participants WHERE session_id=?').bind(sessionId).first() as any
  if ((cnt?.c || 0) >= session.max_participants) return c.json({ error: 'session_full' }, 403)

  const partId = nanoid()
  const displayName = name || user?.name || 'Участник'
  const displayAvatar = avatar || user?.avatar || '🧑'

  await db.prepare(
    `INSERT INTO live_participants (id, session_id, user_id, name, avatar) VALUES (?, ?, ?, ?, ?)`
  ).bind(partId, sessionId, user?.id || null, displayName, displayAvatar).run()

  const questions = JSON.parse(session.quiz_json || '[]')
  return c.json({
    ok: true,
    participant_id: partId,
    session: {
      id: session.id,
      status: session.status,
      host_name: session.host_name,
      current_q: session.current_q,
      q_started_at: session.q_started_at,
      q_time_limit: session.q_time_limit,
      total_questions: questions.length,
    }
  })
})

// GET /api/live/:id/state — текущее состояние сессии (polling)
app.get('/api/live/:id/state', async (c) => {
  const db = c.env.DB
  const sessionId = c.req.param('id')
  const partId = c.req.query('pid') || ''

  const session = await db.prepare('SELECT * FROM live_sessions WHERE id=?').bind(sessionId).first() as any
  if (!session) return c.json({ error: 'not_found' }, 404)

  // Update last_ping
  if (partId) {
    await db.prepare('UPDATE live_participants SET last_ping=? WHERE id=?').bind(Math.floor(Date.now()/1000), partId).run()
  }

  const questions = JSON.parse(session.quiz_json || '[]')

  // Current question (strip correct answer for participants)
  let currentQuestion = null
  if (session.status === 'active' && session.current_q > 0 && session.current_q <= questions.length) {
    const q = { ...questions[session.current_q - 1] }
    delete q.correct; delete q.explanation
    currentQuestion = { ...q, index: session.current_q - 1, number: session.current_q }
  }

  // Participants list with scores
  const parts = await db.prepare(
    'SELECT id, name, avatar, score, correct FROM live_participants WHERE session_id=? ORDER BY score DESC'
  ).bind(sessionId).all()

  // Check if THIS participant answered current question
  let myAnswer = null
  if (partId && session.current_q > 0) {
    myAnswer = await db.prepare(
      'SELECT answer, is_correct, points FROM live_answers WHERE session_id=? AND participant_id=? AND q_index=?'
    ).bind(sessionId, partId, session.current_q - 1).first() as any
  }

  return c.json({
    ok: true,
    status: session.status,
    current_q: session.current_q,
    q_started_at: session.q_started_at,
    q_time_limit: session.q_time_limit,
    total_questions: questions.length,
    current_question: currentQuestion,
    participants: (parts.results || []).map((p: any) => ({ id: p.id, name: p.name, avatar: p.avatar, score: p.score, correct: p.correct })),
    my_answer: myAnswer,
  })
})

// POST /api/live/:id/start — ведущий запускает сессию
app.post('/api/live/:id/start', async (c) => {
  const db = c.env.DB
  const sessionId = c.req.param('id')
  const host = await getUserFromToken(db, getToken(c))
  if (!host) return c.json({ error: 'unauthorized' }, 401)

  const session = await db.prepare('SELECT * FROM live_sessions WHERE id=? AND host_id=?').bind(sessionId, host.id).first() as any
  if (!session) return c.json({ error: 'not_found' }, 404)
  if (session.status !== 'waiting') return c.json({ error: 'already_started' }, 400)

  const now = Math.floor(Date.now() / 1000)
  await db.prepare(
    `UPDATE live_sessions SET status='active', current_q=1, q_started_at=?, started_at=? WHERE id=?`
  ).bind(now, now, sessionId).run()

  return c.json({ ok: true, started_at: now })
})

// POST /api/live/:id/next — ведущий переходит к следующему вопросу
app.post('/api/live/:id/next', async (c) => {
  const db = c.env.DB
  const sessionId = c.req.param('id')
  const host = await getUserFromToken(db, getToken(c))
  if (!host) return c.json({ error: 'unauthorized' }, 401)

  const session = await db.prepare('SELECT * FROM live_sessions WHERE id=? AND host_id=?').bind(sessionId, host.id).first() as any
  if (!session || session.status !== 'active') return c.json({ error: 'not_found' }, 404)

  const questions = JSON.parse(session.quiz_json || '[]')
  const now = Math.floor(Date.now() / 1000)

  if (session.current_q >= questions.length) {
    // Finish session
    await db.prepare(`UPDATE live_sessions SET status='finished', current_q=?, finished_at=? WHERE id=?`).bind(session.current_q, now, sessionId).run()
    return c.json({ ok: true, finished: true })
  }

  const nextQ = session.current_q + 1
  await db.prepare('UPDATE live_sessions SET current_q=?, q_started_at=? WHERE id=?').bind(nextQ, now, sessionId).run()
  return c.json({ ok: true, current_q: nextQ, q_started_at: now })
})

// POST /api/live/:id/finish — ведущий завершает досрочно
app.post('/api/live/:id/finish', async (c) => {
  const db = c.env.DB
  const sessionId = c.req.param('id')
  const host = await getUserFromToken(db, getToken(c))
  if (!host) return c.json({ error: 'unauthorized' }, 401)
  const now = Math.floor(Date.now() / 1000)
  await db.prepare(`UPDATE live_sessions SET status='finished', finished_at=? WHERE id=? AND host_id=?`).bind(now, sessionId, host.id).run()
  return c.json({ ok: true })
})

// POST /api/live/:id/answer — участник отправляет ответ
app.post('/api/live/:id/answer', async (c) => {
  const db = c.env.DB
  const sessionId = c.req.param('id')
  const { participant_id, q_index, answer } = await c.req.json() as any

  const session = await db.prepare('SELECT * FROM live_sessions WHERE id=? AND status=\'active\'').bind(sessionId).first() as any
  if (!session) return c.json({ error: 'not_active' }, 400)
  if (session.current_q - 1 !== q_index) return c.json({ error: 'wrong_question' }, 400)

  // Check already answered
  const existing = await db.prepare('SELECT id FROM live_answers WHERE session_id=? AND participant_id=? AND q_index=?').bind(sessionId, participant_id, q_index).first()
  if (existing) return c.json({ error: 'already_answered' }, 409)

  const questions = JSON.parse(session.quiz_json || '[]')
  const q = questions[q_index]
  if (!q) return c.json({ error: 'question_not_found' }, 404)

  // Check correctness
  let isCorrect = false
  const ansStr = Array.isArray(answer) ? answer.sort().join('|') : String(answer).trim().toLowerCase()
  if (q.type === 'single' || q.type === 'truefalse') {
    isCorrect = String(q.correct).trim().toLowerCase() === ansStr
  } else if (q.type === 'multiple') {
    const correctSorted = (Array.isArray(q.correct) ? q.correct : [q.correct]).map((x: string) => x.trim()).sort().join('|')
    isCorrect = correctSorted === ansStr
  } else if (q.type === 'text') {
    const corrects = Array.isArray(q.correct) ? q.correct : [q.correct]
    isCorrect = corrects.some((c: string) => c.trim().toLowerCase() === ansStr)
  }

  // Speed bonus: more points for faster answer
  const now = Math.floor(Date.now() / 1000)
  const elapsed = session.q_started_at ? now - session.q_started_at : session.q_time_limit
  const timeBonus = Math.max(0, session.q_time_limit - elapsed)
  const points = isCorrect ? (100 + Math.round(timeBonus / session.q_time_limit * 900)) : 0

  const id = nanoid()
  await db.prepare(
    'INSERT INTO live_answers (id, session_id, participant_id, q_index, answer, is_correct, points) VALUES (?,?,?,?,?,?,?)'
  ).bind(id, sessionId, participant_id, q_index, JSON.stringify(answer), isCorrect ? 1 : 0, points).run()

  // Update participant score
  if (isCorrect) {
    await db.prepare('UPDATE live_participants SET score=score+?, correct=correct+1 WHERE id=?').bind(points, participant_id).run()
  } else {
    await db.prepare('UPDATE live_participants SET wrong=wrong+1 WHERE id=?').bind(participant_id).run()
  }

  return c.json({ ok: true, is_correct: isCorrect, points, correct_answer: q.correct })
})

// GET /api/live/:id/results — итоги сессии
app.get('/api/live/:id/results', async (c) => {
  const db = c.env.DB
  const sessionId = c.req.param('id')
  const session = await db.prepare('SELECT * FROM live_sessions WHERE id=?').bind(sessionId).first() as any
  if (!session) return c.json({ error: 'not_found' }, 404)

  const parts = await db.prepare(
    'SELECT * FROM live_participants WHERE session_id=? ORDER BY score DESC'
  ).bind(sessionId).all()

  const questions = JSON.parse(session.quiz_json || '[]')

  return c.json({
    ok: true,
    session_id: sessionId,
    status: session.status,
    total_questions: questions.length,
    started_at: session.started_at,
    finished_at: session.finished_at,
    participants: (parts.results || []).map((p: any, i: number) => ({
      rank: i + 1,
      id: p.id, name: p.name, avatar: p.avatar,
      score: p.score, correct: p.correct, wrong: p.wrong,
      pct: questions.length ? Math.round(p.correct / questions.length * 100) : 0,
    }))
  })
})

// GET /api/live — мои сессии (история)
app.get('/api/live', async (c) => {
  const db = c.env.DB
  const host = await getUserFromToken(db, getToken(c))
  if (!host) return c.json({ error: 'unauthorized' }, 401)
  const rows = await db.prepare(
    `SELECT ls.*, q.title as quiz_title,
      (SELECT COUNT(*) FROM live_participants lp WHERE lp.session_id=ls.id) as participant_count
     FROM live_sessions ls LEFT JOIN quizzes q ON ls.quiz_id=q.id
     WHERE ls.host_id=? ORDER BY ls.created_at DESC LIMIT 20`
  ).bind(host.id).all()
  return c.json({ ok: true, sessions: rows.results || [] })
})

// ═══════════════════════════════════════════════════════════════════════════════
// BILLING API  —  Plans, Subscriptions, Payme Payments
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Payme helpers ────────────────────────────────────────────────────────────
// Payme JSONRPC error codes
const PAYME_ERR = {
  PARSE_ERROR:       { code: -32700, message: { ru: 'Ошибка парсинга', en: 'Parse error', uz: 'Parsing xatosi' } },
  INVALID_REQUEST:   { code: -32600, message: { ru: 'Неверный запрос', en: 'Invalid Request', uz: "Noto'g'ri so'rov" } },
  METHOD_NOT_FOUND:  { code: -32601, message: { ru: 'Метод не найден', en: 'Method not found', uz: 'Metod topilmadi' } },
  INVALID_AMOUNT:    { code: -31001, message: { ru: 'Неверная сумма', en: 'Invalid amount', uz: "Noto'g'ri summa" } },
  TRANSACTION_NOT_FOUND: { code: -31003, message: { ru: 'Транзакция не найдена', en: 'Transaction not found', uz: 'Tranzaksiya topilmadi' } },
  BAD_REQUEST:       { code: -31050, message: { ru: 'Неверные параметры', en: 'Bad request', uz: "Noto'g'ri parametrlar" } },
  ALREADY_PAID:      { code: -31099, message: { ru: 'Уже оплачено', en: 'Already paid', uz: "Allaqachon to'langan" } },
  UNABLE_PERFORM:    { code: -31008, message: { ru: 'Невозможно выполнить', en: 'Unable to perform', uz: 'Bajarib bo\'lmaydi' } },
}

function paymeError(err: typeof PAYME_ERR[keyof typeof PAYME_ERR], id: any = null) {
  return { jsonrpc: '2.0', id, error: { code: err.code, message: err.message, data: null } }
}
function paymeOk(result: any, id: any = null) {
  return { jsonrpc: '2.0', id, result }
}

// Verify Payme Basic Auth header
function verifyPaymeAuth(c: any): boolean {
  const authHeader = c.req.header('Authorization') || ''
  if (!authHeader.startsWith('Basic ')) return false
  const b64 = authHeader.slice(6)
  try {
    const decoded = atob(b64)
    const [, pass] = decoded.split(':')
    const isTest = (c.env.PAYME_TEST_MODE || 'true') === 'true'
    const expected = isTest
      ? (c.env.PAYME_TEST_SECRET_KEY || '')
      : (c.env.PAYME_SECRET_KEY || '')
    // If keys not configured yet — reject all (safe default)
    if (!expected) return false
    return pass === expected
  } catch { return false }
}

// Build Payme checkout URL
function buildPaymeUrl(c: any, orderId: string, amount: number): string {
  const merchantId = c.env.PAYME_MERCHANT_ID || ''
  const isTest = (c.env.PAYME_TEST_MODE || 'true') === 'true'
  if (!merchantId) return '' // not configured yet
  const appUrl = c.env.APP_URL || 'https://localhost:3000'
  const params = btoa(JSON.stringify({
    m: merchantId,
    ac: { order_id: orderId },
    a: amount,
    c: `${appUrl}/api/billing/payme/return?order_id=${orderId}`,
    ct: 6000, // 10 min timeout
    l: 'ru',
  }))
  const base = isTest
    ? 'https://checkout.test.paycom.uz/'
    : 'https://checkout.paycom.uz/'
  return `${base}${params}`
}

// ─── GET /api/plans — список тарифов ─────────────────────────────────────────
app.get('/api/plans', async (c) => {
  try {
    const db = c.env.DB
    const rows = await db.prepare(
      `SELECT id, name_ru, name_uz, price_uzs, price_month, max_quizzes, max_questions, features_json
       FROM plans WHERE is_active=1 ORDER BY sort_order ASC`
    ).all()
    const plans = (rows.results || []).map((p: any) => ({
      id: p.id,
      name: { ru: p.name_ru, uz: p.name_uz },
      price_uzs: p.price_uzs,
      price_month: p.price_month,
      max_quizzes: p.max_quizzes,
      max_questions: p.max_questions,
      max_attempts: p.max_attempts ?? -1,
      features: JSON.parse(p.features_json || '[]'),
    }))
    return c.json({ ok: true, plans })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// ─── GET /api/billing/my — текущая подписка пользователя ──────────────────────
app.get('/api/billing/my', async (c) => {
  try {
    const db = c.env.DB
    const user = await getUserFromToken(db, getToken(c))
    if (!user) return c.json({ error: 'unauthorized' }, 401)
    const now = Math.floor(Date.now() / 1000)

    // Найти активную подписку (или последнюю)
    const sub = await db.prepare(
      `SELECT s.*, p.name_ru, p.name_uz, p.price_uzs, p.max_quizzes, p.max_questions, p.features_json
       FROM subscriptions s JOIN plans p ON s.plan_id = p.id
       WHERE s.user_id = ? AND (s.status = 'active' OR s.plan_id = 'free')
       ORDER BY s.created_at DESC LIMIT 1`
    ).bind(user.id).first() as any

    if (!sub) {
      // Нет подписки — создаём free автоматически
      const id = nanoid()
      await db.prepare(
        `INSERT INTO subscriptions (id, user_id, plan_id, status) VALUES (?, ?, 'free', 'active')`
      ).bind(id, user.id).run()
      return c.json({ ok: true, plan: 'free', status: 'active', expires_at: null, features: [] })
    }

    // Проверяем не истекла ли подписка
    const isExpired = sub.expires_at && sub.expires_at < now
    return c.json({
      ok: true,
      plan: sub.plan_id,
      status: isExpired ? 'expired' : sub.status,
      expires_at: sub.expires_at,
      name: { ru: sub.name_ru, uz: sub.name_uz },
      max_quizzes: sub.max_quizzes,
      max_questions: sub.max_questions,
      features: JSON.parse(sub.features_json || '[]'),
    })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// ─── POST /api/billing/create-order — создать заказ для Payme ─────────────────
app.post('/api/billing/create-order', async (c) => {
  try {
    const db = c.env.DB
    const user = await getUserFromToken(db, getToken(c))
    if (!user) return c.json({ error: 'unauthorized' }, 401)

    const { plan_id } = await c.req.json() as any
    const plan = await db.prepare('SELECT * FROM plans WHERE id=? AND is_active=1').bind(plan_id).first() as any
    if (!plan) return c.json({ error: 'plan_not_found' }, 404)
    if (plan.price_month === 0) return c.json({ error: 'free_plan_no_payment' }, 400)

    // Проверяем не сконфигурированы ли ключи Payme
    const merchantId = c.env.PAYME_MERCHANT_ID || ''
    if (!merchantId) {
      return c.json({
        ok: false,
        payme_configured: false,
        message: 'Payme не настроен. Добавьте PAYME_MERCHANT_ID в переменные окружения.',
      }, 503)
    }

    const orderId = nanoid(20)
    const amount = plan.price_month // тийины (UZS * 100)
    const paymentId = nanoid()

    await db.prepare(
      `INSERT INTO payments (id, user_id, plan_id, amount, status, order_id)
       VALUES (?, ?, ?, ?, 'pending', ?)`
    ).bind(paymentId, user.id, plan_id, amount, orderId).run()

    const checkoutUrl = buildPaymeUrl(c, orderId, amount)
    return c.json({
      ok: true,
      payme_configured: true,
      order_id: orderId,
      payment_id: paymentId,
      amount,
      checkout_url: checkoutUrl,
    })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// ─── GET /api/billing/payme/return — callback после оплаты ───────────────────
app.get('/api/billing/payme/return', async (c) => {
  const orderId = c.req.query('order_id') || ''
  // Перенаправляем в SPA с параметром
  return c.redirect(`/?payment_order=${encodeURIComponent(orderId)}`)
})

// ─── POST /api/billing/payme — Payme JSONRPC endpoint ────────────────────────
// Payme вызывает этот URL для: CheckPerformTransaction, CreateTransaction,
// PerformTransaction, CancelTransaction, CheckTransaction, GetStatement
app.post('/api/billing/payme', async (c) => {
  // Проверяем авторизацию от Payme
  if (!verifyPaymeAuth(c)) {
    return c.json(paymeError(PAYME_ERR.INVALID_REQUEST))
  }

  let body: any
  try { body = await c.req.json() } catch {
    return c.json(paymeError(PAYME_ERR.PARSE_ERROR))
  }

  const { method, params, id } = body
  const db = c.env.DB

  // ── CheckPerformTransaction ─────────────────────────────────────────────────
  if (method === 'CheckPerformTransaction') {
    const orderId = params?.account?.order_id
    if (!orderId) return c.json(paymeError(PAYME_ERR.BAD_REQUEST, id))
    const payment = await db.prepare('SELECT * FROM payments WHERE order_id=?').bind(orderId).first() as any
    if (!payment) return c.json(paymeError(PAYME_ERR.TRANSACTION_NOT_FOUND, id))
    if (payment.amount !== params.amount) return c.json(paymeError(PAYME_ERR.INVALID_AMOUNT, id))
    if (payment.status === 'paid') return c.json(paymeError(PAYME_ERR.ALREADY_PAID, id))
    return c.json(paymeOk({ allow: true }, id))
  }

  // ── CreateTransaction ───────────────────────────────────────────────────────
  if (method === 'CreateTransaction') {
    const orderId = params?.account?.order_id
    const paymeId = params?.id
    const amount  = params?.amount
    const paymeTime = params?.time

    if (!orderId || !paymeId) return c.json(paymeError(PAYME_ERR.BAD_REQUEST, id))

    const payment = await db.prepare('SELECT * FROM payments WHERE order_id=?').bind(orderId).first() as any
    if (!payment) return c.json(paymeError(PAYME_ERR.TRANSACTION_NOT_FOUND, id))
    if (payment.amount !== amount) return c.json(paymeError(PAYME_ERR.INVALID_AMOUNT, id))

    const now = Math.floor(Date.now() / 1000)

    // Если уже создана с таким payme_id
    if (payment.payme_id === paymeId) {
      if (payment.status === 'paid') return c.json(paymeError(PAYME_ERR.ALREADY_PAID, id))
      return c.json(paymeOk({ create_time: payment.payme_time || paymeTime, transaction: payment.id, state: 1 }, id))
    }

    // Уже привязан другой payme_id
    if (payment.payme_id && payment.payme_id !== paymeId) {
      return c.json(paymeError(PAYME_ERR.UNABLE_PERFORM, id))
    }

    // Устанавливаем payme_id
    await db.prepare(
      'UPDATE payments SET payme_id=?, payme_time=?, updated_at=? WHERE order_id=?'
    ).bind(paymeId, paymeTime, now, orderId).run()

    return c.json(paymeOk({ create_time: paymeTime, transaction: payment.id, state: 1 }, id))
  }

  // ── PerformTransaction ──────────────────────────────────────────────────────
  if (method === 'PerformTransaction') {
    const paymeId = params?.id
    if (!paymeId) return c.json(paymeError(PAYME_ERR.BAD_REQUEST, id))

    const payment = await db.prepare('SELECT * FROM payments WHERE payme_id=?').bind(paymeId).first() as any
    if (!payment) return c.json(paymeError(PAYME_ERR.TRANSACTION_NOT_FOUND, id))

    const now = Math.floor(Date.now() / 1000)

    if (payment.status === 'paid') {
      return c.json(paymeOk({ perform_time: payment.perform_time, transaction: payment.id, state: 2 }, id))
    }
    if (payment.status === 'cancelled') return c.json(paymeError(PAYME_ERR.UNABLE_PERFORM, id))

    // Помечаем платёж как выполненный
    await db.prepare(
      'UPDATE payments SET status=\'paid\', perform_time=?, updated_at=? WHERE payme_id=?'
    ).bind(now, now, paymeId).run()

    // Активируем подписку пользователя (30 дней)
    const expiresAt = now + 30 * 24 * 60 * 60
    const existingSub = await db.prepare(
      'SELECT id FROM subscriptions WHERE user_id=?'
    ).bind(payment.user_id).first() as any

    if (existingSub) {
      await db.prepare(
        `UPDATE subscriptions SET plan_id=?, status='active', expires_at=?, payment_id=?, updated_at=?
         WHERE user_id=?`
      ).bind(payment.plan_id, expiresAt, payment.id, now, payment.user_id).run()
    } else {
      await db.prepare(
        `INSERT INTO subscriptions (id, user_id, plan_id, status, expires_at, payment_id)
         VALUES (?, ?, ?, 'active', ?, ?)`
      ).bind(nanoid(), payment.user_id, payment.plan_id, expiresAt, payment.id).run()
    }

    return c.json(paymeOk({ perform_time: now, transaction: payment.id, state: 2 }, id))
  }

  // ── CancelTransaction ───────────────────────────────────────────────────────
  if (method === 'CancelTransaction') {
    const paymeId = params?.id
    const reason  = params?.reason
    if (!paymeId) return c.json(paymeError(PAYME_ERR.BAD_REQUEST, id))

    const payment = await db.prepare('SELECT * FROM payments WHERE payme_id=?').bind(paymeId).first() as any
    if (!payment) return c.json(paymeError(PAYME_ERR.TRANSACTION_NOT_FOUND, id))

    const now = Math.floor(Date.now() / 1000)

    if (payment.status === 'cancelled') {
      return c.json(paymeOk({ cancel_time: payment.cancel_time, transaction: payment.id, state: -1 }, id))
    }
    // Нельзя отменить уже выполненный платёж (state 2) — только если бизнес-логика позволяет
    // Здесь допускаем полный refund (state -2)
    const newState = payment.status === 'paid' ? -2 : -1

    await db.prepare(
      'UPDATE payments SET status=\'cancelled\', reason=?, cancel_time=?, updated_at=? WHERE payme_id=?'
    ).bind(reason, now, now, paymeId).run()

    // Деактивируем подписку если была активирована этим платежом
    if (payment.status === 'paid') {
      await db.prepare(
        `UPDATE subscriptions SET plan_id='free', status='active', expires_at=NULL, updated_at=?
         WHERE payment_id=?`
      ).bind(now, payment.id).run()
    }

    return c.json(paymeOk({ cancel_time: now, transaction: payment.id, state: newState }, id))
  }

  // ── CheckTransaction ────────────────────────────────────────────────────────
  if (method === 'CheckTransaction') {
    const paymeId = params?.id
    if (!paymeId) return c.json(paymeError(PAYME_ERR.BAD_REQUEST, id))

    const payment = await db.prepare('SELECT * FROM payments WHERE payme_id=?').bind(paymeId).first() as any
    if (!payment) return c.json(paymeError(PAYME_ERR.TRANSACTION_NOT_FOUND, id))

    const stateMap: Record<string, number> = { pending: 1, paid: 2, cancelled: -1, failed: -1 }
    return c.json(paymeOk({
      create_time:  payment.payme_time,
      perform_time: payment.perform_time || 0,
      cancel_time:  payment.cancel_time  || 0,
      transaction:  payment.id,
      state:        stateMap[payment.status] ?? 0,
      reason:       payment.reason || null,
    }, id))
  }

  // ── GetStatement ────────────────────────────────────────────────────────────
  if (method === 'GetStatement') {
    const from = params?.from
    const to   = params?.to
    const rows = await db.prepare(
      `SELECT * FROM payments WHERE payme_time >= ? AND payme_time <= ? AND payme_id IS NOT NULL`
    ).bind(from, to).all()

    const transactions = (rows.results || []).map((p: any) => {
      const stateMap: Record<string, number> = { pending: 1, paid: 2, cancelled: -1, failed: -1 }
      return {
        id: p.payme_id,
        time: p.payme_time,
        amount: p.amount,
        account: { order_id: p.order_id },
        create_time: p.payme_time,
        perform_time: p.perform_time || 0,
        cancel_time: p.cancel_time || 0,
        transaction: p.id,
        state: stateMap[p.status] ?? 0,
        reason: p.reason || null,
      }
    })
    return c.json(paymeOk({ transactions }, id))
  }

  return c.json(paymeError(PAYME_ERR.METHOD_NOT_FOUND, id))
})

// ─── GET /api/billing/history — история платежей пользователя ─────────────────
app.get('/api/billing/history', async (c) => {
  try {
    const db = c.env.DB
    const user = await getUserFromToken(db, getToken(c))
    if (!user) return c.json({ error: 'unauthorized' }, 401)
    const rows = await db.prepare(
      `SELECT p.*, pl.name_ru, pl.name_uz FROM payments p
       JOIN plans pl ON p.plan_id = pl.id
       WHERE p.user_id = ? ORDER BY p.created_at DESC LIMIT 50`
    ).bind(user.id).all()
    return c.json({
      ok: true,
      payments: (rows.results || []).map((p: any) => ({
        id: p.id,
        plan: { id: p.plan_id, name: { ru: p.name_ru, uz: p.name_uz } },
        amount: p.amount,
        amount_uzs: Math.round(p.amount / 100),
        status: p.status,
        order_id: p.order_id,
        created_at: p.created_at,
        perform_time: p.perform_time,
      }))
    })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// ─── GET /api/billing/payme/status — конфигурация Payme ──────────────────────
app.get('/api/billing/payme/status', async (c) => {
  const isTest = (c.env.PAYME_TEST_MODE || 'true') === 'true'
  const configured = !!(c.env.PAYME_MERCHANT_ID)
  return c.json({
    ok: true,
    configured,
    test_mode: isTest,
    message: configured
      ? (isTest ? 'Payme активен в тестовом режиме' : 'Payme активен в боевом режиме')
      : 'Payme не настроен. Добавьте PAYME_MERCHANT_ID, PAYME_SECRET_KEY в переменные окружения.',
  })
})

// ─── JSON Template ────────────────────────────────────────────────────────────
app.get('/api/template', (c) => {
  const template = {
    config: { title: 'Название теста', description: 'Описание', category: 'Общие знания', passingScore: 60, timeLimit: 0, questionTimer: 0, shuffleQuestions: false, shuffleAnswers: false, showExplanations: 'end', maxQuestions: 0 },
    questions: [
      { id: 1, type: 'single', question: 'Вопрос с одним ответом?', options: ['Вариант А','Вариант Б','Вариант В','Вариант Г'], correct: 'Вариант А', explanation: 'Пояснение' },
      { id: 2, type: 'multiple', question: 'Несколько ответов?', options: ['Правильный 1','Неправильный','Правильный 2','Нет'], correct: ['Правильный 1','Правильный 2'], explanation: 'Несколько вариантов' },
      { id: 3, type: 'truefalse', question: 'Это правда?', correct: 'true', explanation: 'Да, правда' },
      { id: 4, type: 'text', question: 'Напишите ответ:', correct: ['ответ', 'вариант'], explanation: 'Любой из вариантов' },
    ]
  }
  c.header('Content-Disposition', 'attachment; filename="quiz-template.json"')
  return c.json(template)
})

// ─── DB Health ────────────────────────────────────────────────────────────────
app.get('/api/health', async (c) => {
  try {
    await c.env.DB.prepare('SELECT 1').first()
    return c.json({ ok: true, db: 'connected' })
  } catch (e: any) {
    return c.json({ ok: false, error: e.message }, 500)
  }
})

// ─── Главная страница ─────────────────────────────────────────────────────────
app.get('*', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QuizMaster Pro</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="/static/app.css">
</head>
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js"></script>
  <script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
