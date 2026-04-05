import { Hono } from 'hono'
import { cors } from 'hono/cors'
// @ts-ignore
import quizUploadJs from '../public/static/quiz-upload.js?raw'
// @ts-ignore
import appJs from '../public/static/app.js?raw'
// @ts-ignore
import appCss from '../public/static/app.css?raw'

// ─── Types ────────────────────────────────────────────────────────────────────
type Bindings = { DB: D1Database }
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
  return c.json({ ok: true, quiz: quizRow(row) })
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

// GET /api/analytics/:quizId — аналитика по тесту
app.get('/api/analytics/:quizId', async (c) => {
  const db = c.env.DB
  const quizId = c.req.param('quizId')
  const stats = await db.prepare(`
    SELECT COUNT(*) as total, AVG(percent) as avg_pct,
           SUM(CASE WHEN passed=1 THEN 1 ELSE 0 END) as passed_count
    FROM attempts WHERE quiz_id=?
  `).bind(quizId).first() as any
  return c.json({ ok: true, stats: { total: stats?.total || 0, avgPercent: Math.round(stats?.avg_pct || 0), passedCount: stats?.passed_count || 0 } })
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
