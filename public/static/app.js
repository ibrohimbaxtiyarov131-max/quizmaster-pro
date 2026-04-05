// ============================================================
// QuizMaster Pro — Full SPA
// ============================================================
'use strict';

// ───── i18n ──────────────────────────────────────────────────
const I18N = {
  ru: {
    appName: 'QuizMaster Pro',
    home: 'Главная', myQuizzes: 'Мои тесты', createQuiz: 'Создать тест',
    history: 'История', admin: 'Администратор', settings: 'Настройки',
    quizzes: 'Тесты', analytics: 'Аналитика', results: 'Результаты',
    startQuiz: 'Начать тест', editQuiz: 'Редактировать', deleteQuiz: 'Удалить',
    shareQuiz: 'Поделиться', previewQuiz: 'Предпросмотр',
    save: 'Сохранить', cancel: 'Отмена', close: 'Закрыть', delete: 'Удалить',
    back: 'Назад', next: 'Далее', skip: 'Пропустить', finish: 'Завершить',
    restart: 'Заново', viewAnswers: 'Разбор ответов',
    questions: 'вопросов', question: 'Вопрос',
    correct: 'Правильно', wrong: 'Неправильно', skipped: 'Пропущено',
    score: 'Результат', passed: 'Тест пройден!', failed: 'Попробуйте ещё раз',
    passingScore: 'Проходной балл', timeLimit: 'Ограничение времени',
    category: 'Категория', description: 'Описание',
    addQuestion: 'Добавить вопрос', deleteQuestion: 'Удалить вопрос',
    questionType: 'Тип вопроса',
    typeSingle: 'Один ответ', typeMultiple: 'Несколько ответов',
    typeText: 'Текстовый ответ', typeTF: 'Правда/Ложь', typeMatch: 'Сопоставление',
    trueOption: 'Правда', falseOption: 'Ложь',
    uploadFile: 'Загрузить файл', downloadTemplate: 'Скачать шаблон',
    importQuestions: 'Импорт вопросов', exportResults: 'Экспорт результатов',
    exportPDF: 'Экспорт PDF', exportCSV: 'Экспорт CSV', exportExcel: 'Excel',
    noQuizzes: 'Нет тестов', noHistory: 'История пуста',
    confirmDelete: 'Удалить этот тест?',
    shuffleQ: 'Случайный порядок вопросов', shuffleA: 'Перемешать ответы',
    showExpl: 'Показывать объяснения', explAfterEach: 'После каждого ответа', explAtEnd: 'В конце теста',
    questionTimer: 'Таймер на вопрос (сек)', totalTimer: 'Общий таймер (мин)',
    maxQuestions: 'Количество вопросов',
    allQuestions: 'Все вопросы',
    certificate: 'Сертификат',
    shareLinkCopied: 'Ссылка скопирована!',
    loading: 'Загрузка…',
    searchPlaceholder: 'Поиск тестов…',
    titleRequired: 'Введите название теста',
    minOneQuestion: 'Добавьте хотя бы один вопрос',
    savedSuccess: 'Тест сохранён!',
    deletedSuccess: 'Тест удалён',
    errorOccurred: 'Произошла ошибка',
    explanation: 'Пояснение',
    yourAnswer: 'Ваш ответ',
    correctAnswer: 'Правильный ответ',
    avgScore: 'Средний балл',
    totalAttempts: 'Всего попыток',
    hardestQ: 'Сложные вопросы',
    created: 'Создан',
    duration: 'Время',
    min: 'мин', sec: 'сек',
    heroTitle: 'Создавайте и проходите тесты',
    heroSubtitle: 'Профессиональная платформа для создания интерактивных квизов с аналитикой и экспортом',
    featuresTitle: 'Возможности платформы',
    recentQuizzes: 'Последние тесты',
    addPair: 'Добавить пару', addOption: 'Добавить вариант',
    optionPlaceholder: 'Вариант ответа…', questionPlaceholder: 'Текст вопроса…',
    leftPair: 'Левая колонка', rightPair: 'Правая колонка',
    noExplanation: 'Без пояснения',
    image: 'Изображение (URL)', imagePlaceholder: 'https://…',
    quizTitle: 'Название теста', quizDesc: 'Описание теста',
    newQuiz: 'Новый тест',
    editingQuestion: 'Редактирование вопроса',
    unsavedChanges: 'Есть несохранённые изменения',
    importSuccess: 'Вопросы импортированы!',
    parseError: 'Ошибка разбора файла',
    editImported: 'Редактировать импортированные вопросы',
    lang: 'Язык',
    seconds: 'секунд',
  },
  uz: {
    appName: 'QuizMaster Pro',
    home: 'Bosh sahifa', myQuizzes: 'Mening testlarim', createQuiz: 'Test yaratish',
    history: 'Tarix', admin: 'Administrator', settings: 'Sozlamalar',
    quizzes: 'Testlar', analytics: 'Tahlil', results: 'Natijalar',
    startQuiz: 'Testni boshlash', editQuiz: 'Tahrirlash', deleteQuiz: "O'chirish",
    shareQuiz: 'Ulashish', previewQuiz: "Ko'rib chiqish",
    save: 'Saqlash', cancel: 'Bekor qilish', close: 'Yopish', delete: "O'chirish",
    back: 'Ortga', next: 'Keyingi', skip: "O'tkazib yuborish", finish: 'Tugatish',
    restart: 'Qayta boshlash', viewAnswers: 'Javoblarni ko\'rish',
    questions: 'savol', question: 'Savol',
    correct: "To'g'ri", wrong: 'Noto\'g\'ri', skipped: "O'tkazib yuborilgan",
    score: 'Natija', passed: 'Test muvaffaqiyatli topshirildi!', failed: 'Yana urinib ko\'ring',
    passingScore: "O'tish bali", timeLimit: 'Vaqt cheklovi',
    category: 'Kategoriya', description: 'Tavsif',
    addQuestion: 'Savol qo\'shish', deleteQuestion: 'Savolni o\'chirish',
    questionType: 'Savol turi',
    typeSingle: 'Bitta javob', typeMultiple: 'Bir nechta javob',
    typeText: 'Matnli javob', typeTF: "To'g'ri/Noto'g'ri", typeMatch: 'Moslashtirish',
    trueOption: "To'g'ri", falseOption: "Noto'g'ri",
    uploadFile: 'Fayl yuklash', downloadTemplate: 'Shablonni yuklab olish',
    importQuestions: 'Savollarni import qilish', exportResults: 'Natijalarni eksport qilish',
    exportPDF: 'PDF eksport', exportCSV: 'CSV eksport', exportExcel: 'Excel',
    noQuizzes: 'Testlar yo\'q', noHistory: 'Tarix bo\'sh',
    confirmDelete: 'Bu testni o\'chirmoqchimisiz?',
    shuffleQ: 'Savollar tartibini aralashtirish', shuffleA: 'Javoblarni aralashtirish',
    showExpl: 'Tushuntirishlarni ko\'rsatish', explAfterEach: 'Har bir javobdan so\'ng', explAtEnd: 'Test oxirida',
    questionTimer: 'Savol uchun taymer (sek)', totalTimer: 'Umumiy taymer (daqiqa)',
    maxQuestions: 'Savollar soni',
    allQuestions: 'Barcha savollar',
    certificate: 'Sertifikat',
    shareLinkCopied: 'Havola nusxalandi!',
    loading: 'Yuklanmoqda…',
    searchPlaceholder: 'Testlarni qidirish…',
    titleRequired: 'Test nomini kiriting',
    minOneQuestion: 'Kamida bitta savol qo\'shing',
    savedSuccess: 'Test saqlandi!',
    deletedSuccess: 'Test o\'chirildi',
    errorOccurred: 'Xatolik yuz berdi',
    explanation: 'Tushuntirish',
    yourAnswer: 'Sizning javobingiz',
    correctAnswer: "To'g'ri javob",
    avgScore: "O'rtacha ball",
    totalAttempts: 'Jami urinishlar',
    hardestQ: 'Qiyin savollar',
    created: 'Yaratilgan', duration: 'Davomiyligi',
    min: 'daqiqa', sec: 'soniya',
    heroTitle: 'Test yarating va ishlang',
    heroSubtitle: 'Tahlil va eksport bilan interaktiv kvizlar uchun professional platforma',
    featuresTitle: 'Platforma imkoniyatlari',
    recentQuizzes: 'So\'nggi testlar',
    addPair: 'Juft qo\'shish', addOption: 'Variant qo\'shish',
    optionPlaceholder: 'Javob varianti…', questionPlaceholder: 'Savol matni…',
    leftPair: 'Chap ustun', rightPair: "O'ng ustun",
    noExplanation: 'Tushuntirishsiz',
    image: 'Rasm (URL)', imagePlaceholder: 'https://…',
    quizTitle: 'Test nomi', quizDesc: 'Test tavsifi',
    newQuiz: 'Yangi test',
    editingQuestion: 'Savolni tahrirlash',
    unsavedChanges: 'Saqlanmagan o\'zgarishlar mavjud',
    importSuccess: 'Savollar import qilindi!',
    parseError: 'Faylni tahlil qilishda xatolik',
    editImported: 'Import qilingan savollarni tahrirlash',
    lang: 'Til',
    seconds: 'soniya',
  }
};
let LANG = localStorage.getItem('qm_lang') || 'ru';
const t = (k) => (I18N[LANG][k] || I18N.ru[k] || k);

// ───── STORAGE ────────────────────────────────────────────────
const STORAGE = {
  QUIZZES: 'qm_quizzes',
  HISTORY: 'qm_history',
  SETTINGS: 'qm_settings',
};
function loadStorage(key, def = []) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function saveStorage(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ───── STATE ──────────────────────────────────────────────────
let state = {
  page: 'home',
  quizzes: loadStorage(STORAGE.QUIZZES, getDefaultQuizzes()),
  history: loadStorage(STORAGE.HISTORY, []),
  settings: loadStorage(STORAGE.SETTINGS, { theme: 'light' }),
  currentQuiz: null,      // quiz being taken
  currentQuestion: 0,
  answers: {},            // { qIndex: answer }
  timerInterval: null,
  questionTimerInterval: null,
  timeLeft: 0,
  questionTimeLeft: 0,
  quizStartTime: null,
  questionOrder: [],      // shuffled indices
  editQuiz: null,         // quiz in editor
  editQIndex: -1,
  totalTime: 0,
};

// ───── DEFAULT QUIZZES ────────────────────────────────────────
function getDefaultQuizzes() {
  return [
    {
      id: genId(),
      title: 'Общие знания',
      description: 'Проверьте свои знания в различных областях — наука, технологии, история и культура.',
      category: 'Общие знания',
      passingScore: 60,
      timeLimit: 0,
      questionTimer: 0,
      shuffleQuestions: false,
      shuffleAnswers: false,
      showExplanations: 'end',
      maxQuestions: 0,
      created: Date.now(),
      questions: [
        { id:1, type:'single', question:'Какой язык программирования был создан компанией Sun Microsystems в 1995 году?', options:['Python','Java','C++','Ruby'], correct:'Java', explanation:'Java была создана командой под руководством Джеймса Гослинга в Sun Microsystems.' },
        { id:2, type:'single', question:'Что такое HTTP?', options:['Язык программирования','Протокол передачи гипертекста','База данных','Операционная система'], correct:'Протокол передачи гипертекста', explanation:'HTTP — HyperText Transfer Protocol, основа передачи данных в Интернете.' },
        { id:3, type:'multiple', question:'Какие из следующих языков являются языками программирования?', options:['JavaScript','HTML','Python','CSS','Rust'], correct:['JavaScript','Python','Rust'], explanation:'HTML и CSS — языки разметки и стилей, а не программирования.' },
        { id:4, type:'truefalse', question:'Земля является единственной планетой в Солнечной системе с жидкой водой на поверхности.', correct:'true', explanation:'На сегодняшний день Земля — единственная известная нам планета с жидкой водой на поверхности.' },
        { id:5, type:'single', question:'Кто написал «Войну и мир»?', options:['Фёдор Достоевский','Антон Чехов','Лев Толстой','Иван Тургенев'], correct:'Лев Толстой', explanation:'Роман «Война и мир» написан Львом Николаевичем Толстым (1869).' },
        { id:6, type:'text', question:'Напишите химическую формулу воды:', correct:['H2O','h2o','Н2О'], explanation:'Молекула воды состоит из двух атомов водорода и одного атома кислорода.' },
        { id:7, type:'match', question:'Сопоставьте страны с их столицами:', pairs:[{left:'Франция',right:'Париж'},{left:'Германия',right:'Берлин'},{left:'Япония',right:'Токио'},{left:'Австралия',right:'Канберра'}], correct:'auto', explanation:'Важно не путать столицы с крупнейшими городами.' },
        { id:8, type:'single', question:'Сколько битов в одном байте?', options:['4','8','16','32'], correct:'8', explanation:'Один байт = 8 бит — это стандартное определение в вычислительной технике.' },
        { id:9, type:'multiple', question:'Какие из планет являются газовыми гигантами?', options:['Юпитер','Марс','Сатурн','Венера','Нептун'], correct:['Юпитер','Сатурн','Нептун'], explanation:'Газовые гиганты Солнечной системы: Юпитер, Сатурн, Уран, Нептун.' },
        { id:10, type:'truefalse', question:'Великая Китайская стена видна из космоса невооружённым глазом.', correct:'false', explanation:'Это миф. Стена слишком узкая, чтобы её можно было увидеть с орбиты без телескопа.' },
      ]
    }
  ];
}

// ───── HELPERS ────────────────────────────────────────────────
function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }
function escHtml(s) { if (!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=0|Math.random()*(i+1);[a[i],a[j]]=[a[j],a[i]];} return a; }
function formatTime(s) { const m=0|s/60; const ss=s%60; return m>0?`${m}:${String(ss).padStart(2,'0')}`:`${ss}${t('sec')}`; }
function pluralQ(n) {
  if(LANG==='uz') return `${n} ${t('questions')}`;
  const x=n%100, y=n%10;
  if(x>=11&&x<=19) return `${n} вопросов`;
  if(y===1) return `${n} вопрос`;
  if(y>=2&&y<=4) return `${n} вопроса`;
  return `${n} вопросов`;
}
function getTypeLabel(type) {
  const map = { single:t('typeSingle'), multiple:t('typeMultiple'), text:t('typeText'), truefalse:t('typeTF'), match:t('typeMatch') };
  return map[type] || type;
}
function getTypeBadgeClass(type) {
  const map = { single:'tag-single', multiple:'tag-multiple', text:'tag-text', truefalse:'tag-truefalse', match:'tag-match' };
  return map[type] || '';
}
function toast(msg, type='info', dur=3000) {
  const wrap = document.getElementById('toast-wrap');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icons = { success:'check-circle', error:'circle-xmark', warning:'triangle-exclamation', info:'circle-info' };
  el.innerHTML = `<i class="fas fa-${icons[type]||'circle-info'}"></i> ${escHtml(msg)}`;
  wrap.appendChild(el);
  setTimeout(() => { el.classList.add('fade-out'); setTimeout(()=>el.remove(), 300); }, dur);
}
function confirm(msg, cb) {
  if (window.confirm(msg)) cb();
}
function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

