/**
 * quiz-upload.js — клиентский модуль загрузки и парсинга файлов с вопросами
 *
 * Поддерживаемые форматы файлов:
 *   .docx  — Word-документ (через mammoth.js)
 *   .txt   — обычный текст
 *   .json  — структурированный JSON
 *
 * Умный парсер понимает:
 *   — Нумерацию: "1.", "1)", "1 ", "Вопрос 1.", "Question 1."
 *   — Варианты:  "A)", "A.", "а)", "1.", "•", "-", "*", "–"
 *   — Правильный ответ любым способом:
 *       * звёздочка после текста варианта        (B) Ответ*)
 *       * строка "Ответ: Б" / "Answer: B"
 *       * строка "Правильный ответ: текст ответа"
 *       * галочка ✓ или ✔ перед/после варианта
 *       * [верно] / [правильно] / [correct] в скобках
 *   — Пояснения: "NOTE:", "Пояснение:", "Объяснение:"
 *   — Множественный выбор: "[MULTIPLE]" или несколько * / ✓
 *   — Текстовый ответ: "[TEXT]" или "ANSWER:"
 *   — Мета: "QUIZ:", "DESCRIPTION:", "PASSING_SCORE:"
 */

/* ─────────────────────────────────────────────────────────────
   СОСТОЯНИЕ МОДАЛКИ
───────────────────────────────────────────────────────────── */
let uploadedData   = null
let parseStatusEl  = null
let isCustomQuiz   = false

/* ─────────────────────────────────────────────────────────────
   ОТКРЫТИЕ / ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
───────────────────────────────────────────────────────────── */
function openUploadModal() {
  document.getElementById('upload-modal').classList.add('open')
  document.body.style.overflow = 'hidden'
}

function closeUploadModal() {
  document.getElementById('upload-modal').classList.remove('open')
  document.body.style.overflow = ''
}

function onBackdropClick(e) {
  if (e.target === document.getElementById('upload-modal')) closeUploadModal()
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeUploadModal()
})

/* ─────────────────────────────────────────────────────────────
   ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК ФОРМАТА
───────────────────────────────────────────────────────────── */
function switchFmtTab(tab) {
  document.getElementById('tab-word').classList.toggle('active', tab === 'word')
  document.getElementById('tab-json').classList.toggle('active', tab === 'json')
  document.getElementById('panel-word').classList.toggle('hidden', tab !== 'word')
  document.getElementById('panel-json').classList.toggle('hidden', tab !== 'json')
}

/* ─────────────────────────────────────────────────────────────
   DRAG & DROP
───────────────────────────────────────────────────────────── */
function onDragOver(e) {
  e.preventDefault()
  document.getElementById('drop-zone').classList.add('drag-over')
}

function onDragLeave() {
  document.getElementById('drop-zone').classList.remove('drag-over')
}

function onDrop(e) {
  e.preventDefault()
  document.getElementById('drop-zone').classList.remove('drag-over')
  const file = e.dataTransfer.files[0]
  if (file) processFile(file)
}

function triggerFileInput() {
  document.getElementById('file-input').click()
}

function onFileSelected(e) {
  const file = e.target.files[0]
  if (file) processFile(file)
}

/* ─────────────────────────────────────────────────────────────
   РОУТИНГ ПО ТИПУ ФАЙЛА
───────────────────────────────────────────────────────────── */
function processFile(file) {
  hideUploadError()
  clearPreview()
  if (parseStatusEl) { parseStatusEl.remove(); parseStatusEl = null }

  const name = file.name.toLowerCase()
  const isJson = name.endsWith('.json')
  const isDocx = name.endsWith('.docx') || name.endsWith('.doc')
  const isTxt  = name.endsWith('.txt')

  if (!isJson && !isDocx && !isTxt) {
    showUploadError('Поддерживаются файлы: .docx (Word), .txt и .json')
    return
  }
  if (file.size > 10 * 1024 * 1024) {
    showUploadError('Файл слишком большой (максимум 10 МБ)')
    return
  }

  // Показываем имя файла сразу
  const kb = (file.size / 1024).toFixed(1)
  const fsEl = document.getElementById('file-status')
  fsEl.classList.remove('hidden')
  document.getElementById('fs-name').textContent = file.name
  document.getElementById('fs-meta').textContent = kb + ' КБ · ' +
    (isDocx ? 'Word-документ' : isTxt ? 'Текстовый файл' : 'JSON')
  const fsIcon = document.getElementById('fs-icon')
  fsIcon.innerHTML = isDocx ? '<i class="fas fa-file-word"></i>' :
                     isTxt  ? '<i class="fas fa-file-alt"></i>' :
                               '<i class="fas fa-file-code"></i>'
  fsIcon.style.background = isDocx ? '#2563eb' : isTxt ? '#7c3aed' : '#059669'
  document.getElementById('drop-zone').classList.add('has-file')

  if (isJson)      processJsonFile(file)
  else if (isDocx) processDocxFile(file)
  else             processTxtFile(file)
}

