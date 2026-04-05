import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { questions, quizConfig } from './questions'

const app = new Hono()

// Отдаём статику
app.use('/static/*', serveStatic({ root: './' }))

// API: получить данные квиза
app.get('/api/quiz', (c) => {
  // Отдаём вопросы без правильных ответов
  const safeQuestions = questions.map(({ id, type, question, options, explanation: _e }) => ({
    id,
    type,
    question,
    options,
  }))
  return c.json({ config: quizConfig, questions: safeQuestions })
})

// API: проверить ответы
app.post('/api/submit', async (c) => {
  const body = await c.req.json<{ answers: Record<number, string | string[]> }>()
  const { answers } = body

  let correct = 0
  const results: Record<number, { isCorrect: boolean; correct: string | string[]; explanation?: string }> = {}

  for (const question of questions) {
    const userAnswer = answers[question.id]
    let isCorrect = false

    if (question.type === 'single') {
      isCorrect = userAnswer === question.correct
    } else if (question.type === 'multiple') {
      const ua = Array.isArray(userAnswer) ? [...userAnswer].sort() : []
      const ca = Array.isArray(question.correct) ? [...question.correct].sort() : [question.correct]
      isCorrect = JSON.stringify(ua) === JSON.stringify(ca)
    } else if (question.type === 'text') {
      const ua = typeof userAnswer === 'string' ? userAnswer.trim().toLowerCase() : ''
      const correctAnswers = Array.isArray(question.correct)
        ? question.correct.map((a) => a.toLowerCase())
        : [question.correct.toLowerCase()]
      isCorrect = correctAnswers.includes(ua)
    }

    if (isCorrect) correct++
    results[question.id] = {
      isCorrect,
      correct: question.correct,
      explanation: question.explanation,
    }
  }

  return c.json({
    correct,
    total: questions.length,
    percentage: Math.round((correct / questions.length) * 100),
    passed: Math.round((correct / questions.length) * 100) >= quizConfig.passingScore,
    results,
  })
})