// ───── ROUTER ─────────────────────────────────────────────────
function navigate(page, params={}) {
  state.page = page;
  state.navParams = params;
  renderApp();
}

// ───── RENDER APP ─────────────────────────────────────────────
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Pages that use the sidebar layout
  const withSidebar = ['home','my-quizzes','create-quiz','edit-quiz','history','admin','settings'];

  if (withSidebar.includes(state.page)) {
    app.innerHTML = renderSidebarLayout();
    attachSidebarEvents();
    renderPageContent();
  } else if (state.page === 'take-quiz') {
    app.innerHTML = renderTakeQuiz();
    attachQuizEvents();
    startQuizTimer();
    startQuestionTimer();
  } else if (state.page === 'results') {
    app.innerHTML = renderResults();
    attachResultsEvents();
    animateScore();
  }
}

// ───── SIDEBAR LAYOUT ─────────────────────────────────────────
function renderSidebarLayout() {
  const navItems = [
    { id:'home', icon:'fa-house', label:t('home'), section:'main' },
    { id:'my-quizzes', icon:'fa-layer-group', label:t('myQuizzes'), section:'main' },
    { id:'create-quiz', icon:'fa-plus-circle', label:t('createQuiz'), section:'main', badge: null },
    { id:'history', icon:'fa-clock-rotate-left', label:t('history'), section:'main' },
    { id:'admin', icon:'fa-chart-bar', label:t('admin'), section:'admin' },
    { id:'settings', icon:'fa-gear', label:t('settings'), section:'admin' },
  ];
  const sections = { main: t('quizzes'), admin: t('analytics') };

  let sidebarNav = '';
  let lastSection = '';
  for (const item of navItems) {
    if (item.section !== lastSection) {
      lastSection = item.section;
      sidebarNav += `<div class="nav-section-title">${sections[item.section]}</div>`;
    }
    sidebarNav += `<div class="nav-item${state.page===item.id?' active':''}" data-nav="${item.id}">
      <i class="fas ${item.icon}"></i> ${item.label}
      ${item.badge?`<span class="nav-badge">${item.badge}</span>`:''}
    </div>`;
  }

  return `
<div class="layout">
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-icon"><i class="fas fa-brain"></i></div>
      <div><div class="logo-text">${t('appName')}</div><div class="logo-sub">Quiz Platform</div></div>
    </div>
    <nav class="sidebar-nav"><div class="nav-section">${sidebarNav}</div></nav>
    <div class="sidebar-footer">
      <div class="lang-switcher">
        <div class="lang-btn${LANG==='ru'?' active':''}" data-lang="ru">RU</div>
        <div class="lang-btn${LANG==='uz'?' active':''}" data-lang="uz">UZ</div>
      </div>
    </div>
  </aside>
  <div class="sidebar-overlay" id="sidebar-overlay"></div>
  <div class="main-content">
    <header class="topbar">
      <button class="hamburger" id="hamburger"><i class="fas fa-bars"></i></button>
      <div class="topbar-title" id="topbar-title"></div>
      <div class="topbar-actions" id="topbar-actions"></div>
    </header>
    <div class="content-area" id="content-area"></div>
  </div>
</div>
<div class="toast-wrap" id="toast-wrap"></div>
<div id="modal-root"></div>`;
}

function attachSidebarEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.nav));
  });
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.addEventListener('click', () => {
      LANG = el.dataset.lang;
      localStorage.setItem('qm_lang', LANG);
      renderApp();
    });
  });
  const ham = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (ham) ham.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  if (overlay) overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

function renderPageContent() {
  const pages = {
    'home': renderHome,
    'my-quizzes': renderMyQuizzes,
    'create-quiz': () => renderEditor(null),
    'edit-quiz': () => renderEditor(state.navParams?.id),
    'history': renderHistory,
    'admin': renderAdmin,
    'settings': renderSettings,
  };
  const fn = pages[state.page];
  if (fn) fn();
}

// ═══════════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════════
function renderHome() {
  const titleEl = document.getElementById('topbar-title');
  const actionsEl = document.getElementById('topbar-actions');
  const area = document.getElementById('content-area');
  if (!area) return;
  if (titleEl) titleEl.textContent = t('home');
  if (actionsEl) actionsEl.innerHTML = `
    <button class="btn btn-primary" id="btn-create-home"><i class="fas fa-plus"></i> ${t('createQuiz')}</button>`;

  const totalQ = state.quizzes.reduce((s,q)=>s+(q.questions?.length||0),0);
  const totalAttempts = state.history.length;
  const avgScore = totalAttempts ? Math.round(state.history.reduce((s,h)=>s+h.percent,0)/totalAttempts) : 0;

  const features = [
    { icon:'fa-brain', color:'fc-blue', title: LANG==='ru'?'5 типов вопросов':'5 savol turi', desc: LANG==='ru'?'Один, несколько, текст, правда/ложь, сопоставление':'Bir, bir nechta, matn, to\'g\'ri/noto\'g\'ri, moslashtirish', action:'create-quiz' },
    { icon:'fa-list-ol', color:'fc-green', title: LANG==='ru'?'10 вопросов':'10 savol', desc: LANG==='ru'?'Быстрый тест с выбором количества':'Savollar sonini tanlang', action:'my-quizzes', qCount:10 },
    { icon:'fa-stopwatch', color:'fc-orange', title: LANG==='ru'?'Таймер':'Taymer', desc: LANG==='ru'?'На весь тест или каждый вопрос':'Har bir savol uchun', action:'create-quiz' },
    { icon:'fa-shuffle', color:'fc-purple', title: LANG==='ru'?'Рандомизация':'Aralashtirish', desc: LANG==='ru'?'Случайный порядок вопросов и ответов':'Tasodifiy tartib', action:'create-quiz' },
    { icon:'fa-upload', color:'fc-cyan', title: LANG==='ru'?'Импорт файлов':'Fayl import', desc: LANG==='ru'?'Word, Excel, TXT, JSON':'Word, Excel, TXT, JSON', action:'create-quiz' },
    { icon:'fa-file-export', color:'fc-yellow', title: LANG==='ru'?'Экспорт результатов':'Natijalarni eksport', desc: LANG==='ru'?'PDF, CSV, Excel':'PDF, CSV, Excel', action:'history' },
    { icon:'fa-language', color:'fc-pink', title: LANG==='ru'?'2 языка':'2 til', desc: LANG==='ru'?'Русский и Узбекский':'Rus va O\'zbek tillari', action:'settings' },
    { icon:'fa-chart-line', color:'fc-red', title: LANG==='ru'?'Аналитика':'Tahlil', desc: LANG==='ru'?'Статистика прохождений':'Statistika', action:'admin' },
    { icon:'fa-link', color:'fc-blue', title: LANG==='ru'?'Поделиться':'Ulashish', desc: LANG==='ru'?'Генерация ссылок на тест':'Test havolasini ulashish', action:'my-quizzes' },
    { icon:'fa-pen-to-square', color:'fc-green', title: LANG==='ru'?'Редактор':'Muharrir', desc: LANG==='ru'?'Создание и редактирование тестов':'Testlarni yaratish va tahrirlash', action:'create-quiz' },
    { icon:'fa-trophy', color:'fc-orange', title: LANG==='ru'?'Сертификат':'Sertifikat', desc: LANG==='ru'?'Сертификат при прохождении':'Muvaffaqiyatli topshirish sertifikati', action:'history' },
    { icon:'fa-image', color:'fc-purple', title: LANG==='ru'?'Изображения':'Rasmlar', desc: LANG==='ru'?'Добавляйте картинки к вопросам':'Savollarga rasm qo\'shing', action:'create-quiz' },
  ];

  const recentQuizzes = [...state.quizzes].sort((a,b)=>b.created-a.created).slice(0,4);

  area.innerHTML = `
<div class="home-hero">
  <div class="hero-content">
    <div class="hero-badge"><i class="fas fa-bolt"></i> ${t('appName')}</div>
    <h1 class="hero-title">${t('heroTitle')}</h1>
    <p class="hero-subtitle">${t('heroSubtitle')}</p>
    <div class="hero-actions">
      <button class="btn btn-primary btn-lg" id="hero-create"><i class="fas fa-plus"></i> ${t('createQuiz')}</button>
      <button class="btn btn-lg" style="background:rgba(255,255,255,0.15);color:#fff;" id="hero-browse"><i class="fas fa-search"></i> ${t('myQuizzes')}</button>
    </div>
    <div class="hero-stats">
      <div><div class="hero-stat-val">${state.quizzes.length}</div><div class="hero-stat-lbl">${t('quizzes')}</div></div>
      <div><div class="hero-stat-val">${pluralQ(totalQ)}</div><div class="hero-stat-lbl">${t('questions')}</div></div>
      <div><div class="hero-stat-val">${totalAttempts}</div><div class="hero-stat-lbl">${t('totalAttempts')}</div></div>
      <div><div class="hero-stat-val">${avgScore}%</div><div class="hero-stat-lbl">${t('avgScore')}</div></div>
    </div>
  </div>
</div>

<div class="section-header">
  <div><div class="section-title">${t('featuresTitle')}</div></div>
</div>
<div class="feature-grid">
  ${features.map(f=>`
  <div class="feature-card ${f.color}" data-feature-action="${f.action}" ${f.qCount?`data-q-count="${f.qCount}"`:''}">
    <div class="feature-icon"><i class="fas ${f.icon}"></i></div>
    <div class="feature-title">${f.title}</div>
    <div class="feature-desc">${f.desc}</div>
  </div>`).join('')}
</div>

${recentQuizzes.length ? `
<div class="section-header">
  <div><div class="section-title">${t('recentQuizzes')}</div></div>
  <button class="btn btn-secondary" id="btn-all-quizzes"><i class="fas fa-list"></i> ${t('myQuizzes')}</button>
</div>
<div class="grid-auto">
  ${recentQuizzes.map(q=>renderQuizCard(q)).join('')}
</div>` : ''}`;

  document.getElementById('hero-create')?.addEventListener('click', ()=>navigate('create-quiz'));
  document.getElementById('hero-browse')?.addEventListener('click', ()=>navigate('my-quizzes'));
  document.getElementById('btn-create-home')?.addEventListener('click', ()=>navigate('create-quiz'));
  document.getElementById('btn-all-quizzes')?.addEventListener('click', ()=>navigate('my-quizzes'));
  document.querySelectorAll('[data-feature-action]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const action = el.dataset.featureAction;
      const qc = el.dataset.qCount ? parseInt(el.dataset.qCount) : 0;
      if (action === 'my-quizzes' && qc) {
        // Start quick quiz with count
        const q = state.quizzes[0];
        if (q) startQuiz(q.id, { maxQuestions: qc });
      } else { navigate(action); }
    });
  });
  attachQuizCardEvents();
}