/* ─────────────────────────────────────────────────────────────
   ОБРАБОТКА JSON
───────────────────────────────────────────────────────────── */
function processJsonFile(file) {
  const reader = new FileReader()
  reader.onload = function(ev) {
    try {
      const parsed = JSON.parse(ev.target.result)
      uploadedData  = parsed
      const questions = Array.isArray(parsed) ? parsed :
                        Array.isArray(parsed.questions) ? parsed.questions : []
      if (questions.length === 0) { showUploadError('В файле нет вопросов'); uploadedData = null; return }
      renderUploadPreview(questions, 'json')
      document.getElementById('btn-apply-upload').disabled = false
      document.getElementById('dz-icon').innerHTML = '<i class="fas fa-check-circle"></i>'
    } catch(err) {
      showUploadError('Ошибка чтения JSON: ' + err.message)
      uploadedData = null
    }
  }
  reader.readAsText(file, 'utf-8')
}

/* ─────────────────────────────────────────────────────────────
   ОБРАБОТКА .DOCX (через mammoth.js)
───────────────────────────────────────────────────────────── */
async function processDocxFile(file) {
  if (typeof mammoth === 'undefined') {
    showUploadError('Библиотека mammoth.js не загружена. Проверьте интернет-соединение.')
    return
  }
  showParseStatus('parsing', 'Читаю Word-документ…')
  try {
    const buf    = await file.arrayBuffer()
    const result = await mammoth.extractRawText({ arrayBuffer: buf })
    finishTextParse(result.value, file.name)
  } catch(err) {
    showParseStatus('error', 'Ошибка чтения .docx: ' + err.message)
    showUploadError('Не удалось прочитать файл: ' + err.message)
    uploadedData = null
  }
}

/* ─────────────────────────────────────────────────────────────
   ОБРАБОТКА .TXT
───────────────────────────────────────────────────────────── */
function processTxtFile(file) {
  showParseStatus('parsing', 'Читаю текстовый файл…')
  const reader = new FileReader()
  reader.onload = function(ev) { finishTextParse(ev.target.result, file.name) }
  reader.onerror = function() { showUploadError('Не удалось прочитать файл') }
  reader.readAsText(file, 'utf-8')
}

/* ─────────────────────────────────────────────────────────────
   ФИНАЛ ПАРСИНГА ТЕКСТА
───────────────────────────────────────────────────────────── */
function finishTextParse(rawText, fileName) {
  if (!rawText || rawText.trim().length < 5) {
    showParseStatus('error', 'Документ пустой')
    showUploadError('Документ не содержит текста')
    return
  }

  const { questions, config } = parseSmartText(rawText)

  if (questions.length === 0) {
    showParseStatus('error', 'Вопросы не распознаны')
    showUploadError(
      'Не удалось найти вопросы. Убедитесь, что вопросы пронумерованы (1. 2. 3.) ' +
      'а варианты начинаются с буквы (A) B) C)) или другого маркера.'
    )
    return
  }

  uploadedData = { config, questions }
  showParseStatus('success',
    'Распознано ' + questions.length + ' ' + pluralQ(questions.length) +
    ' из «' + fileName + '»'
  )
  renderUploadPreview(questions, 'text')
  document.getElementById('btn-apply-upload').disabled = false
  document.getElementById('dz-icon').innerHTML = '<i class="fas fa-check-circle"></i>'
}