// Главная страница — возвращаем полный HTML
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QuizMaster — Интерактивные тесты</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" />
  <style>
    /* ============================================================
       ПЕРЕМЕННЫЕ И БАЗОВЫЕ СТИЛИ
    ============================================================ */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --primary:       #3b82f6;
      --primary-dark:  #2563eb;
      --primary-light: #eff6ff;
      --secondary:     #64748b;
      --success:       #10b981;
      --success-light: #ecfdf5;
      --danger:        #ef4444;
      --danger-light:  #fef2f2;
      --warning:       #f59e0b;
      --text:          #1e293b;
      --text-muted:    #64748b;
      --border:        #e2e8f0;
      --bg:            #f8fafc;
      --card:          #ffffff;
      --radius:        16px;
      --radius-sm:     10px;
      --shadow:        0 4px 24px rgba(0,0,0,.08);
      --shadow-lg:     0 8px 40px rgba(0,0,0,.12);
      --transition:    .22s cubic-bezier(.4,0,.2,1);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      line-height: 1.6;
    }

    /* ============================================================
       АНИМАЦИИ
    ============================================================ */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes pulse-ring {
      0%   { transform: scale(.95); box-shadow: 0 0 0 0 rgba(59,130,246,.4); }
      70%  { transform: scale(1);   box-shadow: 0 0 0 14px rgba(59,130,246,0); }
      100% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
    }
    @keyframes progressFill {
      from { width: 0; }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes bounceIn {
      0%   { transform: scale(.3); opacity: 0; }
      50%  { transform: scale(1.05); }
      70%  { transform: scale(.9); }
      100% { transform: scale(1); opacity: 1; }
    }
    @keyframes shimmer {
      0%   { background-position: -200% 0; }
      100% { background-position:  200% 0; }
    }

    /* ============================================================
       LAYOUT
    ============================================================ */
    .app-wrap {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .container {
      width: 100%;
      max-width: 780px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* ============================================================
       ШАПКА
    ============================================================ */
    .header {
      background: var(--card);
      border-bottom: 1px solid var(--border);
      padding: 16px 0;
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(12px);
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--text);
    }
    .logo-icon {
      width: 38px; height: 38px;
      background: linear-gradient(135deg, #3b82f6, #6366f1);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      color: #fff;
      font-size: 17px;
      flex-shrink: 0;
    }
    .logo-text { font-weight: 700; font-size: 18px; letter-spacing: -.3px; }
    .logo-text span { color: var(--primary); }

    #header-progress { display: none; }
    #header-progress.visible {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 500;
    }
    .header-prog-bar {
      width: 120px; height: 6px;
      background: var(--border);
      border-radius: 99px;
      overflow: hidden;
    }
    .header-prog-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), #6366f1);
      border-radius: 99px;
      transition: width .5s ease;
    }

    #timer-display {
      display: none;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 600;
    }
    #timer-display.visible { display: flex; }
    #timer-display.warning { color: var(--danger); }

    /* ============================================================
       ЭКРАН: СТАРТОВЫЙ
    ============================================================ */
    .screen { display: none; animation: fadeInUp .4s ease both; }
    .screen.active { display: block; }

    .hero {
      padding: 64px 0 48px;
      text-align: center;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--primary-light);
      color: var(--primary-dark);
      font-size: 12px;
      font-weight: 600;
      padding: 5px 14px;
      border-radius: 99px;
      margin-bottom: 24px;
      letter-spacing: .4px;
      text-transform: uppercase;
    }
    .hero h1 {
      font-size: clamp(28px, 5vw, 44px);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -.8px;
      color: var(--text);
      margin-bottom: 18px;
    }
    .hero h1 span {
      background: linear-gradient(135deg, #3b82f6, #6366f1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-desc {
      font-size: 17px;
      color: var(--text-muted);
      max-width: 520px;
      margin: 0 auto 36px;
      line-height: 1.7;
    }

    .info-cards {
      display: flex;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    .info-card {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 10px 18px;
      font-size: 14px;
      color: var(--text-muted);
      font-weight: 500;
    }
    .info-card i { color: var(--primary); font-size: 15px; }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      padding: 14px 34px;
      font-size: 15px;
      font-weight: 600;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: var(--transition);
      border: none;
      outline: none;
      text-decoration: none;
      font-family: inherit;
    }
    .btn-primary {
      background: linear-gradient(135deg, var(--primary), #6366f1);
      color: #fff;
      box-shadow: 0 4px 16px rgba(99,102,241,.35);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(99,102,241,.45);
    }
    .btn-primary:active { transform: translateY(0); }
    .btn-outline {
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
    }
    .btn-outline:hover { background: var(--primary-light); }
    .btn-ghost {
      background: transparent;
      color: var(--text-muted);
      padding: 10px 20px;
    }
    .btn-ghost:hover { background: var(--bg); }
    .btn-lg { padding: 17px 44px; font-size: 16px; border-radius: var(--radius-sm); }
    .btn-icon { width: 42px; height: 42px; padding: 0; border-radius: var(--radius-sm); }
    .btn:disabled { opacity: .5; pointer-events: none; }

    .start-btn-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }
    .start-hint {
      font-size: 13px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* ============================================================
       ЭКРАН: ВОПРОС
    ============================================================ */
    .quiz-layout {
      padding: 40px 0 60px;
    }

    /* Прогресс-блок */
    .progress-section {
      margin-bottom: 32px;
    }
    .progress-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .progress-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: .5px;
    }
    .progress-counter {
      font-size: 13px;
      font-weight: 700;
      color: var(--primary);
    }
    .progress-bar {
      height: 8px;
      background: var(--border);
      border-radius: 99px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #6366f1);
      border-radius: 99px;
      transition: width .6s cubic-bezier(.4,0,.2,1);
    }
    .progress-dots {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .progress-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--border);
      transition: var(--transition);
      flex-shrink: 0;
    }
    .progress-dot.answered { background: var(--primary); }
    .progress-dot.current  { background: #6366f1; transform: scale(1.4); }

    /* Карточка вопроса */
    .question-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 36px 36px 28px;
      box-shadow: var(--shadow);
      animation: fadeInUp .35s ease both;
    }
    @media(max-width:540px) {
      .question-card { padding: 24px 20px 20px; }
    }

    .question-header {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 24px;
    }
    .question-num {
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: var(--primary-light);
      color: var(--primary-dark);
      border-radius: 9px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px;
      font-weight: 700;
    }
    .question-text {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--text);
    }
    @media(max-width:540px) {
      .question-text { font-size: 16px; }
    }

    .type-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 99px;
      text-transform: uppercase;
      letter-spacing: .4px;
      margin-bottom: 20px;
    }
    .type-badge.single   { background: #eff6ff; color: #2563eb; }
    .type-badge.multiple { background: #f5f3ff; color: #7c3aed; }
    .type-badge.text     { background: #ecfdf5; color: #059669; }

    /* Варианты ответов */
    .options-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .option-item {
      position: relative;
    }
    .option-item input { position: absolute; opacity: 0; width: 0; height: 0; }

    .option-label {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 18px;
      border: 2px solid var(--border);
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: var(--transition);
      background: var(--card);
      font-size: 15px;
      font-weight: 500;
      color: var(--text);
      user-select: none;
    }
    .option-label:hover {
      border-color: var(--primary);
      background: var(--primary-light);
      transform: translateX(3px);
    }

    .option-control {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--border);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: var(--transition);
      background: #fff;
    }
    .option-control.checkbox { border-radius: 6px; }
    .option-control::after {
      content: '';
      width: 10px; height: 10px;
      border-radius: 50%;
      background: transparent;
      transition: var(--transition);
    }
    .option-control.checkbox::after {
      content: '';
      width: 11px; height: 8px;
      background: transparent;
      border-radius: 0;
      background-image: none;
    }

    input:checked + .option-label {
      border-color: var(--primary);
      background: var(--primary-light);
    }
    input:checked + .option-label .option-control {
      border-color: var(--primary);
      background: var(--primary);
    }
    input[type="radio"]:checked + .option-label .option-control::after {
      background: #fff;
    }
    input[type="checkbox"]:checked + .option-label .option-control::after {
      content: '✓';
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
    }

    .option-letter {
      flex-shrink: 0;
      width: 26px; height: 26px;
      border-radius: 6px;
      background: var(--bg);
      display: flex; align-items: center; justify-content: center;
      font-size: 12px;
      font-weight: 700;
      color: var(--text-muted);
      transition: var(--transition);
    }
    input:checked + .option-label .option-letter {
      background: rgba(255,255,255,.5);
      color: var(--primary-dark);
    }

    /* Текстовое поле */
    .text-input-wrap { position: relative; }
    .text-input {
      width: 100%;
      padding: 14px 18px;
      font-size: 15px;
      font-family: inherit;
      border: 2px solid var(--border);
      border-radius: var(--radius-sm);
      outline: none;
      transition: var(--transition);
      background: var(--card);
      color: var(--text);
    }
    .text-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(59,130,246,.1);
    }
    .text-input::placeholder { color: var(--text-muted); }
    .text-hint {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 8px;
    }

    /* Кнопки навигации */
    .quiz-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 28px;
      padding-top: 24px;
      border-top: 1px solid var(--border);
      gap: 12px;
    }
    .quiz-nav-left { display: flex; gap: 10px; }
    .skip-hint {
      font-size: 12px;
      color: var(--text-muted);
      text-align: center;
      margin-top: 12px;
    }

    /* ============================================================
       ЭКРАН: РЕЗУЛЬТАТЫ
    ============================================================ */
    .results-layout {
      padding: 48px 0 60px;
    }

    .score-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 48px 36px 36px;
      text-align: center;
      box-shadow: var(--shadow);
      margin-bottom: 32px;
      position: relative;
      overflow: hidden;
    }
    .score-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(59,130,246,.04), rgba(99,102,241,.04));
      pointer-events: none;
    }
    .score-icon {
      width: 80px; height: 80px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 24px;
      font-size: 34px;
      animation: bounceIn .6s ease both .2s;
    }
    .score-icon.pass  { background: var(--success-light); color: var(--success); }
    .score-icon.fail  { background: var(--danger-light);  color: var(--danger); }

    .score-title {
      font-size: 26px;
      font-weight: 800;
      margin-bottom: 6px;
      letter-spacing: -.4px;
    }
    .score-subtitle {
      font-size: 15px;
      color: var(--text-muted);
      margin-bottom: 32px;
    }

    .score-ring-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 32px;
    }
    .score-ring {
      position: relative;
      width: 140px; height: 140px;
    }
    .score-ring svg {
      transform: rotate(-90deg);
      width: 140px; height: 140px;
    }
    .score-ring-bg  { fill: none; stroke: var(--border); stroke-width: 10; }
    .score-ring-fill {
      fill: none;
      stroke-width: 10;
      stroke-linecap: round;
      transition: stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1) .3s;
    }
    .score-ring-fill.pass { stroke: var(--success); }
    .score-ring-fill.fail { stroke: var(--danger); }
    .score-ring-text {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .score-percent {
      font-size: 32px;
      font-weight: 800;
      color: var(--text);
      line-height: 1;
    }
    .score-percent-label {
      font-size: 11px;
      color: var(--text-muted);
      font-weight: 500;
      margin-top: 2px;
    }

    .score-stats {
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
    }
    .score-stat {
      text-align: center;
    }
    .score-stat-val {
      font-size: 28px;
      font-weight: 800;
      line-height: 1;
    }
    .score-stat-val.correct  { color: var(--success); }
    .score-stat-val.incorrect { color: var(--danger); }
    .score-stat-val.skipped  { color: var(--warning); }
    .score-stat-label {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 4px;
      font-weight: 500;
    }

    .result-actions {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    /* Список результатов */
    .results-list-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .result-item {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px 28px;
      margin-bottom: 14px;
      animation: fadeInUp .35s ease both;
      border-left: 4px solid transparent;
    }
    .result-item.correct { border-left-color: var(--success); }
    .result-item.wrong   { border-left-color: var(--danger); }
    .result-item.skipped { border-left-color: var(--warning); }
    @media(max-width:540px) {
      .result-item { padding: 18px 18px; }
    }

    .result-item-header {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 14px;
    }
    .result-status-icon {
      flex-shrink: 0;
      width: 28px; height: 28px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px;
    }
    .result-status-icon.correct  { background: var(--success-light); color: var(--success); }
    .result-status-icon.wrong    { background: var(--danger-light);  color: var(--danger); }
    .result-status-icon.skipped  { background: #fff7ed;              color: var(--warning); }

    .result-q-text {
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      flex: 1;
    }

    .result-answers {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 12px;
    }
    @media(max-width:540px) {
      .result-answers { grid-template-columns: 1fr; }
    }
    .result-answer-block {
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 13px;
    }
    .result-answer-block.user    { background: var(--bg); border: 1px solid var(--border); }
    .result-answer-block.correct { background: var(--success-light); border: 1px solid #a7f3d0; }
    .result-answer-block-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .4px;
      color: var(--text-muted);
      margin-bottom: 4px;
    }
    .result-answer-val { font-weight: 600; color: var(--text); }
    .result-answer-val.wrong   { color: var(--danger); }
    .result-answer-val.correct { color: var(--success); }

    .explanation-box {
      display: flex;
      gap: 9px;
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 13px;
      color: #92400e;
      line-height: 1.5;
    }
    .explanation-box i { color: var(--warning); flex-shrink: 0; margin-top: 1px; }

    /* ============================================================
       ЗАГРУЗОЧНЫЙ ЭКРАН
    ============================================================ */
    .loading-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 100px 20px;
      gap: 20px;
    }
    .spinner {
      width: 44px; height: 44px;
      border: 3px solid var(--border);
      border-top-color: var(--primary);
      border-radius: 50%;
      animation: spin .7s linear infinite;
    }
    .loading-text {
      font-size: 15px;
      color: var(--text-muted);
      font-weight: 500;
    }

    /* ============================================================
       SKELETON LOADER
    ============================================================ */
    .skeleton {
      background: linear-gradient(90deg, #f0f4f8 25%, #e8edf2 50%, #f0f4f8 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 8px;
    }

    /* ============================================================
       УВЕДОМЛЕНИЕ
    ============================================================ */
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--text);
      color: #fff;
      padding: 12px 20px;
      border-radius: var(--radius-sm);
      font-size: 14px;
      font-weight: 500;
      z-index: 999;
      transform: translateY(80px);
      opacity: 0;
      transition: var(--transition);
      max-width: 320px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .toast.show { transform: translateY(0); opacity: 1; }
    .toast.success { background: var(--success); }
    .toast.error   { background: var(--danger); }
    .toast.warning { background: var(--warning); color: #fff; }

    /* ============================================================
       FOOTER
    ============================================================ */
    .footer {
      margin-top: auto;
      padding: 24px 0;
      border-top: 1px solid var(--border);
      text-align: center;
      font-size: 13px;
      color: var(--text-muted);
    }

    /* ============================================================
       УТИЛИТЫ
    ============================================================ */
    .hidden { display: none !important; }
    .text-center { text-align: center; }
    .mt-8 { margin-top: 8px; }
    .mt-16 { margin-top: 16px; }
    .mt-24 { margin-top: 24px; }

    /* Адаптив */
    @media(max-width:600px) {
      .hero { padding: 40px 0 32px; }
      .info-cards { gap: 8px; }
      .info-card { padding: 8px 14px; font-size: 13px; }
      .score-stats { gap: 20px; }
      .result-actions { flex-direction: column; align-items: center; }
    }
  </style>
</head>
<body>
<div class="app-wrap">

  <!-- ШАПКА -->
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <a class="logo" href="/" onclick="location.reload(); return false;">
          <div class="logo-icon"><i class="fas fa-brain"></i></div>
          <span class="logo-text">Quiz<span>Master</span></span>
        </a>
        <div id="header-progress">
          <div class="header-prog-bar">
            <div class="header-prog-fill" id="header-prog-fill" style="width:0%"></div>
          </div>
          <span id="header-prog-text">0 / 0</span>
        </div>
        <div id="timer-display">
          <i class="fas fa-clock"></i>
          <span id="timer-text">--:--</span>
        </div>
      </div>
    </div>
  </header>

  <!-- ОСНОВНОЙ КОНТЕНТ -->
  <main style="flex:1">
    <div class="container">

      <!-- ЭКРАН ЗАГРУЗКИ -->
      <div id="screen-loading" class="screen active">
        <div class="loading-screen">
          <div class="spinner"></div>
          <p class="loading-text">Загрузка квиза…</p>
        </div>
      </div>

      <!-- СТАРТОВЫЙ ЭКРАН -->
      <div id="screen-start" class="screen">
        <div class="hero">
          <div class="hero-badge"><i class="fas fa-bolt"></i> Интерактивный тест</div>
          <h1 id="quiz-title">Загрузка…</h1>
          <p class="hero-desc" id="quiz-desc"></p>
          <div class="info-cards">
            <div class="info-card"><i class="fas fa-list-ul"></i><span id="info-count">0 вопросов</span></div>
            <div class="info-card"><i class="fas fa-check-double"></i><span>Разные типы</span></div>
            <div class="info-card"><i class="fas fa-trophy"></i><span id="info-pass">Проходной балл</span></div>
          </div>
          <div class="start-btn-wrap">
            <button class="btn btn-primary btn-lg" id="btn-start" onclick="startQuiz()">
              <i class="fas fa-play"></i> Начать тест
            </button>
            <div class="start-hint">
              <i class="fas fa-info-circle"></i>
              Отвечайте на вопросы в любом темпе
            </div>
          </div>
        </div>
      </div>

      <!-- ЭКРАН ВОПРОСА -->
      <div id="screen-quiz" class="screen">
        <div class="quiz-layout">
          <!-- Прогресс -->
          <div class="progress-section">
            <div class="progress-meta">
              <span class="progress-label">Прогресс</span>
              <span class="progress-counter" id="progress-counter">1 / 10</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" id="progress-fill" style="width:0%"></div>
            </div>
            <div class="progress-dots" id="progress-dots"></div>
          </div>

          <!-- Карточка вопроса -->
          <div class="question-card" id="question-card">
            <!-- динамически заполняется JS -->
          </div>
        </div>
      </div>

      <!-- ЭКРАН РЕЗУЛЬТАТОВ -->
      <div id="screen-results" class="screen">
        <div class="results-layout">
          <!-- Сводка -->
          <div class="score-card" id="score-card">
            <!-- динамически заполняется JS -->
          </div>

          <!-- Кнопки действий -->
          <div class="result-actions">
            <button class="btn btn-primary" onclick="restartQuiz()">
              <i class="fas fa-redo"></i> Пройти снова
            </button>
            <button class="btn btn-outline" onclick="showAnswerReview()">
              <i class="fas fa-eye"></i> Разбор ошибок
            </button>
          </div>

          <!-- Детальный разбор ответов -->
          <div id="answers-review" class="hidden">
            <div class="results-list-title">
              <i class="fas fa-clipboard-list"></i> Разбор ответов
            </div>
            <div id="results-list"></div>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>Powered by <strong>QuizMaster</strong> · Изменяйте вопросы в файле <code>src/questions.ts</code></p>
    </div>
  </footer>
</div>

<!-- УВЕДОМЛЕНИЕ -->
<div class="toast" id="toast"></div>

<!-- ============================================================
     JavaScript — вся логика квиза
============================================================ -->
<script>
// ─── Состояние ───────────────────────────────────────────────
const state = {
  config: null,
  questions: [],
  currentIdx: 0,
  answers: {},        // { questionId: string | string[] }
  skipped: new Set(), // id пропущенных вопросов
  startTime: null,
  timerInterval: null,
  reviewShown: false,
}

// ─── Утилиты ─────────────────────────────────────────────────
function $(sel, ctx = document) { return ctx.querySelector(sel) }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)] }