function renderQuizCard(quiz) {
  const attempts = state.history.filter(h=>h.quizId===quiz.id);
  const last = attempts[attempts.length-1];
  const avgPct = attempts.length ? Math.round(attempts.reduce((s,h)=>s+h.percent,0)/attempts.length) : null;
  return `
<div class="quiz-card" data-quiz-id="${quiz.id}">
  <div class="quiz-card-header">
    <div class="quiz-card-category">${escHtml(quiz.category||t('category'))}</div>
    <div class="quiz-card-title">${escHtml(quiz.title)}</div>
    <div class="quiz-card-desc">${escHtml(quiz.description||'')}</div>
  </div>
  <div class="quiz-card-body">
    <div class="quiz-card-meta">
      <div class="quiz-meta-item"><i class="fas fa-circle-question"></i> ${pluralQ(quiz.questions?.length||0)}</div>
      ${quiz.timeLimit?`<div class="quiz-meta-item"><i class="fas fa-stopwatch"></i> ${quiz.timeLimit} ${t('min')}</div>`:''}
      <div class="quiz-meta-item"><i class="fas fa-percent"></i> ${quiz.passingScore}%</div>
      ${attempts.length?`<div class="quiz-meta-item"><i class="fas fa-rotate"></i> ${attempts.length}x</div>`:''}
    </div>
    ${avgPct!==null?`<div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;">${t('avgScore')}: <b style="color:var(--primary)">${avgPct}%</b></div>`:''}
    <div style="display:flex;gap:4px;flex-wrap:wrap;">
      ${[...new Set((quiz.questions||[]).map(q=>q.type))].map(tp=>`<span class="tag ${getTypeBadgeClass(tp)}">${getTypeLabel(tp)}</span>`).join('')}
    </div>
  </div>
  <div class="quiz-card-footer">
    <button class="btn btn-primary btn-sm" data-action="start" data-quiz-id="${quiz.id}"><i class="fas fa-play"></i> ${t('startQuiz')}</button>
    <button class="btn btn-secondary btn-sm btn-icon" title="${t('editQuiz')}" data-action="edit" data-quiz-id="${quiz.id}"><i class="fas fa-pen"></i></button>
    <button class="btn btn-secondary btn-sm btn-icon" title="${t('shareQuiz')}" data-action="share" data-quiz-id="${quiz.id}"><i class="fas fa-share-alt"></i></button>
    <button class="btn btn-danger btn-sm btn-icon" title="${t('deleteQuiz')}" data-action="delete" data-quiz-id="${quiz.id}" style="margin-left:auto"><i class="fas fa-trash"></i></button>
  </div>
</div>`;
}

function attachQuizCardEvents() {
  document.querySelectorAll('[data-action]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      e.stopPropagation();
      const id = el.dataset.quizId;
      const action = el.dataset.action;
      if (action==='start') startQuiz(id);
      else if (action==='edit') navigate('edit-quiz',{id});
      else if (action==='delete') deleteQuiz(id);
      else if (action==='share') showShareModal(id);
    });
  });
  document.querySelectorAll('.quiz-card').forEach(el=>{
    el.addEventListener('click', ()=> startQuiz(el.dataset.quizId));
  });
}

// ═══════════════════════════════════════════════════════════════
// MY QUIZZES
// ═══════════════════════════════════════════════════════════════
function renderMyQuizzes() {
  const titleEl = document.getElementById('topbar-title');
  const actionsEl = document.getElementById('topbar-actions');
  const area = document.getElementById('content-area');
  if (!area) return;
  if (titleEl) titleEl.textContent = t('myQuizzes');
  if (actionsEl) actionsEl.innerHTML = `
    <button class="btn btn-primary" id="btn-create-mq"><i class="fas fa-plus"></i> ${t('createQuiz')}</button>
    <button class="btn btn-secondary" id="btn-import-mq"><i class="fas fa-file-import"></i> ${t('importQuestions')}</button>`;

  const cats = [...new Set(state.quizzes.map(q=>q.category||'').filter(Boolean))];
  area.innerHTML = `
<div class="section-header">
  <div class="section-title">${t('myQuizzes')} <span style="font-size:15px;color:var(--text-muted);font-weight:500;">(${state.quizzes.length})</span></div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    <div class="search-box"><i class="fas fa-search"></i><input type="text" id="quiz-search" placeholder="${t('searchPlaceholder')}"></div>
    <select class="form-control" id="cat-filter" style="width:auto;padding:8px 12px;">
      <option value="">${t('category')}: ${LANG==='ru'?'Все':'Hammasi'}</option>
      ${cats.map(c=>`<option value="${escHtml(c)}">${escHtml(c)}</option>`).join('')}
    </select>
  </div>
</div>
<div class="grid-auto" id="quizzes-grid">
  ${state.quizzes.length ? state.quizzes.map(q=>renderQuizCard(q)).join('') : `
  <div class="empty-state" style="grid-column:1/-1">
    <div class="empty-state-icon"><i class="fas fa-layer-group"></i></div>
    <div class="empty-state-title">${t('noQuizzes')}</div>
    <div class="empty-state-text">${LANG==='ru'?'Создайте первый тест':'Birinchi testni yarating'}</div>
    <button class="btn btn-primary" id="btn-empty-create"><i class="fas fa-plus"></i> ${t('createQuiz')}</button>
  </div>`}
</div>`;

  document.getElementById('btn-create-mq')?.addEventListener('click',()=>navigate('create-quiz'));
  document.getElementById('btn-import-mq')?.addEventListener('click', showImportModal);
  document.getElementById('btn-empty-create')?.addEventListener('click',()=>navigate('create-quiz'));
  attachQuizCardEvents();
  // Search filter
  const search = document.getElementById('quiz-search');
  const catSel = document.getElementById('cat-filter');
  const filterQuizzes = () => {
    const q = search.value.toLowerCase();
    const cat = catSel.value;
    const filtered = state.quizzes.filter(quiz=>{
      const matchQ = !q || quiz.title.toLowerCase().includes(q) || (quiz.description||'').toLowerCase().includes(q);
      const matchC = !cat || quiz.category === cat;
      return matchQ && matchC;
    });
    document.getElementById('quizzes-grid').innerHTML = filtered.length
      ? filtered.map(qz=>renderQuizCard(qz)).join('')
      : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon"><i class="fas fa-search"></i></div><div class="empty-state-title">${LANG==='ru'?'Ничего не найдено':'Hech narsa topilmadi'}</div></div>`;
    attachQuizCardEvents();
  };
  search?.addEventListener('input', filterQuizzes);
  catSel?.addEventListener('change', filterQuizzes);
}

function deleteQuiz(id) {
  confirm(t('confirmDelete'), ()=>{
    state.quizzes = state.quizzes.filter(q=>q.id!==id);
    saveStorage(STORAGE.QUIZZES, state.quizzes);
    toast(t('deletedSuccess'), 'success');
    renderPageContent();
  });
}

function showShareModal(id) {
  const quiz = state.quizzes.find(q=>q.id===id);
  if (!quiz) return;
  const url = `${location.origin}${location.pathname}?quiz=${id}`;
  showModal(`
<div class="modal-header"><i class="fas fa-share-alt" style="color:var(--primary)"></i><span class="modal-title">${t('shareQuiz')}: ${escHtml(quiz.title)}</span><button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button></div>
<div class="modal-body">
  <p style="font-size:14px;color:var(--text-muted);margin-bottom:14px;">${LANG==='ru'?'Поделитесь этой ссылкой':'Ushbu havolani ulashing'}</p>
  <div class="share-link-box">
    <input class="share-link-input" id="share-url" value="${url}" readonly>
    <button class="btn btn-primary btn-sm" id="copy-link-btn"><i class="fas fa-copy"></i></button>
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--text-muted)">${LANG==='ru'?'Данные теста хранятся локально. Получатель должен импортировать тест.':'Test ma\'lumotlari mahalliy saqlanadi.'}</div>
  <hr class="divider">
  <p style="font-size:14px;font-weight:600;margin-bottom:10px">${LANG==='ru'?'Экспорт теста':'Testni eksport qilish'}</p>
  <div style="display:flex;gap:10px">
    <button class="btn btn-secondary btn-sm" id="export-quiz-json"><i class="fas fa-file-code"></i> JSON</button>
  </div>
</div>`);
  document.getElementById('copy-link-btn')?.addEventListener('click',()=>{
    navigator.clipboard.writeText(url).then(()=>toast(t('shareLinkCopied'),'success'));
  });
  document.getElementById('export-quiz-json')?.addEventListener('click',()=>{
    const data = { config:{ title:quiz.title, description:quiz.description, category:quiz.category, passingScore:quiz.passingScore, timeLimit:quiz.timeLimit, questionTimer:quiz.questionTimer, shuffleQuestions:quiz.shuffleQuestions, shuffleAnswers:quiz.shuffleAnswers, showExplanations:quiz.showExplanations, maxQuestions:quiz.maxQuestions }, questions: quiz.questions };
    downloadJson(data, `${quiz.title}.json`);
  });
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click();
}

// ═══════════════════════════════════════════════════════════════
// QUIZ EDITOR
// ═══════════════════════════════════════════════════════════════
function renderEditor(editId) {
  const titleEl = document.getElementById('topbar-title');
  const actionsEl = document.getElementById('topbar-actions');
  const area = document.getElementById('content-area');
  if (!area) return;

  // Load or create quiz
  if (editId) {
    const found = state.quizzes.find(q=>q.id===editId);
    if (found) state.editQuiz = deepClone(found);
    else state.editQuiz = newQuizTemplate();
  } else {
    state.editQuiz = newQuizTemplate();
  }
  if (state.editQIndex < 0 || state.editQIndex >= state.editQuiz.questions.length) {
    state.editQIndex = state.editQuiz.questions.length > 0 ? 0 : -1;
  }

  if (titleEl) titleEl.textContent = editId ? t('editQuiz') : t('createQuiz');
  if (actionsEl) actionsEl.innerHTML = `
    <button class="btn btn-primary" id="btn-save-quiz"><i class="fas fa-save"></i> ${t('save')}</button>
    <button class="btn btn-secondary" id="btn-import-editor"><i class="fas fa-file-import"></i> ${t('importQuestions')}</button>`;

  area.innerHTML = `<div id="editor-root"></div>`;
  document.getElementById('btn-save-quiz')?.addEventListener('click', saveQuizEditor);
  document.getElementById('btn-import-editor')?.addEventListener('click', showImportModal);
  renderEditorRoot();
}

function newQuizTemplate() {
  return {
    id: genId(),
    title: '',
    description: '',
    category: '',
    passingScore: 60,
    timeLimit: 0,
    questionTimer: 0,
    shuffleQuestions: false,
    shuffleAnswers: false,
    showExplanations: 'end',
    maxQuestions: 0,
    created: Date.now(),
    questions: [],
  };
}

function renderEditorRoot() {
  const root = document.getElementById('editor-root');
  if (!root) return;
  const quiz = state.editQuiz;
  const qs = quiz.questions;

  root.innerHTML = `
<div class="tabs" id="editor-tabs">
  <div class="tab active" data-tab="questions">${LANG==='ru'?'Вопросы':'Savollar'} (${qs.length})</div>
  <div class="tab" data-tab="settings">${t('settings')}</div>
</div>
<div class="tab-panel active" id="tab-questions">
  <div class="editor-layout">
    <div>
      <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
        <button class="btn btn-primary" id="btn-add-q"><i class="fas fa-plus"></i> ${t('addQuestion')}</button>
        <select class="form-control" id="add-q-type" style="width:auto">
          <option value="single">${t('typeSingle')}</option>
          <option value="multiple">${t('typeMultiple')}</option>
          <option value="text">${t('typeText')}</option>
          <option value="truefalse">${t('typeTF')}</option>
          <option value="match">${t('typeMatch')}</option>
        </select>
      </div>
      <div class="questions-list" id="q-list">
        ${qs.length ? qs.map((q,i)=>`
        <div class="question-item${i===state.editQIndex?' active':''}" data-q-idx="${i}">
          <div class="question-item-num">${i+1}</div>
          <div class="question-item-text">${escHtml(q.question||'...')}</div>
          <span class="tag ${getTypeBadgeClass(q.type)} question-item-type">${getTypeLabel(q.type)}</span>
          <button class="btn btn-icon-sm btn-danger" data-del-q="${i}" title="${t('deleteQuestion')}" style="flex-shrink:0"><i class="fas fa-trash"></i></button>
        </div>`).join('') : `<div style="text-align:center;color:var(--text-muted);padding:40px;font-size:14px"><i class="fas fa-circle-info" style="font-size:28px;display:block;margin-bottom:10px;opacity:0.4"></i>${LANG==='ru'?'Нет вопросов. Добавьте первый.':'Savollar yo\'q.'}</div>`}
      </div>
    </div>
    <div>
      <div class="question-edit-panel" id="q-edit-panel">
        ${state.editQIndex>=0 ? renderQuestionEditForm(qs[state.editQIndex], state.editQIndex) : `<div style="text-align:center;color:var(--text-muted);padding:32px;font-size:14px"><i class="fas fa-hand-pointer" style="font-size:28px;display:block;margin-bottom:10px;opacity:0.4"></i>${LANG==='ru'?'Выберите вопрос для редактирования':'Tahrirlash uchun savol tanlang'}</div>`}
      </div>
    </div>
  </div>
</div>
<div class="tab-panel" id="tab-settings">
  <div class="card">
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${t('quizTitle')} *</label>
        <input class="form-control" id="eq-title" value="${escHtml(quiz.title)}" placeholder="${t('quizTitle')}">
      </div>
      <div class="form-group">
        <label class="form-label">${t('category')}</label>
        <input class="form-control" id="eq-category" value="${escHtml(quiz.category||'')}" placeholder="${t('category')}">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">${t('description')}</label>
      <textarea class="form-control" id="eq-description" rows="3">${escHtml(quiz.description||'')}</textarea>
    </div>
    <div class="form-row-3">
      <div class="form-group">
        <label class="form-label">${t('passingScore')} (%)</label>
        <input class="form-control" type="number" id="eq-passing" value="${quiz.passingScore}" min="0" max="100">
      </div>
      <div class="form-group">
        <label class="form-label">${t('totalTimer')} (0=${LANG==='ru'?'без лимита':'cheksiz'})</label>
        <input class="form-control" type="number" id="eq-timelimit" value="${quiz.timeLimit}" min="0">
      </div>
      <div class="form-group">
        <label class="form-label">${t('questionTimer')} (0=${LANG==='ru'?'выкл':'o\'chiq'})</label>
        <input class="form-control" type="number" id="eq-qtimer" value="${quiz.questionTimer}" min="0">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">${t('maxQuestions')} (0=${t('allQuestions')})</label>
      <input class="form-control" type="number" id="eq-maxq" value="${quiz.maxQuestions}" min="0">
    </div>
    <div class="settings-row">
      <div class="settings-row-info"><div class="settings-row-label">${t('shuffleQ')}</div></div>
      <label class="toggle"><input type="checkbox" id="eq-shuffle-q" ${quiz.shuffleQuestions?'checked':''}><span class="toggle-slider"></span></label>
    </div>
    <div class="settings-row">
      <div class="settings-row-info"><div class="settings-row-label">${t('shuffleA')}</div></div>
      <label class="toggle"><input type="checkbox" id="eq-shuffle-a" ${quiz.shuffleAnswers?'checked':''}><span class="toggle-slider"></span></label>
    </div>
    <div class="settings-row">
      <div class="settings-row-info"><div class="settings-row-label">${t('showExpl')}</div></div>
      <select class="form-control" id="eq-expl" style="width:auto">
        <option value="each" ${quiz.showExplanations==='each'?'selected':''}>${t('explAfterEach')}</option>
        <option value="end" ${quiz.showExplanations==='end'?'selected':''}>${t('explAtEnd')}</option>
        <option value="none" ${quiz.showExplanations==='none'?'selected':''}>${t('noExplanation')}</option>
      </select>
    </div>
  </div>
</div>`;

  attachEditorEvents();
}