/* ═══════════════════════════════════════════════════════════════
   УМНЫЙ ПАРСЕР ТЕКСТА
   Понимает любые разумные форматы нумерации и разметки ответов
═══════════════════════════════════════════════════════════════ */
function parseSmartText(rawText) {
  // ── Нормализуем текст ──────────────────────────────────────
  const lines = rawText
    .replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    .split('\n')
    .map(function(l) { return l.trim() })

  // ── Мета-настройки квиза ───────────────────────────────────
  const config = { title: null, description: null, passingScore: null }
  const filtered = []

  for (var i = 0; i < lines.length; i++) {
    var l = lines[i]
    var m
    if ((m = l.match(/^QUIZ:\s*(.+)/i)))           { config.title        = m[1].trim(); continue }
    if ((m = l.match(/^DESCRIPTION:\s*(.+)/i)))    { config.description  = m[1].trim(); continue }
    if ((m = l.match(/^PASSING_SCORE:\s*(\d+)/i))) { config.passingScore = parseInt(m[1]); continue }
    filtered.push(l)
  }

  // ── Ищем блоки вопросов ────────────────────────────────────
  // Вопрос начинается со строки вида:
  //   "1."  "1)"  "1 "  "1:"
  //   "Вопрос 1."  "Question 1."  "Q1."  "Q1)"
  //   "1. [MULTIPLE]"  "1. [TEXT]"
  var Q_START = /^(?:(?:вопрос|question|q)\s*)?(\d+)\s*[.):\s]\s*(.+)/i

  // Вариант ответа:
  //   "A)" "A." "A " "а)" "А."  (латиница или кириллица)
  //   "1)" "1." — только если уже внутри вопроса
  //   "•" "–" "-" "*" "—"  — маркер списка
  var OPT_LETTER = /^([A-Za-zА-ЯЁа-яёA-Za-z])[.)]\s+(.+)/
  var OPT_BULLET = /^[•\-\*–—►▸▷·]\s+(.+)/

  // Правильный ответ явно указан отдельной строкой
  //   "Ответ: Б"  "Answer: B"  "Правильный ответ: Да"  "Correct: B"
  var ANSWER_LINE = /^(?:ответ|answer|правильный\s+ответ|correct(?:\s+answer)?)\s*[:\-]\s*(.+)/i

  // Пояснение
  var NOTE_LINE = /^(?:note|пояснение|объяснение|разбор|explanation)\s*[:\-]\s*(.+)/i

  // Признаки типа вопроса в тексте самого вопроса
  var MULTIPLE_TAG = /\[MULTIPLE\]/i
  var TEXT_TAG     = /\[TEXT\]/i

  // Правильность варианта:
  //   "B) Текст*"  "B) *Текст"  "B) Текст ✓"  "B) ✓ Текст"  "[✓]"  "[верно]"
  function isCorrectMarker(text) {
    return /\*$/.test(text) ||
           /^\*/.test(text) ||
           /[✓✔☑]/.test(text) ||
           /\[(верно|правильно|correct|да|yes|right)\]/i.test(text)
  }
  function stripCorrectMarker(text) {
    return text
      .replace(/\*$/, '').replace(/^\*/, '')
      .replace(/[✓✔☑]/g, '')
      .replace(/\[(верно|правильно|correct|да|yes|right)\]/gi, '')
      .trim()
  }

  // ── Разбираем по блокам ────────────────────────────────────
  var questions = []
  var cur = null        // текущий вопрос
  var opts = []         // варианты [{ text, isCorrect }]
  var note = null
  var explicitAnswer = null   // явная строка "Ответ: ..."
  var isMultiple = false
  var isText = false
  var insideQ = false   // флаг: мы внутри блока вопроса

  function flushQuestion() {
    if (!cur) return

    // Определяем правильные варианты
    var correctOpts = opts.filter(function(o) { return o.isCorrect })

    if (isText) {
      // Текстовый вопрос
      var ans
      if (explicitAnswer) {
        ans = explicitAnswer.split('|').map(function(s) { return s.trim() }).filter(Boolean)
        if (ans.length === 1) ans = ans[0]
      } else if (correctOpts.length > 0) {
        ans = correctOpts[0].text
      } else {
        ans = ''
      }
      questions.push({
        id: questions.length + 1,
        type: 'text',
        question: cur,
        correct: ans || '',
        explanation: note || undefined,
      })

    } else if (opts.length >= 2) {
      // Вопрос с вариантами
      var optTexts = opts.map(function(o) { return o.text })

      // Если есть явная строка "Ответ: ...", ищем совпадение с вариантом
      if (explicitAnswer && correctOpts.length === 0) {
        var ansLow = explicitAnswer.trim().toLowerCase()
        // Попробуем найти по тексту
        var found = opts.filter(function(o) {
          return o.text.toLowerCase() === ansLow ||
                 o.text.toLowerCase().startsWith(ansLow) ||
                 ansLow.startsWith(o.text.toLowerCase())
        })
        // Попробуем по букве (A, B, В, Г, ...)
        if (found.length === 0) {
          var letter = ansLow.replace(/[^a-zа-яё0-9]/g, '')
          var letters = ['a','b','c','d','e','f','g','h',
                         'а','б','в','г','д','е','ё','ж']
          var idx = letters.indexOf(letter)
          if (idx >= 0 && idx < opts.length) found = [opts[idx]]
        }
        if (found.length > 0) {
          found.forEach(function(o) { o.isCorrect = true })
          correctOpts = found
        }
      }

      var isMultipleActual = isMultiple || correctOpts.length > 1

      var correct
      if (isMultipleActual) {
        correct = correctOpts.length > 0
          ? correctOpts.map(function(o) { return o.text })
          : [optTexts[0]]
      } else {
        correct = correctOpts.length > 0 ? correctOpts[0].text : optTexts[0]
      }

      questions.push({
        id: questions.length + 1,
        type: isMultipleActual ? 'multiple' : 'single',
        question: cur,
        options: optTexts,
        correct: correct,
        explanation: note || undefined,
      })
    }

    // Сброс
    cur = null; opts = []; note = null; explicitAnswer = null
    isMultiple = false; isText = false; insideQ = false
  }

  // ── Основной цикл ─────────────────────────────────────────
  var i = 0
  while (i < filtered.length) {
    var line = filtered[i]
    i++

    if (!line) continue   // пустая строка — разделитель, продолжаем

    // Проверяем явный ответ
    var ansM = line.match(ANSWER_LINE)
    if (ansM && insideQ) {
      explicitAnswer = ansM[1].trim()
      continue
    }

    // Проверяем пояснение
    var noteM = line.match(NOTE_LINE)
    if (noteM && insideQ) {
      note = noteM[1].trim()
      continue
    }

    // Проверяем начало нового вопроса
    var qM = line.match(Q_START)
    if (qM) {
      flushQuestion()

      var qBody = qM[2].trim()
      isMultiple = MULTIPLE_TAG.test(qBody)
      isText     = TEXT_TAG.test(qBody)
      cur = qBody.replace(MULTIPLE_TAG, '').replace(TEXT_TAG, '').trim()
      insideQ = true
      continue
    }

    // Если мы внутри вопроса — ищем варианты
    if (insideQ) {
      // Вариант с буквой
      var optL = line.match(OPT_LETTER)
      if (optL) {
        var raw = optL[2].trim()
        var correct = isCorrectMarker(raw)
        opts.push({ text: stripCorrectMarker(raw), isCorrect: correct })
        continue
      }

      // Вариант с маркером пули
      var optB = line.match(OPT_BULLET)
      if (optB) {
        var raw2 = optB[1].trim()
        var correct2 = isCorrectMarker(raw2)
        opts.push({ text: stripCorrectMarker(raw2), isCorrect: correct2 })
        continue
      }

      // Если строка не похожа на вариант и не пустая —
      // может быть продолжением текста вопроса (если вариантов ещё нет)
      if (opts.length === 0 && line.length > 0) {
        cur = (cur ? cur + ' ' : '') + line
      }
    }
    // Строки вне вопроса игнорируем (заголовки, пояснения к документу и т.д.)
  }

  flushQuestion()

  return { questions: questions, config: config }
}