function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'))
  $(id).classList.add('active')
}

function showToast(msg, type = '', duration = 3000) {
  const t = $('#toast')
  t.textContent = msg
  t.className = 'toast' + (type ? ' ' + type : '')
  t.classList.add('show')
  clearTimeout(t._timeout)
  t._timeout = setTimeout(() => t.classList.remove('show'), duration)
}

function plural(n, one, few, many) {
  if (n % 10 === 1 && n % 100 !== 11) return n + ' ' + one
  if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return n + ' ' + few
  return n + ' ' + many
}

// ─── Загрузка данных ─────────────────────────────────────────
async function loadQuiz() {
  showScreen('#screen-loading')
  try {
    const res = await fetch('/api/quiz')
    const data = await res.json()
    state.config = data.config
    state.questions = data.questions
    renderStart()
    showScreen('#screen-start')
  } catch(e) {
    showToast('Ошибка загрузки квиза', 'error')
    console.error(e)
  }
}

// ─── Стартовый экран ─────────────────────────────────────────
function renderStart() {
  const { config, questions } = state
  $('#quiz-title').textContent = config.title
  $('#quiz-desc').textContent = config.description
  $('#info-count').textContent = plural(questions.length, 'вопрос', 'вопроса', 'вопросов')
  $('#info-pass').textContent = 'Зачёт от ' + config.passingScore + '%'
}