function renderQuestionEditForm(q, idx) {
  if (!q) return '';
  const opts = q.options || ['','','',''];
  const pairs = q.pairs || [{left:'',right:''},{left:'',right:''}];
  return `
<div style="font-size:13px;font-weight:700;color:var(--text-muted);margin-bottom:12px;text-transform:uppercase">${t('editingQuestion')} #${idx+1}</div>
<div class="form-group">
  <label class="form-label">${t('questionType')}</label>
  <select class="form-control" id="eq-q-type">
    <option value="single" ${q.type==='single'?'selected':''}>${t('typeSingle')}</option>
    <option value="multiple" ${q.type==='multiple'?'selected':''}>${t('typeMultiple')}</option>
    <option value="text" ${q.type==='text'?'selected':''}>${t('typeText')}</option>
    <option value="truefalse" ${q.type==='truefalse'?'selected':''}>${t('typeTF')}</option>
    <option value="match" ${q.type==='match'?'selected':''}>${t('typeMatch')}</option>
  </select>
</div>
<div class="form-group">
  <label class="form-label">${t('question')} *</label>
  <textarea class="form-control" id="eq-q-text" rows="3" placeholder="${t('questionPlaceholder')}">${escHtml(q.question||'')}</textarea>
</div>
<div class="form-group">
  <label class="form-label">${t('image')}</label>
  <input class="form-control" id="eq-q-image" value="${escHtml(q.image||'')}" placeholder="${t('imagePlaceholder')}">
</div>

${q.type==='single'||q.type==='multiple' ? `
<div class="form-group" id="options-group">
  <label class="form-label">${LANG==='ru'?'Варианты ответов (☑ = правильный)':'Javob variantlari (☑ = to\'g\'ri)'}</label>
  <div id="options-list">
    ${opts.map((opt,i)=>`
    <div class="option-edit-row" data-opt-idx="${i}">
      <div class="option-edit-correct ${isCorrectOption(q,opt)?'active':''}" data-opt-val="${escHtml(opt)}" title="${t('correct')}"><i class="fas fa-check"></i></div>
      <input class="form-control option-edit-input" data-opt-inp="${i}" value="${escHtml(opt)}" placeholder="${t('optionPlaceholder')}">
      <button class="btn btn-icon-sm btn-danger" data-del-opt="${i}" title="${t('deleteQuestion')}"><i class="fas fa-times"></i></button>
    </div>`).join('')}
  </div>
  <button class="btn btn-secondary btn-sm" id="btn-add-opt" style="margin-top:8px"><i class="fas fa-plus"></i> ${t('addOption')}</button>
</div>` : ''}

${q.type==='truefalse' ? `
<div class="form-group">
  <label class="form-label">${t('correctAnswer')}</label>
  <div style="display:flex;gap:10px">
    <button class="btn btn-sm ${q.correct==='true'?'btn-success':'btn-secondary'}" id="tf-true"><i class="fas fa-check"></i> ${t('trueOption')}</button>
    <button class="btn btn-sm ${q.correct==='false'?'btn-danger':'btn-secondary'}" id="tf-false"><i class="fas fa-times"></i> ${t('falseOption')}</button>
  </div>
</div>` : ''}

${q.type==='text' ? `
<div class="form-group">
  <label class="form-label">${t('correctAnswer')} (${LANG==='ru'?'через запятую':'vergul bilan ajrating'})</label>
  <input class="form-control" id="eq-text-correct" value="${Array.isArray(q.correct)?q.correct.join(', '):q.correct||''}" placeholder="${t('optionPlaceholder')}">
</div>` : ''}

${q.type==='match' ? `
<div class="form-group" id="pairs-group">
  <label class="form-label">${LANG==='ru'?'Пары (левое → правое)':'Juftlar (chap → o\'ng)'}</label>
  <div id="pairs-list">
    ${pairs.map((p,i)=>`
    <div class="pair-edit-row" data-pair-idx="${i}">
      <input class="form-control" data-pair-left="${i}" value="${escHtml(p.left||'')}" placeholder="${t('leftPair')}">
      <div class="pair-edit-arrow"><i class="fas fa-arrow-right"></i></div>
      <input class="form-control" data-pair-right="${i}" value="${escHtml(p.right||'')}" placeholder="${t('rightPair')}">
      <button class="btn btn-icon-sm btn-danger" data-del-pair="${i}"><i class="fas fa-times"></i></button>
    </div>`).join('')}
  </div>
  <button class="btn btn-secondary btn-sm" id="btn-add-pair" style="margin-top:8px"><i class="fas fa-plus"></i> ${t('addPair')}</button>
</div>` : ''}

<div class="form-group">
  <label class="form-label">${t('explanation')}</label>
  <textarea class="form-control" id="eq-q-expl" rows="2">${escHtml(q.explanation||'')}</textarea>
</div>
<div style="display:flex;gap:8px;margin-top:4px">
  <button class="btn btn-primary btn-sm" id="btn-apply-q"><i class="fas fa-save"></i> ${t('save')}</button>
</div>`;
}

function isCorrectOption(q, opt) {
  if (!opt) return false;
  if (Array.isArray(q.correct)) return q.correct.includes(opt);
  return q.correct === opt;
}

function attachEditorEvents() {
  // Tabs
  document.querySelectorAll('#editor-tabs .tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('#editor-tabs .tab').forEach(t2=>t2.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`)?.classList.add('active');
    });
  });
  // Add question
  document.getElementById('btn-add-q')?.addEventListener('click',()=>{
    const type = document.getElementById('add-q-type')?.value || 'single';
    addQuestion(type);
  });
  // Select question
  document.querySelectorAll('[data-q-idx]').forEach(el=>{
    el.addEventListener('click',e=>{
      if (e.target.closest('[data-del-q]')) return;
      saveCurrentQuestionForm();
      state.editQIndex = parseInt(el.dataset.qIdx);
      renderEditorRoot();
    });
  });
  // Delete question
  document.querySelectorAll('[data-del-q]').forEach(el=>{
    el.addEventListener('click',e=>{
      e.stopPropagation();
      const idx = parseInt(el.dataset.delQ);
      state.editQuiz.questions.splice(idx,1);
      if (state.editQIndex >= state.editQuiz.questions.length) state.editQIndex = state.editQuiz.questions.length-1;
      renderEditorRoot();
    });
  });
  // Apply question
  document.getElementById('btn-apply-q')?.addEventListener('click',()=>{
    saveCurrentQuestionForm();
    renderEditorRoot();
    toast(t('savedSuccess'),'success');
  });
  // Add option
  document.getElementById('btn-add-opt')?.addEventListener('click',()=>{
    saveCurrentQuestionForm();
    const q = state.editQuiz.questions[state.editQIndex];
    if (q) { q.options = q.options||[]; q.options.push(''); }
    renderEditorRoot();
  });
  // Delete option
  document.querySelectorAll('[data-del-opt]').forEach(el=>{
    el.addEventListener('click',()=>{
      saveCurrentQuestionForm();
      const q = state.editQuiz.questions[state.editQIndex];
      if (!q) return;
      const idx = parseInt(el.dataset.delOpt);
      const val = q.options[idx];
      q.options.splice(idx,1);
      // Remove from correct if needed
      if (Array.isArray(q.correct)) q.correct = q.correct.filter(c=>c!==val);
      else if (q.correct===val) q.correct='';
      renderEditorRoot();
    });
  });
  // Toggle correct option
  document.querySelectorAll('.option-edit-correct').forEach(el=>{
    el.addEventListener('click',()=>{
      const q = state.editQuiz.questions[state.editQIndex];
      if (!q) return;
      saveCurrentQuestionForm();
      const val = document.querySelector(`[data-opt-inp="${el.closest('[data-opt-idx]').dataset.optIdx}"]`)?.value || el.dataset.optVal;
      if (!val.trim()) return;
      if (q.type==='single') { q.correct = val; }
      else {
        if (!Array.isArray(q.correct)) q.correct = q.correct?[q.correct]:[];
        if (q.correct.includes(val)) q.correct=q.correct.filter(c=>c!==val);
        else q.correct.push(val);
      }
      renderEditorRoot();
    });
  });
  // True/False
  document.getElementById('tf-true')?.addEventListener('click',()=>{
    const q = state.editQuiz.questions[state.editQIndex];
    if (q) { q.correct='true'; renderEditorRoot(); }
  });
  document.getElementById('tf-false')?.addEventListener('click',()=>{
    const q = state.editQuiz.questions[state.editQIndex];
    if (q) { q.correct='false'; renderEditorRoot(); }
  });
  // Add pair
  document.getElementById('btn-add-pair')?.addEventListener('click',()=>{
    saveCurrentQuestionForm();
    const q = state.editQuiz.questions[state.editQIndex];
    if (q) { q.pairs=q.pairs||[]; q.pairs.push({left:'',right:''}); }
    renderEditorRoot();
  });
  // Delete pair
  document.querySelectorAll('[data-del-pair]').forEach(el=>{
    el.addEventListener('click',()=>{
      saveCurrentQuestionForm();
      const q = state.editQuiz.questions[state.editQIndex];
      if (!q?.pairs) return;
      q.pairs.splice(parseInt(el.dataset.delPair),1);
      renderEditorRoot();
    });
  });
  // Type change
  document.getElementById('eq-q-type')?.addEventListener('change', ()=>{
    saveCurrentQuestionForm(true);
    const q = state.editQuiz.questions[state.editQIndex];
    const type = document.getElementById('eq-q-type')?.value;
    if (!q||!type) return;
    q.type=type;
    if (type==='single'||type==='multiple') { if (!q.options?.length) q.options=['','','','']; }
    if (type==='truefalse') { q.correct='true'; delete q.options; }
    if (type==='text') { q.correct=''; delete q.options; }
    if (type==='match') { if (!q.pairs?.length) q.pairs=[{left:'',right:''},{left:'',right:''}]; delete q.options; }
    renderEditorRoot();
  });
}

function saveCurrentQuestionForm(typeOnly=false) {
  const q = state.editQuiz?.questions[state.editQIndex];
  if (!q) return;
  const qText = document.getElementById('eq-q-text')?.value;
  const qImg = document.getElementById('eq-q-image')?.value;
  const qExpl = document.getElementById('eq-q-expl')?.value;
  const qType = document.getElementById('eq-q-type')?.value;
  if (qType) q.type = qType;
  if (typeOnly) return;
  if (qText !== undefined) q.question = qText;
  if (qImg !== undefined) q.image = qImg;
  if (qExpl !== undefined) q.explanation = qExpl;
  // Collect options
  if (q.type==='single'||q.type==='multiple') {
    const inputs = document.querySelectorAll('[data-opt-inp]');
    if (inputs.length) {
      q.options = [...inputs].map(inp=>inp.value);
      // Correct stays as set
    }
  }
  if (q.type==='text') {
    const val = document.getElementById('eq-text-correct')?.value||'';
    q.correct = val.split(',').map(s=>s.trim()).filter(Boolean);
    if (q.correct.length===1) q.correct = q.correct[0];
  }
  if (q.type==='match') {
    const lefts = document.querySelectorAll('[data-pair-left]');
    const rights = document.querySelectorAll('[data-pair-right]');
    q.pairs = [...lefts].map((l,i)=>({left:l.value,right:rights[i]?.value||''}));
  }
}

function saveEditorSettings() {
  const quiz = state.editQuiz;
  const title = document.getElementById('eq-title')?.value.trim();
  const cat = document.getElementById('eq-category')?.value.trim();
  const desc = document.getElementById('eq-description')?.value.trim();
  const passing = parseInt(document.getElementById('eq-passing')?.value||'60');
  const tl = parseInt(document.getElementById('eq-timelimit')?.value||'0');
  const qt = parseInt(document.getElementById('eq-qtimer')?.value||'0');
  const mq = parseInt(document.getElementById('eq-maxq')?.value||'0');
  const sq = document.getElementById('eq-shuffle-q')?.checked;
  const sa = document.getElementById('eq-shuffle-a')?.checked;
  const expl = document.getElementById('eq-expl')?.value;
  if (title !== undefined) quiz.title = title;
  if (cat !== undefined) quiz.category = cat;
  if (desc !== undefined) quiz.description = desc;
  quiz.passingScore = isNaN(passing)?60:Math.min(100,Math.max(0,passing));
  quiz.timeLimit = isNaN(tl)?0:Math.max(0,tl);
  quiz.questionTimer = isNaN(qt)?0:Math.max(0,qt);
  quiz.maxQuestions = isNaN(mq)?0:Math.max(0,mq);
  if (sq !== undefined) quiz.shuffleQuestions = sq;
  if (sa !== undefined) quiz.shuffleAnswers = sa;
  if (expl) quiz.showExplanations = expl;
}

function addQuestion(type) {
  const newQ = {
    id: genId(),
    type,
    question: '',
    explanation: '',
    image: '',
  };
  if (type==='single'||type==='multiple') { newQ.options=['','','',''];  newQ.correct = type==='multiple'?[]:''; }
  else if (type==='truefalse') { newQ.correct='true'; }
  else if (type==='text') { newQ.correct=''; }
  else if (type==='match') { newQ.pairs=[{left:'',right:''},{left:'',right:''}]; newQ.correct='auto'; }
  state.editQuiz.questions.push(newQ);
  state.editQIndex = state.editQuiz.questions.length-1;
  renderEditorRoot();
}

function saveQuizEditor() {
  saveCurrentQuestionForm();
  saveEditorSettings();
  const quiz = state.editQuiz;
  if (!quiz.title) { toast(t('titleRequired'), 'error'); return; }
  if (!quiz.questions.length) { toast(t('minOneQuestion'), 'error'); return; }
  const idx = state.quizzes.findIndex(q=>q.id===quiz.id);
  if (idx>=0) state.quizzes[idx] = quiz;
  else state.quizzes.unshift(quiz);
  saveStorage(STORAGE.QUIZZES, state.quizzes);
  toast(t('savedSuccess'), 'success');
  navigate('my-quizzes');
}

// ═══════════════════════════════════════════════════════════════
// START / TAKE QUIZ
// ═══════════════════════════════════════════════════════════════
function startQuiz(id, overrides={}) {
  const quiz = state.quizzes.find(q=>q.id===id);
  if (!quiz) return;
  // Show start screen first
  showStartScreen(quiz, overrides);
}

function showStartScreen(quiz, overrides={}) {
  showModal(`
<div class="modal-header">
  <i class="fas fa-play-circle" style="color:var(--primary);font-size:20px"></i>
  <span class="modal-title">${escHtml(quiz.title)}</span>
  <button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button>
</div>
<div class="modal-body">
  ${quiz.description?`<p style="color:var(--text-muted);margin-bottom:16px">${escHtml(quiz.description)}</p>`:''}
  <div class="grid-2" style="gap:12px;margin-bottom:20px">
    <div class="stat-card card-sm"><div class="stat-icon stat-icon-blue"><i class="fas fa-circle-question"></i></div><div><div class="stat-value" style="font-size:20px">${quiz.questions.length}</div><div class="stat-label">${t('questions')}</div></div></div>
    <div class="stat-card card-sm"><div class="stat-icon stat-icon-orange"><i class="fas fa-percent"></i></div><div><div class="stat-value" style="font-size:20px">${quiz.passingScore}%</div><div class="stat-label">${t('passingScore')}</div></div></div>
    ${quiz.timeLimit?`<div class="stat-card card-sm"><div class="stat-icon stat-icon-purple"><i class="fas fa-stopwatch"></i></div><div><div class="stat-value" style="font-size:20px">${quiz.timeLimit}</div><div class="stat-label">${t('min')}</div></div></div>`:''}
  </div>

  <div class="form-group">
    <label class="form-label">${t('maxQuestions')} (0 = ${t('allQuestions')})</label>
    <div class="count-selector" id="count-selector">
      <div class="count-btn ${(overrides.maxQuestions||quiz.maxQuestions||0)===0?'active':''}" data-count="0">${t('allQuestions')}</div>
      ${[5,10,15,20].filter(n=>n<=quiz.questions.length).map(n=>`<div class="count-btn ${(overrides.maxQuestions||0)===n?'active':''}" data-count="${n}">${n}</div>`).join('')}
    </div>
  </div>
</div>
<div class="modal-footer">
  <button class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
  <button class="btn btn-primary btn-lg" id="btn-start-now"><i class="fas fa-play"></i> ${t('startQuiz')}</button>
</div>`);

  let selectedCount = overrides.maxQuestions || quiz.maxQuestions || 0;
  document.querySelectorAll('.count-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.count-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      selectedCount = parseInt(btn.dataset.count);
    });
  });
  document.getElementById('btn-start-now')?.addEventListener('click',()=>{
    closeModal();
    launchQuiz(quiz, { ...overrides, maxQuestions: selectedCount });
  });
}