/* ─────────────────────────────────────────────────────────────
   ПРЕДПРОСМОТР РАСПОЗНАННЫХ ВОПРОСОВ
───────────────────────────────────────────────────────────── */
function renderUploadPreview(questions, sourceType) {
  var block = document.getElementById('preview-block')
  var list  = document.getElementById('preview-list')
  var count = document.getElementById('preview-count')

  block.classList.remove('hidden')
  count.textContent = questions.length + ' ' + pluralQ(questions.length)

  var typeLabel = { single: 'Один', multiple: 'Несколько', text: 'Текст' }

  var html = questions.slice(0, 10).map(function(q, i) {
    var tl  = typeLabel[q.type] || q.type || '?'
    var cls = q.type  || 'single'
    var qText = typeof q.question === 'string'
      ? (q.question.length > 80 ? q.question.slice(0, 80) + '…' : q.question)
      : '(нет текста)'
    var optCount = Array.isArray(q.options) ? q.options.length : 0
    var optHint  = optCount > 0 ? '<span style="color:var(--text-muted);font-size:11px;margin-left:4px">' + optCount + ' вар.</span>' : ''
    return '<div class="preview-item">' +
      '<div class="preview-item-num">' + (i + 1) + '</div>' +
      '<div class="preview-item-q">' + escHtml(qText) + optHint + '</div>' +
      '<div class="preview-item-type ' + cls + '">' + tl + '</div>' +
    '</div>'
  }).join('')

  if (questions.length > 10) {
    html += '<div class="preview-item" style="color:var(--text-muted);font-size:13px;padding:8px 16px">… и ещё ' + (questions.length - 10) + ' вопросов</div>'
  }

  list.innerHTML = html
}