// ─── Запуск квиза ────────────────────────────────────────────
function startQuiz() {
  state.currentIdx = 0
  state.answers = {}
  state.skipped = new Set()
  state.startTime = Date.now()
  state.reviewShown = false
  $('#answers-review').classList.add('hidden')

  // Прогресс в шапке
  const hp = $('#header-progress')
  hp.classList.add('visible')

  // Таймер
  if (state.config.timeLimit > 0) {
    startTimer(state.config.timeLimit * 60)
  }

  buildProgressDots()
  showScreen('#screen-quiz')
  renderQuestion()
}

// ─── Таймер ──────────────────────────────────────────────────
function startTimer(seconds) {
  const timerEl = $('#timer-display')
  timerEl.classList.add('visible')
  let remaining = seconds

  const tick = () => {
    const m = Math.floor(remaining / 60)
    const s = remaining % 60
    $('#timer-text').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0')
    if (remaining <= 60) timerEl.classList.add('warning')
    if (remaining <= 0) {
      clearInterval(state.timerInterval)
      showToast('Время вышло!', 'warning')
      submitQuiz()
    }
    remaining--
  }
  tick()
  state.timerInterval = setInterval(tick, 1000)
}

// ─── Точки прогресса ─────────────────────────────────────────
function buildProgressDots() {
  const wrap = $('#progress-dots')
  wrap.innerHTML = state.questions.map((q, i) =>
    '<div class="progress-dot" id="dot-' + q.id + '"></div>'
  ).join('')
}