function launchQuiz(quiz, overrides={}) {
  const maxQ = overrides.maxQuestions || quiz.maxQuestions || 0;
  let order = quiz.questions.map((_,i)=>i);
  if (quiz.shuffleQuestions) order = shuffle(order);
  if (maxQ > 0) order = order.slice(0, maxQ);

  state.currentQuiz = quiz;
  state.questionOrder = order;
  state.currentQuestion = 0;
  state.answers = {};
  state.quizStartTime = Date.now();
  clearInterval(state.timerInterval);
  clearInterval(state.questionTimerInterval);
  state.timeLeft = (quiz.timeLimit||0)*60;
  state.totalTime = state.timeLeft;
  navigate('take-quiz');
}

function renderTakeQuiz() {
  const quiz = state.currentQuiz;
  const order = state.questionOrder;
  const idx = state.currentQuestion;
  const qIdx = order[idx];
  const q = quiz.questions[qIdx];
  const total = order.length;
  const pct = Math.round((idx/total)*100);

  const options = (quiz.shuffleAnswers && (q.type==='single'||q.type==='multiple')) ? shuffle(q.options) : q.options;

  return `
<div id="quiz-page">
  <div class="quiz-container">
    <div class="quiz-header-bar">
      <button class="btn btn-secondary btn-sm" id="btn-quiz-back"><i class="fas fa-arrow-left"></i></button>
      <div class="quiz-progress-bar"><div class="quiz-progress-bar-fill" id="prog-fill" style="width:${pct}%"></div></div>
      <div class="quiz-counter">${idx+1} / ${total}</div>
      ${quiz.timeLimit?`<div class="quiz-timer-display" id="total-timer"><i class="fas fa-stopwatch"></i> <span id="timer-val">${formatTime(state.timeLeft)}</span></div>`:''}
      ${quiz.questionTimer?`<div class="quiz-timer-display" id="q-timer-display" style="background:var(--warning-light);color:var(--warning)"><i class="fas fa-hourglass-half"></i> <span id="q-timer-val">${quiz.questionTimer}s</span></div>`:''}
    </div>

    <div class="question-card" id="question-card">
      <div class="question-type-badge"><span class="tag ${getTypeBadgeClass(q.type)}">${getTypeLabel(q.type)}</span></div>
      ${q.image?`<img src="${escHtml(q.image)}" class="question-image" alt="question image" onerror="this.style.display='none'">`:''}
      <div class="question-text">${escHtml(q.question)}</div>
      ${renderAnswerInput(q, options, state.answers[idx])}
    </div>

    <div class="quiz-nav">
      <button class="btn btn-secondary" id="btn-prev" ${idx===0?'disabled':''}><i class="fas fa-chevron-left"></i> ${t('back')}</button>
      <div class="spacer"></div>
      <button class="btn btn-secondary" id="btn-skip">${t('skip')}</button>
      ${idx<total-1
        ? `<button class="btn btn-primary" id="btn-next">${t('next')} <i class="fas fa-chevron-right"></i></button>`
        : `<button class="btn btn-success" id="btn-finish"><i class="fas fa-check"></i> ${t('finish')}</button>`}
    </div>

    <div class="q-nav-dots">${order.map((_,i)=>{
      const ans = state.answers[i];
      const isSkip = ans===undefined || ans===null || ans==='' || (Array.isArray(ans)&&!ans.length);
      return `<div class="q-dot${isSkip?'':' answered'}${i===idx?' current':''}" data-goto="${i}">${i+1}</div>`;
    }).join('')}</div>
  </div>
</div>
<div class="toast-wrap" id="toast-wrap"></div>`;
}

function renderAnswerInput(q, options, saved) {
  if (q.type==='single') {
    return `<div class="options-list">${(options||[]).map((opt,i)=>`
    <div class="option-item${saved===opt?' selected':''}" data-opt="${escHtml(opt)}">
      <div class="option-marker">${String.fromCharCode(65+i)}</div>
      <div class="option-text">${escHtml(opt)}</div>
      ${saved===opt?'<i class="fas fa-check option-check" style="color:var(--primary)"></i>':''}
    </div>`).join('')}</div>`;
  }
  if (q.type==='multiple') {
    const sel = Array.isArray(saved)?saved:[];
    return `<div style="font-size:13px;color:var(--text-muted);margin-bottom:10px"><i class="fas fa-info-circle"></i> ${LANG==='ru'?'Выберите все правильные ответы':'Barcha to\'g\'ri javoblarni tanlang'}</div>
    <div class="options-list">${(options||[]).map((opt,i)=>`
    <div class="option-item${sel.includes(opt)?' selected':''}" data-opt="${escHtml(opt)}" data-multi="1">
      <div class="option-marker" style="border-radius:4px">${sel.includes(opt)?'<i class="fas fa-check"></i>':String.fromCharCode(65+i)}</div>
      <div class="option-text">${escHtml(opt)}</div>
    </div>`).join('')}</div>`;
  }
  if (q.type==='truefalse') {
    return `<div class="truefalse-options">
    <div class="tf-option${saved==='true'?' selected-true':''}" data-tf="true"><i class="fas fa-check" style="margin-right:8px"></i>${t('trueOption')}</div>
    <div class="tf-option${saved==='false'?' selected-false':''}" data-tf="false"><i class="fas fa-times" style="margin-right:8px"></i>${t('falseOption')}</div>
    </div>`;
  }
  if (q.type==='text') {
    return `<input class="text-answer-input" id="text-ans" type="text" value="${escHtml(saved||'')}" placeholder="${LANG==='ru'?'Введите ответ…':'Javobni kiriting…'}" autocomplete="off">`;
  }
  if (q.type==='match') {
    const pairs = q.pairs||[];
    const rightItems = shuffle(pairs.map(p=>p.right));
    const savedMatch = (typeof saved==='object'&&saved!==null&&!Array.isArray(saved)) ? saved : {};
    return `
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px"><i class="fas fa-info-circle"></i> ${LANG==='ru'?'Сопоставьте каждый элемент слева с правым':'Har bir chap elementni o\'ng bilan moslashtiring'}</div>
    <div class="match-container">
      <div class="match-col">
        <div class="match-col-title">${t('leftPair')}</div>
        ${pairs.map((p,i)=>`
        <div class="match-left-item match-item">${escHtml(p.left)}</div>`).join('')}
      </div>
      <div class="match-col">
        <div class="match-col-title">${t('rightPair')}</div>
        ${pairs.map((p,i)=>`
        <select class="match-select${savedMatch[i]?'  filled':''}" data-match-idx="${i}">
          <option value="">${LANG==='ru'?'Выберите…':'Tanlang…'}</option>
          ${rightItems.map(r=>`<option value="${escHtml(r)}" ${savedMatch[i]===r?'selected':''}>${escHtml(r)}</option>`).join('')}
        </select>`).join('')}
      </div>
    </div>`;
  }
  return '';
}

function attachQuizEvents() {
  // Back to quizzes
  document.getElementById('btn-quiz-back')?.addEventListener('click',()=>{
    clearInterval(state.timerInterval);
    clearInterval(state.questionTimerInterval);
    navigate('my-quizzes');
  });
  // Select option
  document.querySelectorAll('.option-item:not([data-multi])').forEach(el=>{
    el.addEventListener('click',()=>{
      document.querySelectorAll('.option-item').forEach(o=>o.classList.remove('selected'));
      el.classList.add('selected');
      state.answers[state.currentQuestion] = el.dataset.opt;
      autoAdvance();
    });
  });
  // Multi select
  document.querySelectorAll('[data-multi]').forEach(el=>{
    el.addEventListener('click',()=>{
      const opt = el.dataset.opt;
      let sel = state.answers[state.currentQuestion];
      if (!Array.isArray(sel)) sel = [];
      if (sel.includes(opt)) sel=sel.filter(s=>s!==opt);
      else sel.push(opt);
      state.answers[state.currentQuestion] = sel;
      el.classList.toggle('selected', sel.includes(opt));
      const marker = el.querySelector('.option-marker');
      if (marker) {
        if (sel.includes(opt)) marker.innerHTML = '<i class="fas fa-check"></i>';
        else marker.textContent = String.fromCharCode(65+[...document.querySelectorAll('[data-multi]')].indexOf(el));
      }
    });
  });
  // True/False
  document.querySelectorAll('[data-tf]').forEach(el=>{
    el.addEventListener('click',()=>{
      document.querySelectorAll('[data-tf]').forEach(e=>{e.classList.remove('selected-true','selected-false');});
      const val = el.dataset.tf;
      el.classList.add(val==='true'?'selected-true':'selected-false');
      state.answers[state.currentQuestion] = val;
      autoAdvance();
    });
  });
  // Text
  document.getElementById('text-ans')?.addEventListener('input',e=>{
    state.answers[state.currentQuestion] = e.target.value;
  });
  // Match
  document.querySelectorAll('.match-select').forEach(sel=>{
    sel.addEventListener('change',()=>{
      const idx = state.currentQuestion;
      if (typeof state.answers[idx]!=='object'||Array.isArray(state.answers[idx])) state.answers[idx]={};
      state.answers[idx][sel.dataset.matchIdx] = sel.value;
      sel.classList.toggle('filled', !!sel.value);
    });
  });
  // Nav
  document.getElementById('btn-prev')?.addEventListener('click',()=>goToQuestion(state.currentQuestion-1));
  document.getElementById('btn-next')?.addEventListener('click',()=>goToQuestion(state.currentQuestion+1));
  document.getElementById('btn-skip')?.addEventListener('click',()=>{
    state.answers[state.currentQuestion] = null;
    goToQuestion(state.currentQuestion+1<state.questionOrder.length ? state.currentQuestion+1 : state.currentQuestion);
  });
  document.getElementById('btn-finish')?.addEventListener('click',()=>finishQuiz());
  document.querySelectorAll('[data-goto]').forEach(el=>{
    el.addEventListener('click',()=>goToQuestion(parseInt(el.dataset.goto)));
  });
}

function autoAdvance() {
  const quiz = state.currentQuiz;
  if (quiz.showExplanations==='each') {
    // Show explanation before advancing
    const order = state.questionOrder;
    const qIdx = order[state.currentQuestion];
    const q = quiz.questions[qIdx];
    if (q.explanation) showExplanationOverlay(q, ()=>goToQuestion(state.currentQuestion+1));
    else if (state.currentQuestion<order.length-1) setTimeout(()=>goToQuestion(state.currentQuestion+1),400);
    return;
  }
}

function showExplanationOverlay(q, onContinue) {
  // Inline explanation box
  const card = document.getElementById('question-card');
  if (!card) { onContinue(); return; }
  let box = document.getElementById('expl-box');
  if (!box) {
    box = document.createElement('div');
    box.id = 'expl-box';
    box.className = 'explanation-box';
    card.appendChild(box);
  }
  box.innerHTML = `<strong><i class="fas fa-lightbulb"></i> ${t('explanation')}:</strong> ${escHtml(q.explanation)} <button class="btn btn-sm btn-primary" id="expl-continue" style="margin-left:12px">${t('next')} <i class="fas fa-arrow-right"></i></button>`;
  document.getElementById('expl-continue')?.addEventListener('click', onContinue);
}

function goToQuestion(idx) {
  const total = state.questionOrder.length;
  if (idx<0||idx>=total) return;
  clearInterval(state.questionTimerInterval);
  state.currentQuestion = idx;
  const qPage = document.getElementById('quiz-page');
  if (qPage) {
    qPage.outerHTML = '';
    const newHtml = renderTakeQuiz();
    document.getElementById('app').innerHTML = newHtml.replace('<div class="toast-wrap" id="toast-wrap"></div>','');
    const tw = document.createElement('div');
    tw.className='toast-wrap';tw.id='toast-wrap';
    document.getElementById('app').appendChild(tw);
    attachQuizEvents();
    startQuestionTimer();
  }
}