/* ─────────────────────────────────────────────────────────────
   СТАТУС-БЕЙДЖ ПАРСИНГА
───────────────────────────────────────────────────────────── */
function showParseStatus(type, text) {
  if (parseStatusEl) { parseStatusEl.remove(); parseStatusEl = null }
  var el = document.createElement('div')
  el.className = 'parse-status' +
    (type === 'success' ? ' success' : type === 'error' ? ' error' : '')
  var icon = type === 'success' ? 'fa-circle-check'
           : type === 'error'   ? 'fa-circle-xmark'
                                : 'fa-spinner fa-spin'
  el.innerHTML = '<i class="fas ' + icon + '"></i><span>' + escHtml(text) + '</span>'
  parseStatusEl = el
  var ref = document.getElementById('preview-block')
  ref.parentNode.insertBefore(el, ref)
}

/* ─────────────────────────────────────────────────────────────
   ОЧИСТКА
───────────────────────────────────────────────────────────── */
function clearFile() {
  uploadedData = null
  var fi = document.getElementById('file-input')
  if (fi) fi.value = ''
  document.getElementById('file-status').classList.add('hidden')
  document.getElementById('drop-zone').classList.remove('has-file')
  document.getElementById('dz-icon').innerHTML = '<i class="fas fa-cloud-upload-alt"></i>'
  document.getElementById('btn-apply-upload').disabled = true
  if (parseStatusEl) { parseStatusEl.remove(); parseStatusEl = null }
  clearPreview()
  hideUploadError()
}

function clearPreview() {
  document.getElementById('preview-block').classList.add('hidden')
  document.getElementById('preview-list').innerHTML = ''
}

function showUploadError(msg) {
  document.getElementById('upload-error-text').textContent = msg
  document.getElementById('upload-error').classList.remove('hidden')
}

function hideUploadError() {
  document.getElementById('upload-error').classList.add('hidden')
}

/* ─────────────────────────────────────────────────────────────
   ПРИМЕНИТЬ / СБРОСИТЬ
───────────────────────────────────────────────────────────── */
async function applyUpload() {
  if (!uploadedData) return
  var btn = document.getElementById('btn-apply-upload')
  btn.disabled = true
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Применяю…'
  try {
    var res = await fetch('/api/upload-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadedData),
    })
    var json = await res.json()
    if (!json.ok) {
      showUploadError(json.error || 'Ошибка на сервере')
      btn.disabled = false
      btn.innerHTML = '<i class="fas fa-check"></i> Применить'
      return
    }
    isCustomQuiz = true
    document.getElementById('custom-badge').classList.add('visible')
    closeUploadModal()
    showToast('Загружено ' + json.loaded + ' ' + pluralQ(json.loaded) + '!', 'success', 3500)
    await loadQuiz()
    clearFile()
  } catch(e) {
    showUploadError('Сетевая ошибка: ' + e.message)
    btn.disabled = false
    btn.innerHTML = '<i class="fas fa-check"></i> Применить'
  }
}

async function resetToDefault() {
  try {
    await fetch('/api/reset-quiz', { method: 'POST' })
    isCustomQuiz = false
    document.getElementById('custom-badge').classList.remove('visible')
    closeUploadModal()
    clearFile()
    await loadQuiz()
    showToast('Возвращены встроенные вопросы', '', 2500)
  } catch(e) {
    showUploadError('Ошибка сброса: ' + e.message)
  }
}

/* ─────────────────────────────────────────────────────────────
   УТИЛИТЫ
───────────────────────────────────────────────────────────── */
function pluralQ(n) {
  if (n % 10 === 1 && n % 100 !== 11) return 'вопрос'
  if ([2,3,4].indexOf(n % 10) >= 0 && [12,13,14].indexOf(n % 100) < 0) return 'вопроса'
  return 'вопросов'
}

function escHtml(str) {
  if (typeof str !== 'string') return String(str)
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#39;')
}