function updateProgressDots() {
  state.questions.forEach((q, i) => {
    const dot = $('#dot-' + q.id)
    if (!dot) return
    dot.className = 'progress-dot'
    if (i < state.currentIdx) dot.classList.add('answered')
    else if (i === state.currentIdx) dot.classList.add('current')
  })
}

// ─── Прогресс-бар ────────────────────────────────────────────
function updateProgress() {
  const pct = Math.round((state.currentIdx / state.questions.length) * 100)
  const pctAnswered = Math.round((Object.keys(state.answers).length / state.questions.length) * 100)

  $('#progress-fill').style.width = pct + '%'
  $('#header-prog-fill').style.width = pctAnswered + '%'
  $('#progress-counter').textContent = (state.currentIdx + 1) + ' / ' + state.questions.length
  $('#header-prog-text').textContent = Object.keys(state.answers).length + ' / ' + state.questions.length

  updateProgressDots()
}

// ─── Рендер вопроса ──────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.currentIdx]
  if (!q) return

  updateProgress()

  const typeMeta = {
    single:   { label: 'Один вариант',       icon: 'dot-circle',       cls: 'single' },
    multiple: { label: 'Несколько вариантов', icon: 'check-square',     cls: 'multiple' },
    text:     { label: 'Текстовый ответ',     icon: 'keyboard',         cls: 'text' },
  }
  const tm = typeMeta[q.type]
  const savedAnswer = state.answers[q.id]
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let optionsHtml = ''

  if (q.type === 'single') {
    optionsHtml = '<div class="options-list">' +
      q.options.map((opt, i) => {
        const checked = savedAnswer === opt ? 'checked' : ''
        return \`<div class="option-item">
          <input type="radio" name="q_\${q.id}" id="opt_\${q.id}_\${i}" value="\${escHtml(opt)}" \${checked} onchange="onOptionChange()">
          <label class="option-label" for="opt_\${q.id}_\${i}">
            <div class="option-control"></div>
            <span class="option-letter">\${letters[i]}</span>
            <span>\${escHtml(opt)}</span>
          </label>
        </div>\`
      }).join('') +
    '</div>'
  } else if (q.type === 'multiple') {
    const savedArr = Array.isArray(savedAnswer) ? savedAnswer : []
    optionsHtml = '<div class="options-list">' +
      q.options.map((opt, i) => {
        const checked = savedArr.includes(opt) ? 'checked' : ''
        return \`<div class="option-item">
          <input type="checkbox" name="q_\${q.id}" id="opt_\${q.id}_\${i}" value="\${escHtml(opt)}" \${checked} onchange="onOptionChange()">
          <label class="option-label" for="opt_\${q.id}_\${i}">
            <div class="option-control checkbox"></div>
            <span class="option-letter">\${letters[i]}</span>
            <span>\${escHtml(opt)}</span>
          </label>
        </div>\`
      }).join('') +
    '</div>'
  } else if (q.type === 'text') {
    const val = typeof savedAnswer === 'string' ? escHtml(savedAnswer) : ''
    optionsHtml = \`<div class="text-input-wrap">
      <input type="text" class="text-input" id="text_\${q.id}" placeholder="Введите ваш ответ…" value="\${val}" oninput="onTextChange()" onkeydown="onTextKeyDown(event)">
      <div class="text-hint"><i class="fas fa-info-circle"></i> Нажмите Enter или кнопку «Далее» для продолжения</div>
    </div>\`
  }

  const isFirst = state.currentIdx === 0
  const isLast  = state.currentIdx === state.questions.length - 1
  const hasAnswer = savedAnswer !== undefined && savedAnswer !== '' &&
    (Array.isArray(savedAnswer) ? savedAnswer.length > 0 : true)

  const card = $('#question-card')
  card.innerHTML = \`
    <div class="question-header">
      <div class="question-num">\${state.currentIdx + 1}</div>
      <div class="question-text">\${escHtml(q.question)}</div>
    </div>
    <div class="type-badge \${tm.cls}">
      <i class="fas fa-\${tm.icon}"></i> \${tm.label}
    </div>
    \${optionsHtml}
    <div class="quiz-nav">
      <div class="quiz-nav-left">
        <button class="btn btn-ghost" onclick="prevQuestion()" \${isFirst ? 'disabled' : ''}>
          <i class="fas fa-arrow-left"></i> Назад
        </button>
        <button class="btn btn-ghost" onclick="skipQuestion()" \${isLast ? 'style=display:none' : ''}>
          Пропустить
        </button>
      </div>
      <button class="btn btn-primary" id="btn-next" onclick="\${isLast ? 'submitQuiz()' : 'nextQuestion()'}">
        \${isLast ? '<i class="fas fa-flag-checkered"></i> Завершить' : 'Далее <i class="fas fa-arrow-right"></i>'}
      </button>
    </div>
  \`

  // Фокус на текстовое поле
  if (q.type === 'text') {
    setTimeout(() => {
      const inp = \$('#text_' + q.id)
      if (inp) inp.focus()
    }, 100)
  }
}

// ─── Обработчики ответов ─────────────────────────────────────
function onOptionChange() {
  const q = state.questions[state.currentIdx]
  if (q.type === 'single') {
    const checked = \$('input[name="q_' + q.id + '"]:checked')
    if (checked) state.answers[q.id] = checked.value
  } else if (q.type === 'multiple') {
    const checked = \$$('input[name="q_' + q.id + '"]:checked')
    state.answers[q.id] = checked.map(c => c.value)
    if (state.answers[q.id].length === 0) delete state.answers[q.id]
  }
  updateProgress()
}

function onTextChange() {
  const q = state.questions[state.currentIdx]
  const inp = \$('#text_' + q.id)
  if (!inp) return
  const val = inp.value.trim()
  if (val) state.answers[q.id] = val
  else delete state.answers[q.id]
  updateProgress()
}

function onTextKeyDown(e) {
  if (e.key === 'Enter') {
    const isLast = state.currentIdx === state.questions.length - 1
    onTextChange()
    if (isLast) submitQuiz()
    else nextQuestion()
  }
}

// ─── Навигация ───────────────────────────────────────────────
function prevQuestion() {
  if (state.currentIdx > 0) {
    state.currentIdx--
    renderQuestion()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function nextQuestion() {
  const q = state.questions[state.currentIdx]
  const hasAnswer = state.answers[q.id] !== undefined &&
    state.answers[q.id] !== '' &&
    !(Array.isArray(state.answers[q.id]) && state.answers[q.id].length === 0)

  if (!hasAnswer) {
    showToast('Выберите ответ или пропустите вопрос', 'warning')
    return
  }
  state.skipped.delete(q.id)
  if (state.currentIdx < state.questions.length - 1) {
    state.currentIdx++
    renderQuestion()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function skipQuestion() {
  const q = state.questions[state.currentIdx]
  state.skipped.add(q.id)
  if (state.currentIdx < state.questions.length - 1) {
    state.currentIdx++
    renderQuestion()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// ─── Отправка ────────────────────────────────────────────────
async function submitQuiz() {
  if (state.timerInterval) clearInterval(state.timerInterval)

  const answeredCount = Object.keys(state.answers).length
  const totalCount    = state.questions.length

  if (answeredCount < totalCount) {
    const unanswered = totalCount - answeredCount
    const confirmed = confirm(\`У вас есть \${unanswered} неотвеченных вопросов. Всё равно завершить?\`)
    if (!confirmed) return
  }

  // Показываем загрузку
  showScreen('#screen-loading')

  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: state.answers }),
    })
    const data = await res.json()
    renderResults(data)
    showScreen('#screen-results')
    $('#header-progress').classList.remove('visible')
    $('#timer-display').classList.remove('visible')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch(e) {
    showToast('Ошибка отправки', 'error')
    console.error(e)
    showScreen('#screen-quiz')
  }
}

// ─── Рендер результатов ──────────────────────────────────────
function renderResults(data) {
  const { correct, total, percentage, passed, results } = data
  const skippedCount  = state.skipped.size
  const incorrectCount = total - correct - skippedCount

  // Скор-карта
  const circumference = 2 * Math.PI * 54
  const offset = circumference - (percentage / 100) * circumference
  const cls = passed ? 'pass' : 'fail'
  const icon = passed ? 'fa-trophy' : 'fa-rotate'
  const titleText = passed ? 'Отличная работа! 🎉' : 'Почти получилось!'
  const subText = passed
    ? \`Вы набрали \${percentage}% и успешно прошли тест\`
    : \`Вы набрали \${percentage}%. Для зачёта нужно \${state.config.passingScore}%\`

  $('#score-card').innerHTML = \`
    <div class="score-icon \${cls}"><i class="fas \${icon}"></i></div>
    <div class="score-title">\${titleText}</div>
    <div class="score-subtitle">\${subText}</div>
    <div class="score-ring-wrap">
      <div class="score-ring">
        <svg viewBox="0 0 120 120">
          <circle class="score-ring-bg" cx="60" cy="60" r="54"/>
          <circle class="score-ring-fill \${cls}" cx="60" cy="60" r="54"
            stroke-dasharray="\${circumference}"
            stroke-dashoffset="\${circumference}"
            id="ring-fill-circle"/>
        </svg>
        <div class="score-ring-text">
          <div class="score-percent" id="anim-percent">0%</div>
          <div class="score-percent-label">результат</div>
        </div>
      </div>
    </div>
    <div class="score-stats">
      <div class="score-stat">
        <div class="score-stat-val correct">\${correct}</div>
        <div class="score-stat-label">Правильно</div>
      </div>
      <div class="score-stat">
        <div class="score-stat-val incorrect">\${incorrectCount}</div>
        <div class="score-stat-label">Неверно</div>
      </div>
      <div class="score-stat">
        <div class="score-stat-val skipped">\${skippedCount}</div>
        <div class="score-stat-label">Пропущено</div>
      </div>
    </div>
  \`

  // Анимация кольца и счётчика
  requestAnimationFrame(() => {
    const circle = $('#ring-fill-circle')
    if (circle) circle.style.strokeDashoffset = offset

    animateCounter('#anim-percent', 0, percentage, '%', 1200)
  })

  // Сохраняем данные для разбора
  state.lastResults = { data, results }
}

function animateCounter(sel, from, to, suffix, dur) {
  const el = $(sel)
  if (!el) return
  const start = performance.now()
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1)
    const ease = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.round(from + (to - from) * ease) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

// ─── Разбор ответов ──────────────────────────────────────────
function showAnswerReview() {
  const reviewDiv = $('#answers-review')
  if (state.reviewShown) {
    reviewDiv.classList.toggle('hidden')
    return
  }
  state.reviewShown = true
  reviewDiv.classList.remove('hidden')

  const { data, results } = state.lastResults
  const list = $('#results-list')
  list.innerHTML = ''

  state.questions.forEach((q, idx) => {
    const r = results[q.id]
    if (!r) return

    const isSkipped = state.skipped.has(q.id)
    const cls = isSkipped ? 'skipped' : (r.isCorrect ? 'correct' : 'wrong')
    const iconCls  = isSkipped ? 'fa-minus' : (r.isCorrect ? 'fa-check' : 'fa-times')
    const iconType = isSkipped ? 'skipped' : (r.isCorrect ? 'correct' : 'wrong')

    const userAnswer  = state.answers[q.id]
    const userDisplay = isSkipped ? '—' : (Array.isArray(userAnswer) ? userAnswer.join(', ') : (userAnswer || '—'))
    const corrDisplay = Array.isArray(r.correct) ? r.correct.join(', ') : r.correct
    const userWrong   = !r.isCorrect && !isSkipped

    const explHtml = r.explanation
      ? \`<div class="explanation-box"><i class="fas fa-lightbulb"></i><span>\${escHtml(r.explanation)}</span></div>\`
      : ''

    const item = document.createElement('div')
    item.className = 'result-item ' + cls
    item.style.animationDelay = (idx * 0.06) + 's'
    item.innerHTML = \`
      <div class="result-item-header">
        <div class="result-status-icon \${iconType}"><i class="fas \${iconCls}"></i></div>
        <div class="result-q-text">\${idx + 1}. \${escHtml(q.question)}</div>
      </div>
      <div class="result-answers">
        <div class="result-answer-block user">
          <div class="result-answer-block-label">Ваш ответ</div>
          <div class="result-answer-val \${userWrong ? 'wrong' : ''}">\${escHtml(userDisplay)}</div>
        </div>
        <div class="result-answer-block correct">
          <div class="result-answer-block-label">Правильный ответ</div>
          <div class="result-answer-val correct">\${escHtml(corrDisplay)}</div>
        </div>
      </div>
      \${explHtml}
    \`
    list.appendChild(item)
  })

  reviewDiv.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ─── Перезапуск ──────────────────────────────────────────────
function restartQuiz() {
  if (state.timerInterval) clearInterval(state.timerInterval)
  $('#timer-display').classList.remove('visible')
  $('#timer-display').classList.remove('warning')
  showScreen('#screen-start')
}

// ─── Защита от XSS ───────────────────────────────────────────
function escHtml(str) {
  if (typeof str !== 'string') return String(str)
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ─── Запуск ──────────────────────────────────────────────────
loadQuiz()
</script>
</body>
</html>`)
})

export default app