function startQuizTimer() {
  const quiz = state.currentQuiz;
  if (!quiz?.timeLimit) return;
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(()=>{
    state.timeLeft--;
    const el = document.getElementById('timer-val');
    if (el) el.textContent = formatTime(state.timeLeft);
    const td = document.getElementById('total-timer');
    if (state.timeLeft <= 30 && td) td.classList.add('warning');
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function startQuestionTimer() {
  const quiz = state.currentQuiz;
  if (!quiz?.questionTimer) return;
  clearInterval(state.questionTimerInterval);
  state.questionTimeLeft = quiz.questionTimer;
  const el = document.getElementById('q-timer-val');
  if (el) el.textContent = `${state.questionTimeLeft}s`;
  state.questionTimerInterval = setInterval(()=>{
    state.questionTimeLeft--;
    const e = document.getElementById('q-timer-val');
    if (e) e.textContent = `${state.questionTimeLeft}s`;
    const disp = document.getElementById('q-timer-display');
    if (state.questionTimeLeft <= 5 && disp) disp.classList.add('warning');
    if (state.questionTimeLeft <= 0) {
      clearInterval(state.questionTimerInterval);
      const next = state.currentQuestion+1;
      if (next < state.questionOrder.length) goToQuestion(next);
      else finishQuiz();
    }
  }, 1000);
}

function finishQuiz() {
  clearInterval(state.timerInterval);
  clearInterval(state.questionTimerInterval);
  const duration = Math.round((Date.now()-state.quizStartTime)/1000);
  const quiz = state.currentQuiz;
  const order = state.questionOrder;

  let correct=0, wrong=0, skipped=0;
  const details = {};

  for (let i=0;i<order.length;i++) {
    const qIdx = order[i];
    const q = quiz.questions[qIdx];
    const ans = state.answers[i];
    let isCorrect = false;
    let isSkip = ans===undefined||ans===null||ans===''||(Array.isArray(ans)&&!ans.length);

    if (!isSkip) {
      if (q.type==='single'||q.type==='truefalse') isCorrect = ans===q.correct;
      else if (q.type==='multiple') {
        const a=[...(Array.isArray(ans)?ans:[])].sort();
        const c=[...(Array.isArray(q.correct)?q.correct:[q.correct])].sort();
        isCorrect = JSON.stringify(a)===JSON.stringify(c);
      }
      else if (q.type==='text') {
        const corr = Array.isArray(q.correct)?q.correct:[q.correct];
        isCorrect = corr.some(c=>c.toLowerCase().trim()===String(ans).toLowerCase().trim());
      }
      else if (q.type==='match') {
        if (typeof ans==='object'&&!Array.isArray(ans)&&q.pairs) {
          isCorrect = q.pairs.every((p,pi)=>ans[pi]===p.right);
        }
      }
    }

    if (isSkip) skipped++;
    else if (isCorrect) correct++;
    else wrong++;

    details[i] = { isCorrect, isSkip, userAnswer: ans, question: q, questionIdx: qIdx };
  }

  const total = order.length;
  const pct = total>0 ? Math.round((correct/total)*100) : 0;
  const passed = pct >= quiz.passingScore;

  const histEntry = {
    id: genId(),
    quizId: quiz.id,
    quizTitle: quiz.title,
    date: Date.now(),
    duration,
    correct, wrong, skipped, total, percent: pct, passed,
  };
  state.history.unshift(histEntry);
  saveStorage(STORAGE.HISTORY, state.history);

  state.lastResult = { correct, wrong, skipped, total, percent: pct, passed, duration, details, quiz };
  navigate('results');
}

// ═══════════════════════════════════════════════════════════════
// RESULTS PAGE
// ═══════════════════════════════════════════════════════════════
function renderResults() {
  const r = state.lastResult;
  if (!r) return '<div style="padding:40px;text-align:center">No results</div>';
  const {correct,wrong,skipped,total,percent,passed,duration,details,quiz} = r;
  const circumference = 2*Math.PI*54;
  const offset = circumference - (percent/100)*circumference;

  return `
<div id="results-page">
  <div class="results-container">
    <div class="results-hero">
      <div class="score-ring-wrap">
        <svg class="score-ring-svg" width="140" height="140" viewBox="0 0 140 140">
          <circle class="score-ring-bg" cx="70" cy="70" r="54"/>
          <circle class="score-ring-fill ${passed?'pass':'fail'}" id="ring-fill" cx="70" cy="70" r="54"
            stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}"/>
        </svg>
        <div class="score-ring-text">
          <span class="score-ring-pct" id="score-pct">0%</span>
          <span class="score-ring-lbl">${t('score')}</span>
        </div>
      </div>
      <div class="results-title">${passed?'🎉 '+t('passed'):t('failed')}</div>
      <div class="results-subtitle">${LANG==='ru'?`Проходной балл: ${quiz.passingScore}% | Время: ${formatTime(duration)}`:`O'tish bali: ${quiz.passingScore}% | Davomiylik: ${formatTime(duration)}`}</div>
      <div class="results-stats">
        <div class="result-stat"><div class="result-stat-val correct-color" id="cnt-correct">0</div><div class="result-stat-lbl">${t('correct')}</div></div>
        <div class="result-stat"><div class="result-stat-val wrong-color" id="cnt-wrong">0</div><div class="result-stat-lbl">${t('wrong')}</div></div>
        <div class="result-stat"><div class="result-stat-val skip-color">${skipped}</div><div class="result-stat-lbl">${t('skipped')}</div></div>
      </div>
    </div>

    ${passed?`
    <div class="certificate">
      <div class="cert-seal"><i class="fas fa-trophy"></i></div>
      <div class="cert-title">${t('certificate')}</div>
      <div class="cert-subtitle">${LANG==='ru'?'Подтверждает успешное прохождение теста':'Test muvaffaqiyatli topshirilganligini tasdiqlaydi'}</div>
      <div class="cert-name">${escHtml(quiz.title)}</div>
      <div class="cert-details">${t('score')}: ${percent}% | ${new Date().toLocaleDateString(LANG==='ru'?'ru-RU':'uz-UZ')}</div>
    </div>`:'' }

    <div class="results-actions">
      <button class="btn btn-primary btn-lg" id="btn-retry"><i class="fas fa-rotate"></i> ${t('restart')}</button>
      <button class="btn btn-secondary" id="btn-review"><i class="fas fa-list-check"></i> ${t('viewAnswers')}</button>
      <button class="btn btn-secondary" id="btn-export-pdf"><i class="fas fa-file-pdf"></i> PDF</button>
      <button class="btn btn-secondary" id="btn-export-csv"><i class="fas fa-file-csv"></i> CSV</button>
      <button class="btn btn-secondary" id="btn-back-home"><i class="fas fa-house"></i> ${t('home')}</button>
    </div>

    <div id="review-section" style="display:none">
      <div class="section-header"><div class="section-title">${t('viewAnswers')}</div></div>
      ${Object.entries(details).map(([i,d])=>{
        const icon = d.isSkip?'fa-minus':'fa-check';
        const cls = d.isSkip?'review-status-skip':(d.isCorrect?'review-status-correct':'review-status-wrong');
        const iconCls = d.isSkip?'':'';
        const userAns = formatAnswer(d.userAnswer, d.question);
        const corrAns = formatAnswer(d.question.correct, d.question);
        return `
        <div class="review-card">
          <div class="review-card-header" data-review-toggle="${i}">
            <div class="review-status-icon ${cls}"><i class="fas ${d.isSkip?'fa-minus':d.isCorrect?'fa-check':'fa-times'}"></i></div>
            <div class="review-q-text">${parseInt(i)+1}. ${escHtml(d.question.question)}</div>
            <i class="fas fa-chevron-down" style="color:var(--text-muted);font-size:12px"></i>
          </div>
          <div class="review-card-body" id="review-body-${i}">
            <div class="review-answer-row"><span class="lbl">${t('yourAnswer')}:</span><span class="${d.isCorrect?'val-correct':'val-wrong'}">${userAns}</span></div>
            ${!d.isCorrect&&!d.isSkip?`<div class="review-answer-row"><span class="lbl">${t('correctAnswer')}:</span><span class="val-correct">${corrAns}</span></div>`:''}
            ${d.question.explanation?`<div class="explanation-box"><strong><i class="fas fa-lightbulb"></i> ${t('explanation')}:</strong> ${escHtml(d.question.explanation)}</div>`:''}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>
</div>
<div class="toast-wrap" id="toast-wrap"></div>`;
}

function formatAnswer(ans, q) {
  if (ans===null||ans===undefined||ans==='') return `<i>${LANG==='ru'?'—':'—'}</i>`;
  if (q.type==='truefalse') return ans==='true'?t('trueOption'):t('falseOption');
  if (q.type==='match' && typeof ans==='object' && !Array.isArray(ans) && q.pairs) {
    return q.pairs.map((p,i)=>`${escHtml(p.left)} → ${escHtml(ans[i]||'?')}`).join(', ');
  }
  if (Array.isArray(ans)) return ans.map(escHtml).join(', ');
  return escHtml(String(ans));
}

function attachResultsEvents() {
  document.getElementById('btn-retry')?.addEventListener('click',()=>{
    if (state.lastResult?.quiz) {
      closeModal();
      startQuiz(state.lastResult.quiz.id);
    }
  });
  document.getElementById('btn-back-home')?.addEventListener('click',()=>navigate('home'));
  document.getElementById('btn-review')?.addEventListener('click',()=>{
    const sec = document.getElementById('review-section');
    if (sec) sec.style.display = sec.style.display==='none'?'block':'none';
  });
  document.querySelectorAll('[data-review-toggle]').forEach(el=>{
    el.addEventListener('click',()=>{
      const body = document.getElementById(`review-body-${el.dataset.reviewToggle}`);
      if (body) body.classList.toggle('open');
    });
  });
  document.getElementById('btn-export-pdf')?.addEventListener('click', exportResultsPDF);
  document.getElementById('btn-export-csv')?.addEventListener('click', exportResultsCSV);
}

function animateScore() {
  const r = state.lastResult;
  if (!r) return;
  const {percent,correct,wrong} = r;
  const circumference = 2*Math.PI*54;
  const offset = circumference - (percent/100)*circumference;
  setTimeout(()=>{
    const fill = document.getElementById('ring-fill');
    if (fill) fill.style.strokeDashoffset = offset;
    animateCounter('#score-pct', 0, percent, '%', 1200);
    animateCounter('#cnt-correct', 0, correct, '', 1000);
    animateCounter('#cnt-wrong', 0, wrong, '', 1000);
  }, 100);
}
function animateCounter(sel, from, to, suffix, dur) {
  const el = document.querySelector(sel);
  if (!el) return;
  const start = performance.now();
  const frame = (now) => {
    const p = Math.min((now-start)/dur, 1);
    const ease = 1-Math.pow(1-p,3);
    el.textContent = Math.round(from+(to-from)*ease)+suffix;
    if (p<1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

// ═══════════════════════════════════════════════════════════════
// HISTORY
// ═══════════════════════════════════════════════════════════════
function renderHistory() {
  const area = document.getElementById('content-area');
  const titleEl = document.getElementById('topbar-title');
  const actionsEl = document.getElementById('topbar-actions');
  if (!area) return;
  if (titleEl) titleEl.textContent = t('history');
  if (actionsEl) actionsEl.innerHTML = `
    <button class="btn btn-secondary" id="btn-export-hist-csv"><i class="fas fa-file-csv"></i> CSV</button>
    <button class="btn btn-secondary" id="btn-export-hist-excel"><i class="fas fa-file-excel"></i> Excel</button>
    <button class="btn btn-danger" id="btn-clear-hist"><i class="fas fa-trash"></i> ${LANG==='ru'?'Очистить':'Tozalash'}</button>`;

  const h = state.history;
  area.innerHTML = `
<div class="card" style="margin-bottom:20px">
  <div class="grid-4">
    <div class="stat-card card-sm"><div class="stat-icon stat-icon-blue"><i class="fas fa-rotate"></i></div><div><div class="stat-value">${h.length}</div><div class="stat-label">${t('totalAttempts')}</div></div></div>
    <div class="stat-card card-sm"><div class="stat-icon stat-icon-green"><i class="fas fa-check"></i></div><div><div class="stat-value">${h.filter(x=>x.passed).length}</div><div class="stat-label">${LANG==='ru'?'Сдано':'Topshirilgan'}</div></div></div>
    <div class="stat-card card-sm"><div class="stat-icon stat-icon-orange"><i class="fas fa-percent"></i></div><div><div class="stat-value">${h.length?Math.round(h.reduce((s,x)=>s+x.percent,0)/h.length):0}%</div><div class="stat-label">${t('avgScore')}</div></div></div>
    <div class="stat-card card-sm"><div class="stat-icon stat-icon-purple"><i class="fas fa-clock"></i></div><div><div class="stat-value">${h.length?formatTime(Math.round(h.reduce((s,x)=>s+x.duration,0)/h.length)):0}</div><div class="stat-label">${LANG==='ru'?'Среднее время':'O\'rtacha vaqt'}</div></div></div>
  </div>
</div>

${h.length ? `
<div class="card">
  <div style="overflow-x:auto">
  <table class="history-table">
    <thead><tr>
      <th>#</th><th>${t('quizTitle')}</th><th>${t('score')}</th><th>${t('correct')}</th><th>${t('wrong')}</th><th>${t('duration')}</th><th>${t('created')}</th><th></th>
    </tr></thead>
    <tbody>
      ${h.map((e,i)=>`
      <tr>
        <td>${i+1}</td>
        <td><b>${escHtml(e.quizTitle)}</b></td>
        <td><span class="badge ${e.passed?'badge-success':'badge-danger'}">${e.percent}%</span></td>
        <td style="color:var(--success)">${e.correct}</td>
        <td style="color:var(--danger)">${e.wrong}</td>
        <td>${formatTime(e.duration)}</td>
        <td style="color:var(--text-muted);font-size:12px">${new Date(e.date).toLocaleString(LANG==='ru'?'ru-RU':'uz-UZ')}</td>
        <td><button class="btn btn-icon-sm btn-danger" data-del-hist="${e.id}"><i class="fas fa-trash"></i></button></td>
      </tr>`).join('')}
    </tbody>
  </table>
  </div>
</div>` : `
<div class="empty-state">
  <div class="empty-state-icon"><i class="fas fa-clock-rotate-left"></i></div>
  <div class="empty-state-title">${t('noHistory')}</div>
  <div class="empty-state-text">${LANG==='ru'?'Пройдите тест, чтобы увидеть результаты':'Test topshiring va natijalarni ko\'ring'}</div>
  <button class="btn btn-primary" id="btn-go-quizzes"><i class="fas fa-play"></i> ${t('myQuizzes')}</button>
</div>`}`;

  document.getElementById('btn-go-quizzes')?.addEventListener('click',()=>navigate('my-quizzes'));
  document.getElementById('btn-clear-hist')?.addEventListener('click',()=>{
    confirm(LANG==='ru'?'Очистить всю историю?':'Barcha tarixni tozalash?',()=>{
      state.history=[];
      saveStorage(STORAGE.HISTORY,[]);
      renderPageContent();
    });
  });
  document.querySelectorAll('[data-del-hist]').forEach(el=>{
    el.addEventListener('click',()=>{
      state.history=state.history.filter(e=>e.id!==el.dataset.delHist);
      saveStorage(STORAGE.HISTORY,state.history);
      renderPageContent();
    });
  });
  document.getElementById('btn-export-hist-csv')?.addEventListener('click',()=>exportHistoryCSV());
  document.getElementById('btn-export-hist-excel')?.addEventListener('click',()=>exportHistoryExcel());
}

// ═══════════════════════════════════════════════════════════════
// ADMIN / ANALYTICS
// ═══════════════════════════════════════════════════════════════
function renderAdmin() {
  const area = document.getElementById('content-area');
  const titleEl = document.getElementById('topbar-title');
  if (!area) return;
  if (titleEl) titleEl.textContent = t('admin');

  const h = state.history;
  const quizStats = state.quizzes.map(quiz=>{
    const attempts = h.filter(x=>x.quizId===quiz.id);
    return {
      quiz,
      attempts: attempts.length,
      avgScore: attempts.length ? Math.round(attempts.reduce((s,x)=>s+x.percent,0)/attempts.length) : 0,
      passRate: attempts.length ? Math.round(attempts.filter(x=>x.passed).length/attempts.length*100) : 0,
    };
  }).sort((a,b)=>b.attempts-a.attempts);

  const maxAttempts = Math.max(1,...quizStats.map(s=>s.attempts));

  area.innerHTML = `
<div class="grid-4" style="margin-bottom:24px">
  <div class="stat-card"><div class="stat-icon stat-icon-blue"><i class="fas fa-layer-group"></i></div><div><div class="stat-value">${state.quizzes.length}</div><div class="stat-label">${t('quizzes')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-green"><i class="fas fa-users"></i></div><div><div class="stat-value">${h.length}</div><div class="stat-label">${t('totalAttempts')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-orange"><i class="fas fa-percent"></i></div><div><div class="stat-value">${h.length?Math.round(h.reduce((s,x)=>s+x.percent,0)/h.length):0}%</div><div class="stat-label">${t('avgScore')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-purple"><i class="fas fa-trophy"></i></div><div><div class="stat-value">${h.length?Math.round(h.filter(x=>x.passed).length/h.length*100):0}%</div><div class="stat-label">${LANG==='ru'?'Процент сдачи':'O\'tish foizi'}</div></div></div>
</div>

<div class="grid-2" style="margin-bottom:24px">
  <div class="analytics-chart">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px">${LANG==='ru'?'Попытки по тестам':'Testlar bo\'yicha urinishlar'}</div>
    ${quizStats.length ? quizStats.slice(0,8).map(s=>`
    <div class="chart-bar-row">
      <div class="chart-bar-label" title="${escHtml(s.quiz.title)}">${escHtml(s.quiz.title)}</div>
      <div class="chart-bar-wrap"><div class="chart-bar-fill blue" style="width:${Math.round(s.attempts/maxAttempts*100)}%"><span class="chart-bar-val">${s.attempts}</span></div></div>
    </div>`).join('') : `<div style="color:var(--text-muted);font-size:14px;padding:20px;text-align:center">${LANG==='ru'?'Нет данных':'Ma\'lumot yo\'q'}</div>`}
  </div>
  <div class="analytics-chart">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px">${t('avgScore')} %</div>
    ${quizStats.length ? quizStats.slice(0,8).map(s=>`
    <div class="chart-bar-row">
      <div class="chart-bar-label" title="${escHtml(s.quiz.title)}">${escHtml(s.quiz.title)}</div>
      <div class="chart-bar-wrap"><div class="chart-bar-fill ${s.avgScore>=70?'green':s.avgScore>=40?'orange':'red'}" style="width:${s.avgScore}%"><span class="chart-bar-val">${s.avgScore}%</span></div></div>
    </div>`).join('') : `<div style="color:var(--text-muted);font-size:14px;padding:20px;text-align:center">${LANG==='ru'?'Нет данных':'Ma\'lumot yo\'q'}</div>`}
  </div>
</div>

<div class="card">
  <div style="font-size:16px;font-weight:700;margin-bottom:16px">${LANG==='ru'?'Список тестов':'Testlar ro\'yxati'}</div>
  <div style="overflow-x:auto">
  <table class="history-table">
    <thead><tr>
      <th>${t('quizTitle')}</th><th>${t('category')}</th><th>${LANG==='ru'?'Вопросов':'Savollar'}</th><th>${t('totalAttempts')}</th><th>${t('avgScore')}</th><th>${LANG==='ru'?'Прошли':'O\'tdi'}</th><th>${t('created')}</th><th></th>
    </tr></thead>
    <tbody>
      ${quizStats.map(s=>`
      <tr>
        <td><b>${escHtml(s.quiz.title)}</b></td>
        <td><span class="badge badge-primary">${escHtml(s.quiz.category||'—')}</span></td>
        <td>${s.quiz.questions?.length||0}</td>
        <td>${s.attempts}</td>
        <td><span class="badge ${s.avgScore>=s.quiz.passingScore?'badge-success':'badge-danger'}">${s.avgScore}%</span></td>
        <td>${s.passRate}%</td>
        <td style="font-size:12px;color:var(--text-muted)">${new Date(s.quiz.created).toLocaleDateString(LANG==='ru'?'ru-RU':'uz-UZ')}</td>
        <td style="display:flex;gap:6px">
          <button class="btn btn-icon-sm btn-secondary" data-admin-start="${s.quiz.id}"><i class="fas fa-play"></i></button>
          <button class="btn btn-icon-sm btn-secondary" data-admin-edit="${s.quiz.id}"><i class="fas fa-pen"></i></button>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>
  </div>
</div>`;

  document.querySelectorAll('[data-admin-start]').forEach(el=>el.addEventListener('click',()=>startQuiz(el.dataset.adminStart)));
  document.querySelectorAll('[data-admin-edit]').forEach(el=>el.addEventListener('click',()=>navigate('edit-quiz',{id:el.dataset.adminEdit})));
}

// ═══════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════
function renderSettings() {
  const area = document.getElementById('content-area');
  const titleEl = document.getElementById('topbar-title');
  if (!area) return;
  if (titleEl) titleEl.textContent = t('settings');
  area.innerHTML = `
<div class="grid-2">
  <div class="card">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px"><i class="fas fa-language" style="color:var(--primary)"></i> ${t('lang')}</div>
    <div class="settings-row">
      <div class="settings-row-info"><div class="settings-row-label">Русский</div></div>
      <label class="toggle"><input type="radio" name="lang" value="ru" ${LANG==='ru'?'checked':''} id="lang-ru"><span class="toggle-slider"></span></label>
    </div>
    <div class="settings-row">
      <div class="settings-row-info"><div class="settings-row-label">O'zbek</div></div>
      <label class="toggle"><input type="radio" name="lang" value="uz" ${LANG==='uz'?'checked':''} id="lang-uz"><span class="toggle-slider"></span></label>
    </div>
  </div>
  <div class="card">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px"><i class="fas fa-database" style="color:var(--primary)"></i> ${LANG==='ru'?'Данные':'Ma\'lumotlar'}</div>
    <div class="settings-row">
      <div class="settings-row-info"><div class="settings-row-label">${LANG==='ru'?'Тестов сохранено':'Saqlangan testlar'}</div></div>
      <span class="badge badge-primary">${state.quizzes.length}</span>
    </div>
    <div class="settings-row">
      <div class="settings-row-info"><div class="settings-row-label">${LANG==='ru'?'Записей в истории':'Tarix yozuvlari'}</div></div>
      <span class="badge badge-primary">${state.history.length}</span>
    </div>
    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-danger btn-sm" id="btn-clear-all"><i class="fas fa-trash"></i> ${LANG==='ru'?'Очистить всё':'Hammasini tozalash'}</button>
      <button class="btn btn-secondary btn-sm" id="btn-export-all"><i class="fas fa-download"></i> ${LANG==='ru'?'Экспорт данных':'Ma\'lumotlarni eksport'}</button>
      <button class="btn btn-secondary btn-sm" id="btn-import-file"><i class="fas fa-upload"></i> ${t('importQuestions')}</button>
    </div>
  </div>
</div>`;

  document.getElementById('lang-ru')?.addEventListener('change',()=>{LANG='ru';localStorage.setItem('qm_lang','ru');renderApp();});
  document.getElementById('lang-uz')?.addEventListener('change',()=>{LANG='uz';localStorage.setItem('qm_lang','uz');renderApp();});
  document.getElementById('btn-clear-all')?.addEventListener('click',()=>{
    confirm(LANG==='ru'?'Удалить все данные?':'Barcha ma\'lumotlarni o\'chirish?',()=>{
      localStorage.removeItem(STORAGE.QUIZZES);
      localStorage.removeItem(STORAGE.HISTORY);
      state.quizzes = getDefaultQuizzes();
      state.history = [];
      saveStorage(STORAGE.QUIZZES, state.quizzes);
      toast(LANG==='ru'?'Данные очищены':'Ma\'lumotlar tozalandi','success');
      renderPageContent();
    });
  });
  document.getElementById('btn-export-all')?.addEventListener('click',()=>{
    downloadJson({ quizzes: state.quizzes, history: state.history, exported: Date.now() }, 'quizmaster-backup.json');
  });
  document.getElementById('btn-import-file')?.addEventListener('click', showImportModal);
}

// ═══════════════════════════════════════════════════════════════
// IMPORT MODAL
// ═══════════════════════════════════════════════════════════════
function showImportModal() {
  showModal(`
<div class="modal-header">
  <i class="fas fa-file-import" style="color:var(--primary)"></i>
  <span class="modal-title">${t('importQuestions')}</span>
  <button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button>
</div>
<div class="modal-body">
  <div class="format-tabs">
    <div class="fmt-tab active" data-fmt="word">Word / TXT</div>
    <div class="fmt-tab" data-fmt="json">JSON</div>
    <div class="fmt-tab" data-fmt="excel">Excel</div>
  </div>
  <div class="fmt-panel active" id="fmt-word">
    <div class="import-format-card active" id="card-word">
      <div class="import-format-icon"><i class="fas fa-file-word" style="color:#2563eb"></i></div>
      <div class="import-format-info">
        <div class="title">Word (.docx) / TXT</div>
        <div class="hint">${LANG==='ru'?'Автоматическое распознавание вопросов и ответов':'Savollar va javoblarni avtomatik aniqlash'}</div>
      </div>
    </div>
    <div class="drop-zone" id="drop-zone-word">
      <div class="drop-zone-icon"><i class="fas fa-cloud-upload-alt"></i></div>
      <div class="drop-zone-title">${t('uploadFile')}</div>
      <div class="drop-zone-hint">.docx, .txt ${LANG==='ru'?'(перетащите или нажмите)':'(tashlang yoki bosing)'}</div>
      <input type="file" id="file-word" accept=".docx,.txt" style="display:none">
    </div>
    <div class="file-preview" id="preview-word"></div>
    <div style="margin-top:12px">
      <a href="/api/template" download="quiz-template.json" class="btn btn-secondary btn-sm"><i class="fas fa-download"></i> ${t('downloadTemplate')} JSON</a>
    </div>
  </div>
  <div class="fmt-panel" id="fmt-json">
    <div class="drop-zone" id="drop-zone-json">
      <div class="drop-zone-icon"><i class="fas fa-file-code" style="color:var(--success)"></i></div>
      <div class="drop-zone-title">JSON ${t('uploadFile')}</div>
      <div class="drop-zone-hint">.json (${LANG==='ru'?'массив вопросов или объект с config':'savollar massivi yoki config ob\'ekti'})</div>
      <input type="file" id="file-json" accept=".json" style="display:none">
    </div>
    <div class="file-preview" id="preview-json"></div>
  </div>
  <div class="fmt-panel" id="fmt-excel">
    <div class="import-format-card">
      <div class="import-format-icon"><i class="fas fa-file-excel" style="color:#16a34a"></i></div>
      <div class="import-format-info">
        <div class="title">Excel (.xlsx, .csv)</div>
        <div class="hint">${LANG==='ru'?'Колонки: question, type, options (через |), correct, explanation':'Ustunlar: question, type, options (| bilan), correct, explanation'}</div>
      </div>
    </div>
    <div class="drop-zone" id="drop-zone-excel">
      <div class="drop-zone-icon"><i class="fas fa-cloud-upload-alt"></i></div>
      <div class="drop-zone-title">${t('uploadFile')}</div>
      <div class="drop-zone-hint">.xlsx, .csv</div>
      <input type="file" id="file-excel" accept=".xlsx,.csv,.xls" style="display:none">
    </div>
    <div class="file-preview" id="preview-excel"></div>
  </div>

  <div id="import-preview-section" style="display:none;margin-top:16px">
    <div style="font-size:14px;font-weight:700;margin-bottom:10px" id="import-count-label"></div>
    <div class="preview-list" id="import-preview-list"></div>
    <div style="margin-top:12px;font-size:13px;color:var(--text-muted)">${LANG==='ru'?'Вы можете редактировать вопросы после импорта':'Import qilgandan so\'ng savollarni tahrirlashingiz mumkin'}</div>
  </div>
  <div id="import-error" style="display:none;color:var(--danger);font-size:13px;margin-top:10px;padding:10px 14px;background:var(--danger-light);border-radius:var(--radius-sm)"></div>
</div>
<div class="modal-footer">
  <button class="btn btn-secondary" onclick="closeModal()">${t('cancel')}</button>
  <button class="btn btn-primary" id="btn-apply-import" disabled><i class="fas fa-check"></i> ${t('importQuestions')}</button>
</div>`, 'modal-lg');

  // Format tabs
  document.querySelectorAll('.fmt-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.fmt-tab').forEach(t2=>t2.classList.remove('active'));
      document.querySelectorAll('.fmt-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`fmt-${tab.dataset.fmt}`)?.classList.add('active');
    });
  });

  // Drop zones
  setupDropZone('drop-zone-word', 'file-word', ['docx','txt'], handleWordFile);
  setupDropZone('drop-zone-json', 'file-json', ['json'], handleJsonFile);
  setupDropZone('drop-zone-excel', 'file-excel', ['xlsx','csv','xls'], handleExcelFile);
}

function setupDropZone(zoneId, inputId, exts, handler) {
  const zone = document.getElementById(zoneId);
  const input = document.getElementById(inputId);
  if (!zone||!input) return;
  zone.addEventListener('click',()=>input.click());
  input.addEventListener('change',()=>{ if(input.files[0]) handler(input.files[0]); });
  zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('drag-over');});
  zone.addEventListener('dragleave',()=>zone.classList.remove('drag-over'));
  zone.addEventListener('drop',e=>{
    e.preventDefault(); zone.classList.remove('drag-over');
    const f=e.dataTransfer.files[0];
    if(f&&exts.some(ext=>f.name.toLowerCase().endsWith('.'+ext))) handler(f);
    else showImportError(LANG==='ru'?`Поддерживаемые форматы: ${exts.join(', ')}`:`Qo'llab-quvvatlanadigan formatlar: ${exts.join(', ')}`);
  });
}

let pendingImportQuestions = null;

function showImportPreview(questions) {
  pendingImportQuestions = questions;
  const sec = document.getElementById('import-preview-section');
  const cnt = document.getElementById('import-count-label');
  const list = document.getElementById('import-preview-list');
  const btn = document.getElementById('btn-apply-import');
  if(!sec||!cnt||!list||!btn) return;
  sec.style.display='block';
  cnt.textContent = `${LANG==='ru'?'Найдено вопросов':'Topilgan savollar'}: ${questions.length}`;
  list.innerHTML = questions.slice(0,8).map((q,i)=>`
  <div class="preview-item">
    <span class="preview-item-num">${i+1}.</span>
    <span class="preview-item-type">${getTypeLabel(q.type)}</span>
    <span>${escHtml((q.question||'').slice(0,72))}</span>
  </div>`).join('') + (questions.length>8?`<div style="color:var(--text-muted);font-size:13px;padding:8px 14px">+ ещё ${questions.length-8}</div>`:'');
  btn.disabled = false;
  document.getElementById('import-error').style.display='none';

  document.getElementById('btn-apply-import').onclick = ()=>{
    if (!pendingImportQuestions?.length) return;
    applyImportToEditor(pendingImportQuestions);
  };
}

function showImportError(msg) {
  const el = document.getElementById('import-error');
  if (el) { el.textContent = msg; el.style.display='block'; }
}

function applyImportToEditor(questions) {
  // If editor is open — append to editQuiz; otherwise create new
  if (state.editQuiz) {
    state.editQuiz.questions.push(...questions);
    state.editQIndex = state.editQuiz.questions.length-1;
  } else {
    state.editQuiz = newQuizTemplate();
    state.editQuiz.questions = questions;
    state.editQIndex = 0;
  }
  closeModal();
  toast(t('importSuccess'), 'success');
  navigate('create-quiz');
}

function handleWordFile(file) {
  const ext = file.name.toLowerCase().split('.').pop();
  if (ext === 'txt') {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const qs = parseQuestionText(e.target.result);
        if (!qs.length) { showImportError(t('parseError')); return; }
        showImportPreview(qs);
      } catch(err) { showImportError(t('parseError')+': '+err.message); }
    };
    reader.readAsText(file, 'UTF-8');
  } else if (ext === 'docx') {
    if (typeof mammoth === 'undefined') { showImportError('mammoth.js not loaded'); return; }
    const reader = new FileReader();
    reader.onload = e => {
      mammoth.extractRawText({ arrayBuffer: e.target.result })
        .then(result => {
          const qs = parseQuestionText(result.value);
          if (!qs.length) { showImportError(t('parseError')); return; }
          showImportPreview(qs);
        })
        .catch(err => showImportError(t('parseError')+': '+err.message));
    };
    reader.readAsArrayBuffer(file);
  }
}

function handleJsonFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      let qs;
      if (Array.isArray(data)) qs = data;
      else if (Array.isArray(data.questions)) qs = data.questions;
      else { showImportError(t('parseError')); return; }
      qs = normalizeQuestions(qs);
      if (!qs.length) { showImportError(t('parseError')); return; }
      showImportPreview(qs);
    } catch(err) { showImportError(t('parseError')+': '+err.message); }
  };
  reader.readAsText(file);
}

function handleExcelFile(file) {
  const ext = file.name.toLowerCase().split('.').pop();
  if (ext === 'csv') {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const qs = parseCSV(e.target.result);
        if (!qs.length) { showImportError(t('parseError')); return; }
        showImportPreview(qs);
      } catch(err) { showImportError(t('parseError')+': '+err.message); }
    };
    reader.readAsText(file, 'UTF-8');
  } else {
    showImportError(LANG==='ru'?'Для .xlsx используйте сохранение как CSV и загрузите CSV':'xlsx uchun CSV sifatida saqlang va CSV yuklang');
  }
}

