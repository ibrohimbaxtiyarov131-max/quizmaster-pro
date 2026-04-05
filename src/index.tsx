import { Hono } from 'hono'
// @ts-ignore
import quizUploadJs from '../public/static/quiz-upload.js?raw'
// @ts-ignore
import appJs from '../public/static/app.js?raw'
// @ts-ignore
import appCss from '../public/static/app.css?raw'

const app = new Hono()

// ─── Статические файлы ────────────────────────────────────────────────────────
app.get('/static/app.css', (c) => {
  c.header('Content-Type', 'text/css; charset=utf-8')
  c.header('Cache-Control', 'public, max-age=3600')
  return c.body(appCss)
})

app.get('/static/app.js', (c) => {
  c.header('Content-Type', 'application/javascript; charset=utf-8')
  c.header('Cache-Control', 'public, max-age=3600')
  return c.body(appJs)
})

app.get('/static/quiz-upload.js', (c) => {
  c.header('Content-Type', 'application/javascript; charset=utf-8')
  c.header('Cache-Control', 'public, max-age=3600')
  return c.body(quizUploadJs)
})

// ─── API шаблон JSON ──────────────────────────────────────────────────────────
app.get('/api/template', (c) => {
  const template = {
    config: {
      title: 'Название теста',
      description: 'Описание теста',
      category: 'Общие знания',
      passingScore: 60,
      timeLimit: 0,
      questionTimer: 0,
      shuffleQuestions: false,
      shuffleAnswers: false,
      showExplanations: 'end',
      maxQuestions: 0,
    },
    questions: [
      {
        id: 1,
        type: 'single',
        question: 'Вопрос с одним ответом?',
        options: ['Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г'],
        correct: 'Вариант А',
        explanation: 'Пояснение к ответу',
        image: '',
      },
      {
        id: 2,
        type: 'multiple',
        question: 'Вопрос с несколькими ответами?',
        options: ['Правильный 1', 'Неправильный', 'Правильный 2', 'Неправильный 2'],
        correct: ['Правильный 1', 'Правильный 2'],
        explanation: 'Можно выбрать несколько',
        image: '',
      },
      {
        id: 3,
        type: 'text',
        question: 'Вопрос с текстовым ответом?',
        correct: ['правильный ответ', 'ответ'],
        explanation: 'Укажите допустимые варианты',
        image: '',
      },
      {
        id: 4,
        type: 'truefalse',
        question: 'Утверждение для оценки (правда или ложь)?',
        correct: 'true',
        explanation: 'Это правда',
        image: '',
      },
      {
        id: 5,
        type: 'match',
        question: 'Сопоставьте элементы',
        pairs: [
          { left: 'Python', right: 'Язык программирования' },
          { left: 'HTML', right: 'Язык разметки' },
          { left: 'CSS', right: 'Язык стилей' },
        ],
        correct: 'auto',
        explanation: 'Каждому элементу соответствует пара',
        image: '',
      },
    ],
  }
  c.header('Content-Type', 'application/json; charset=utf-8')
  c.header('Content-Disposition', 'attachment; filename="quiz-template.json"')
  return c.body(JSON.stringify(template, null, 2))
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