// ─── Smart Question Parser ────────────────────────────────────
function parseQuestionText(raw) {
  const lines = raw.split(/\r?\n/).map(l=>l.trim()).filter(l=>l.length>0);
  const questions = [];
  let cur = null;
  const qRe = /^(\d+[\.\)\s]+|[Qq]uestion\s*\d*[\.\)\s:]+|Вопрос\s*\d*[\.\)\s:]+|Savol\s*\d*[\.\)\s:]+)/;
  const optRe = /^([A-Da-dА-Да-д][\.\)]\s*|[•\-\*]\s*|\d+[\.\)]\s+(?=[А-ЯA-Z]))/;
  const correctRe = /[\*✓✔]$|^\s*[\*✓✔]/;
  const answerRe = /^(Ответ|Answer|Javob)\s*[:=]\s*/i;
  const multiRe = /^\[?MULTIPLE\]?|^\[?НЕСКОЛЬКО\]?/i;
  const textRe = /^\[?TEXT\]?|^\[?ТЕКСТ\]?/i;
  const noteRe = /^(NOTE|ПРИМЕЧАНИЕ|Izoh)\s*[:=]\s*/i;
  const tfRe = /^(Правда|Ложь|True|False|To'g'ri|Noto'g'ri)$/i;

  function saveQ() {
    if (!cur?.question) return;
    if (!cur.options?.length && cur.type !== 'text') cur.type = 'text';
    if (cur.type==='single'&&Array.isArray(cur.correct)&&cur.correct.length>1) cur.type='multiple';
    if (cur.type==='multiple'&&!Array.isArray(cur.correct)) cur.correct=[cur.correct];
    if (cur.type==='text'&&Array.isArray(cur.correct)&&cur.correct.length===1) cur.correct=cur.correct[0];
    cur.id = genId();
    if (!cur.correct) cur.correct = cur.options?.[0]||'';
    questions.push(cur);
  }

  for (const line of lines) {
    if (qRe.test(line)) {
      saveQ();
      cur = { type:'single', question: line.replace(qRe,'').trim(), options:[], correct:null, explanation:'', image:'' };
      continue;
    }
    if (!cur) { cur = { type:'single', question:line, options:[], correct:null, explanation:'', image:'' }; continue; }
    if (multiRe.test(line)) { cur.type='multiple'; if (!Array.isArray(cur.correct)) cur.correct=[]; continue; }
    if (textRe.test(line)) { cur.type='text'; continue; }
    if (noteRe.test(line)) { cur.explanation = line.replace(noteRe,'').trim(); continue; }
    if (answerRe.test(line)) {
      const ans = line.replace(answerRe,'').trim();
      if (cur.type==='text') { cur.correct = ans.split(',').map(s=>s.trim()).filter(Boolean); }
      else if (ans.toLowerCase()==='true'||ans==='правда'||ans==="to'g'ri") { cur.type='truefalse'; cur.correct='true'; }
      else if (ans.toLowerCase()==='false'||ans==='ложь'||ans==="noto'g'ri") { cur.type='truefalse'; cur.correct='false'; }
      else {
        // Match by letter (A,B,C…) or by text
        const letter = /^[A-Da-dА-Гa-г]$/.test(ans) ? ans.toUpperCase() : null;
        if (letter) {
          const li = letter.charCodeAt(0) - (letter.charCodeAt(0)>90?97:65);
          const opt = cur.options[li];
          if (opt) {
            if (cur.type==='multiple') { if(!Array.isArray(cur.correct))cur.correct=[]; cur.correct.push(opt); }
            else cur.correct=opt;
          }
        } else {
          if (cur.type==='multiple') { if(!Array.isArray(cur.correct))cur.correct=[]; cur.correct.push(ans); }
          else cur.correct=ans;
        }
      }
      continue;
    }
    if (tfRe.test(line) && !optRe.test(line) && cur.options.length===0) {
      cur.type='truefalse'; continue;
    }
    if (optRe.test(line)) {
      const optText = line.replace(optRe,'').replace(/[\*✓✔]\s*$/,'').trim();
      const isCorr = correctRe.test(line);
      cur.options.push(optText);
      if (isCorr) {
        if (cur.type==='multiple') { if(!Array.isArray(cur.correct))cur.correct=[]; cur.correct.push(optText); }
        else cur.correct=optText;
      }
      continue;
    }
    // Could be continuation or next question without number
    if (cur.options.length===0) cur.question += ' '+line;
  }
  saveQ();
  return questions;
}

function normalizeQuestions(qs) {
  return qs.map((q,i)=>({
    id: q.id||genId(),
    type: ['single','multiple','text','truefalse','match'].includes(q.type)?q.type:'single',
    question: String(q.question||''),
    options: Array.isArray(q.options)?q.options:undefined,
    correct: q.correct||'',
    explanation: q.explanation||'',
    image: q.image||'',
    pairs: Array.isArray(q.pairs)?q.pairs:undefined,
  }));
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l=>l.trim());
  if (!lines.length) return [];
  const header = lines[0].toLowerCase().split(',').map(h=>h.trim().replace(/"/g,''));
  const qi = header.indexOf('question'), ti = header.indexOf('type'), oi = header.indexOf('options'), ci = header.indexOf('correct'), ei = header.indexOf('explanation');
  if (qi<0) return [];
  return lines.slice(1).map((line,i)=>{
    const cols = parseCSVLine(line);
    const q = cols[qi]||'';
    const type = (cols[ti]||'single').toLowerCase();
    const opts = oi>=0&&cols[oi] ? cols[oi].split('|').map(s=>s.trim()) : undefined;
    const corr = ci>=0?cols[ci]||'':'';
    const expl = ei>=0?cols[ei]||'':'';
    return { id:genId(), type, question:q, options:opts, correct:corr, explanation:expl, image:'' };
  }).filter(q=>q.question);
}
function parseCSVLine(line) {
  const cols=[]; let cur='', inQ=false;
  for(let i=0;i<line.length;i++){
    const c=line[i];
    if(c==='"'){if(inQ&&line[i+1]==='"'){cur+='"';i++;}else inQ=!inQ;}
    else if(c===','&&!inQ){cols.push(cur);cur='';}
    else cur+=c;
  }
  cols.push(cur);
  return cols.map(c=>c.trim());
}

// ═══════════════════════════════════════════════════════════════
// EXPORT FUNCTIONS
// ═══════════════════════════════════════════════════════════════
function exportResultsPDF() {
  const r = state.lastResult;
  if (!r) return;
  const { correct, wrong, skipped, total, percent, passed, quiz, details } = r;
  let html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Result</title>
<style>body{font-family:Arial,sans-serif;max-width:800px;margin:20px auto;padding:20px;color:#1e293b}
h1{color:#1e40af}table{width:100%;border-collapse:collapse;margin-top:20px}
th,td{border:1px solid #e2e8f0;padding:10px 14px;text-align:left}
th{background:#f0f4f8;font-weight:700}.pass{color:#22c55e}.fail{color:#ef4444}
.badge{padding:3px 8px;border-radius:4px;font-size:12px;font-weight:700}
.badge-pass{background:#f0fdf4;color:#15803d}.badge-fail{background:#fef2f2;color:#b91c1c}
</style></head><body>
<h1>📊 ${escHtml(quiz.title)}</h1>
<p>Дата: ${new Date().toLocaleString('ru-RU')} | Результат: ${percent}% | ${passed?'✅ Сдан':'❌ Не сдан'}</p>
<p>Правильно: <b class="pass">${correct}</b> | Неправильно: <b class="fail">${wrong}</b> | Пропущено: <b>${skipped}</b> | Всего: ${total}</p>
<table><thead><tr><th>#</th><th>Вопрос</th><th>Ваш ответ</th><th>Правильный</th><th>Результат</th></tr></thead><tbody>
${Object.entries(details).map(([i,d])=>`
<tr>
  <td>${parseInt(i)+1}</td>
  <td>${escHtml(d.question.question)}</td>
  <td>${formatAnswer(d.userAnswer,d.question)}</td>
  <td>${formatAnswer(d.question.correct,d.question)}</td>
  <td><span class="badge ${d.isSkip?'':'d.isCorrect?badge-pass:badge-fail'}">${d.isSkip?'—':d.isCorrect?'✓':'✗'}</span></td>
</tr>`).join('')}
</tbody></table></body></html>`;
  const w = window.open('','_blank');
  if (w) { w.document.write(html); w.document.close(); setTimeout(()=>w.print(),500); }
}

function exportResultsCSV() {
  const r = state.lastResult;
  if (!r) return;
  const {details,quiz} = r;
  const rows = [['#','Вопрос','Тип','Ваш ответ','Правильный ответ','Результат','Пояснение']];
  Object.entries(details).forEach(([i,d])=>{
    rows.push([
      parseInt(i)+1,
      d.question.question,
      d.question.type,
      d.isSkip?'(пропущено)':formatAnswerPlain(d.userAnswer,d.question),
      formatAnswerPlain(d.question.correct,d.question),
      d.isSkip?'Пропущено':d.isCorrect?'Правильно':'Неправильно',
      d.question.explanation||''
    ]);
  });
  const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadBlob(csv,'text/csv','result.csv');
}

function exportHistoryCSV() {
  const rows = [['#','Тест','Результат%','Правильно','Неправильно','Пропущено','Всего','Время','Дата']];
  state.history.forEach((e,i)=>{
    rows.push([i+1,e.quizTitle,e.percent,e.correct,e.wrong,e.skipped||0,e.total,formatTime(e.duration),new Date(e.date).toLocaleString('ru-RU')]);
  });
  const csv = rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadBlob(csv,'text/csv','history.csv');
}

function exportHistoryExcel() {
  // Simple HTML table opened in new tab (works as .xls)
  let html = `<html><head><meta charset="UTF-8"></head><body><table border="1">
<tr><th>#</th><th>Тест</th><th>%</th><th>Прав</th><th>Непр</th><th>Вс</th><th>Время</th><th>Дата</th></tr>
${state.history.map((e,i)=>`<tr><td>${i+1}</td><td>${e.quizTitle}</td><td>${e.percent}</td><td>${e.correct}</td><td>${e.wrong}</td><td>${e.total}</td><td>${formatTime(e.duration)}</td><td>${new Date(e.date).toLocaleString()}</td></tr>`).join('')}
</table></body></html>`;
  downloadBlob(html,'application/vnd.ms-excel','history.xls');
}

function formatAnswerPlain(ans, q) {
  if (ans===null||ans===undefined||ans==='') return '—';
  if (q.type==='truefalse') return ans==='true'?'Правда':'Ложь';
  if (Array.isArray(ans)) return ans.join(', ');
  return String(ans);
}

function downloadBlob(content, mime, filename) {
  const blob = new Blob(['\uFEFF'+content],{type:mime+';charset=utf-8;'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=filename; a.click();
}

// ═══════════════════════════════════════════════════════════════
// MODAL SYSTEM
// ═══════════════════════════════════════════════════════════════
function showModal(html, extraClass='') {
  const root = document.getElementById('modal-root');
  if (!root) {
    const newRoot = document.createElement('div'); newRoot.id='modal-root'; document.body.appendChild(newRoot);
  }
  const mr = document.getElementById('modal-root');
  mr.innerHTML = `
<div class="modal-backdrop open" id="modal-backdrop" onclick="onBackdropClick(event)">
  <div class="modal ${extraClass}" id="modal-content">
    ${html}
  </div>
</div>`;
}
window.closeModal = function() {
  const mb = document.getElementById('modal-backdrop');
  if (mb) mb.remove();
};
window.onBackdropClick = function(e) {
  if (e.target.id==='modal-backdrop') closeModal();
};

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
function init() {
  // Check for shared quiz URL
  const params = new URLSearchParams(location.search);
  const sharedId = params.get('quiz');
  if (sharedId) {
    const found = state.quizzes.find(q=>q.id===sharedId);
    if (found) { startQuiz(found.id); return; }
  }
  renderApp();
}

document.addEventListener('DOMContentLoaded', init);
