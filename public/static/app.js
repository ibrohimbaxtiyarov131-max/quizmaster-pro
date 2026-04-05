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

// ═══════════════════════════════════════════════════════════════
// API CLIENT — общается с Hono backend + D1
// ═══════════════════════════════════════════════════════════════
const API_BASE = '/api';
function getAuthToken() { return localStorage.getItem('qm_auth_token') || null; }
function setAuthToken(t) { if (t) localStorage.setItem('qm_auth_token', t); else localStorage.removeItem('qm_auth_token'); }

async function apiFetch(path, options = {}) {
  const token = getAuthToken();
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers['X-Auth-Token'] = token;
  try {
    const res = await fetch(API_BASE + path, { ...options, headers });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch (e) {
    return { ok: false, status: 0, data: { error: e.message } };
  }
}

const API = {
  // Auth
  async register(name, email, password, avatar, provider) {
    return apiFetch('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password, avatar, provider }) });
  },
  async login(email, password) {
    return apiFetch('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  },
  async social(provider, name, email, avatar) {
    return apiFetch('/auth/social', { method: 'POST', body: JSON.stringify({ provider, name, email, avatar }) });
  },
  async guest(name) {
    return apiFetch('/auth/guest', { method: 'POST', body: JSON.stringify({ name }) });
  },
  async me() {
    return apiFetch('/auth/me');
  },
  async logout() {
    const r = await apiFetch('/auth/logout', { method: 'POST' });
    setAuthToken(null);
    return r;
  },
  async updateProfile(name, avatar) {
    return apiFetch('/auth/profile', { method: 'PUT', body: JSON.stringify({ name, avatar }) });
  },
  // Quizzes
  async getMyQuizzes() {
    return apiFetch('/quizzes');
  },
  async saveQuiz(quiz) {
    return apiFetch('/quizzes', { method: 'POST', body: JSON.stringify(quiz) });
  },
  async updateQuiz(id, quiz) {
    return apiFetch('/quizzes/' + id, { method: 'PUT', body: JSON.stringify(quiz) });
  },
  async deleteQuiz(id) {
    return apiFetch('/quizzes/' + id, { method: 'DELETE' });
  },
  async lockQuiz(id, locked) {
    return apiFetch('/quizzes/' + id + '/lock', { method: 'PATCH', body: JSON.stringify({ locked }) });
  },
  async getAccesses(id) {
    return apiFetch('/quizzes/' + id + '/accesses');
  },
  async recordAccess(id, userName) {
    return apiFetch('/quizzes/' + id + '/access', { method: 'POST', body: JSON.stringify({ userName }) });
  },
  async findByCodePin(code, pin) {
    return apiFetch('/quizzes/find?code=' + encodeURIComponent(code) + '&pin=' + encodeURIComponent(pin));
  },
  async getQuiz(id) {
    return apiFetch('/quizzes/' + id);
  },
  // Attempts
  async saveAttempt(data) {
    return apiFetch('/attempts', { method: 'POST', body: JSON.stringify(data) });
  },
  async getHistory() {
    return apiFetch('/attempts');
  },
  async getAnalytics(quizId) {
    return apiFetch('/analytics/' + quizId);
  },
  async getAdminOverview() {
    return apiFetch('/admin/overview');
  },
  async health() {
    return apiFetch('/health');
  },
  // User restrictions
  async getRestrictions(quizId) {
    return apiFetch('/quizzes/' + quizId + '/restrictions');
  },
  async addRestriction(quizId, userId, reason) {
    return apiFetch('/quizzes/' + quizId + '/restrictions', { method: 'POST', body: JSON.stringify({ userId, reason: reason || '' }) });
  },
  async removeRestriction(quizId, userId) {
    return apiFetch('/quizzes/' + quizId + '/restrictions/' + userId, { method: 'DELETE' });
  },
  async searchUsers(q) {
    return apiFetch('/users/search?q=' + encodeURIComponent(q));
  },
  // Billing
  async getPlans() { return apiFetch('/plans'); },
  async getMySubscription() { return apiFetch('/billing/my'); },
  async createOrder(plan_id) { return apiFetch('/billing/create-order', { method: 'POST', body: JSON.stringify({ plan_id }) }); },
  async getBillingHistory() { return apiFetch('/billing/history'); },
  async getPaymeStatus() { return apiFetch('/billing/payme/status'); },
  async getPoints() { return apiFetch('/billing/points'); },
  async spendPoints(action) { return apiFetch('/billing/spend', { method: 'POST', body: JSON.stringify({ action }) }); },
  // Live Session
  async liveCreate(quiz_id, q_time_limit) { return apiFetch('/live/create', { method: 'POST', body: JSON.stringify({ quiz_id, q_time_limit }) }); },
  async liveJoin(id, name, avatar) { return apiFetch('/live/' + id + '/join', { method: 'POST', body: JSON.stringify({ name, avatar }) }); },
  async liveState(id, pid) { return apiFetch('/live/' + id + '/state' + (pid ? '?pid=' + pid : '')); },
  async liveStart(id) { return apiFetch('/live/' + id + '/start', { method: 'POST' }); },
  async liveNext(id) { return apiFetch('/live/' + id + '/next', { method: 'POST' }); },
  async liveFinish(id) { return apiFetch('/live/' + id + '/finish', { method: 'POST' }); },
  async liveAnswer(id, participant_id, q_index, answer) { return apiFetch('/live/' + id + '/answer', { method: 'POST', body: JSON.stringify({ participant_id, q_index, answer }) }); },
  async liveResults(id) { return apiFetch('/live/' + id + '/results'); },
  async liveHistory() { return apiFetch('/live'); },
};


const STORAGE = {
  QUIZZES:       'qm_quizzes',
  FOUND_QUIZZES: 'qm_found_quizzes',   // чужие тесты найденные по коду
  HISTORY:       'qm_history',
  SETTINGS:      'qm_settings',
  USER:          'qm_user',
};
function loadStorage(key, def = []) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function saveStorage(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ───── USER PROFILE ───────────────────────────────────────────
function loadUser() {
  return loadStorage(STORAGE.USER, null);
}
function saveUser(u) {
  saveStorage(STORAGE.USER, u);
  state.user = u;
}
function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
}

// ─── Sync quizzes from server → merge with local ──────────────
async function syncQuizzesFromServer() {
  if (!getAuthToken()) return;
  const r = await API.getMyQuizzes();
  if (!r.ok) return;
  const serverQuizzes = r.data.quizzes || [];
  if (!serverQuizzes.length) return;
  const localById = {};
  state.quizzes.forEach(q => { localById[q.id] = q; });
  serverQuizzes.forEach(q => { localById[q.id] = q; });
  state.quizzes = Object.values(localById).sort((a,b) => (b.updatedAt||b.createdAt||b.created||0) - (a.updatedAt||a.createdAt||a.created||0));
  saveStorage(STORAGE.QUIZZES, state.quizzes);
}

// ─── Push local quiz to server ────────────────────────────────
async function pushQuizToServer(quiz) {
  if (!getAuthToken()) return quiz;
  const r = await API.saveQuiz(quiz);
  if (r.ok && r.data.quiz) return r.data.quiz;
  return quiz;
}

// ─── Sync history from server ─────────────────────────────────
async function syncHistoryFromServer() {
  if (!getAuthToken()) return;
  const r = await API.getHistory();
  if (!r.ok) return;
  const serverAttempts = r.data.attempts || [];
  if (!serverAttempts.length) return;
  const serverHistory = serverAttempts.map(a => ({
    id: a.id,
    quizId: a.quizId,
    quizTitle: state.quizzes.find(q => q.id === a.quizId)?.title || 'Unknown',
    percent: a.percent,
    correct: a.correct,
    wrong: a.wrong,
    skipped: a.skipped,
    total: a.total,
    passed: a.passed,
    duration: a.duration,
    date: a.createdAt ? a.createdAt * 1000 : Date.now(),
  }));
  const byId = {};
  state.history.forEach(h => { byId[h.id || h.date] = h; });
  serverHistory.forEach(h => { byId[h.id] = h; });
  state.history = Object.values(byId).sort((a,b) => (b.date||0)-(a.date||0));
  saveStorage(STORAGE.HISTORY, state.history);
}

// ─── Push ALL local quizzes to server (one-time migration) ────
async function pushAllLocalQuizzesToServer() {
  if (!getAuthToken()) return;
  const localQuizzes = state.quizzes.filter(q => q.questions && q.questions.length > 0);
  if (!localQuizzes.length) return;
  // Push in parallel (max 5 at a time to avoid overwhelming)
  const chunks = [];
  for (let i = 0; i < localQuizzes.length; i += 5) chunks.push(localQuizzes.slice(i, i+5));
  for (const chunk of chunks) {
    await Promise.all(chunk.map(async q => {
      try { await API.saveQuiz(q); } catch(e) {}
    }));
  }
}

let state = {
  page: 'home',
  quizzes: loadStorage(STORAGE.QUIZZES, getDefaultQuizzes()),
  foundQuizzes: loadStorage(STORAGE.FOUND_QUIZZES, []),  // чужие тесты
  history: loadStorage(STORAGE.HISTORY, []),
  settings: loadStorage(STORAGE.SETTINGS, { theme: 'light' }),
  user: loadUser(),            // { name, avatar, provider } or null
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
  // Live session state
  liveSession: null,      // { id, role:'host'|'participant', participant_id, poll_interval }
  liveState: null,        // last fetched state from server
  userPlan: null,         // cached plan info
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

// ── Quiz Code / PIN ──────────────────────────────────────────
function genQuizCode() {
  // 6-digit numeric code
  return String(Math.floor(100000 + Math.random() * 900000));
}
function genQuizPin() {
  // 4-digit PIN
  return String(Math.floor(1000 + Math.random() * 9000));
}
function ensureQuizCodes(quiz) {
  if (!quiz.code) quiz.code = genQuizCode();
  if (!quiz.pin)  quiz.pin  = genQuizPin();
  return quiz;
}
// Find quiz by code+pin across ALL quizzes
function findQuizByCodePin(code, pin) {
  const c = String(code).trim();
  const p = String(pin).trim();
  return state.quizzes.find(q => String(q.code) === c && String(q.pin) === p) || null;
}

// ── URL Share (base64 encoded quiz data) ─────────────────────
function quizToShareUrl(quiz) {
  try {
    // Embed full quiz (without answers stripped) as base64 in URL
    const payload = JSON.stringify({
      v: 1,
      code: quiz.code,
      pin: quiz.pin,
      title: quiz.title,
      description: quiz.description,
      category: quiz.category,
      passingScore: quiz.passingScore,
      timeLimit: quiz.timeLimit,
      questionTimer: quiz.questionTimer,
      shuffleQuestions: quiz.shuffleQuestions,
      shuffleAnswers: quiz.shuffleAnswers,
      showExplanations: quiz.showExplanations,
      maxQuestions: quiz.maxQuestions,
      questions: quiz.questions,
    });
    const b64 = btoa(unescape(encodeURIComponent(payload)));
    return `${location.origin}${location.pathname}?q=${encodeURIComponent(b64)}`;
  } catch { return `${location.origin}${location.pathname}?quiz=${quiz.id}`; }
}
// Short link by code+pin (human-readable, requires recipient to have quiz locally or share via base64)
function quizToCodeUrl(quiz) {
  return `${location.origin}${location.pathname}?code=${quiz.code}&pin=${quiz.pin}`;
}
function importQuizFromUrl(b64) {
  try {
    const json = decodeURIComponent(escape(atob(b64)));
    const data = JSON.parse(json);
    if (!data.questions?.length) return null;
    const quiz = {
      id: genId(),
      code: data.code || genQuizCode(),
      pin: data.pin || genQuizPin(),
      title: data.title || 'Imported Quiz',
      description: data.description || '',
      category: data.category || '',
      passingScore: data.passingScore || 60,
      timeLimit: data.timeLimit || 0,
      questionTimer: data.questionTimer || 0,
      shuffleQuestions: data.shuffleQuestions || false,
      shuffleAnswers: data.shuffleAnswers || false,
      showExplanations: data.showExplanations || 'end',
      maxQuestions: data.maxQuestions || 0,
      created: Date.now(),
      questions: data.questions,
    };
    return quiz;
  } catch { return null; }
}
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
  // Кастомный красивый диалог подтверждения вместо window.confirm
  const existing = document.getElementById('confirm-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'confirm-modal-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
  overlay.innerHTML = `
    <div style="background:var(--card,#fff);border-radius:16px;padding:28px 24px;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);text-align:center;">
      <div style="width:56px;height:56px;background:rgba(239,68,68,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
        <i class="fas fa-trash" style="color:#ef4444;font-size:22px;"></i>
      </div>
      <div style="font-size:17px;font-weight:700;color:var(--text,#111);margin-bottom:8px;">${LANG==='ru'?'Удалить тест?':'Testni o\'chirish?'}</div>
      <div style="font-size:14px;color:var(--text-muted,#666);margin-bottom:24px;">${msg}</div>
      <div style="display:flex;gap:10px;justify-content:center;">
        <button id="confirm-cancel-btn" style="flex:1;padding:11px 20px;border:1px solid var(--border,#e5e7eb);background:var(--card,#fff);color:var(--text,#111);border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">
          ${LANG==='ru'?'Отмена':'Bekor qilish'}
        </button>
        <button id="confirm-ok-btn" style="flex:1;padding:11px 20px;background:#ef4444;color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">
          <i class="fas fa-trash"></i> ${LANG==='ru'?'Удалить':'O\'chirish'}
        </button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  overlay.querySelector('#confirm-cancel-btn').addEventListener('click', () => overlay.remove());
  overlay.querySelector('#confirm-ok-btn').addEventListener('click', () => { overlay.remove(); cb(); });
  // Close on backdrop click
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
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
  const withSidebar = ['home','my-quizzes','found-quizzes','create-quiz','edit-quiz','history','admin','settings','plans','live'];

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
    { id:'found-quizzes', icon:'fa-search', label:LANG==='ru'?'Найденные тесты':'Topilgan testlar', section:'main', badge: state.foundQuizzes.length || null },
    { id:'create-quiz', icon:'fa-plus-circle', label:t('createQuiz'), section:'main' },
    { id:'history', icon:'fa-clock-rotate-left', label:t('history'), section:'main' },
    { id:'admin', icon:'fa-chart-bar', label:t('admin'), section:'admin' },
    { id:'live', icon:'fa-tower-broadcast', label:LANG==='ru'?'Live сессия':'Live sessiya', section:'admin' },
    { id:'plans', icon:'fa-crown', label:LANG==='ru'?'Тарифы':'Tariflar', section:'admin', badge: null },
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
    'found-quizzes': renderFoundQuizzes,
    'create-quiz': () => renderEditor(null),
    'edit-quiz': () => renderEditor(state.navParams?.id),
    'history': renderHistory,
    'admin': renderAdmin,
    'live': renderLive,
    'plans': renderPlans,
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
    ${state.user ? `<button class="btn btn-secondary btn-sm" id="btn-sync-quizzes" title="${LANG==='ru'?'Синхронизировать тесты с сервером':'Testlarni server bilan sinxronlashtirish'}"><i class="fas fa-cloud-upload-alt"></i></button>` : ''}
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
      <button class="btn btn-lg" style="background:rgba(255,255,255,0.15);color:#fff;" id="hero-browse"><i class="fas fa-list"></i> ${t('myQuizzes')}</button>
    </div>
    <div class="hero-stats">
      <div><div class="hero-stat-val">${state.quizzes.length}</div><div class="hero-stat-lbl">${t('quizzes')}</div></div>
      <div><div class="hero-stat-val">${pluralQ(totalQ)}</div><div class="hero-stat-lbl">${t('questions')}</div></div>
      <div><div class="hero-stat-val">${totalAttempts}</div><div class="hero-stat-lbl">${t('totalAttempts')}</div></div>
      <div><div class="hero-stat-val">${avgScore}%</div><div class="hero-stat-lbl">${t('avgScore')}</div></div>
    </div>
  </div>
</div>

${renderFindQuizWidget()}

<div id="home-plan-widget"></div>

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
  // Sync button — push all local quizzes to server
  document.getElementById('btn-sync-quizzes')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-sync-quizzes');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; }
    await pushAllLocalQuizzesToServer();
    await syncQuizzesFromServer();
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i>'; }
    toast(LANG==='ru'?'Тесты синхронизированы с сервером':'Testlar server bilan sinxronlandi', 'success');
  });
  document.getElementById('btn-all-quizzes')?.addEventListener('click', ()=>navigate('my-quizzes'));
  attachFindQuizEvents();
  // Load plan/points widget async
  if (state.user) loadHomePlanWidget();
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

async function loadHomePlanWidget() {
  const el = document.getElementById('home-plan-widget');
  if (!el) return;
  const r = await API.getPoints();
  if (!r.ok) return;
  const d = r.data;
  const isVip = state.user?.email === 'ibrohimbaxtiyarov131@gmail.com';
  const planNames = { free: LANG==='ru'?'Бесплатный':'Bepul', teacher: LANG==='ru'?'Учитель':'O\'qituvchi', business: LANG==='ru'?'Бизнес':'Biznes' };
  const planColors = { free:'#10b981', teacher:'#6366f1', business:'#0ea5e9' };
  const planIcons = { free:'fa-seedling', teacher:'fa-chalkboard-user', business:'fa-building-columns' };
  const plan = d.plan || 'free';
  const color = isVip ? '#f59e0b' : (planColors[plan] || '#10b981');
  const icon = isVip ? 'fa-star' : (planIcons[plan] || 'fa-seedling');
  const planLabel = isVip ? 'VIP' : planNames[plan];

  if (plan === 'free' && !isVip) {
    const pct = Math.min(100, Math.round((d.points / (d.daily_limit||120)) * 100));
    const warn = pct < 20;
    el.innerHTML = `
<div class="home-plan-bar ${warn?'warn':''}">
  <div class="hpb-left">
    <div class="hpb-plan-badge" style="background:${color}18;color:${color};border:1px solid ${color}40;">
      <i class="fas ${icon}"></i> ${planLabel}
    </div>
    <div class="hpb-points">
      <i class="fas fa-coins" style="color:#f59e0b"></i>
      <span>${LANG==='ru'?'Баллов сегодня':'Bugungi ball'}:</span>
      <b style="color:${warn?'#ef4444':'#f59e0b'}">${d.points}</b>
      <span style="color:var(--text-muted)">/ ${d.daily_limit}</span>
    </div>
    <div class="hpb-bar-wrap">
      <div class="hpb-bar" style="width:${pct}%;background:${warn?'#ef4444':'#f59e0b'}"></div>
    </div>
    <div class="hpb-limits">
      <span><i class="fas fa-layer-group" style="color:#6366f1"></i> ${d.quiz_count}/${d.max_quizzes} ${LANG==='ru'?'тестов':'test'}</span>
      <span><i class="fas fa-users" style="color:#10b981"></i> ${d.month_attempts}/${d.max_attempts} ${LANG==='ru'?'прох.':'o\'t.'}</span>
    </div>
  </div>
  <button class="btn btn-sm hpb-upgrade-btn" onclick="navigate('plans')">
    <i class="fas fa-crown"></i> ${LANG==='ru'?'Улучшить':'Yaxshilash'}
  </button>
</div>`;
  } else {
    el.innerHTML = `
<div class="home-plan-bar${isVip?' vip-plan-bar':''}">
  <div class="hpb-left">
    <div class="hpb-plan-badge" style="background:${color}18;color:${color};border:1px solid ${color}40;">
      <i class="fas ${icon}"></i> ${planLabel}${isVip?' ⭐':''}
    </div>
    <div class="hpb-limits">
      <span><i class="fas fa-layer-group" style="color:#6366f1"></i> ${d.quiz_count}/${d.max_quizzes===500?'500':d.max_quizzes} ${LANG==='ru'?'тестов':'test'}</span>
      <span><i class="fas fa-users" style="color:#10b981"></i> ${d.month_attempts?.toLocaleString('ru')} / ${d.max_attempts?.toLocaleString('ru')} ${LANG==='ru'?'прох.':'o\'t.'}</span>
      <span><i class="fas fa-mobile-screen" style="color:#0ea5e9"></i> ${d.device_count}/${d.max_devices} ${LANG==='ru'?'устр.':'qurilma'}</span>
    </div>
  </div>
  <button class="btn btn-sm" style="background:${color};color:#fff;" onclick="navigate('plans')">
    <i class="fas fa-star"></i> ${LANG==='ru'?'Управление':'Boshqarish'}
  </button>
</div>`;
  }
}

// Cache for access counts per quiz
const _accessCountCache = {};

async function loadAccessCounts(quizIds) {
  for (const id of quizIds) {
    if (_accessCountCache[id] !== undefined) continue;
    API.getAccesses(id).then(r => {
      if (r.ok) {
        const accesses = r.data?.accesses || [];
        _accessCountCache[id] = accesses.length;
        // Update badge in DOM if card visible
        const badge = document.querySelector(`.qc-access-badge[data-quiz-id="${id}"]`);
        if (badge) badge.textContent = accesses.length;
      }
    }).catch(()=>{});
  }
}

function renderQuizCard(quiz) {
  const attempts = state.history.filter(h=>h.quizId===quiz.id);
  const avgPct = attempts.length ? Math.round(attempts.reduce((s,h)=>s+h.percent,0)/attempts.length) : null;
  const locked = quiz.isLocked;
  const accessCount = _accessCountCache[quiz.id];
  return `
<div class="quiz-card${locked?' quiz-card-locked':''}" data-quiz-id="${quiz.id}">
  <div class="quiz-card-header">
    <div class="quiz-card-category">${escHtml(quiz.category||t('category'))}</div>
    ${locked ? `<span style="background:#fef2f2;color:#ef4444;border:1px solid #fecaca;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:700;"><i class="fas fa-lock"></i> ${LANG==='ru'?'Закрыт':'Yopiq'}</span>` : ''}
    <div class="quiz-card-title">${escHtml(quiz.title)}</div>
    <div class="quiz-card-desc">${escHtml(quiz.description||'')}</div>
  </div>
  <div class="quiz-card-body">
    <div class="quiz-card-meta">
      <div class="quiz-meta-item"><i class="fas fa-circle-question"></i> ${pluralQ(quiz.questions?.length||0)}</div>
      ${quiz.timeLimit?`<div class="quiz-meta-item"><i class="fas fa-stopwatch"></i> ${quiz.timeLimit} ${t('min')}</div>`:''}
      <div class="quiz-meta-item"><i class="fas fa-percent"></i> ${quiz.passingScore}%</div>
      ${attempts.length?`<div class="quiz-meta-item"><i class="fas fa-rotate"></i> ${attempts.length}x</div>`:''}
      ${state.user?`<div class="quiz-meta-item qc-access-item" style="cursor:pointer;color:var(--primary);font-size:11px;" data-action="accesses" data-quiz-id="${quiz.id}" title="${LANG==='ru'?'Кто открывал':'Kim ochdi'}"><i class="fas fa-eye"></i> <span class="qc-access-badge" data-quiz-id="${quiz.id}">${accessCount !== undefined ? accessCount : '...'}</span></div>`:''}
    </div>
    ${quiz.code?`<div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;"><i class="fas fa-hashtag"></i> <b style="color:var(--primary)">${quiz.code}</b> &nbsp;PIN: <b style="color:var(--warning,#f59e0b)">${quiz.pin||'????'}</b></div>`:''}
    ${avgPct!==null?`<div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;">${t('avgScore')}: <b style="color:var(--primary)">${avgPct}%</b></div>`:''}
    <div style="display:flex;gap:4px;flex-wrap:wrap;">
      ${[...new Set((quiz.questions||[]).map(q=>q.type))].map(tp=>`<span class="tag ${getTypeBadgeClass(tp)}">${getTypeLabel(tp)}</span>`).join('')}
    </div>
  </div>
  <div class="quiz-card-footer">
    <button class="btn btn-primary btn-sm qcf-main" data-action="start" data-quiz-id="${quiz.id}"><i class="fas fa-play"></i> ${t('startQuiz')}</button>
    <div class="qcf-actions-scroll">
      <button class="btn btn-secondary btn-sm btn-icon" title="${t('editQuiz')}" data-action="edit" data-quiz-id="${quiz.id}"><i class="fas fa-pen"></i></button>
      <button class="btn btn-secondary btn-sm btn-icon" title="${t('shareQuiz')}" data-action="share" data-quiz-id="${quiz.id}"><i class="fas fa-share-alt"></i></button>
      <button class="btn btn-secondary btn-sm btn-icon" title="${LANG==='ru'?'Кто открывал':'Kim ochdi'}" data-action="accesses" data-quiz-id="${quiz.id}"><i class="fas fa-users"></i>${accessCount!==undefined?` <span style="font-size:10px;font-weight:700;">${accessCount}</span>`:''}</button>
      <button class="btn btn-secondary btn-sm btn-icon" title="${LANG==='ru'?'Управление доступом':'Kirish boshqaruvi'}" data-action="restrict" data-quiz-id="${quiz.id}"><i class="fas fa-user-shield"></i></button>
      <button class="btn btn-sm btn-icon ${locked?'btn-warning':'btn-secondary'}" title="${locked?(LANG==='ru'?'Разблокировать тест':'Testni ochish'):(LANG==='ru'?'Заблокировать тест':'Testni bloklash')}" data-action="lock" data-quiz-id="${quiz.id}">
        <i class="fas ${locked?'fa-lock-open':'fa-lock'}"></i>
      </button>
      <button class="btn btn-danger btn-sm btn-icon" title="${t('deleteQuiz')}" data-action="delete" data-quiz-id="${quiz.id}"><i class="fas fa-trash"></i></button>
    </div>
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
      else if (action==='lock') toggleQuizLock(id);
      else if (action==='accesses') showAccessesModal(id);
      else if (action==='restrict') showRestrictionsModal(id);
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
    ${state.user ? `<button class="btn btn-secondary btn-sm" id="btn-sync-mq" title="${LANG==='ru'?'Синхронизировать тесты':'Sinxronlashtirish'}"><i class="fas fa-cloud-upload-alt"></i> ${LANG==='ru'?'Синхронизировать':'Sinxron'}</button>` : `<button class="btn btn-warning btn-sm" id="btn-login-mq"><i class="fas fa-sign-in-alt"></i> ${LANG==='ru'?'Войти для синхронизации':'Kirish'}</button>`}
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
  // Sync button — push all local quizzes to server
  document.getElementById('btn-sync-mq')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-sync-mq');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; }
    await pushAllLocalQuizzesToServer();
    await syncQuizzesFromServer();
    if (btn) { btn.disabled = false; btn.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> ${LANG==='ru'?'Синхронизировать':'Sinxron'}`; }
    toast(LANG==='ru'?'Тесты синхронизированы с сервером':'Testlar server bilan sinxronlandi', 'success');
    renderMyQuizzes();
  });
  // Login button for non-authenticated users
  document.getElementById('btn-login-mq')?.addEventListener('click', () => {
    showAuthScreen(() => { pushAllLocalQuizzesToServer(); renderMyQuizzes(); });
  });
  attachQuizCardEvents();
  // Lazy load access counts for quiz cards
  if (state.user && state.quizzes.length) {
    loadAccessCounts(state.quizzes.map(q=>q.id));
  }
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
    API.deleteQuiz(id).catch(()=>{});
    renderPageContent();
  });
}

async function toggleQuizLock(id) {
  const quiz = state.quizzes.find(q=>q.id===id);
  if (!quiz) return;
  const newLocked = !quiz.isLocked;
  // Оптимистично обновляем UI
  quiz.isLocked = newLocked;
  saveStorage(STORAGE.QUIZZES, state.quizzes);
  renderPageContent();
  toast(newLocked
    ? (LANG==='ru'?'🔒 Тест закрыт. Никто не сможет найти его по коду.':'🔒 Test yopildi.')
    : (LANG==='ru'?'🔓 Тест открыт. Теперь доступен по коду.':'🔓 Test ochildi.'),
    newLocked ? 'warning' : 'success', 4000);
  // Синхронизируем с сервером
  if (getAuthToken()) {
    const r = await API.lockQuiz(id, newLocked);
    if (!r.ok) {
      // Откат если ошибка
      quiz.isLocked = !newLocked;
      saveStorage(STORAGE.QUIZZES, state.quizzes);
      renderPageContent();
      toast(LANG==='ru'?'Ошибка: нужно войти в аккаунт':'Xato: akkauntga kirishingiz kerak', 'error');
    }
  } else {
    toast(LANG==='ru'?'Войдите в аккаунт чтобы блокировка сохранилась на сервере':'Bloklashni saqlash uchun akkauntga kiring', 'warning', 4000);
  }
}

async function showAccessesModal(id) {
  const quiz = state.quizzes.find(q=>q.id===id);
  if (!quiz) return;

  showModal(`
<div class="modal-header">
  <i class="fas fa-users" style="color:var(--primary)"></i>
  <span class="modal-title">${escHtml(quiz.title)}</span>
  <button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button>
</div>
<div class="modal-body" id="accesses-modal-body">
  <div style="text-align:center;padding:30px;"><i class="fas fa-spinner fa-spin" style="font-size:24px;color:var(--primary)"></i></div>
</div>`);

  if (!getAuthToken()) {
    document.getElementById('accesses-modal-body').innerHTML = `
      <div style="text-align:center;padding:20px;color:var(--text-muted)">
        <i class="fas fa-lock" style="font-size:32px;margin-bottom:12px;color:var(--warning)"></i>
        <div>${LANG==='ru'?'Войдите в аккаунт чтобы увидеть историю доступа':'Kirish tarixini ko\'rish uchun akkauntga kiring'}</div>
      </div>`;
    return;
  }

  // Загружаем параллельно: доступы и попытки
  const [rAccess, rAttempts] = await Promise.all([
    API.getAccesses(id).catch(()=>null),
    API.getAnalytics(id).catch(()=>null)
  ]);

  const body = document.getElementById('accesses-modal-body');
  if (!body) return;

  const accesses = rAccess?.accesses || rAccess?.data?.accesses || [];
  const attempts = rAttempts?.attempts || [];
  const stats = rAttempts?.stats || {};

  body.innerHTML = `
<!-- Заголовок с кодом -->
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:16px;padding:12px 16px;background:rgba(59,130,246,0.07);border-radius:10px;border:1px solid rgba(59,130,246,0.15);">
  <span style="font-size:13px;color:var(--text-muted)">${LANG==='ru'?'Код':'Kod'}:</span>
  <b style="font-size:15px;color:var(--primary);">${quiz.code}</b>
  <span style="font-size:13px;color:var(--text-muted)">PIN:</span>
  <b style="font-size:15px;">${quiz.pin}</b>
  <span style="margin-left:auto;font-size:12px;color:var(--text-muted)">${LANG==='ru'?'Участников с доступом':'Kirish bilan ishtirokchilar'}: <b style="color:var(--primary)">${accesses.length}</b></span>
  <span style="font-size:12px;color:var(--text-muted)">${LANG==='ru'?'Прохождений':'Urinishlar'}: <b style="color:var(--success)">${attempts.length}</b></span>
</div>

<!-- Вкладки -->
<div style="display:flex;gap:4px;margin-bottom:16px;">
  <button class="btn btn-primary btn-sm" id="tab-accesses-btn" style="border-radius:8px 8px 0 0;">${LANG==='ru'?'Кто открывал':'Kim ochdi'} (${accesses.length})</button>
  <button class="btn btn-secondary btn-sm" id="tab-attempts-btn" style="border-radius:8px 8px 0 0;">${LANG==='ru'?'Кто проходил':'Kim topshirdi'} (${attempts.length})</button>
</div>

<!-- Вкладка доступы -->
<div id="tab-accesses-content">
${accesses.length ? `
<div style="max-height:340px;overflow-y:auto;">
  <table class="history-table">
    <thead><tr>
      <th>#</th>
      <th>${LANG==='ru'?'Никнейм / Имя':'Nickname / Ism'}</th>
      <th>Email</th>
      <th>${LANG==='ru'?'Тип':'Tur'}</th>
      <th>${LANG==='ru'?'Последний вход':'Oxirgi kirish'}</th>
    </tr></thead>
    <tbody>
    ${accesses.map((a, i) => `
    <tr>
      <td style="color:var(--text-muted)">${i+1}</td>
      <td>
        <span style="font-size:16px;margin-right:6px;">${a.userAvatar && a.userAvatar.length<=4 ? escHtml(a.userAvatar) : '🧑'}</span>
        <b>${escHtml(a.userName||'Гость')}</b>
      </td>
      <td style="font-size:13px;color:var(--text-muted)">${a.userEmail ? escHtml(a.userEmail) : '—'}</td>
      <td>
        ${a.userId
          ? `<span class="badge badge-success" style="font-size:11px">${LANG==='ru'?'Аккаунт':'Akkaunt'}</span>`
          : `<span class="badge badge-secondary" style="font-size:11px">${LANG==='ru'?'Гость':'Mehmon'}</span>`}
      </td>
      <td style="font-size:12px;color:var(--text-muted)">${a.accessedAt ? new Date(a.accessedAt*1000).toLocaleString(LANG==='ru'?'ru-RU':'uz-UZ') : '—'}</td>
    </tr>`).join('')}
    </tbody>
  </table>
</div>` : `
<div style="text-align:center;padding:30px;color:var(--text-muted)">
  <i class="fas fa-user-slash" style="font-size:32px;margin-bottom:12px;opacity:0.4"></i>
  <div>${LANG==='ru'?'Никто ещё не открывал этот тест':'Hali hech kim bu testni ochmagandi'}</div>
</div>`}
</div>

<!-- Вкладка прохождения -->
<div id="tab-attempts-content" style="display:none">
${attempts.length ? `
<div style="margin-bottom:12px;display:flex;gap:16px;flex-wrap:wrap;">
  <span style="font-size:13px;color:var(--text-muted)">${LANG==='ru'?'Ср. результат':'O\'rt. natija'}: <b style="color:var(--primary)">${stats.avgPercent||0}%</b></span>
  <span style="font-size:13px;color:var(--text-muted)">${LANG==='ru'?'Прошли':'O\'tdi'}: <b style="color:var(--success)">${stats.passedCount||0}</b></span>
  <span style="font-size:13px;color:var(--text-muted)">${LANG==='ru'?'Ср. время':'O\'rt. vaqt'}: <b>${stats.avgDuration?formatTime(stats.avgDuration):'—'}</b></span>
</div>
<div style="max-height:340px;overflow-y:auto;">
  <table class="history-table">
    <thead><tr>
      <th>#</th>
      <th>${LANG==='ru'?'Участник':'Ishtirokchi'}</th>
      <th>${t('score')}</th>
      <th>${t('correct')}</th>
      <th>${t('wrong')}</th>
      <th>${t('duration')}</th>
      <th>${t('created')}</th>
    </tr></thead>
    <tbody>
    ${attempts.map((a, i) => `
    <tr>
      <td style="color:var(--text-muted)">${i+1}</td>
      <td><b>${escHtml(a.userName||'Гость')}</b></td>
      <td><span class="badge ${a.passed?'badge-success':'badge-danger'}">${a.percent}%</span></td>
      <td style="color:var(--success)">${a.correct}</td>
      <td style="color:var(--danger)">${a.wrong}</td>
      <td>${a.duration?formatTime(a.duration):'—'}</td>
      <td style="font-size:12px;color:var(--text-muted)">${a.createdAt?new Date(a.createdAt*1000).toLocaleString(LANG==='ru'?'ru-RU':'uz-UZ'):'—'}</td>
    </tr>`).join('')}
    </tbody>
  </table>
</div>` : `
<div style="text-align:center;padding:30px;color:var(--text-muted)">
  <i class="fas fa-clipboard-list" style="font-size:32px;margin-bottom:12px;opacity:0.4"></i>
  <div>${LANG==='ru'?'Этот тест ещё никто не проходил':'Bu testni hali hech kim topshirmagan'}</div>
</div>`}
</div>

<div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end">
  <button class="btn btn-secondary btn-sm" id="btn-export-accesses"><i class="fas fa-download"></i> CSV ${LANG==='ru'?'доступы':'kirish'}</button>
  <button class="btn btn-secondary btn-sm" id="btn-export-att"><i class="fas fa-download"></i> CSV ${LANG==='ru'?'прохождения':'urinishlar'}</button>
</div>`;

  // Переключение вкладок
  document.getElementById('tab-accesses-btn')?.addEventListener('click', () => {
    document.getElementById('tab-accesses-content').style.display = '';
    document.getElementById('tab-attempts-content').style.display = 'none';
    document.getElementById('tab-accesses-btn').className = 'btn btn-primary btn-sm';
    document.getElementById('tab-attempts-btn').className = 'btn btn-secondary btn-sm';
  });
  document.getElementById('tab-attempts-btn')?.addEventListener('click', () => {
    document.getElementById('tab-accesses-content').style.display = 'none';
    document.getElementById('tab-attempts-content').style.display = '';
    document.getElementById('tab-accesses-btn').className = 'btn btn-secondary btn-sm';
    document.getElementById('tab-attempts-btn').className = 'btn btn-primary btn-sm';
  });

  // Экспорт доступов
  document.getElementById('btn-export-accesses')?.addEventListener('click', () => {
    const rows = [['#','Имя','Email','Тип','Дата входа'].join(',')];
    accesses.forEach((a,i) => {
      rows.push([i+1, `"${(a.userName||'').replace(/"/g,'""')}"`, `"${(a.userEmail||'').replace(/"/g,'""')}"`,
        a.userId ? 'Аккаунт' : 'Гость',
        a.accessedAt ? new Date(a.accessedAt*1000).toLocaleString('ru-RU') : ''].join(','));
    });
    const blob = new Blob(['\uFEFF'+rows.join('\n')], {type:'text/csv;charset=utf-8;'});
    const link = document.createElement('a'); link.href = URL.createObjectURL(blob);
    link.download = `accesses_${quiz.code}.csv`; link.click();
  });

  // Экспорт прохождений
  document.getElementById('btn-export-att')?.addEventListener('click', () => {
    exportAdminCSV(attempts, `attempts_${quiz.code}`);
  });
}

// ═══════════════════════════════════════════════════════════════
// RESTRICTIONS MODAL — управление доступом конкретных пользователей
// ═══════════════════════════════════════════════════════════════
async function showRestrictionsModal(quizId) {
  const quiz = state.quizzes.find(q => q.id === quizId);
  if (!quiz) return;

  if (!getAuthToken()) {
    toast(LANG==='ru'?'Войдите в аккаунт':'Akkauntga kiring', 'warning');
    return;
  }

  showModal(`
<div class="modal-header">
  <i class="fas fa-user-shield" style="color:var(--primary)"></i>
  <span class="modal-title">${LANG==='ru'?'Управление доступом':'Kirish boshqaruvi'}: ${escHtml(quiz.title)}</span>
  <button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button>
</div>
<div class="modal-body" id="restrict-modal-body">
  <div style="text-align:center;padding:30px"><i class="fas fa-spinner fa-spin" style="font-size:24px;color:var(--primary)"></i></div>
</div>`);

  await renderRestrictionsContent(quizId, quiz.title);
}

async function renderRestrictionsContent(quizId, quizTitle) {
  const body = document.getElementById('restrict-modal-body');
  if (!body) return;

  // Загружаем список ограничений и историю доступов параллельно
  const [rRestrict, rAccess] = await Promise.all([
    API.getRestrictions(quizId).catch(() => null),
    API.getAccesses(quizId).catch(() => null)
  ]);

  if (!rRestrict || !rRestrict.ok) {
    body.innerHTML = `<div style="color:var(--danger);text-align:center;padding:20px">${LANG==='ru'?'Ошибка загрузки. Возможно вы не владелец теста.':'Xato. Siz test egasi emasdirsiz.'}</div>`;
    return;
  }

  const restrictions = rRestrict.restrictions || [];
  const accesses = rAccess?.accesses || [];

  // Пользователи из истории доступов, кого ещё не заблокировали
  const restrictedIds = new Set(restrictions.map(r => r.userId));
  const accessUsers = accesses.filter(a => a.userId && !restrictedIds.has(a.userId));

  body.innerHTML = `
<!-- Информация -->
<div style="padding:12px 16px;background:rgba(99,102,241,0.07);border-radius:10px;border:1px solid rgba(99,102,241,0.15);margin-bottom:18px;font-size:13px;color:var(--text-muted)">
  <i class="fas fa-info-circle" style="color:var(--primary)"></i>
  ${LANG==='ru'
    ? 'Заблокированные пользователи не смогут находить и проходить этот тест по коду+PIN.'
    : 'Bloklangan foydalanuvchilar bu testni kod+PIN orqali topa va topshira olmaydi.'}
</div>

<!-- Поиск пользователя для блокировки -->
<div style="margin-bottom:20px;">
  <div style="font-size:14px;font-weight:600;margin-bottom:8px;color:var(--text)">
    <i class="fas fa-user-plus" style="color:var(--danger)"></i>
    ${LANG==='ru'?'Заблокировать пользователя':'Foydalanuvchini bloklash'}
  </div>

  <!-- Быстрый выбор из истории доступов -->
  ${accessUsers.length ? `
  <div style="margin-bottom:12px;">
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;">${LANG==='ru'?'Кто уже открывал тест:':'Test ochganlar:'}</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;" id="access-users-chips">
      ${accessUsers.slice(0,10).map(a => `
      <div class="access-chip" data-user-id="${a.userId}" data-user-name="${escHtml(a.userName||'Гость')}" data-user-email="${escHtml(a.userEmail||'')}"
        style="display:flex;align-items:center;gap:6px;padding:5px 10px;background:var(--bg);border:1px solid var(--border);border-radius:20px;cursor:pointer;font-size:13px;transition:all .15s"
        title="${LANG==='ru'?'Нажмите чтобы заблокировать':'Bloklash uchun bosing'}">
        <span style="font-size:15px">${a.userAvatar && a.userAvatar.length<=4 ? escHtml(a.userAvatar) : '🧑'}</span>
        <span>${escHtml(a.userName||'Гость')}</span>
        <i class="fas fa-ban" style="color:var(--danger);font-size:11px"></i>
      </div>`).join('')}
    </div>
  </div>` : ''}

  <!-- Поиск по email/имени -->
  <div style="display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap;">
    <div style="flex:1;min-width:200px;">
      <input id="restrict-search-input" class="form-control" type="text"
        placeholder="${LANG==='ru'?'Поиск по email или имени…':'Email yoki ism bo\'yicha qidirish…'}"
        style="margin-bottom:6px;">
      <div id="restrict-search-results" style="background:var(--card);border:1px solid var(--border);border-radius:8px;display:none;max-height:180px;overflow-y:auto;box-shadow:0 4px 16px rgba(0,0,0,.1);"></div>
    </div>
  </div>

  <!-- Выбранный пользователь -->
  <div id="restrict-selected-user" style="display:none;margin-top:10px;padding:10px 14px;background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.2);border-radius:10px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div id="restrict-sel-avatar" style="font-size:20px">🧑</div>
      <div style="flex:1">
        <div id="restrict-sel-name" style="font-weight:600;font-size:14px"></div>
        <div id="restrict-sel-email" style="font-size:12px;color:var(--text-muted)"></div>
      </div>
      <button id="restrict-sel-clear" class="btn btn-icon-sm btn-secondary" title="${LANG==='ru'?'Отмена':'Bekor'}"><i class="fas fa-times"></i></button>
    </div>
    <div style="margin-top:8px;display:flex;gap:8px;align-items:center;">
      <input id="restrict-reason-input" class="form-control" type="text"
        placeholder="${LANG==='ru'?'Причина (необязательно)':'Sabab (ixtiyoriy)'}"
        style="flex:1;font-size:13px;">
      <button id="restrict-add-btn" class="btn btn-danger btn-sm">
        <i class="fas fa-ban"></i> ${LANG==='ru'?'Заблокировать':'Bloklash'}
      </button>
    </div>
  </div>
</div>

<!-- Список заблокированных -->
<div>
  <div style="font-size:14px;font-weight:600;margin-bottom:10px;color:var(--text);">
    <i class="fas fa-ban" style="color:var(--danger)"></i>
    ${LANG==='ru'?'Заблокированные пользователи':'Bloklangan foydalanuvchilar'}
    <span style="font-size:12px;color:var(--text-muted);font-weight:400;margin-left:6px;">(${restrictions.length})</span>
  </div>
  <div id="restrictions-list">
    ${restrictions.length ? renderRestrictionsList(restrictions, quizId) : `
    <div style="text-align:center;padding:20px;color:var(--text-muted);">
      <i class="fas fa-user-check" style="font-size:28px;opacity:0.35;margin-bottom:8px;display:block"></i>
      ${LANG==='ru'?'Нет ограничений. Тест доступен всем.':'Cheklovlar yo\'q. Test hammaga ochiq.'}
    </div>`}
  </div>
</div>`;

  // — Клик по чипу из истории доступов —
  document.querySelectorAll('.access-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      selectUserForRestriction(
        chip.dataset.userId,
        chip.dataset.userName,
        chip.dataset.userEmail,
        '🧑'
      );
    });
  });

  // — Поиск пользователя —
  let searchTimeout;
  const searchInput = document.getElementById('restrict-search-input');
  const searchResults = document.getElementById('restrict-search-results');
  searchInput?.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    const q = searchInput.value.trim();
    if (q.length < 2) { searchResults.style.display = 'none'; return; }
    searchTimeout = setTimeout(async () => {
      const r = await API.searchUsers(q).catch(() => null);
      if (!r || !r.ok || !r.users.length) {
        searchResults.innerHTML = `<div style="padding:12px;font-size:13px;color:var(--text-muted)">${LANG==='ru'?'Пользователи не найдены':'Foydalanuvchilar topilmadi'}</div>`;
        searchResults.style.display = '';
        return;
      }
      searchResults.innerHTML = r.users.map(u => `
        <div class="search-user-item" data-uid="${u.id}" data-uname="${escHtml(u.name)}" data-uemail="${escHtml(u.email||'')}" data-uavatar="${escHtml(u.avatar||'🧑')}"
          style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;transition:background .12s;border-bottom:1px solid var(--border)">
          <span style="font-size:18px">${u.avatar && u.avatar.length<=4 ? escHtml(u.avatar) : '🧑'}</span>
          <div>
            <div style="font-weight:600;font-size:13px">${escHtml(u.name)}</div>
            <div style="font-size:12px;color:var(--text-muted)">${escHtml(u.email||'')}</div>
          </div>
        </div>`).join('');
      searchResults.style.display = '';
      searchResults.querySelectorAll('.search-user-item').forEach(item => {
        item.addEventListener('mouseenter', () => item.style.background = 'var(--bg)');
        item.addEventListener('mouseleave', () => item.style.background = '');
        item.addEventListener('click', () => {
          selectUserForRestriction(item.dataset.uid, item.dataset.uname, item.dataset.uemail, item.dataset.uavatar);
          searchResults.style.display = 'none';
          searchInput.value = '';
        });
      });
    }, 350);
  });

  // Закрыть результаты при клике вне
  document.addEventListener('click', function hideSearch(e) {
    if (!searchResults?.contains(e.target) && e.target !== searchInput) {
      if (searchResults) searchResults.style.display = 'none';
      document.removeEventListener('click', hideSearch);
    }
  });

  // — Кнопка "Заблокировать" —
  document.getElementById('restrict-add-btn')?.addEventListener('click', async () => {
    const uid = document.getElementById('restrict-add-btn').dataset.userId;
    const reason = document.getElementById('restrict-reason-input')?.value.trim() || '';
    if (!uid) return;
    const btn = document.getElementById('restrict-add-btn');
    btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    const r = await API.addRestriction(quizId, uid, reason).catch(() => null);
    btn.disabled = false; btn.innerHTML = `<i class="fas fa-ban"></i> ${LANG==='ru'?'Заблокировать':'Bloklash'}`;
    if (r && r.ok) {
      toast(LANG==='ru'?'Пользователь заблокирован':'Foydalanuvchi bloklandi', 'success');
      await renderRestrictionsContent(quizId, quizTitle); // перерисовываем
    } else {
      toast(r?.error === 'user_not_found'
        ? (LANG==='ru'?'Пользователь не найден':'Foydalanuvchi topilmadi')
        : (LANG==='ru'?'Ошибка блокировки':'Bloklashda xato'), 'error');
    }
  });

  // — Кнопка очистить выбор —
  document.getElementById('restrict-sel-clear')?.addEventListener('click', () => {
    document.getElementById('restrict-selected-user').style.display = 'none';
    document.getElementById('restrict-add-btn').dataset.userId = '';
  });
}

function renderRestrictionsList(restrictions, quizId) {
  return `<div style="display:flex;flex-direction:column;gap:8px;">
  ${restrictions.map(r => `
  <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(239,68,68,0.05);border:1px solid rgba(239,68,68,0.15);border-radius:10px;" id="restr-row-${r.userId}">
    <div style="width:36px;height:36px;border-radius:50%;background:rgba(239,68,68,0.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <i class="fas fa-ban" style="color:#ef4444;font-size:15px"></i>
    </div>
    <div style="flex:1;min-width:0;">
      <div style="font-weight:600;font-size:14px;color:var(--text)">${escHtml(r.userName||'Unknown')}</div>
      <div style="font-size:12px;color:var(--text-muted)">${r.userEmail ? escHtml(r.userEmail) : (LANG==='ru'?'Email не указан':'Email ko\'rsatilmagan')}</div>
      ${r.reason ? `<div style="font-size:11px;color:var(--text-muted);margin-top:2px;font-style:italic">${LANG==='ru'?'Причина:':'Sabab:'} ${escHtml(r.reason)}</div>` : ''}
    </div>
    <div style="font-size:11px;color:var(--text-muted);white-space:nowrap;margin-right:6px;">${r.createdAt ? new Date(r.createdAt*1000).toLocaleDateString(LANG==='ru'?'ru-RU':'uz-UZ') : ''}</div>
    <button class="btn btn-success btn-sm btn-icon" title="${LANG==='ru'?'Снять блокировку':'Blokni olib tashlash'}" onclick="unrestrictUser('${quizId}','${r.userId}',this)">
      <i class="fas fa-unlock"></i>
    </button>
  </div>`).join('')}
</div>`;
}

async function unrestrictUser(quizId, userId, btn) {
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; }
  const r = await API.removeRestriction(quizId, userId).catch(() => null);
  if (r && r.ok) {
    // Удаляем строку из DOM
    const row = document.getElementById('restr-row-' + userId);
    if (row) {
      row.style.opacity = '0';
      row.style.transform = 'translateX(20px)';
      row.style.transition = 'all .25s';
      setTimeout(() => row.remove(), 250);
    }
    toast(LANG==='ru'?'Блокировка снята':'Blok olib tashlandi', 'success');
  } else {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-unlock"></i>'; }
    toast(LANG==='ru'?'Ошибка':'Xato', 'error');
  }
}

function selectUserForRestriction(userId, userName, userEmail, userAvatar) {
  const selDiv = document.getElementById('restrict-selected-user');
  const addBtn = document.getElementById('restrict-add-btn');
  if (!selDiv || !addBtn) return;

  document.getElementById('restrict-sel-avatar').textContent = userAvatar && userAvatar.length <= 4 ? userAvatar : '🧑';
  document.getElementById('restrict-sel-name').textContent = userName;
  document.getElementById('restrict-sel-email').textContent = userEmail || (LANG==='ru'?'Email не указан':'Email ko\'rsatilmagan');
  addBtn.dataset.userId = userId;
  selDiv.style.display = '';
}

function showShareModal(id) {
  const quiz = state.quizzes.find(q=>q.id===id);
  if (!quiz) return;
  ensureQuizCodes(quiz);
  saveStorage(STORAGE.QUIZZES, state.quizzes);
  const shareUrl = quizToShareUrl(quiz);
  const codeUrl = quizToCodeUrl(quiz);
  showModal(`
<div class="modal-header"><i class="fas fa-share-alt" style="color:var(--primary)"></i><span class="modal-title">${t('shareQuiz')}: ${escHtml(quiz.title)}</span><button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button></div>
<div class="modal-body">

  <!-- Code + PIN block -->
  <div style="display:flex;gap:12px;margin-bottom:18px;flex-wrap:wrap;">
    <div style="flex:1;min-width:120px;background:var(--primary-light);border:2px solid var(--primary);border-radius:12px;padding:14px;text-align:center;">
      <div style="font-size:11px;font-weight:600;color:var(--primary);letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;"><i class="fas fa-hashtag"></i> ${LANG==='ru'?'Код теста':'Test kodi'}</div>
      <div style="font-size:28px;font-weight:800;color:var(--primary);letter-spacing:.18em;">${quiz.code}</div>
    </div>
    <div style="flex:1;min-width:120px;background:var(--warning-light,#fff9e6);border:2px solid var(--warning,#f59e0b);border-radius:12px;padding:14px;text-align:center;">
      <div style="font-size:11px;font-weight:600;color:var(--warning,#f59e0b);letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;"><i class="fas fa-lock"></i> PIN</div>
      <div style="font-size:28px;font-weight:800;color:var(--warning,#f59e0b);letter-spacing:.18em;">${quiz.pin}</div>
    </div>
  </div>
  <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;text-align:center;">
    <i class="fas fa-circle-info"></i>
    ${LANG==='ru'?'Поделитесь кодом и PIN — получатель введёт их на главной странице':'Kod va PIN-ni ulashing — qabul qiluvchi bosh sahifada kiritadi'}
  </div>
  <div style="display:flex;gap:8px;margin-bottom:16px;">
    <button class="btn btn-secondary btn-sm" id="copy-code-pin-btn" style="flex:1"><i class="fas fa-copy"></i> ${LANG==='ru'?'Копировать код и PIN':'Kod va PIN nusxa'}</button>
    <button class="btn btn-secondary btn-sm" id="copy-code-url-btn" style="flex:1"><i class="fas fa-link"></i> ${LANG==='ru'?'Ссылка по коду':'Kod havolasi'}</button>
  </div>

  <hr class="divider">
  <p style="font-size:13px;font-weight:600;margin-bottom:8px;">${LANG==='ru'?'Прямая ссылка (открывает тест сразу)':'To\'g\'ridan-to\'g\'ri havola (testni darhol ochadi)'}</p>
  <div style="font-size:11px;color:var(--text-muted);margin-bottom:10px;">
    <i class="fas fa-info-circle"></i>
    ${LANG==='ru'?'Ссылка содержит весь тест — получатель может пройти его без кода':'Havola testning to\'liq ma\'lumotlarini o\'z ichiga oladi'}
  </div>
  <div class="share-link-box">
    <input class="share-link-input" id="share-url" value="${shareUrl}" readonly>
    <button class="btn btn-primary btn-sm" id="copy-link-btn"><i class="fas fa-copy"></i></button>
  </div>

  <hr class="divider">
  <p style="font-size:14px;font-weight:600;margin-bottom:10px">${LANG==='ru'?'Экспорт теста':'Testni eksport qilish'}</p>
  <div style="display:flex;gap:10px">
    <button class="btn btn-secondary btn-sm" id="export-quiz-json"><i class="fas fa-file-code"></i> JSON</button>
  </div>
</div>`);
  document.getElementById('copy-link-btn')?.addEventListener('click',()=>{
    navigator.clipboard.writeText(shareUrl).then(()=>toast(t('shareLinkCopied'),'success'));
  });
  document.getElementById('copy-code-pin-btn')?.addEventListener('click',()=>{
    const msg = `${LANG==='ru'?'Тест':'Test'}: ${quiz.title}\n${LANG==='ru'?'Код':'Kod'}: ${quiz.code}\nPIN: ${quiz.pin}\n${LANG==='ru'?'Ссылка':'Havola'}: ${shareUrl}`;
    navigator.clipboard.writeText(msg).then(()=>toast(t('shareLinkCopied'),'success'));
  });
  document.getElementById('copy-code-url-btn')?.addEventListener('click',()=>{
    navigator.clipboard.writeText(codeUrl).then(()=>toast(t('shareLinkCopied'),'success'));
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
// FOUND QUIZZES — чужие тесты найденные по коду+PIN
// ═══════════════════════════════════════════════════════════════
function renderFoundQuizzes() {
  const titleEl = document.getElementById('topbar-title');
  const actionsEl = document.getElementById('topbar-actions');
  const area = document.getElementById('content-area');
  if (!area) return;
  if (titleEl) titleEl.textContent = LANG==='ru'?'Найденные тесты':'Topilgan testlar';
  if (actionsEl) actionsEl.innerHTML = `
    <button class="btn btn-secondary btn-sm" id="btn-clear-found" title="${LANG==='ru'?'Очистить список':'Ro\'yxatni tozalash'}">
      <i class="fas fa-trash"></i> ${LANG==='ru'?'Очистить':'Tozalash'}
    </button>`;

  const fq = state.foundQuizzes;

  const renderCard = (q) => {
    const attempts = state.history.filter(h => h.quizId === q.id);
    const avgPct = attempts.length ? Math.round(attempts.reduce((s,h)=>s+h.percent,0)/attempts.length) : null;
    return `
<div class="found-quiz-card-v2" data-quiz-id="${q.id}">
  <div class="fqc-header">
    <div class="fqc-category">${escHtml(q.category || (LANG==='ru'?'Без категории':'Kategoriyasiz'))}</div>
    ${q.isLocked ? `<span class="fqc-locked"><i class="fas fa-lock"></i> ${LANG==='ru'?'Закрыт':'Yopiq'}</span>` : ''}
  </div>
  <div class="fqc-title">${escHtml(q.title)}</div>
  ${q.description ? `<div class="fqc-desc">${escHtml(q.description)}</div>` : ''}
  <div class="fqc-meta">
    <span><i class="fas fa-question-circle"></i> ${q.questions?.length||0} ${LANG==='ru'?'вопр.':'savol'}</span>
    <span><i class="fas fa-percentage"></i> ${q.passingScore||60}%</span>
    ${attempts.length ? `<span><i class="fas fa-rotate"></i> ${attempts.length}x ${avgPct!==null?`· ${avgPct}%`:''}</span>` : ''}
    ${q.timeLimit ? `<span><i class="fas fa-stopwatch"></i> ${q.timeLimit} ${LANG==='ru'?'мин':'daq'}</span>` : ''}
  </div>
  <div class="fqc-code-row">
    <span class="fqc-code">#${q.code}</span>
    <span class="fqc-pin">PIN: ${q.pin||'????'}</span>
  </div>
  <div class="fqc-actions">
    <button class="btn btn-primary btn-sm fqc-start" data-fq-start="${q.id}" ${q.isLocked?'disabled':''}>
      <i class="fas fa-play"></i> ${q.isLocked?(LANG==='ru'?'Закрыт':'Yopiq'):t('startQuiz')}
    </button>
    <button class="btn btn-secondary btn-sm btn-icon fqc-refresh" data-fq-refresh="${q.id}" title="${LANG==='ru'?'Обновить с сервера':'Serverdan yangilash'}">
      <i class="fas fa-rotate"></i>
    </button>
    <button class="btn btn-danger btn-sm btn-icon fqc-remove" data-fq-remove="${q.id}" title="${LANG==='ru'?'Удалить из списка':'Ro\'yxatdan o\'chirish'}">
      <i class="fas fa-times"></i>
    </button>
  </div>
</div>`;
  };

  area.innerHTML = `
<div class="fq-search-bar">
  <div class="search-box">
    <i class="fas fa-search"></i>
    <input type="text" id="fq-search" placeholder="${LANG==='ru'?'Поиск по названию…':'Nom bo\'yicha qidirish…'}">
  </div>
  <button class="btn btn-primary btn-sm" id="fq-find-new-btn">
    <i class="fas fa-plus"></i> ${LANG==='ru'?'Найти новый тест':'Yangi test topish'}
  </button>
</div>

<div class="fq-info-bar">
  <i class="fas fa-info-circle" style="color:var(--primary)"></i>
  <span>${LANG==='ru'
    ? 'Тесты других авторов, найденные по коду. Не входят в «Мои тесты».'
    : 'Boshqa mualliflarning kodlari orqali topilgan testlar.'}</span>
</div>

${fq.length ? `
<div class="found-quizzes-grid" id="found-quizzes-grid">
  ${fq.map(q => renderCard(q)).join('')}
</div>` : `
<div class="empty-state">
  <div class="empty-state-icon"><i class="fas fa-search"></i></div>
  <div class="empty-state-title">${LANG==='ru'?'Нет найденных тестов':'Topilgan testlar yo\'q'}</div>
  <div class="empty-state-text">${LANG==='ru'?'Введите 6-значный код и PIN на главной странице':'Asosiy sahifada 6 raqamli kod va PIN kiriting'}</div>
  <button class="btn btn-primary" id="btn-go-home-found"><i class="fas fa-search"></i> ${LANG==='ru'?'Перейти к поиску':'Qidiruvga o\'tish'}</button>
</div>`}`;

  // Поиск по названию
  document.getElementById('fq-search')?.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.found-quiz-card-v2').forEach(card => {
      const title = card.querySelector('.fqc-title')?.textContent?.toLowerCase() || '';
      card.style.display = title.includes(q) ? '' : 'none';
    });
  });

  document.getElementById('btn-go-home-found')?.addEventListener('click', () => navigate('home'));
  document.getElementById('fq-find-new-btn')?.addEventListener('click', () => {
    navigate('home');
    setTimeout(() => document.getElementById('find-code-input')?.focus(), 300);
  });

  document.getElementById('btn-clear-found')?.addEventListener('click', () => {
    confirm(LANG==='ru'?'Очистить весь список найденных тестов?':'Barcha topilgan testlarni tozalash?', () => {
      state.foundQuizzes = [];
      saveStorage(STORAGE.FOUND_QUIZZES, []);
      renderFoundQuizzes();
    });
  });

  // Запуск теста
  document.querySelectorAll('[data-fq-start]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.fqStart;
      const quiz = state.foundQuizzes.find(q => q.id === id);
      if (!quiz || quiz.isLocked) return;
      API.recordAccess(quiz.id, state.user?.name || 'Гость').catch(() => {});
      showStartScreen(quiz, {});
    });
  });

  // Обновить тест с сервера
  document.querySelectorAll('[data-fq-refresh]').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.stopPropagation();
      const id = btn.dataset.fqRefresh;
      const quiz = state.foundQuizzes.find(q => q.id === id);
      if (!quiz) return;
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      btn.disabled = true;
      // Ищем по коду+pin
      const r = await API.findByCodePin(quiz.code, quiz.pin);
      btn.innerHTML = orig; btn.disabled = false;
      if (r.ok && r.data.quiz) {
        const idx = state.foundQuizzes.findIndex(q => q.id === id);
        if (idx >= 0) state.foundQuizzes[idx] = r.data.quiz;
        saveStorage(STORAGE.FOUND_QUIZZES, state.foundQuizzes);
        toast(LANG==='ru'?'Тест обновлён':'Test yangilandi', 'success');
        renderFoundQuizzes();
      } else {
        toast(LANG==='ru'?'Не удалось обновить тест':'Testni yangilab bo\'lmadi', 'error');
      }
    });
  });

  // Удалить из списка
  document.querySelectorAll('[data-fq-remove]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.fqRemove;
      state.foundQuizzes = state.foundQuizzes.filter(q => q.id !== id);
      saveStorage(STORAGE.FOUND_QUIZZES, state.foundQuizzes);
      const card = document.querySelector(`[data-quiz-id="${id}"]`);
      if (card) { card.style.transition='opacity .3s'; card.style.opacity='0'; setTimeout(()=>card.remove(),300); }
      // Обновить бейдж
      renderSidebarBadge('found-quizzes', state.foundQuizzes.length || null);
      if (state.foundQuizzes.length === 0) setTimeout(renderFoundQuizzes, 350);
    });
  });

  // Клик на карточку
  document.querySelectorAll('.found-quiz-card-v2').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('button')) return;
      const id = card.dataset.quizId;
      const quiz = state.foundQuizzes.find(q => q.id === id);
      if (quiz && !quiz.isLocked) {
        API.recordAccess(quiz.id, state.user?.name || 'Гость').catch(() => {});
        showStartScreen(quiz, {});
      }
    });
  });
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
  // IMPORTANT: if state.editQuiz already has _importedFlag set, keep it (came from import)
  if (editId) {
    const found = state.quizzes.find(q=>q.id===editId);
    if (found) state.editQuiz = deepClone(found);
    else state.editQuiz = newQuizTemplate();
  } else if (!state.editQuiz || !state.editQuiz._importedFlag) {
    // Only create new template if NOT coming from import
    state.editQuiz = newQuizTemplate();
  }
  // Clear the import flag after consuming it
  if (state.editQuiz) delete state.editQuiz._importedFlag;

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
    code: genQuizCode(),
    pin:  genQuizPin(),
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
    ${quiz.code ? `
    <hr class="divider">
    <div style="background:var(--bg);border-radius:var(--radius-sm);padding:16px;margin-top:8px;">
      <div style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px;">
        <i class="fas fa-share-alt"></i> ${LANG==='ru'?'Идентификаторы для доступа':'Kirish identifikatorlari'}
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <div style="flex:1;min-width:100px;text-align:center;">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">${LANG==='ru'?'Код теста':'Test kodi'}</div>
          <div style="font-size:24px;font-weight:800;color:var(--primary);letter-spacing:.12em;font-family:monospace;">${quiz.code}</div>
        </div>
        <div style="flex:1;min-width:100px;text-align:center;">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;">PIN</div>
          <div style="font-size:24px;font-weight:800;color:var(--warning,#f59e0b);letter-spacing:.12em;font-family:monospace;">${quiz.pin}</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:10px;text-align:center;">
        <i class="fas fa-info-circle"></i> ${LANG==='ru'?'Эти данные используются для поиска теста на главной странице':'Bu ma\'lumotlar bosh sahifada test topish uchun ishlatiladi'}
      </div>
    </div>` : ''}
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

  // Push to server in background
  if (getAuthToken()) {
    pushQuizToServer(quiz).then(serverQuiz => {
      if (serverQuiz && serverQuiz.id) {
        const i = state.quizzes.findIndex(q=>q.id===serverQuiz.id);
        if (i>=0) { state.quizzes[i] = serverQuiz; saveStorage(STORAGE.QUIZZES, state.quizzes); }
      }
    });
    toast(t('savedSuccess'), 'success');
  } else {
    // Not logged in — saved locally, prompt to login for server sync
    toast(LANG==='ru'
      ? '✅ Сохранено локально. Войдите в аккаунт чтобы тест был доступен по коду с любого устройства.'
      : '✅ Mahalliy saqlandi. Boshqa qurilmalardan kod bilan topish uchun akkauntga kiring.',
      'warning', 5000);
  }
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

async function launchQuiz(quiz, overrides={}) {
  // Check monthly attempts limit for Free plan users
  if (state.user) {
    const r = await API.getPoints();
    if (r.ok && r.data) {
      const d = r.data;
      if (d.plan === 'free' && d.month_attempts >= d.max_attempts) {
        showModal(`
<div class="modal-header"><i class="fas fa-lock" style="color:#ef4444;font-size:20px"></i>
  <span class="modal-title">${LANG==='ru'?'Лимит попыток исчерпан':'Urinishlar limiti tugadi'}</span>
  <button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button>
</div>
<div class="modal-body" style="text-align:center;padding:32px 24px;">
  <div style="font-size:48px;margin-bottom:16px;">🚫</div>
  <div style="font-size:16px;font-weight:700;margin-bottom:8px;color:#ef4444;">
    ${LANG==='ru'?`Вы использовали ${d.month_attempts} из ${d.max_attempts} попыток в этом месяце`:`Bu oy ${d.max_attempts} urinishdan ${d.month_attempts}ini ishlatdingiz`}
  </div>
  <div style="font-size:14px;color:var(--text-muted);margin-bottom:24px;">
    ${LANG==='ru'?'Обновите тариф, чтобы продолжать проходить тесты':'Testlarni davom ettirish uchun tarifni yangilang'}
  </div>
  <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
    <button class="btn btn-secondary" onclick="closeModal()">${LANG==='ru'?'Закрыть':'Yopish'}</button>
    <button class="btn btn-primary" onclick="closeModal();navigate('plans')">
      <i class="fas fa-crown"></i> ${LANG==='ru'?'Купить тариф':'Tarif sotib olish'}
    </button>
  </div>
  <div style="margin-top:20px;font-size:12px;color:var(--text-muted);">
    <b style="color:#6366f1">Teacher — 29 000 сум/мес:</b> ${LANG==='ru'?'10 000 попыток/мес':'10 000 urinish/oy'}<br>
    <b style="color:#0ea5e9">Business — 69 000 сум/мес:</b> ${LANG==='ru'?'50 000 попыток/мес':'50 000 urinish/oy'}
  </div>
</div>`);
        return;
      }
    }
  }

  const maxQ = overrides.maxQuestions || quiz.maxQuestions || 0;
  let order = quiz.questions.map((_,i)=>i);
  if (quiz.shuffleQuestions) order = shuffle(order);
  if (maxQ > 0) order = order.slice(0, maxQ);

  // Записываем факт доступа на сервер
  API.recordAccess(quiz.id, state.user?.name || 'Гость').catch(()=>{});

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

  // Сохраняем попытку на сервер в фоне
  if (getAuthToken()) {
    API.saveAttempt({
      quizId: quiz.id,
      percent: pct,
      correct, wrong, skipped, total, passed,
      duration,
      userName: state.user?.name || 'Гость',
      answers: details
    }).catch(()=>{});
  }

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
      <button class="btn btn-secondary" id="btn-share-result"><i class="fas fa-share-alt"></i> ${t('shareQuiz')}</button>
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
  document.getElementById('btn-share-result')?.addEventListener('click',()=>{
    if (state.lastResult?.quiz?.id) showShareModal(state.lastResult.quiz.id);
  });
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
  const actionsEl = document.getElementById('topbar-actions');
  if (!area) return;
  if (titleEl) titleEl.textContent = t('admin');
  if (actionsEl) actionsEl.innerHTML = `
    <button class="btn btn-secondary btn-sm" id="btn-admin-refresh"><i class="fas fa-sync-alt"></i> ${LANG==='ru'?'Обновить':'Yangilash'}</button>
    <button class="btn btn-success btn-sm" id="btn-admin-export-csv"><i class="fas fa-file-csv"></i> ${LANG==='ru'?'Скачать CSV':'CSV yuklab olish'}</button>`;

  area.innerHTML = `<div style="text-align:center;padding:60px;"><i class="fas fa-spinner fa-spin" style="font-size:28px;color:var(--primary)"></i><div style="margin-top:12px;color:var(--text-muted)">${LANG==='ru'?'Загружаем аналитику…':'Tahlil yuklanmoqda…'}</div></div>`;

  async function loadAdminData() {
    if (!getAuthToken()) {
      area.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="fas fa-lock"></i></div>
        <div class="empty-state-title">${LANG==='ru'?'Требуется вход':'Kirish talab qilinadi'}</div>
        <div class="empty-state-text">${LANG==='ru'?'Войдите в аккаунт чтобы видеть статистику своих тестов':'Testlar statistikasini ko\'rish uchun akkauntga kiring'}</div>
        <button class="btn btn-primary" id="btn-admin-login"><i class="fas fa-sign-in-alt"></i> ${LANG==='ru'?'Войти':'Kirish'}</button>
      </div>`;
      document.getElementById('btn-admin-login')?.addEventListener('click', () => showAuthScreen(() => renderAdmin()));
      return;
    }

    const r = await API.getAdminOverview().catch(() => null);
    if (!r || !r.ok) {
      area.innerHTML = `<div style="padding:40px;text-align:center;color:var(--danger)"><i class="fas fa-exclamation-triangle"></i> ${LANG==='ru'?'Ошибка загрузки данных':'Ma\'lumotlarni yuklashda xatolik'}</div>`;
      return;
    }

    const { totalAttempts, totalUsers, recentAttempts, quizzes: qStats } = r;
    const allAttempts = recentAttempts || [];
    const maxAttempts = Math.max(1, ...qStats.map(s => s.attemptCount));
    const overallAvg = qStats.length ? Math.round(qStats.reduce((s, q) => s + (q.avgPercent || 0), 0) / qStats.length) : 0;
    const passRate = totalAttempts ? Math.round(allAttempts.filter(a => a.passed).length / Math.min(allAttempts.length, totalAttempts) * 100) : 0;

    // Сохраняем данные для экспорта
    window._adminData = { qStats, allAttempts, totalAttempts, totalUsers };

    area.innerHTML = `
<div class="grid-4" style="margin-bottom:24px">
  <div class="stat-card"><div class="stat-icon stat-icon-blue"><i class="fas fa-layer-group"></i></div><div><div class="stat-value">${qStats.length}</div><div class="stat-label">${t('quizzes')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-green"><i class="fas fa-users"></i></div><div><div class="stat-value">${totalAttempts}</div><div class="stat-label">${t('totalAttempts')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-orange"><i class="fas fa-percent"></i></div><div><div class="stat-value">${overallAvg}%</div><div class="stat-label">${t('avgScore')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-purple"><i class="fas fa-trophy"></i></div><div><div class="stat-value">${passRate}%</div><div class="stat-label">${LANG==='ru'?'Процент сдачи':'O\'tish foizi'}</div></div></div>
</div>

<div class="grid-2" style="margin-bottom:24px">
  <div class="analytics-chart">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px">${LANG==='ru'?'Попытки по тестам':'Testlar bo\'yicha urinishlar'}</div>
    ${qStats.length ? qStats.slice(0,8).map(s=>`
    <div class="chart-bar-row">
      <div class="chart-bar-label" title="${escHtml(s.title)}">${escHtml(s.title)}</div>
      <div class="chart-bar-wrap"><div class="chart-bar-fill blue" style="width:${Math.round(s.attemptCount/maxAttempts*100)}%"><span class="chart-bar-val">${s.attemptCount}</span></div></div>
    </div>`).join('') : `<div style="color:var(--text-muted);font-size:14px;padding:20px;text-align:center">${LANG==='ru'?'Нет данных':'Ma\'lumot yo\'q'}</div>`}
  </div>
  <div class="analytics-chart">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px">${t('avgScore')} %</div>
    ${qStats.length ? qStats.slice(0,8).map(s=>`
    <div class="chart-bar-row">
      <div class="chart-bar-label" title="${escHtml(s.title)}">${escHtml(s.title)}</div>
      <div class="chart-bar-wrap"><div class="chart-bar-fill ${(s.avgPercent||0)>=70?'green':(s.avgPercent||0)>=40?'orange':'red'}" style="width:${s.avgPercent||0}%"><span class="chart-bar-val">${s.avgPercent||0}%</span></div></div>
    </div>`).join('') : `<div style="color:var(--text-muted);font-size:14px;padding:20px;text-align:center">${LANG==='ru'?'Нет данных':'Ma\'lumot yo\'q'}</div>`}
  </div>
</div>

<div class="card" style="margin-bottom:24px">
  <div style="font-size:16px;font-weight:700;margin-bottom:16px">${LANG==='ru'?'Список тестов (подробно)':'Testlar ro\'yxati (batafsil)'}</div>
  <div style="overflow-x:auto">
  <table class="history-table">
    <thead><tr>
      <th>${t('quizTitle')}</th>
      <th>${t('category')}</th>
      <th>${LANG==='ru'?'Вопросов':'Savollar'}</th>
      <th>${t('totalAttempts')}</th>
      <th>${t('avgScore')}</th>
      <th>${LANG==='ru'?'Прошли':'O\'tdi'}</th>
      <th>${LANG==='ru'?'Ср.время':'O\'rt.vaqt'}</th>
      <th>${t('created')}</th>
      <th></th>
    </tr></thead>
    <tbody>
      ${qStats.map(s=>`
      <tr>
        <td><b>${escHtml(s.title)}</b></td>
        <td><span class="badge badge-primary">${escHtml(s.category||'—')}</span></td>
        <td>${s.questions?.length||0}</td>
        <td><b>${s.attemptCount}</b></td>
        <td><span class="badge ${(s.avgPercent||0)>=(s.passingScore||60)?'badge-success':'badge-danger'}">${s.avgPercent||0}%</span></td>
        <td>${s.passRate||0}%</td>
        <td style="color:var(--text-muted)">${s.avgDuration ? formatTime(s.avgDuration) : '—'}</td>
        <td style="font-size:12px;color:var(--text-muted)">${s.createdAt ? new Date(s.createdAt*1000).toLocaleDateString(LANG==='ru'?'ru-RU':'uz-UZ') : '—'}</td>
        <td style="display:flex;gap:6px;flex-wrap:nowrap">
          <button class="btn btn-icon-sm btn-secondary" data-admin-start="${s.id}" title="${t('startQuiz')}"><i class="fas fa-play"></i></button>
          <button class="btn btn-icon-sm btn-secondary" data-admin-edit="${s.id}" title="${t('editQuiz')}"><i class="fas fa-pen"></i></button>
          <button class="btn btn-icon-sm btn-primary" data-admin-details="${s.id}" title="${LANG==='ru'?'Подробные результаты':'Batafsil natijalar'}"><i class="fas fa-chart-bar"></i></button>
        </td>
      </tr>`).join('')}
    </tbody>
  </table>
  </div>
</div>

${allAttempts.length ? `
<div class="card">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
    <div style="font-size:16px;font-weight:700">${LANG==='ru'?'Последние прохождения':'Oxirgi urinishlar'} (${allAttempts.length})</div>
    <button class="btn btn-secondary btn-sm" id="btn-admin-dl-recent"><i class="fas fa-download"></i> ${LANG==='ru'?'Скачать':'Yuklab olish'}</button>
  </div>
  <div style="overflow-x:auto">
  <table class="history-table">
    <thead><tr>
      <th>#</th><th>${LANG==='ru'?'Тест':'Test'}</th><th>${LANG==='ru'?'Участник':'Ishtirokchi'}</th><th>${t('score')}</th><th>${t('correct')}</th><th>${t('wrong')}</th><th>${t('duration')}</th><th>${t('created')}</th>
    </tr></thead>
    <tbody>
      ${allAttempts.map((a,i)=>`
      <tr>
        <td style="color:var(--text-muted)">${i+1}</td>
        <td><b>${escHtml(a.quizTitle||'—')}</b></td>
        <td>${escHtml(a.userName||'Гость')}</td>
        <td><span class="badge ${a.passed?'badge-success':'badge-danger'}">${a.percent}%</span></td>
        <td style="color:var(--success)">${a.correct??'—'}</td>
        <td style="color:var(--danger)">${a.wrong??'—'}</td>
        <td>${a.duration ? formatTime(a.duration) : '—'}</td>
        <td style="font-size:12px;color:var(--text-muted)">${a.createdAt ? new Date(a.createdAt*1000).toLocaleString(LANG==='ru'?'ru-RU':'uz-UZ') : '—'}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  </div>
</div>` : ''}`;

    // Кнопки таблицы тестов
    document.querySelectorAll('[data-admin-start]').forEach(el=>el.addEventListener('click',()=>startQuiz(el.dataset.adminStart)));
    document.querySelectorAll('[data-admin-edit]').forEach(el=>el.addEventListener('click',()=>navigate('edit-quiz',{id:el.dataset.adminEdit})));
    document.querySelectorAll('[data-admin-details]').forEach(el=>el.addEventListener('click',()=>showAdminQuizDetails(el.dataset.adminDetails, qStats)));

    // Скачать последние прохождения
    document.getElementById('btn-admin-dl-recent')?.addEventListener('click',()=>{
      exportAdminCSV(allAttempts, 'recent-attempts');
    });
  }

  loadAdminData();

  // Кнопка обновить в topbar
  document.getElementById('btn-admin-refresh')?.addEventListener('click',()=>renderAdmin());

  // Кнопка скачать всё CSV
  document.getElementById('btn-admin-export-csv')?.addEventListener('click',()=>{
    if (window._adminData) exportAdminCSV(window._adminData.allAttempts, 'all-attempts');
    else toast(LANG==='ru'?'Данные ещё не загружены':'Ma\'lumotlar hali yuklanmagan','warning');
  });
}

// Подробные результаты по конкретному тесту (модальное окно)
async function showAdminQuizDetails(quizId, cachedStats) {
  const quiz = cachedStats?.find(q => q.id === quizId) || state.quizzes.find(q => q.id === quizId);
  showModal(`
<div class="modal-header">
  <i class="fas fa-chart-bar" style="color:var(--primary)"></i>
  <span class="modal-title">${escHtml(quiz?.title || quizId)}</span>
  <button class="btn btn-icon btn-secondary" onclick="closeModal()"><i class="fas fa-times"></i></button>
</div>
<div class="modal-body" id="quiz-details-body">
  <div style="text-align:center;padding:30px"><i class="fas fa-spinner fa-spin" style="font-size:24px;color:var(--primary)"></i></div>
</div>`);

  const r = await API.getAnalytics(quizId).catch(()=>null);
  const body = document.getElementById('quiz-details-body');
  if (!body) return;
  if (!r || !r.ok) {
    body.innerHTML = `<div style="color:var(--danger);text-align:center;padding:20px">${LANG==='ru'?'Ошибка загрузки':'Yuklab olishda xatolik'}</div>`;
    return;
  }

  const { stats, attempts } = r;
  body.innerHTML = `
<div class="grid-4" style="margin-bottom:20px">
  <div class="stat-card"><div class="stat-icon stat-icon-blue"><i class="fas fa-users"></i></div><div><div class="stat-value">${stats.total}</div><div class="stat-label">${t('totalAttempts')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-green"><i class="fas fa-percent"></i></div><div><div class="stat-value">${stats.avgPercent}%</div><div class="stat-label">${t('avgScore')}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-orange"><i class="fas fa-trophy"></i></div><div><div class="stat-value">${stats.passedCount}</div><div class="stat-label">${LANG==='ru'?'Прошли':'O\'tdi'}</div></div></div>
  <div class="stat-card"><div class="stat-icon stat-icon-purple"><i class="fas fa-clock"></i></div><div><div class="stat-value">${stats.avgDuration?formatTime(stats.avgDuration):'—'}</div><div class="stat-label">${LANG==='ru'?'Ср.время':'O\'rt.vaqt'}</div></div></div>
</div>
<div style="display:flex;justify-content:flex-end;margin-bottom:10px">
  <button class="btn btn-secondary btn-sm" id="btn-dl-quiz-csv"><i class="fas fa-download"></i> ${LANG==='ru'?'Скачать CSV':'CSV yuklab olish'}</button>
</div>
${attempts.length ? `
<div style="overflow-x:auto">
<table class="history-table">
  <thead><tr>
    <th>#</th><th>${LANG==='ru'?'Участник':'Ishtirokchi'}</th><th>${t('score')}</th><th>${t('correct')}</th><th>${t('wrong')}</th><th>${t('skipped')}</th><th>${t('duration')}</th><th>${t('created')}</th>
  </tr></thead>
  <tbody>
    ${attempts.map((a,i)=>`
    <tr>
      <td>${i+1}</td>
      <td>${escHtml(a.userName||'Гость')}</td>
      <td><span class="badge ${a.passed?'badge-success':'badge-danger'}">${a.percent}%</span></td>
      <td style="color:var(--success)">${a.correct}</td>
      <td style="color:var(--danger)">${a.wrong}</td>
      <td style="color:var(--text-muted)">${a.skipped}</td>
      <td>${a.duration?formatTime(a.duration):'—'}</td>
      <td style="font-size:12px;color:var(--text-muted)">${a.createdAt?new Date(a.createdAt*1000).toLocaleString(LANG==='ru'?'ru-RU':'uz-UZ'):'—'}</td>
    </tr>`).join('')}
  </tbody>
</table>
</div>` : `<div style="text-align:center;padding:20px;color:var(--text-muted)">${LANG==='ru'?'Прохождений ещё нет':'Hali urinishlar yo\'q'}</div>`}`;

  document.getElementById('btn-dl-quiz-csv')?.addEventListener('click', ()=>{
    exportAdminCSV(attempts, (quiz?.title||quizId).replace(/[^a-zA-Z0-9а-яА-Я]/g,'_').substring(0,30));
  });
}

// Экспорт прохождений в CSV
function exportAdminCSV(attempts, filename) {
  if (!attempts || !attempts.length) { toast(LANG==='ru'?'Нет данных для экспорта':'Eksport uchun ma\'lumot yo\'q','warning'); return; }
  const headers = ['#','Тест','Участник','Результат %','Правильно','Неправильно','Пропущено','Итог','Время','Дата'];
  const rows = attempts.map((a,i) => [
    i+1,
    `"${(a.quizTitle||a.quiz?.title||'').replace(/"/g,'""')}"`,
    `"${(a.userName||'Гость').replace(/"/g,'""')}"`,
    a.percent,
    a.correct??'',
    a.wrong??'',
    a.skipped??'',
    a.passed?(LANG==='ru'?'Прошёл':'O\'tdi'):(LANG==='ru'?'Не прошёл':'O\'tmadi'),
    a.duration?formatTime(a.duration):'',
    a.createdAt?new Date(a.createdAt*1000).toLocaleString('ru-RU'):''
  ]);
  const csv = '\uFEFF' + [headers, ...rows].map(r=>r.join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${filename || 'attempts'}_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(LANG==='ru'?'CSV файл скачан':'CSV fayl yuklab olindi','success');
}

// ═══════════════════════════════════════════════════════════════
// QR CODE GENERATOR (pure canvas, no lib needed)
// ═══════════════════════════════════════════════════════════════
function drawQRCode(canvasId, text) {
  // Minimal QR via qrcodegen micro-lib loaded from CDN if available
  // Fallback: draw a stylized placeholder with the text
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width; const H = canvas.height;
  ctx.clearRect(0,0,W,H);

  if (window.QRCode) {
    // Use qrcodejs if loaded
    try {
      const tmp = document.createElement('div');
      new window.QRCode(tmp, { text, width:W, height:H, correctLevel: window.QRCode.CorrectLevel.M });
      setTimeout(() => {
        const img = tmp.querySelector('img') || tmp.querySelector('canvas');
        if (img && img.tagName === 'CANVAS') {
          ctx.drawImage(img, 0, 0, W, H);
        } else if (img) {
          const i = new Image(); i.onload = () => ctx.drawImage(i,0,0,W,H); i.src = img.src;
        }
      }, 100);
      return;
    } catch(e) {}
  }

  // Pure JS QR — use qrcode-generator if available
  if (window.qrcode) {
    try {
      const qr = window.qrcode(0, 'M');
      qr.addData(text); qr.make();
      const moduleCount = qr.getModuleCount();
      const cellSize = Math.floor(W / (moduleCount + 4));
      const margin = Math.floor((W - cellSize * moduleCount) / 2);
      ctx.fillStyle = '#fff'; ctx.fillRect(0,0,W,H);
      ctx.fillStyle = '#000';
      for (let r = 0; r < moduleCount; r++) {
        for (let c = 0; c < moduleCount; c++) {
          if (qr.isDark(r,c)) ctx.fillRect(margin + c*cellSize, margin + r*cellSize, cellSize, cellSize);
        }
      }
      return;
    } catch(e) {}
  }

  // Fallback: draw visual placeholder with text and instructions
  ctx.fillStyle = '#f8fafc'; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 3;
  ctx.strokeRect(4,4,W-8,H-8);
  // Draw grid pattern to look QR-ish
  ctx.fillStyle = '#6366f1';
  const cell = 10; const rows = Math.floor(H/cell); const cols = Math.floor(W/cell);
  const seed = text.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) {
    if ((seed * (r+1) * (c+1)) % 3 === 0) ctx.fillRect(c*cell+2,r*cell+2,cell-2,cell-2);
  }
  // Corner markers
  [[0,0],[W-30,0],[0,H-30]].forEach(([x,y])=>{
    ctx.fillStyle='#fff'; ctx.fillRect(x,y,30,30);
    ctx.fillStyle='#6366f1'; ctx.fillRect(x,y,30,30);
    ctx.fillStyle='#fff'; ctx.fillRect(x+4,y+4,22,22);
    ctx.fillStyle='#6366f1'; ctx.fillRect(x+8,y+8,14,14);
  });
  // Center text
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.fillRect(W/2-60,H/2-18,120,36);
  ctx.fillStyle='#111'; ctx.font='bold 12px monospace'; ctx.textAlign='center';
  ctx.fillText(text.slice(0,8), W/2, H/2+4);

  // Load QR library dynamically for next call
  if (!window._qrLoading) {
    window._qrLoading = true;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js';
    s.onload = () => { window._qrLoading = false; };
    document.head.appendChild(s);
  }
}

// ═══════════════════════════════════════════════════════════════
// LIVE QUIZ SESSION
// ═══════════════════════════════════════════════════════════════
function renderLive() {
  const area = document.getElementById('content-area');
  const titleEl = document.getElementById('topbar-title');
  if (!area) return;
  if (titleEl) titleEl.innerHTML = `<i class="fas fa-circle live-dot-pulse" style="color:#ef4444;font-size:11px;margin-right:6px;"></i>${LANG==='ru'?'Live сессия':'Live sessiya'}`;

  // Stop any existing poll
  if (state.liveSession?.poll_interval) {
    clearInterval(state.liveSession.poll_interval);
    state.liveSession = null;
  }

  if (!state.user) {
    area.innerHTML = `<div class="live-auth-notice">
      <div class="live-auth-icon"><i class="fas fa-tower-broadcast"></i></div>
      <h3>${LANG==='ru'?'Live сессия — совместное прохождение тестов':'Live sessiya — birgalikda test ishlash'}</h3>
      <p>${LANG==='ru'?'Войдите в аккаунт, чтобы создать сессию как ведущий, или введите код для участия.':'Ведущий sifatida sessiya yaratish uchun kiring yoki ishtirok etish uchun kodni kiriting.'}</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:20px;">
        <button class="btn btn-primary" id="live-login-btn"><i class="fas fa-sign-in-alt"></i> ${LANG==='ru'?'Войти':'Kirish'}</button>
        <button class="btn btn-secondary" id="live-join-guest-btn"><i class="fas fa-user-secret"></i> ${LANG==='ru'?'Участвовать как гость':'Mehmon sifatida kirish'}</button>
      </div>
    </div>`;
    document.getElementById('live-login-btn')?.addEventListener('click', () => showAuthScreen(() => navigate('live')));
    document.getElementById('live-join-guest-btn')?.addEventListener('click', () => showLiveJoinModal());
    return;
  }

  area.innerHTML = `
<div class="live-page">
  <!-- Заголовок -->
  <div class="live-hero">
    <div class="live-hero-left">
      <div class="live-hero-icon"><i class="fas fa-tower-broadcast"></i></div>
      <div>
        <div class="live-hero-title">${LANG==='ru'?'Живая сессия теста':'Tirik test sessiyasi'}</div>
        <div class="live-hero-sub">${LANG==='ru'?'Проводите тесты в реальном времени с участниками':'Ishtirokchilar bilan real vaqtda test o\'tkazing'}</div>
      </div>
    </div>
  </div>

  <!-- Два блока: создать + присоединиться -->
  <div class="live-cards-row">
    <!-- Создать сессию -->
    <div class="live-card live-card-host">
      <div class="live-card-header">
        <div class="live-card-icon" style="background:linear-gradient(135deg,#8b5cf6,#6366f1)"><i class="fas fa-crown"></i></div>
        <div>
          <div class="live-card-title">${LANG==='ru'?'Создать сессию':'Sessiya yaratish'}</div>
          <div class="live-card-sub">${LANG==='ru'?'Вы — ведущий':'Siz — boshlovchi'}</div>
        </div>
      </div>
      <div class="live-card-body">
        <div class="live-form-group">
          <label>${LANG==='ru'?'Выберите тест:':'Testni tanlang:'}</label>
          <select id="live-quiz-select" class="live-select">
            <option value="">${LANG==='ru'?'— выберите тест —':'— testni tanlang —'}</option>
            ${state.quizzes.map(q => `<option value="${q.id}">${escHtml(q.title)} (${q.questions?.length||0} ${LANG==='ru'?'вопр.':'savol'})</option>`).join('')}
          </select>
        </div>
        <div class="live-form-group">
          <label>${LANG==='ru'?'Время на вопрос (сек):':'Savol vaqti (sek):'}</label>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${[15,20,30,45,60].map(s => `<button class="live-time-btn${s===30?' active':''}" data-secs="${s}">${s}с</button>`).join('')}
          </div>
        </div>
      </div>
      <button class="btn live-btn-host" id="live-create-btn">
        <i class="fas fa-play-circle"></i> ${LANG==='ru'?'Создать сессию':'Sessiya yaratish'}
      </button>
    </div>

    <!-- Присоединиться -->
    <div class="live-card live-card-join">
      <div class="live-card-header">
        <div class="live-card-icon" style="background:linear-gradient(135deg,#0ea5e9,#06b6d4)"><i class="fas fa-right-to-bracket"></i></div>
        <div>
          <div class="live-card-title">${LANG==='ru'?'Присоединиться':'Qo\'shilish'}</div>
          <div class="live-card-sub">${LANG==='ru'?'Вы — участник':'Siz — ishtirokchi'}</div>
        </div>
      </div>
      <div class="live-card-body">
        <div class="live-form-group">
          <label>${LANG==='ru'?'Код сессии (8 символов):':'Sessiya kodi (8 belgi):'}</label>
          <input class="live-code-input" id="live-join-code" type="text" maxlength="8"
            placeholder="ABC12345" autocomplete="off"
            style="text-transform:uppercase;letter-spacing:3px;font-size:20px;text-align:center;">
        </div>
        <div class="live-form-group">
          <label>${LANG==='ru'?'Ваше имя:':'Ismingiz:'}</label>
          <input class="live-input" id="live-join-name" type="text" maxlength="30"
            placeholder="${escHtml(state.user?.name || (LANG==='ru'?'Участник':'Ishtirokchi'))}"
            value="${escHtml(state.user?.name || '')}">
        </div>
      </div>
      <button class="btn live-btn-join" id="live-join-btn">
        <i class="fas fa-arrow-right"></i> ${LANG==='ru'?'Войти в сессию':'Sessiyaga kirish'}
      </button>
    </div>
  </div>

  <!-- История сессий -->
  <div id="live-history-section">
    <div style="text-align:center;padding:20px;color:var(--text-muted);"><i class="fas fa-spinner fa-spin"></i></div>
  </div>
</div>`;

  // Time selector
  let selectedSecs = 30;
  document.querySelectorAll('.live-time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.live-time-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSecs = parseInt(btn.dataset.secs);
    });
  });

  // Create session
  document.getElementById('live-create-btn')?.addEventListener('click', async () => {
    const quizId = document.getElementById('live-quiz-select').value;
    if (!quizId) { toast(LANG==='ru'?'Выберите тест':'Testni tanlang','warning'); return; }

    // Sync quiz to server first
    const quiz = state.quizzes.find(q => q.id === quizId);
    if (quiz) await pushQuizToServer(quiz).catch(() => {});

    const btn = document.getElementById('live-create-btn');
    btn.disabled = true; btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;

    const r = await API.liveCreate(quizId, selectedSecs);
    btn.disabled = false; btn.innerHTML = `<i class="fas fa-play-circle"></i> ${LANG==='ru'?'Создать сессию':'Sessiya yaratish'}`;

    if (!r.ok) {
      if (r.data?.error === 'no_points') {
        showUpgradeModal('live_start', r.data.have, r.data.need);
      } else {
        toast(r.data?.error || (LANG==='ru'?'Ошибка':'Xatolik'), 'error');
      }
      return;
    }
    startLiveHostView(r.data.session_id, r.data.max_participants);
  });

  // Join session
  document.getElementById('live-join-btn')?.addEventListener('click', async () => {
    const code = document.getElementById('live-join-code').value.trim().toUpperCase();
    const name = document.getElementById('live-join-name').value.trim() || state.user?.name || (LANG==='ru'?'Участник':'Ishtirokchi');
    if (code.length < 6) { toast(LANG==='ru'?'Введите код сессии':'Sessiya kodini kiriting','warning'); return; }
    await joinLiveSession(code, name, state.user?.avatar || '🧑');
  });

  document.getElementById('live-join-code')?.addEventListener('input', e => {
    e.target.value = e.target.value.toUpperCase();
  });

  loadLiveHistory();
}

async function loadLiveHistory() {
  const section = document.getElementById('live-history-section');
  if (!section) return;
  const r = await API.liveHistory();
  if (!r.ok || !r.data.sessions?.length) { section.innerHTML = ''; return; }
  section.innerHTML = `
<div style="margin-top:24px;">
  <div style="font-size:16px;font-weight:700;margin-bottom:12px;color:var(--text);">
    <i class="fas fa-history" style="color:var(--primary)"></i> ${LANG==='ru'?'Мои сессии':'Mening sessiyalarim'}
  </div>
  <div style="display:flex;flex-direction:column;gap:8px;">
  ${r.data.sessions.map(s => `
  <div class="live-hist-row" data-sid="${s.id}">
    <div class="live-hist-status ${s.status}"></div>
    <div style="flex:1;min-width:0;">
      <div style="font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escHtml(s.quiz_title||'?')}</div>
      <div style="font-size:12px;color:var(--text-muted);">${new Date(s.created_at*1000).toLocaleString('ru-RU')} · ${s.participant_count} ${LANG==='ru'?'уч.':'ish.'}</div>
    </div>
    <span class="live-hist-badge ${s.status}">${s.status==='waiting'?(LANG==='ru'?'Ожидание':'Kutish'):s.status==='active'?(LANG==='ru'?'Активна':'Faol'):(LANG==='ru'?'Завершена':'Tugadi')}</span>
    ${s.status!=='finished'?`<button class="btn btn-sm btn-primary live-resume-btn" data-sid="${s.id}">${LANG==='ru'?'Открыть':'Ochish'}</button>`:`<button class="btn btn-sm btn-secondary live-result-btn" data-sid="${s.id}"><i class="fas fa-chart-bar"></i></button>`}
  </div>`).join('')}
  </div>
</div>`;

  section.querySelectorAll('.live-resume-btn').forEach(btn => {
    btn.addEventListener('click', () => startLiveHostView(btn.dataset.sid, 0));
  });
  section.querySelectorAll('.live-result-btn').forEach(btn => {
    btn.addEventListener('click', () => showLiveResults(btn.dataset.sid));
  });
}

// ─── HOST VIEW ────────────────────────────────────────────────
async function startLiveHostView(sessionId, maxPart) {
  const area = document.getElementById('content-area');
  if (!area) return;

  state.liveSession = { id: sessionId, role: 'host', participant_id: null, poll_interval: null };

  const renderHostView = async () => {
    const r = await API.liveState(sessionId, null);
    if (!r.ok) return;
    const s = r.data;
    state.liveState = s;

    const joinUrl = `${location.origin}${location.pathname}?live=${sessionId}`;

    if (s.status === 'waiting') {
      area.innerHTML = `
<div class="live-host-screen">
  <div class="live-host-header">
    <div class="live-session-badge"><i class="fas fa-tower-broadcast live-dot-pulse"></i> ${LANG==='ru'?'Ожидание участников':'Ishtirokchilar kutilmoqda'}</div>
    <div class="live-session-code-big" id="live-code-display">${sessionId}</div>
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:10px;">${LANG==='ru'?'8-значный код — участники вводят его для входа':'8 belgili kod — ishtirokchilar uni kiritadi'}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:12px;">
      <button class="btn btn-sm btn-secondary" id="live-copy-link"><i class="fas fa-copy"></i> ${LANG==='ru'?'Скопировать ссылку':'Havolani nusxalash'}</button>
      <button class="btn btn-sm btn-secondary" id="live-copy-code"><i class="fas fa-hashtag"></i> ${LANG==='ru'?'Скопировать код':'Kodni nusxalash'}</button>
      <button class="btn btn-sm btn-secondary" id="live-show-qr"><i class="fas fa-qrcode"></i> QR-код</button>
    </div>
    <div id="live-qr-container" style="display:none;text-align:center;margin-bottom:12px;">
      <div style="display:inline-block;background:#fff;padding:12px;border-radius:14px;border:2px solid var(--primary);">
        <canvas id="live-qr-canvas" width="200" height="200"></canvas>
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:6px;">${LANG==='ru'?'Отсканируйте QR для входа в сессию':'QR-ni skanerlang va sessiyaga kiring'}</div>
    </div>
  </div>
  <div class="live-participants-waiting">
    <div style="font-size:15px;font-weight:700;margin-bottom:12px;">
      <i class="fas fa-users" style="color:var(--primary)"></i>
      ${LANG==='ru'?'Участники':'Ishtirokchilar'} (${s.participants.length}/${maxPart||'∞'})
    </div>
    <div class="live-avatars-grid" id="live-avatars">
      ${s.participants.map(p => `
      <div class="live-avatar-chip">
        <span class="live-avatar">${escHtml(p.avatar)}</span>
        <span>${escHtml(p.name)}</span>
      </div>`).join('') || `<div style="color:var(--text-muted);font-size:14px;padding:20px;">${LANG==='ru'?'Пока никто не подключился…':'Hali hech kim ulanmadi…'}</div>`}
    </div>
  </div>
  <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;flex-wrap:wrap;">
    ${s.participants.length > 0
      ? `<button class="btn live-btn-host" id="live-start-now"><i class="fas fa-play"></i> ${LANG==='ru'?'Начать тест':'Testni boshlash'} (${s.participants.length})</button>`
      : `<button class="btn btn-secondary" disabled><i class="fas fa-hourglass-half"></i> ${LANG==='ru'?'Ждём участников…':'Ishtirokchilar kutilmoqda…'}</button>`
    }
    <button class="btn btn-danger btn-sm" id="live-cancel-btn"><i class="fas fa-times"></i> ${LANG==='ru'?'Отменить':'Bekor qilish'}</button>
  </div>
</div>`;

      document.getElementById('live-copy-link')?.addEventListener('click', () => {
        navigator.clipboard.writeText(joinUrl).then(() => toast(LANG==='ru'?'Ссылка скопирована!':'Havola nusxalandi!','success'));
      });
      document.getElementById('live-copy-code')?.addEventListener('click', () => {
        navigator.clipboard.writeText(sessionId).then(() => toast(LANG==='ru'?'Код скопирован!':'Kod nusxalandi!','success'));
      });
      document.getElementById('live-show-qr')?.addEventListener('click', () => {
        const qrContainer = document.getElementById('live-qr-container');
        if (!qrContainer) return;
        const visible = qrContainer.style.display !== 'none';
        qrContainer.style.display = visible ? 'none' : 'block';
        if (!visible) drawQRCode('live-qr-canvas', joinUrl);
      });
      document.getElementById('live-start-now')?.addEventListener('click', async () => {
        await API.liveStart(sessionId);
        renderHostView();
      });
      document.getElementById('live-cancel-btn')?.addEventListener('click', async () => {
        await API.liveFinish(sessionId);
        if (state.liveSession?.poll_interval) clearInterval(state.liveSession.poll_interval);
        state.liveSession = null;
        navigate('live');
      });

    } else if (s.status === 'active') {
      const q = s.current_question;
      const timeLeft = q ? Math.max(0, s.q_time_limit - Math.floor(Date.now()/1000 - s.q_started_at)) : 0;
      const answered = q ? s.participants.filter(p => {/* approximation */true}).length : 0;

      area.innerHTML = `
<div class="live-host-screen">
  <div class="live-host-topbar">
    <div class="live-progress-info">
      <span class="live-q-counter">${LANG==='ru'?'Вопрос':'Savol'} ${s.current_q}/${s.total_questions}</span>
      <div class="live-progress-bar"><div class="live-progress-fill" style="width:${s.current_q/s.total_questions*100}%"></div></div>
    </div>
    <div class="live-timer-host ${timeLeft <= 5 ? 'danger' : timeLeft <= 10 ? 'warning' : ''}">
      <i class="fas fa-clock"></i> ${timeLeft}с
    </div>
    <div class="live-parts-count"><i class="fas fa-users"></i> ${s.participants.length}</div>
  </div>

  ${q ? `
  <div class="live-question-host">
    <div class="live-q-number">${LANG==='ru'?'Вопрос':'Savol'} ${s.current_q}</div>
    <div class="live-q-text">${escHtml(q.question)}</div>
    ${q.image ? `<img src="${escHtml(q.image)}" style="max-height:160px;border-radius:12px;margin:12px auto;display:block;">` : ''}
    ${(q.options||[]).length ? `
    <div class="live-options-host">
      ${q.options.map((opt, i) => `
      <div class="live-opt-host" style="--opt-color:${['#ef4444','#f59e0b','#10b981','#6366f1','#0ea5e9','#8b5cf6'][i%6]}">
        <span class="live-opt-letter">${String.fromCharCode(65+i)}</span>
        ${escHtml(opt)}
      </div>`).join('')}
    </div>` : ''}
  </div>` : ''}

  <!-- Лидерборд в процессе -->
  <div class="live-live-board">
    ${s.participants.slice(0,5).map((p,i) => `
    <div class="live-board-row">
      <span class="live-board-rank">${['🥇','🥈','🥉','4','5'][i]}</span>
      <span class="live-board-avatar">${escHtml(p.avatar)}</span>
      <span class="live-board-name">${escHtml(p.name)}</span>
      <span class="live-board-score">${p.score}</span>
    </div>`).join('')}
  </div>

  <div style="display:flex;gap:12px;justify-content:center;margin-top:16px;">
    <button class="btn live-btn-host" id="live-next-btn">
      ${s.current_q < s.total_questions
        ? `<i class="fas fa-forward"></i> ${LANG==='ru'?'Следующий вопрос':'Keyingi savol'}`
        : `<i class="fas fa-flag-checkered"></i> ${LANG==='ru'?'Завершить тест':'Testni yakunlash'}`
      }
    </button>
    <button class="btn btn-danger btn-sm" id="live-end-btn"><i class="fas fa-stop"></i></button>
  </div>
</div>`;

      document.getElementById('live-next-btn')?.addEventListener('click', async () => {
        const nr = await API.liveNext(sessionId);
        if (nr.data?.finished) {
          clearInterval(state.liveSession?.poll_interval);
          showLiveResults(sessionId);
        } else { renderHostView(); }
      });
      document.getElementById('live-end-btn')?.addEventListener('click', async () => {
        await API.liveFinish(sessionId);
        clearInterval(state.liveSession?.poll_interval);
        showLiveResults(sessionId);
      });

    } else if (s.status === 'finished') {
      clearInterval(state.liveSession?.poll_interval);
      showLiveResults(sessionId);
      return;
    }
  };

  await renderHostView();
  // Poll every 2s
  if (state.liveSession) {
    state.liveSession.poll_interval = setInterval(renderHostView, 2000);
  }
}

// ─── PARTICIPANT VIEW ────────────────────────────────────────
async function joinLiveSession(sessionId, name, avatar) {
  const r = await API.liveJoin(sessionId, name, avatar);
  if (!r.ok) {
    const msgs = { session_not_found: LANG==='ru'?'Сессия не найдена':'Sessiya topilmadi', session_finished: LANG==='ru'?'Сессия уже завершена':'Sessiya tugagan', session_full: LANG==='ru'?'Сессия переполнена':'Sessiya to\'la' };
    toast(msgs[r.data?.error] || (LANG==='ru'?'Ошибка подключения':'Ulanishda xatolik'), 'error');
    return;
  }
  const partId = r.data.participant_id;
  state.liveSession = { id: sessionId, role: 'participant', participant_id: partId, poll_interval: null };
  startLiveParticipantView(sessionId, partId);
}

function startLiveParticipantView(sessionId, partId) {
  const area = document.getElementById('content-area');
  if (!area) return;

  let lastQIndex = -1;
  let answered = false;

  const renderParticipantView = async () => {
    const r = await API.liveState(sessionId, partId);
    if (!r.ok) return;
    const s = r.data;
    state.liveState = s;

    if (s.status === 'waiting') {
      const partCount = s.participants.length;
      area.innerHTML = `
<div class="live-participant-screen">
  <div class="live-part-waiting">
    <div class="live-part-icon"><i class="fas fa-hourglass-half live-dot-pulse"></i></div>
    <h3>${LANG==='ru'?'Ожидание начала':'Boshlanishini kutish'}</h3>
    <p>${LANG==='ru'?'Ведущий скоро начнёт тест…':'Boshlovchi tez orada testni boshlaydi…'}</p>
    <div class="live-waiting-count">
      <i class="fas fa-users"></i> ${partCount} ${LANG==='ru'?'участников подключилось':'ishtirokchi ulandi'}
    </div>
    <div class="live-avatars-grid" style="margin-top:16px;">
      ${s.participants.map(p => `<div class="live-avatar-chip"><span class="live-avatar">${escHtml(p.avatar)}</span><span>${escHtml(p.name)}</span></div>`).join('')}
    </div>
  </div>
</div>`;
      return;
    }

    if (s.status === 'finished') {
      clearInterval(state.liveSession?.poll_interval);
      showLiveResults(sessionId, partId);
      return;
    }

    // Active
    const q = s.current_question;
    const qIndex = s.current_q - 1;
    const timeLeft = Math.max(0, s.q_time_limit - Math.floor(Date.now()/1000 - s.q_started_at));
    const myAns = s.my_answer;

    // New question — reset answered
    if (qIndex !== lastQIndex) { lastQIndex = qIndex; answered = !!myAns; }

    if (!q) return;

    area.innerHTML = `
<div class="live-participant-screen">
  <div class="live-part-topbar">
    <div style="font-size:13px;color:var(--text-muted);">${LANG==='ru'?'Вопрос':'Savol'} ${s.current_q}/${s.total_questions}</div>
    <div class="live-timer-part ${timeLeft<=5?'danger':timeLeft<=10?'warning':''}">${timeLeft}</div>
  </div>
  <div class="live-progress-bar" style="margin-bottom:16px;"><div class="live-progress-fill" style="width:${s.current_q/s.total_questions*100}%"></div></div>

  <div class="live-q-text-part">${escHtml(q.question)}</div>
  ${q.image ? `<img src="${escHtml(q.image)}" style="max-height:140px;border-radius:12px;margin:8px auto 16px;display:block;">` : ''}

  ${answered || myAns
    ? `<div class="live-answered-notice ${myAns?.is_correct?'correct':'wrong'}">
        ${myAns?.is_correct
          ? `<i class="fas fa-check-circle"></i> ${LANG==='ru'?'Правильно! +':'To\'g\'ri! +'}${myAns.points} ${LANG==='ru'?'очков':'ball'}`
          : `<i class="fas fa-times-circle"></i> ${LANG==='ru'?'Неверно':'Noto\'g\'ri'}`
        }
        <div style="font-size:12px;margin-top:6px;opacity:.8;">${LANG==='ru'?'Ждём следующий вопрос…':'Keyingi savol kutilmoqda…'}</div>
      </div>
      <div class="live-mini-board">
        ${s.participants.slice(0,3).map((p,i) => `<div class="live-mini-row"><span>${['🥇','🥈','🥉'][i]}</span><span>${escHtml(p.name)}</span><span>${p.score}</span></div>`).join('')}
      </div>`
    : `<div class="live-options-part" id="live-opts">
        ${(q.options||[]).map((opt,i) => `
        <button class="live-opt-part" data-val="${escHtml(opt)}"
          style="--opt-c:${['#ef4444','#f59e0b','#10b981','#6366f1','#0ea5e9','#8b5cf6'][i%6]}">
          <span class="live-opt-badge">${String.fromCharCode(65+i)}</span>
          <span>${escHtml(opt)}</span>
        </button>`).join('')}
        ${(q.type==='truefalse') ? `
        <button class="live-opt-part" data-val="true" style="--opt-c:#10b981"><span class="live-opt-badge">✓</span><span>${LANG==='ru'?'Правда':'To\'g\'ri'}</span></button>
        <button class="live-opt-part" data-val="false" style="--opt-c:#ef4444"><span class="live-opt-badge">✗</span><span>${LANG==='ru'?'Ложь':'Noto\'g\'ri'}</span></button>` : ''}
        ${(q.type==='text') ? `
        <div style="padding:12px 0;">
          <input class="live-input" id="live-text-ans" type="text" placeholder="${LANG==='ru'?'Ваш ответ…':'Javobingiz…'}" autofocus>
          <button class="btn live-btn-join" style="margin-top:10px;width:100%;" id="live-text-submit">
            <i class="fas fa-paper-plane"></i> ${LANG==='ru'?'Ответить':'Javob berish'}
          </button>
        </div>` : ''}
      </div>`
  }
</div>`;

    if (!answered && !myAns) {
      document.querySelectorAll('.live-opt-part').forEach(btn => {
        btn.addEventListener('click', async () => {
          answered = true;
          document.querySelectorAll('.live-opt-part').forEach(b => { b.disabled = true; b.style.opacity = '0.5'; });
          btn.style.opacity = '1'; btn.style.borderColor = 'var(--opt-c)'; btn.style.background = 'var(--opt-c)20';
          await API.liveAnswer(sessionId, partId, qIndex, btn.dataset.val);
        });
      });
      document.getElementById('live-text-submit')?.addEventListener('click', async () => {
        const val = document.getElementById('live-text-ans').value.trim();
        if (!val) return;
        answered = true;
        await API.liveAnswer(sessionId, partId, qIndex, val);
      });
    }
  };

  renderParticipantView();
  if (state.liveSession) {
    state.liveSession.poll_interval = setInterval(renderParticipantView, 1500);
  }
}

// ─── RESULTS ────────────────────────────────────────────────
async function showLiveResults(sessionId, myPartId = null) {
  const area = document.getElementById('content-area');
  if (!area) return;
  if (state.liveSession?.poll_interval) { clearInterval(state.liveSession.poll_interval); }

  const r = await API.liveResults(sessionId);
  if (!r.ok) { toast(LANG==='ru'?'Ошибка загрузки результатов':'Natijalar yuklanmadi','error'); return; }
  const res = r.data;

  const myPart = myPartId ? res.participants.find(p => p.id === myPartId) : null;
  const medals = ['🥇','🥈','🥉'];

  area.innerHTML = `
<div class="live-results-page">
  <div class="live-results-header">
    <div class="live-results-icon"><i class="fas fa-flag-checkered"></i></div>
    <h2>${LANG==='ru'?'Результаты Live сессии':'Live sessiya natijalari'}</h2>
    <div style="font-size:13px;color:var(--text-muted);">${res.total_questions} ${LANG==='ru'?'вопросов':'savol'} · ${res.participants.length} ${LANG==='ru'?'участников':'ishtirokchi'}</div>
  </div>

  ${myPart ? `
  <div class="live-my-result">
    <div class="live-my-rank">${medals[myPart.rank-1] || '#'+myPart.rank}</div>
    <div>
      <div style="font-size:22px;font-weight:800;">${myPart.score} ${LANG==='ru'?'очков':'ball'}</div>
      <div style="font-size:13px;color:var(--text-muted);">${myPart.correct}/${res.total_questions} ${LANG==='ru'?'правильно':'to\'g\'ri'} · ${myPart.pct}%</div>
    </div>
  </div>` : ''}

  <!-- Подиум top-3 -->
  ${res.participants.length >= 1 ? `
  <div class="live-podium">
    ${res.participants.slice(0,3).reverse().map((p,i) => {
      const realRank = res.participants.slice(0,3).length - i;
      const heights = [100, 140, 110];
      const h = [heights[2], heights[0], heights[1]][i];
      return `<div class="live-podium-place" style="height:${h}px;">
        <div class="live-podium-avatar">${escHtml(p.avatar)}</div>
        <div class="live-podium-name">${escHtml(p.name)}</div>
        <div class="live-podium-score">${p.score}</div>
        <div class="live-podium-rank" style="background:${['#f59e0b','#6b7280','#92400e'][realRank-1]||'#6b7280'}">${medals[realRank-1]||realRank}</div>
      </div>`;
    }).join('')}
  </div>` : ''}

  <!-- Таблица всех участников -->
  <div class="live-results-table">
    <div style="font-size:15px;font-weight:700;margin-bottom:12px;"><i class="fas fa-list-ol" style="color:var(--primary)"></i> ${LANG==='ru'?'Таблица участников':'Ishtirokchilar jadvali'}</div>
    ${res.participants.map(p => `
    <div class="live-result-row ${p.id===myPartId?'my-row':''}">
      <span class="live-result-rank">${medals[p.rank-1]||p.rank}</span>
      <span class="live-result-avatar">${escHtml(p.avatar)}</span>
      <span class="live-result-name">${escHtml(p.name)}</span>
      <span class="live-result-correct" title="${LANG==='ru'?'Правильных':'To\'g\'ri'}"><i class="fas fa-check" style="color:#10b981"></i> ${p.correct}</span>
      <span class="live-result-pct">${p.pct}%</span>
      <span class="live-result-score" style="color:var(--primary);font-weight:800;">${p.score}</span>
    </div>`).join('')}
  </div>

  <div style="text-align:center;margin-top:24px;">
    <button class="btn btn-primary" id="live-back-btn"><i class="fas fa-home"></i> ${LANG==='ru'?'На главную':'Bosh sahifa'}</button>
  </div>
</div>`;

  document.getElementById('live-back-btn')?.addEventListener('click', () => navigate('live'));
}

function showLiveJoinModal() {
  showModal(`
<div style="padding:20px;">
  <h3 style="margin-bottom:16px;"><i class="fas fa-right-to-bracket" style="color:var(--primary)"></i> ${LANG==='ru'?'Войти в сессию':'Sessiyaga kirish'}</h3>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <input class="live-code-input" id="modal-live-code" type="text" maxlength="8" placeholder="ABC12345"
      style="text-transform:uppercase;letter-spacing:3px;font-size:20px;text-align:center;padding:12px;border:2px solid var(--border);border-radius:10px;width:100%;box-sizing:border-box;">
    <input class="live-input" id="modal-live-name" type="text" maxlength="30" placeholder="${LANG==='ru'?'Ваше имя':'Ismingiz'}"
      style="padding:12px;border:2px solid var(--border);border-radius:10px;width:100%;box-sizing:border-box;font-size:15px;">
    <button class="btn live-btn-join" id="modal-join-btn" style="width:100%;">
      <i class="fas fa-arrow-right"></i> ${LANG==='ru'?'Войти':'Kirish'}
    </button>
  </div>
</div>`);
  document.getElementById('modal-live-code')?.addEventListener('input', e => e.target.value = e.target.value.toUpperCase());
  document.getElementById('modal-join-btn')?.addEventListener('click', async () => {
    const code = document.getElementById('modal-live-code').value.trim().toUpperCase();
    const name = document.getElementById('modal-live-name').value.trim() || (LANG==='ru'?'Гость':'Mehmon');
    if (code.length < 4) return;
    document.getElementById('modal-root').innerHTML = '';
    navigate('live');
    await joinLiveSession(code, name, '🧑');
  });
}

function showUpgradeModal(action, have, need) {
  const actionNames = { live_start: LANG==='ru'?'запуск Live сессии':'Live sessiyani boshlash', create_quiz: LANG==='ru'?'создание теста':'test yaratish', analytics: LANG==='ru'?'аналитика':'tahlil', export: LANG==='ru'?'экспорт':'eksport' };
  showModal(`
<div style="text-align:center;padding:24px 16px;">
  <div style="font-size:48px;margin-bottom:12px;">⚡</div>
  <h3 style="margin-bottom:8px;">${LANG==='ru'?'Недостаточно баллов':'Ballar yetarli emas'}</h3>
  <p style="color:var(--text-muted);font-size:14px;margin-bottom:16px;">
    ${LANG==='ru'?`Для действия «${actionNames[action]||action}» нужно <b>${need}</b> баллов, у вас <b>${have}</b>.`:
    `«${actionNames[action]||action}» uchun <b>${need}</b> ball kerak, sizda <b>${have}</b> bor.`}
  </p>
  <div style="display:flex;gap:10px;justify-content:center;">
    <button class="btn btn-secondary" onclick="document.getElementById('modal-root').innerHTML=''">
      ${LANG==='ru'?'Отмена':'Bekor'}
    </button>
    <button class="btn btn-primary" onclick="document.getElementById('modal-root').innerHTML='';navigate('plans')">
      <i class="fas fa-crown"></i> ${LANG==='ru'?'Улучшить тариф':'Tarifni yaxshilash'}
    </button>
  </div>
</div>`);
}

// ═══════════════════════════════════════════════════════════════
// PLANS / BILLING PAGE  (updated: Free/Teacher/Business + points)
// ═══════════════════════════════════════════════════════════════
async function renderPlans() {
  const area = document.getElementById('content-area');
  const titleEl = document.getElementById('topbar-title');
  if (!area) return;
  if (titleEl) titleEl.textContent = LANG === 'ru' ? 'Тарифы' : 'Tariflar';

  area.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:300px;">
    <i class="fas fa-spinner fa-spin" style="font-size:32px;color:var(--primary)"></i></div>`;

  const [plansRes, pointsRes] = await Promise.all([
    API.getPlans(),
    state.user ? API.getPoints() : Promise.resolve({ ok: false, data: {} }),
  ]);

  const plans = plansRes.ok ? (plansRes.data.plans || []) : [];
  const pd = pointsRes.ok ? pointsRes.data : null;
  const currentPlan = pd?.plan || 'free';

  const planMeta = {
    free:     { icon:'fa-seedling',   color:'#10b981', bg:'#f0fdf4', grad:'linear-gradient(135deg,#10b981,#059669)', popular:false, tag:'' },
    teacher:  { icon:'fa-chalkboard-user', color:'#6366f1', bg:'#eef2ff', grad:'linear-gradient(135deg,#6366f1,#8b5cf6)', popular:true,  tag:LANG==='ru'?'Популярный':'Mashhur' },
    business: { icon:'fa-building-columns', color:'#0ea5e9', bg:'#f0f9ff', grad:'linear-gradient(135deg,#0ea5e9,#0284c7)', popular:false, tag:LANG==='ru'?'Для центров':'Markazlar uchun' },
  };

  // Points widget
  let pointsHtml = '';
  if (pd && currentPlan === 'free') {
    const pct = Math.round((pd.points / (pd.daily_limit || 120)) * 100);
    const qPct = Math.round((pd.quiz_count / pd.max_quizzes) * 100);
    const aPct = Math.round((pd.month_attempts / pd.max_attempts) * 100);
    const warn = (pct < 30 || qPct > 80 || aPct > 80);
    pointsHtml = `
<div class="plans-limits-widget ${warn?'warn':''}">
  <div class="plw-header">
    <div class="plw-title"><i class="fas fa-bolt" style="color:#f59e0b"></i> ${LANG==='ru'?'Ваши лимиты (Free)':'Sizning limitlaringiz (Free)'}</div>
    ${warn?`<span class="plw-warn-badge"><i class="fas fa-triangle-exclamation"></i> ${LANG==='ru'?'Лимит заканчивается':'Limit tugayapti'}</span>`:''}
  </div>
  <div class="plw-grid">
    <div class="plw-item">
      <div class="plw-label"><i class="fas fa-coins" style="color:#f59e0b"></i> ${LANG==='ru'?'Баллы сегодня':'Bugungi ballar'}</div>
      <div class="plw-bar-wrap"><div class="plw-bar" style="width:${pct}%;background:${pct<30?'#ef4444':'#f59e0b'}"></div></div>
      <div class="plw-val">${pd.points} / ${pd.daily_limit}</div>
    </div>
    <div class="plw-item">
      <div class="plw-label"><i class="fas fa-layer-group" style="color:#6366f1"></i> ${LANG==='ru'?'Активных тестов':'Faol testlar'}</div>
      <div class="plw-bar-wrap"><div class="plw-bar" style="width:${qPct}%;background:${qPct>80?'#ef4444':'#6366f1'}"></div></div>
      <div class="plw-val">${pd.quiz_count} / ${pd.max_quizzes}</div>
    </div>
    <div class="plw-item">
      <div class="plw-label"><i class="fas fa-chart-line" style="color:#10b981"></i> ${LANG==='ru'?'Прохождений/мес':'O\'tishlar/oy'}</div>
      <div class="plw-bar-wrap"><div class="plw-bar" style="width:${aPct}%;background:${aPct>80?'#ef4444':'#10b981'}"></div></div>
      <div class="plw-val">${pd.month_attempts} / ${pd.max_attempts}</div>
    </div>
  </div>
  <div class="plw-costs">
    <div class="plw-costs-title">${LANG==='ru'?'Стоимость действий (баллы):':'Harakatlar narxi (ball):'}</div>
    <div class="plw-costs-grid">
      ${[['create_quiz',LANG==='ru'?'Создать тест':'Test yaratish',10],['import',LANG==='ru'?'Импорт файла':'Fayl import',15],['analytics',LANG==='ru'?'Аналитика':'Tahlil',10],['export',LANG==='ru'?'Экспорт':'Eksport',10],['live_start',LANG==='ru'?'Live сессия':'Live sessiya',15],['attempts_20',LANG==='ru'?'20 прохождений':'20 o\'tish',10]].map(([,lbl,cost])=>`
      <div class="plw-cost-item"><span>${lbl}</span><span class="plw-cost-badge">${cost}</span></div>`).join('')}
    </div>
  </div>
</div>`;
  } else if (pd && currentPlan !== 'free') {
    const expDate = pd.expires_at ? new Date(pd.expires_at*1000).toLocaleDateString('ru-RU') : null;
    pointsHtml = `
<div class="plans-active-sub">
  <i class="fas fa-check-circle" style="color:#10b981;font-size:22px;"></i>
  <div>
    <b>${LANG==='ru'?'Активная подписка:':'Faol obuna:'} ${plans.find(p=>p.id===currentPlan)?.name?.[LANG]||currentPlan}</b>
    ${expDate?`<div style="font-size:13px;color:var(--text-muted);">${LANG==='ru'?`до ${expDate}`:`${expDate} gacha`}</div>`:''}
  </div>
</div>`;
  }

  function renderPlanCard(p) {
    const meta = planMeta[p.id] || planMeta.free;
    const isCurrent = p.id === currentPlan;
    const name = LANG==='ru' ? p.name.ru : p.name.uz;
    const features = p.features || [];
    const maxQ = p.max_quizzes === -1 ? (LANG==='ru'?'∞ Безлимит':'∞ Cheksiz') : p.max_quizzes;
    const maxA = p.max_attempts === -1 ? '∞' : p.max_attempts?.toLocaleString('ru-RU');
    return `
<div class="plan-card2 ${isCurrent?'plan-card2-current':''} ${meta.popular?'plan-card2-popular':''}" style="--pc:${meta.color};--pg:${meta.grad};--pb:${meta.bg}">
  ${meta.popular?`<div class="pc2-ribbon"><i class="fas fa-fire"></i> ${meta.tag}</div>`:''}
  ${meta.tag && !meta.popular?`<div class="pc2-tag" style="background:${meta.color}20;color:${meta.color};">${meta.tag}</div>`:''}

  <div class="pc2-top" style="background:${meta.grad}">
    <div class="pc2-icon"><i class="fas ${meta.icon}"></i></div>
    <div class="pc2-name">${escHtml(name)}</div>
    <div class="pc2-price">
      ${p.price_uzs===0
        ? `<span class="pc2-price-free">${LANG==='ru'?'Бесплатно':'Bepul'}</span>`
        : `<span class="pc2-price-val">${p.price_uzs.toLocaleString('ru-RU')}</span><span class="pc2-price-sub"> ${LANG==='ru'?'сум/мес':'so\'m/oy'}</span>`
      }
    </div>
  </div>

  <div class="pc2-body">
    <div class="pc2-stats">
      <div class="pc2-stat"><i class="fas fa-layer-group"></i><span>${maxQ} ${LANG==='ru'?'тестов':'test'}</span></div>
      <div class="pc2-stat"><i class="fas fa-users"></i><span>${maxA} ${LANG==='ru'?'прох./мес':'o\'t./oy'}</span></div>
    </div>
    <ul class="pc2-features">
      ${features.map(f=>`<li><i class="fas fa-check-circle" style="color:${meta.color}"></i> ${escHtml(f)}</li>`).join('')}
    </ul>
    <div class="pc2-action">
      ${isCurrent
        ? `<button class="pc2-btn-current" disabled><i class="fas fa-check"></i> ${LANG==='ru'?'Текущий тариф':'Joriy tarif'}</button>`
        : p.price_uzs===0
          ? `<button class="pc2-btn" style="background:${meta.color}" data-plan-select="${p.id}"><i class="fas fa-arrow-right"></i> ${LANG==='ru'?'Выбрать':'Tanlash'}</button>`
          : `<button class="pc2-btn" style="background:${meta.color}" data-plan-select="${p.id}">
               <svg width="20" height="14" viewBox="0 0 60 20" fill="none" style="vertical-align:middle;margin-right:4px"><rect width="60" height="20" rx="4" fill="white" fill-opacity="0.25"/><text x="5" y="14" font-family="Arial" font-weight="800" font-size="12" fill="white">payme</text></svg>
               ${LANG==='ru'?'Оплатить':'To\'lash'}
             </button>`
      }
    </div>
  </div>
</div>`;
  }

  // Comparison table data
  const compareRows = [
    { label: LANG==='ru'?'Активных тестов':'Faol testlar',        free:'5',      teacher:'100',    business:'500' },
    { label: LANG==='ru'?'Прохождений/мес':'O\'tishlar/oy',       free:'300',    teacher:'10 000', business:'50 000' },
    { label: LANG==='ru'?'Баллы (Free)':'Ball (Free)',             free:'120/день',teacher:'—',     business:'—' },
    { label: LANG==='ru'?'Устройств':'Qurilmalar',                 free:'1',      teacher:'3',      business:'10' },
    { label: LANG==='ru'?'Live участников':'Live ishtirokchi',     free:'20',     teacher:'100',    business:'300' },
    { label: LANG==='ru'?'Аналитика':'Tahlil',                     free:'Базовая',teacher:'Полная', business:'Расширенная' },
    { label: LANG==='ru'?'Экспорт PDF/CSV':'Eksport PDF/CSV',      free:'✗',      teacher:'✓',      business:'✓' },
    { label: LANG==='ru'?'Сертификаты':'Sertifikatlar',            free:'✗',      teacher:'✓',      business:'✓' },
    { label: LANG==='ru'?'Управление доступом':'Kirish boshqaruvi',free:'✗',      teacher:'✓',      business:'✓' },
    { label: LANG==='ru'?'Сотрудники':'Xodimlar',                  free:'—',      teacher:'—',      business:'5' },
    { label: LANG==='ru'?'Приоритетная поддержка':'Ustuvor qo\'llab-quvvatlash',free:'✗',teacher:'✗',business:'✓' },
  ];

  area.innerHTML = `
<div class="billing-page2">
  <div class="billing-hero2">
    <div class="bh2-icon"><i class="fas fa-crown"></i></div>
    <h2 class="bh2-title">${LANG==='ru'?'Выберите тарифный план':'Tarif rejasini tanlang'}</h2>
    <p class="bh2-sub">${LANG==='ru'?'Начните бесплатно — улучшайте когда нужно':'Bepul boshlang — kerak bo\'lganda yaxshilang'}</p>
  </div>

  ${pointsHtml}

  <div class="plans-grid2">${plans.map(renderPlanCard).join('')}</div>

  <!-- Таблица сравнения -->
  <div class="plans-compare">
    <div class="plans-compare-title"><i class="fas fa-table-list" style="color:var(--primary)"></i> ${LANG==='ru'?'Сравнение тарифов':'Tariflarni solishtirish'}</div>
    <div style="overflow-x:auto;">
    <table class="compare-table">
      <thead>
        <tr>
          <th>${LANG==='ru'?'Функция':'Funksiya'}</th>
          <th><span style="color:#10b981"><i class="fas fa-seedling"></i></span> Free</th>
          <th><span style="color:#6366f1"><i class="fas fa-chalkboard-user"></i></span> ${LANG==='ru'?'Учитель':'O\'qituvchi'}</th>
          <th><span style="color:#0ea5e9"><i class="fas fa-building-columns"></i></span> ${LANG==='ru'?'Бизнес':'Biznes'}</th>
        </tr>
      </thead>
      <tbody>
        ${compareRows.map(row=>`
        <tr>
          <td>${row.label}</td>
          <td class="${row.free==='✗'?'cmp-no':row.free==='✓'?'cmp-yes':''}">${row.free}</td>
          <td class="${row.teacher==='✗'?'cmp-no':row.teacher==='✓'?'cmp-yes':''}">${row.teacher}</td>
          <td class="${row.business==='✗'?'cmp-no':row.business==='✓'?'cmp-yes':''}">${row.business}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    </div>
  </div>

  <!-- Payme info -->
  <div class="billing-payme-info">
    <div class="billing-payme-logo">
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none"><rect width="120" height="32" rx="8" fill="#00ADEF"/><text x="10" y="22" font-family="Arial,sans-serif" font-weight="700" font-size="16" fill="#fff">payme</text><circle cx="105" cy="16" r="8" fill="#fff" fill-opacity="0.2"/><text x="101" y="21" font-family="Arial,sans-serif" font-weight="700" font-size="12" fill="#fff">uz</text></svg>
    </div>
    <p>${LANG==='ru'?'Оплата через <b>Payme</b> — безопасная платёжная система Узбекистана. Поддерживаются карты <b>UzCard</b> и <b>Humo</b>.':'<b>Payme</b> orqali to\'lov — O\'zbekistonning xavfsiz to\'lov tizimi. <b>UzCard</b> va <b>Humo</b> kartalari qo\'llab-quvvatlanadi.'}</p>
    <div class="billing-cards">
      <div class="billing-card-item"><i class="fas fa-credit-card"></i> UzCard</div>
      <div class="billing-card-item"><i class="fas fa-credit-card"></i> Humo</div>
      <div class="billing-card-item"><i class="fas fa-lock"></i> SSL</div>
    </div>
  </div>

  ${!state.user?`<div class="billing-login-notice">
    <i class="fas fa-circle-info" style="color:var(--primary);font-size:22px;"></i>
    <div><b>${LANG==='ru'?'Войдите в аккаунт':'Akkauntga kiring'}</b>
    <div style="font-size:13px;color:var(--text-muted);margin-top:4px;">${LANG==='ru'?'Для управления подпиской необходимо войти':'Obuna boshqarish uchun kirishingiz kerak'}</div></div>
    <button class="btn btn-primary btn-sm" id="btn-plans-login"><i class="fas fa-sign-in-alt"></i> ${LANG==='ru'?'Войти':'Kirish'}</button>
  </div>`:''}
  ${state.user?`<div id="billing-history-section"><div style="text-align:center;padding:16px;color:var(--text-muted);font-size:13px;"><i class="fas fa-spinner fa-spin"></i></div></div>`:''}
</div>`;

  document.getElementById('btn-plans-login')?.addEventListener('click', () => showAuthScreen(() => navigate('plans')));
  document.querySelectorAll('[data-plan-select]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!state.user) { showAuthScreen(() => navigate('plans')); return; }
      if (btn.dataset.planSelect === 'free') { toast(LANG==='ru'?'Бесплатный план уже доступен':'Bepul tarif allaqachon mavjud','info'); return; }
      await handlePlanPurchase(btn.dataset.planSelect, btn);
    });
  });
  if (state.user) loadBillingHistory();
}

async function handlePlanPurchase(planId, btn) {
  const origHtml = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;
  const r = await API.createOrder(planId);
  btn.disabled = false; btn.innerHTML = origHtml;
  if (!r.ok) {
    if (r.data?.payme_configured === false) {
      showModal(`<div style="text-align:center;padding:24px 16px;">
        <div style="font-size:48px;margin-bottom:16px;">⚙️</div>
        <h3>${LANG==='ru'?'Payme не настроен':'Payme sozlanmagan'}</h3>
        <p style="color:var(--text-muted);font-size:14px;margin:12px 0;">${LANG==='ru'?'Добавьте PAYME_MERCHANT_ID и PAYME_SECRET_KEY в переменные окружения.':'PAYME_MERCHANT_ID va PAYME_SECRET_KEY ni muhit o\'zgaruvchilariga qo\'shing.'}</p>
        <button class="btn btn-secondary" onclick="document.getElementById('modal-root').innerHTML=''">${LANG==='ru'?'Понятно':'Tushundim'}</button>
      </div>`);
      return;
    }
    toast(r.data?.error||(LANG==='ru'?'Ошибка':'Xatolik'),'error'); return;
  }
  if (r.data.checkout_url) {
    window.open(r.data.checkout_url,'_blank');
    toast(LANG==='ru'?'Откроется страница оплаты Payme':'Payme to\'lov sahifasi ochiladi','info',5000);
  }
}

async function loadBillingHistory() {
  const section = document.getElementById('billing-history-section');
  if (!section) return;
  const r = await API.getBillingHistory();
  if (!r.ok || !r.data.payments?.length) { section.innerHTML=''; return; }
  const statusLabel = { pending:{ru:'⏳ Ожидает',uz:'⏳ Kutilmoqda'}, paid:{ru:'✅ Оплачено',uz:"✅ To'langan"}, cancelled:{ru:'❌ Отменён',uz:'❌ Bekor'}, failed:{ru:'⚠️ Ошибка',uz:'⚠️ Xato'} };
  section.innerHTML = `<div class="billing-history">
  <div style="font-size:15px;font-weight:700;margin-bottom:12px;"><i class="fas fa-receipt" style="color:var(--primary)"></i> ${LANG==='ru'?'История платежей':'To\'lov tarixi'}</div>
  <div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:13px;">
    <thead><tr style="border-bottom:2px solid var(--border);">
      <th style="text-align:left;padding:8px 12px;color:var(--text-muted);">${LANG==='ru'?'Дата':'Sana'}</th>
      <th style="text-align:left;padding:8px 12px;color:var(--text-muted);">${LANG==='ru'?'Тариф':'Tarif'}</th>
      <th style="text-align:right;padding:8px 12px;color:var(--text-muted);">${LANG==='ru'?'Сумма':'Summa'}</th>
      <th style="text-align:center;padding:8px 12px;color:var(--text-muted);">${LANG==='ru'?'Статус':'Holat'}</th>
    </tr></thead>
    <tbody>${r.data.payments.map(p=>`
    <tr style="border-bottom:1px solid var(--border);">
      <td style="padding:10px 12px;">${new Date(p.created_at*1000).toLocaleDateString('ru-RU')}</td>
      <td style="padding:10px 12px;font-weight:600;">${escHtml(LANG==='ru'?p.plan.name.ru:p.plan.name.uz)}</td>
      <td style="padding:10px 12px;text-align:right;font-weight:700;">${p.amount_uzs?.toLocaleString('ru-RU')} ${LANG==='ru'?'сум':'so\'m'}</td>
      <td style="padding:10px 12px;text-align:center;">${(statusLabel[p.status]||{ru:p.status,uz:p.status})[LANG]}</td>
    </tr>`).join('')}</tbody>
  </table></div>
</div>`;
}

// ═══════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════
function renderSettings() {
  const area = document.getElementById('content-area');
  const titleEl = document.getElementById('topbar-title');
  if (!area) return;
  if (titleEl) titleEl.textContent = t('settings');

  const u = state.user;
  const initials = u ? getInitials(u.name) : '?';
  const providerIcons = { google:'fab fa-google', facebook:'fab fa-facebook-f', apple:'fab fa-apple', whatsapp:'fab fa-whatsapp', email:'fas fa-envelope', guest:'fas fa-user-secret' };
  const providerColors = { google:'#4285F4', facebook:'#1877f2', apple:'#000', whatsapp:'#25d366', email:'var(--primary)', guest:'var(--text-muted)' };
  const providerIcon = u ? (providerIcons[u.provider] || 'fas fa-user') : 'fas fa-user';
  const providerColor = u ? (providerColors[u.provider] || 'var(--primary)') : 'var(--text-muted)';
  const providerLabel = u ? ({google:'Google', facebook:'Facebook', apple:'Apple', whatsapp:'WhatsApp', email:'Email', guest: LANG==='ru'?'Гость':'Mehmon'}[u.provider] || u.provider) : '';

  area.innerHTML = `
<div class="grid-2">

  <!-- ══ АККАУНТ ══ -->
  <div class="card" style="grid-column:1/-1">
    <div style="font-size:16px;font-weight:700;margin-bottom:16px"><i class="fas fa-user-circle" style="color:var(--primary)"></i> ${LANG==='ru'?'Аккаунт':'Akkaunt'}</div>
    ${u ? `
    <div style="display:flex;align-items:center;gap:16px;padding:14px;background:var(--bg);border-radius:12px;margin-bottom:16px;flex-wrap:wrap;">
      <div style="width:52px;height:52px;border-radius:50%;background:var(--primary);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">
        ${u.avatar && u.avatar.length <= 4 && u.avatar.match(/\p{Emoji}/u) ? u.avatar : `<span style="color:#fff;font-weight:700;font-size:18px;">${initials}</span>`}
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:16px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(u.name)}</div>
        <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">${u.email ? escHtml(u.email) : (LANG==='ru'?'Email не указан':'Email ko\'rsatilmagan')}</div>
        <div style="font-size:12px;color:${providerColor};margin-top:4px;font-weight:600;">
          <i class="${providerIcon}"></i> ${providerLabel}
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" id="btn-edit-profile"><i class="fas fa-pen"></i> ${LANG==='ru'?'Изменить имя':'Ismni o\'zgartirish'}</button>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <button class="btn btn-warning btn-sm" id="btn-switch-account">
        <i class="fas fa-exchange-alt"></i> ${LANG==='ru'?'Сменить аккаунт':'Akkauntni almashtirish'}
      </button>
      <button class="btn btn-danger btn-sm" id="btn-logout">
        <i class="fas fa-sign-out-alt"></i> ${LANG==='ru'?'Выйти из аккаунта':'Akkauntdan chiqish'}
      </button>
    </div>
    ` : `
    <div style="text-align:center;padding:20px;">
      <div style="font-size:40px;margin-bottom:12px;">👤</div>
      <div style="font-size:15px;color:var(--text-muted);margin-bottom:16px;">${LANG==='ru'?'Вы не вошли в аккаунт. Войдите чтобы тесты были доступны с любого устройства.':'Akkauntga kirmagansiz. Boshqa qurilmalardan foydalanish uchun kiring.'}</div>
      <button class="btn btn-primary" id="btn-login-settings">
        <i class="fas fa-sign-in-alt"></i> ${LANG==='ru'?'Войти в аккаунт':'Akkauntga kirish'}
      </button>
    </div>
    `}
  </div>

  <!-- ══ ЯЗЫК ══ -->
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

  <!-- ══ ДАННЫЕ ══ -->
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

</div>

<!-- Модал редактирования имени -->
<div id="edit-profile-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9999;align-items:center;justify-content:center;padding:20px;">
  <div style="background:var(--card,#fff);border-radius:16px;padding:28px 24px;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
    <div style="font-size:17px;font-weight:700;margin-bottom:16px;"><i class="fas fa-pen" style="color:var(--primary)"></i> ${LANG==='ru'?'Изменить имя':'Ismni o\'zgartirish'}</div>
    <input id="edit-profile-name" class="auth-name-input" type="text" maxlength="40"
      value="${u ? escHtml(u.name) : ''}"
      placeholder="${LANG==='ru'?'Ваше имя':'Ismingiz'}"
      style="margin-bottom:12px;">
    <div id="edit-profile-error" style="display:none;color:#ef4444;font-size:13px;margin-bottom:10px;"></div>
    <div style="display:flex;gap:10px;">
      <button id="edit-profile-cancel" class="btn btn-secondary" style="flex:1;">${LANG==='ru'?'Отмена':'Bekor'}</button>
      <button id="edit-profile-save" class="btn btn-primary" style="flex:1;"><i class="fas fa-check"></i> ${LANG==='ru'?'Сохранить':'Saqlash'}</button>
    </div>
  </div>
</div>`;

  // ── Язык ──
  document.getElementById('lang-ru')?.addEventListener('change',()=>{LANG='ru';localStorage.setItem('qm_lang','ru');renderApp();});
  document.getElementById('lang-uz')?.addEventListener('change',()=>{LANG='uz';localStorage.setItem('qm_lang','uz');renderApp();});

  // ── Данные ──
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

  // ── Аккаунт — не вошёл ──
  document.getElementById('btn-login-settings')?.addEventListener('click', () => {
    showAuthScreen(() => renderSettings());
  });

  // ── Аккаунт — вошёл ──

  // Редактировать имя
  const editModal = document.getElementById('edit-profile-modal');
  document.getElementById('btn-edit-profile')?.addEventListener('click', () => {
    if (editModal) editModal.style.display = 'flex';
    document.getElementById('edit-profile-name')?.focus();
  });
  document.getElementById('edit-profile-cancel')?.addEventListener('click', () => {
    if (editModal) editModal.style.display = 'none';
  });
  document.getElementById('edit-profile-save')?.addEventListener('click', async () => {
    const nameVal = document.getElementById('edit-profile-name')?.value.trim();
    const errEl = document.getElementById('edit-profile-error');
    if (!nameVal) { if(errEl){errEl.textContent=LANG==='ru'?'Введите имя':'Ismni kiriting';errEl.style.display='';} return; }
    const btn = document.getElementById('edit-profile-save');
    if (btn) { btn.disabled=true; btn.innerHTML=`<i class="fas fa-spinner fa-spin"></i>`; }
    const r = await API.updateProfile(nameVal, state.user?.avatar || '🧑');
    if (btn) { btn.disabled=false; btn.innerHTML=`<i class="fas fa-check"></i> ${LANG==='ru'?'Сохранить':'Saqlash'}`; }
    if (r.ok) {
      saveUser({ ...state.user, name: nameVal });
      if (editModal) editModal.style.display = 'none';
      toast(LANG==='ru'?'Имя обновлено':'Ism yangilandi', 'success');
      renderSettings();
    } else {
      if(errEl){errEl.textContent=LANG==='ru'?'Ошибка сохранения':'Saqlash xatosi';errEl.style.display='';}
    }
  });
  document.getElementById('edit-profile-name')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('edit-profile-save')?.click();
    if (e.key === 'Escape') { if(editModal) editModal.style.display='none'; }
  });

  // Сменить аккаунт (выход + показ экрана входа)
  document.getElementById('btn-switch-account')?.addEventListener('click', async () => {
    await API.logout().catch(()=>{});
    setAuthToken(null);
    saveUser(null);
    state.user = null;
    toast(LANG==='ru'?'Вы вышли из аккаунта. Войдите в новый.':'Akkauntdan chiqildi. Yangi akkauntga kiring.', 'info');
    showAuthScreen(() => renderSettings());
  });

  // Выйти из аккаунта
  document.getElementById('btn-logout')?.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;';
    overlay.innerHTML = `
      <div style="background:var(--card,#fff);border-radius:16px;padding:28px 24px;max-width:360px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.3);text-align:center;">
        <div style="width:56px;height:56px;background:rgba(239,68,68,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
          <i class="fas fa-sign-out-alt" style="color:#ef4444;font-size:22px;"></i>
        </div>
        <div style="font-size:17px;font-weight:700;margin-bottom:8px;">${LANG==='ru'?'Выйти из аккаунта?':'Akkauntdan chiqish?'}</div>
        <div style="font-size:14px;color:var(--text-muted);margin-bottom:24px;">${LANG==='ru'?'Ваши тесты останутся на сервере. Вы сможете войти снова в любое время.':'Testlaringiz serverda saqlanadi. Istalgan vaqt qaytib kirishingiz mumkin.'}</div>
        <div style="display:flex;gap:10px;">
          <button id="logout-cancel" style="flex:1;padding:11px;border:1px solid var(--border,#e5e7eb);background:var(--card,#fff);color:var(--text,#111);border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">${LANG==='ru'?'Отмена':'Bekor'}</button>
          <button id="logout-ok" style="flex:1;padding:11px;background:#ef4444;color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;"><i class="fas fa-sign-out-alt"></i> ${LANG==='ru'?'Выйти':'Chiqish'}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#logout-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#logout-ok').addEventListener('click', async () => {
      overlay.remove();
      await API.logout().catch(()=>{});
      setAuthToken(null);
      saveUser(null);
      state.user = null;
      toast(LANG==='ru'?'Вы вышли из аккаунта':'Akkauntdan chiqildi', 'success');
      renderSettings();
    });
    overlay.addEventListener('click', e => { if(e.target===overlay) overlay.remove(); });
  });
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

  // Use requestAnimationFrame so modal DOM is ready before attaching events
  requestAnimationFrame(() => {
    // Format tabs
    document.querySelectorAll('.fmt-tab').forEach(tab=>{
      tab.addEventListener('click',()=>{
        document.querySelectorAll('.fmt-tab').forEach(t2=>t2.classList.remove('active'));
        document.querySelectorAll('.fmt-panel').forEach(p=>p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`fmt-${tab.dataset.fmt}`)?.classList.add('active');
      });
    });

    // Drop zones — attach after DOM is ready
    setupDropZone('drop-zone-word',  'file-word',  ['docx','txt'],       handleWordFile);
    setupDropZone('drop-zone-json',  'file-json',  ['json'],             handleJsonFile);
    setupDropZone('drop-zone-excel', 'file-excel', ['xlsx','csv','xls'], handleExcelFile);
  });
}

function setupDropZone(zoneId, inputId, exts, handler) {
  const zone  = document.getElementById(zoneId);
  const input = document.getElementById(inputId);
  if (!zone || !input) return;

  // Click on zone → open file dialog (ignore clicks that already came from input)
  zone.addEventListener('click', e => {
    if (e.target === input) return; // don't double-trigger
    input.click();
  });

  // File selected via dialog
  input.addEventListener('change', () => {
    const f = input.files[0];
    if (!f) return;
    showFileChosen(zoneId, f.name);
    handler(f);
  });

  // Drag-and-drop
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const f = e.dataTransfer.files[0];
    if (f && exts.some(ext => f.name.toLowerCase().endsWith('.' + ext))) {
      showFileChosen(zoneId, f.name);
      handler(f);
    } else {
      showImportError(LANG==='ru'
        ? `Поддерживаемые форматы: ${exts.join(', ')}`
        : `Qo'llab-quvvatlanadigan formatlar: ${exts.join(', ')}`);
    }
  });
}

function showFileChosen(zoneId, name) {
  const zone = document.getElementById(zoneId);
  if (!zone) return;
  const hint = zone.querySelector('.drop-zone-hint');
  if (hint) hint.innerHTML = `<i class="fas fa-file-check" style="color:var(--success)"></i> <b style="color:var(--success)">${escHtml(name)}</b> — ${LANG==='ru'?'обработка…':'qayta ishlash…'}`;
}

let pendingImportQuestions = null;

function showImportPreview(questions) {
  pendingImportQuestions = questions;
  console.log('[Import] Preview questions:', questions.length);

  const sec  = document.getElementById('import-preview-section');
  const cnt  = document.getElementById('import-count-label');
  const list = document.getElementById('import-preview-list');
  const btn  = document.getElementById('btn-apply-import');
  const errEl = document.getElementById('import-error');

  if (!sec || !cnt || !list || !btn) {
    console.error('[Import] Preview elements not found in DOM');
    return;
  }

  // Hide any previous error
  if (errEl) errEl.style.display = 'none';

  sec.style.display = 'block';
  cnt.innerHTML = `<i class="fas fa-check-circle" style="color:var(--success)"></i> `
    + (LANG==='ru' ? `Найдено вопросов` : `Topilgan savollar`)
    + `: <b>${questions.length}</b>`;

  list.innerHTML = questions.slice(0,8).map((q,i)=>`
  <div class="preview-item">
    <span class="preview-item-num">${i+1}.</span>
    <span class="preview-item-type">${getTypeLabel(q.type)}</span>
    <span>${escHtml((q.question||'').slice(0,72))}</span>
  </div>`).join('')
  + (questions.length > 8
    ? `<div style="color:var(--text-muted);font-size:13px;padding:8px 14px">+ ${LANG==='ru'?'ещё':'yana'} ${questions.length-8}</div>`
    : '');

  // Enable and bind apply button (replace any old handler)
  btn.disabled = false;
  const newBtn = btn.cloneNode(true); // remove old listeners
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener('click', () => {
    console.log('[Import] Apply clicked, questions:', pendingImportQuestions?.length);
    if (!pendingImportQuestions?.length) return;
    applyImportToEditor(pendingImportQuestions);
  });
}

function showImportError(msg) {
  const el = document.getElementById('import-error');
  if (el) { el.textContent = msg; el.style.display='block'; }
}

function applyImportToEditor(questions) {
  // Always create a fresh quiz with imported questions (mark with flag to prevent override)
  if (!state.editQuiz || !state.editQuiz.title) {
    // No active editor — create new quiz
    state.editQuiz = newQuizTemplate();
    state.editQuiz.questions = questions.map((q,i)=>({...q, id: q.id||genId()}));
  } else {
    // Editor open — append
    state.editQuiz.questions.push(...questions.map(q=>({...q, id: q.id||genId()})));
  }
  state.editQIndex = state.editQuiz.questions.length > 0 ? 0 : -1;
  // Set flag so renderEditor doesn't overwrite with empty template
  state.editQuiz._importedFlag = true;
  closeModal();
  toast(t('importSuccess') + ' — ' + pluralQ(questions.length), 'success');
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
// AUTH SCREEN — реальная авторизация через backend API
// Google Identity Services для реального выбора аккаунта Google
// ═══════════════════════════════════════════════════════════════
const AVATARS = ['🧑','👩','👨','🧒','👧','👦','🧑‍💻','👩‍💻','👨‍🎓','👩‍🎓','🦸','🦹'];
let selectedAvatar = AVATARS[0];

// Google OAuth: используем One Tap / Sign In With Google если доступен,
// иначе показываем форму с email
function loadGoogleGSI() {
  if (window._gsiLoaded) return Promise.resolve();
  if (document.getElementById('gsi-script')) {
    return new Promise((resolve, reject) => {
      const el = document.getElementById('gsi-script');
      el.onload = () => { window._gsiLoaded = true; resolve(); };
      el.onerror = reject;
    });
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.id = 'gsi-script';
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true; s.defer = true;
    s.onload = () => { window._gsiLoaded = true; resolve(); };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function showAuthScreen(afterAuth) {
  document.getElementById('auth-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.className = 'auth-overlay';
  overlay.id = 'auth-overlay';
  overlay.innerHTML = `
    <div class="auth-card">
      <div class="auth-logo">
        <div class="auth-logo-icon"><i class="fas fa-brain"></i></div>
        <div class="auth-logo-text">${t('appName')}</div>
      </div>

      <!-- TAB switcher -->
      <div class="auth-tabs" id="auth-tabs">
        <button class="auth-tab active" data-tab="social">${LANG==='ru'?'Соцсети':'Ijtimoiy'}</button>
        <button class="auth-tab" data-tab="email">${LANG==='ru'?'Вход':'Kirish'}</button>
        <button class="auth-tab" data-tab="register">${LANG==='ru'?'Регистрация':'Ro\'yxat'}</button>
      </div>

      <!-- ══ SOCIAL tab ══ -->
      <div class="auth-panel" id="auth-panel-social">
        <div class="auth-subtitle" style="margin-bottom:14px;">${LANG==='ru'?'Выберите способ входа и введите ваши данные':'Kirish usulini tanlang va ma\'lumotlaringizni kiriting'}</div>

        <!-- Google — показываем форму с email -->
        <button class="social-btn social-google" id="btn-google-real" data-provider="google">
          <span class="social-icon"><svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg></span>
          <span class="social-label">${LANG==='ru'?'Войти через Google':'Google orqali kirish'}</span>
          <i class="fas fa-arrow-right social-arrow"></i>
        </button>

        <!-- Другие провайдеры — вводим имя + email -->
        <button class="social-btn social-facebook" data-provider="facebook">
          <span class="social-icon"><i class="fab fa-facebook-f" style="color:#1877f2"></i></span>
          <span class="social-label">${LANG==='ru'?'Продолжить с Facebook':'Facebook orqali kirish'}</span>
          <i class="fas fa-arrow-right social-arrow"></i>
        </button>
        <button class="social-btn social-apple" data-provider="apple">
          <span class="social-icon"><i class="fab fa-apple" style="color:#000"></i></span>
          <span class="social-label">${LANG==='ru'?'Продолжить с Apple':'Apple orqali kirish'}</span>
          <i class="fas fa-arrow-right social-arrow"></i>
        </button>
        <button class="social-btn social-whatsapp" data-provider="whatsapp">
          <span class="social-icon"><i class="fab fa-whatsapp" style="color:#25d366"></i></span>
          <span class="social-label">${LANG==='ru'?'Продолжить с WhatsApp':'WhatsApp orqali kirish'}</span>
          <i class="fas fa-arrow-right social-arrow"></i>
        </button>

        <!-- Форма для Google/Facebook/Apple/WhatsApp -->
        <div id="social-name-section" style="display:none;margin-top:14px;">
          <div class="auth-divider" id="social-provider-divider">${LANG==='ru'?'Введите данные для Facebook':'Facebook ma\'lumotlarini kiriting'}</div>
          <div class="auth-avatar-row" id="social-avatar-row">
            ${AVATARS.map(a=>`<div class="avatar-opt${a===selectedAvatar?' selected':''}" data-av="${a}">${a}</div>`).join('')}
          </div>
          <input class="auth-name-input" id="social-name-input" type="text" maxlength="40"
            placeholder="${LANG==='ru'?'Ваше имя *':'Ismingiz *'}">
          <input class="auth-name-input" id="social-email-input" type="email" maxlength="100"
            placeholder="${LANG==='ru'?'Email *':'Email *'}" style="margin-top:8px;" required>
          <div id="social-auth-error" class="auth-error" style="display:none"></div>
          <button class="auth-submit-btn" id="social-submit-btn">
            <i class="fas fa-sign-in-alt"></i> ${LANG==='ru'?'Войти':'Kirish'}
          </button>
        </div>

        <div class="auth-skip">
          <a id="auth-skip-link">${LANG==='ru'?'Продолжить без входа (гость)':'Kirmasdan davom etish (mehmon)'}</a>
        </div>
      </div>

      <!-- ══ EMAIL LOGIN tab ══ -->
      <div class="auth-panel" id="auth-panel-email" style="display:none">
        <div class="auth-title">${LANG==='ru'?'Вход по Email':'Email orqali kirish'}</div>
        <div class="auth-subtitle">${LANG==='ru'?'Введите email и пароль':'Email va parolni kiriting'}</div>
        <form id="login-form" autocomplete="on" onsubmit="return false">
          <input class="auth-name-input" id="login-email" type="email" placeholder="Email *" autocomplete="email" required>
          <input class="auth-name-input" id="login-password" type="password" placeholder="${LANG==='ru'?'Пароль *':'Parol *'}" style="margin-top:8px;" autocomplete="current-password" required>
          <div id="login-error" class="auth-error" style="display:none"></div>
          <button class="auth-submit-btn" id="login-submit-btn" type="submit">
            <i class="fas fa-sign-in-alt"></i> ${LANG==='ru'?'Войти':'Kirish'}
          </button>
        </form>
        <div class="auth-skip" style="margin-top:10px;">
          <a id="goto-register">${LANG==='ru'?'Нет аккаунта? Зарегистрироваться':'Akkaunt yo\'qmi? Ro\'yxatdan o\'ting'}</a>
        </div>
      </div>

      <!-- ══ REGISTER tab ══ -->
      <div class="auth-panel" id="auth-panel-register" style="display:none">
        <div class="auth-title">${LANG==='ru'?'Создать аккаунт':'Akkaunt yaratish'}</div>
        <div class="auth-subtitle">${LANG==='ru'?'Тесты сохраняются на сервере и доступны с любого устройства':'Testlar serverda saqlanib barcha qurilmalardan ochiladi'}</div>
        <div class="auth-avatar-row" id="reg-avatar-row">
          ${AVATARS.map(a=>`<div class="avatar-opt${a===selectedAvatar?' selected':''}" data-av="${a}">${a}</div>`).join('')}
        </div>
        <form id="reg-form" autocomplete="on" onsubmit="return false">
          <input class="auth-name-input" id="reg-name" type="text" maxlength="40"
            placeholder="${LANG==='ru'?'Имя или никнейм *':'Ism yoki taxallus *'}" autocomplete="name" required>
          <input class="auth-name-input" id="reg-email" type="email"
            placeholder="Email *" style="margin-top:8px;" autocomplete="email" required>
          <input class="auth-name-input" id="reg-password" type="password"
            placeholder="${LANG==='ru'?'Пароль (мин. 6 символов) *':'Parol (kamida 6 belgi) *'}" style="margin-top:8px;" autocomplete="new-password" required minlength="6">
          <input class="auth-name-input" id="reg-password2" type="password"
            placeholder="${LANG==='ru'?'Повторите пароль *':'Parolni takrorlang *'}" style="margin-top:8px;" autocomplete="new-password" required>
          <div id="reg-error" class="auth-error" style="display:none"></div>
          <button class="auth-submit-btn" id="reg-submit-btn" type="submit">
            <i class="fas fa-user-plus"></i> ${LANG==='ru'?'Зарегистрироваться':'Ro\'yxatdan o\'tish'}
          </button>
        </form>
        <div class="auth-skip" style="margin-top:10px;">
          <a id="goto-login">${LANG==='ru'?'Уже есть аккаунт? Войти':'Allaqon akkauntingiz bormi? Kiring'}</a>
        </div>
      </div>

    </div>`;
  document.body.appendChild(overlay);

  // ── Tab switching ──
  function switchTab(tabName) {
    overlay.querySelectorAll('.auth-tab').forEach(t2 => t2.classList.remove('active'));
    overlay.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
    overlay.querySelectorAll('.auth-panel').forEach(p => p.style.display = 'none');
    const panel = document.getElementById('auth-panel-' + tabName);
    if (panel) panel.style.display = '';
  }
  overlay.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // ── Helper functions ──
  function showError(elId, msg) {
    const el = document.getElementById(elId);
    if (el) { el.textContent = msg; el.style.display = ''; }
  }
  function hideError(elId) {
    const el = document.getElementById(elId);
    if (el) el.style.display = 'none';
  }
  function setLoading(btnId, loading, origLabel) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.disabled = loading;
    if (loading) {
      btn._origHtml = btn.innerHTML;
      btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${LANG==='ru'?'Загрузка…':'Yuklanmoqda…'}`;
    } else if (btn._origHtml) {
      btn.innerHTML = btn._origHtml;
    }
  }

  async function finishAuth(userData, token) {
    setAuthToken(token);
    saveUser(userData);
    overlay.remove();
    toast(LANG==='ru'?`Добро пожаловать, ${userData.name}!`:`Xush kelibsiz, ${userData.name}!`, 'success');
    // First push all local quizzes to server (so they become searchable)
    await pushAllLocalQuizzesToServer();
    // Then sync from server (merge)
    await syncQuizzesFromServer();
    syncHistoryFromServer();
    if (afterAuth) afterAuth();
    else renderApp();
  }

  // ══════════════════════════════════════════════
  // Все социальные кнопки (Google/Facebook/Apple/WhatsApp) — открывают форму с именем + email
  // ══════════════════════════════════════════════
  let currentProvider = 'google';

  function showSocialForm(provider) {
    const names = { google:'Google', facebook:'Facebook', apple:'Apple', whatsapp:'WhatsApp' };
    const sec = document.getElementById('social-name-section');
    const divider = document.getElementById('social-provider-divider');
    if (divider) divider.textContent = LANG==='ru'
      ? `Введите данные для ${names[provider]}`
      : `${names[provider]} ma'lumotlarini kiriting`;
    currentProvider = provider;
    overlay.querySelectorAll('.social-btn').forEach(b => { b.style.opacity='0.5'; b.style.borderColor=''; });
    const activeBtn = overlay.querySelector(`.social-btn[data-provider="${provider}"]`);
    if (activeBtn) { activeBtn.style.opacity='1'; activeBtn.style.borderColor='var(--primary)'; }
    if (sec) sec.style.display = '';
    hideError('social-auth-error');
    document.getElementById('social-name-input')?.focus();
  }

  overlay.querySelectorAll('.social-btn[data-provider]').forEach(btn => {
    btn.addEventListener('click', () => showSocialForm(btn.dataset.provider));
  });

  // Avatar selection (social tab)
  overlay.querySelectorAll('#social-avatar-row .avatar-opt').forEach(el => {
    el.addEventListener('click', () => {
      overlay.querySelectorAll('#social-avatar-row .avatar-opt').forEach(a => a.classList.remove('selected'));
      el.classList.add('selected');
      selectedAvatar = el.dataset.av;
    });
  });

  // Avatar selection (register tab)
  overlay.querySelectorAll('#reg-avatar-row .avatar-opt').forEach(el => {
    el.addEventListener('click', () => {
      overlay.querySelectorAll('#reg-avatar-row .avatar-opt').forEach(a => a.classList.remove('selected'));
      el.classList.add('selected');
      selectedAvatar = el.dataset.av;
    });
  });

  // ── Social submit (Facebook/Apple/WhatsApp/Google-fallback) ──
  document.getElementById('social-submit-btn')?.addEventListener('click', async () => {
    const name = document.getElementById('social-name-input')?.value.trim();
    const email = document.getElementById('social-email-input')?.value.trim();
    if (!name) { showError('social-auth-error', LANG==='ru'?'Введите имя':'Ismingizni kiriting'); return; }
    if (!email) { showError('social-auth-error', LANG==='ru'?'Email обязателен':'Email majburiy'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('social-auth-error', LANG==='ru'?'Введите корректный email':'To\'g\'ri email kiriting'); return; }
    hideError('social-auth-error');
    setLoading('social-submit-btn', true);
    const r = await API.social(currentProvider, name, email, selectedAvatar);
    setLoading('social-submit-btn', false);
    if (r.ok) {
      await finishAuth(r.data.user, r.data.token);
    } else {
      showError('social-auth-error', r.data.error || (LANG==='ru'?'Ошибка входа':'Kirish xatosi'));
    }
  });

  document.getElementById('social-name-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('social-email-input')?.focus();
  });
  document.getElementById('social-email-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('social-submit-btn')?.click();
  });

  // ── Email login submit ──
  document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;
    if (!email) { showError('login-error', LANG==='ru'?'Введите email':'Email kiriting'); return; }
    if (!password) { showError('login-error', LANG==='ru'?'Введите пароль':'Parol kiriting'); return; }
    hideError('login-error');
    setLoading('login-submit-btn', true);
    const r = await API.login(email, password);
    setLoading('login-submit-btn', false);
    if (r.ok) {
      await finishAuth(r.data.user, r.data.token);
    } else {
      const msg = r.data.error === 'not_found'
        ? (LANG==='ru'?'Аккаунт не найден. Зарегистрируйтесь.':'Akkaunt topilmadi. Ro\'yxatdan o\'ting.')
        : r.data.error === 'wrong_password'
          ? (LANG==='ru'?'Неверный пароль':'Noto\'g\'ri parol')
          : (LANG==='ru'?'Ошибка входа':'Kirish xatosi');
      showError('login-error', msg);
    }
  });

  // ── Register submit ──
  document.getElementById('reg-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim();
    const pass = document.getElementById('reg-password')?.value;
    const pass2 = document.getElementById('reg-password2')?.value;
    if (!name) { showError('reg-error', LANG==='ru'?'Введите имя':'Ismingizni kiriting'); return; }
    if (!email) { showError('reg-error', LANG==='ru'?'Email обязателен':'Email majburiy'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('reg-error', LANG==='ru'?'Введите корректный email':'To\'g\'ri email kiriting'); return; }
    if (!pass || pass.length < 6) { showError('reg-error', LANG==='ru'?'Пароль минимум 6 символов':'Parol kamida 6 belgi'); return; }
    if (pass !== pass2) { showError('reg-error', LANG==='ru'?'Пароли не совпадают':'Parollar mos kelmaydi'); return; }
    hideError('reg-error');
    setLoading('reg-submit-btn', true);
    const r = await API.register(name, email, pass, selectedAvatar, 'email');
    setLoading('reg-submit-btn', false);
    if (r.ok) {
      await finishAuth(r.data.user, r.data.token);
    } else {
      const msg = r.data.error === 'email_taken'
        ? (LANG==='ru'?'Этот email уже занят. Войдите через вкладку "Вход"':'Bu email band. "Kirish" yorlig\'idan kiring')
        : (r.data.error || (LANG==='ru'?'Ошибка регистрации':'Ro\'yxatdan o\'tish xatosi'));
      showError('reg-error', msg);
    }
  });

  // ── Go-to links ──
  document.getElementById('goto-register')?.addEventListener('click', () => switchTab('register'));
  document.getElementById('goto-login')?.addEventListener('click', () => switchTab('email'));

  // ── Guest ──
  document.getElementById('auth-skip-link')?.addEventListener('click', async () => {
    const r = await API.guest(LANG==='ru'?'Гость':'Mehmon');
    if (r.ok) {
      await finishAuth(r.data.user, r.data.token);
    } else {
      const user = { name: LANG==='ru'?'Гость':'Mehmon', avatar:'👤', provider:'guest' };
      saveUser(user);
      overlay.remove();
      if (afterAuth) afterAuth(); else renderApp();
    }
  });
}


// ═══════════════════════════════════════════════════════════════
// FIND QUIZ BY CODE/PIN
// ═══════════════════════════════════════════════════════════════
function renderFindQuizWidget() {
  return `
<div class="find-quiz-widget" id="find-quiz-widget">
  <div class="find-quiz-title">
    <i class="fas fa-magnifying-glass" style="color:var(--primary)"></i>
    ${LANG==='ru'?'Найти тест по коду':'Kod orqali test topish'}
  </div>
  <div class="find-quiz-subtitle">
    ${LANG==='ru'
      ? 'Введите 6-значный код теста и PIN-код для доступа'
      : '6 raqamli test kodini va PIN-kodni kiriting'}
  </div>
  <div class="code-inputs">
    <div class="code-input-group">
      <div class="code-input-label">${LANG==='ru'?'Код теста (6 цифр)':'Test kodi (6 raqam)'}</div>
      <input class="code-input-field" id="find-code-input" type="text" inputmode="numeric"
        maxlength="6" placeholder="000000" autocomplete="off">
    </div>
    <div class="code-input-group">
      <div class="code-input-label">PIN (4 ${LANG==='ru'?'цифры':'raqam'})</div>
      <input class="code-input-field" id="find-pin-input" type="text" inputmode="numeric"
        maxlength="4" placeholder="0000" autocomplete="off">
    </div>
  </div>
  <div class="find-error-msg" id="find-error-msg">
    <i class="fas fa-circle-xmark"></i>
    <span id="find-error-text">${LANG==='ru'?'Тест не найден. Проверьте код и PIN.':'Test topilmadi. Kod va PIN-ni tekshiring.'}</span>
  </div>
  <button class="btn btn-primary" style="width:100%" id="find-quiz-btn">
    <i class="fas fa-search"></i>
    ${LANG==='ru'?'Найти и начать тест':'Testni topish va boshlash'}
  </button>
</div>`;
}

function attachFindQuizEvents() {
  const codeInput = document.getElementById('find-code-input');
  const pinInput  = document.getElementById('find-pin-input');
  const btn       = document.getElementById('find-quiz-btn');
  const errMsg    = document.getElementById('find-error-msg');
  const errText   = document.getElementById('find-error-text');

  if (!codeInput || !pinInput || !btn) return;

  [codeInput, pinInput].forEach(inp=>{
    inp.addEventListener('input', ()=>{ inp.value = inp.value.replace(/\D/g,''); });
    inp.addEventListener('keydown', e=>{ if (e.key==='Enter') btn.click(); });
  });
  codeInput.addEventListener('input', ()=>{
    if (codeInput.value.length === 6) pinInput.focus();
  });

  btn.addEventListener('click', async ()=>{
    const code = codeInput.value.trim();
    const pin  = pinInput.value.trim();
    errMsg.classList.remove('visible');
    codeInput.classList.remove('error');
    pinInput.classList.remove('error');

    if (code.length < 6) { codeInput.classList.add('error'); codeInput.focus(); return; }
    if (pin.length  < 4) { pinInput.classList.add('error');  pinInput.focus();  return; }

    btn.disabled = true;
    const origHtml = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${LANG==='ru'?'Поиск…':'Qidirilmoqda…'}`;

    // 1. Сервер
    const r = await API.findByCodePin(code, pin);
    btn.disabled = false;
    btn.innerHTML = origHtml;

    // Тест заблокирован владельцем
    if (!r.ok && r.data?.error === 'locked') {
      if (errText) errText.textContent = LANG==='ru'
        ? '🔒 Тест временно закрыт автором.'
        : '🔒 Test muallifi tomonidan vaqtincha yopilgan.';
      errMsg.classList.add('visible');
      return;
    }

    // Пользователь заблокирован владельцем теста
    if (!r.ok && r.data?.error === 'restricted') {
      if (errText) errText.textContent = LANG==='ru'
        ? '🚫 Автор теста ограничил ваш доступ к этому тесту.'
        : '🚫 Test muallifi siz uchun bu testga kirishni chekladi.';
      errMsg.classList.add('visible');
      return;
    }

    if (r.ok && r.data.quiz) {
      const serverQuiz = r.data.quiz;
      const isMyQuiz = state.user && serverQuiz.ownerId === state.user.id;

      if (isMyQuiz) {
        // Свой тест — обновляем в quizzes
        const idx = state.quizzes.findIndex(q => q.id === serverQuiz.id);
        if (idx >= 0) state.quizzes[idx] = serverQuiz;
        else state.quizzes.unshift(serverQuiz);
        saveStorage(STORAGE.QUIZZES, state.quizzes);
      } else {
        // Чужой тест — кладём в foundQuizzes
        const idx = state.foundQuizzes.findIndex(q => q.id === serverQuiz.id);
        if (idx >= 0) state.foundQuizzes[idx] = serverQuiz;
        else state.foundQuizzes.unshift(serverQuiz);
        saveStorage(STORAGE.FOUND_QUIZZES, state.foundQuizzes);
      }

      const doStart = (quizId) => {
        // Записываем факт доступа на сервер
        API.recordAccess(quizId, state.user?.name || 'Гость').catch(()=>{});
        startQuizFromAll(quizId);
      };

      if (!state.user) {
        showAuthScreen(() => doStart(serverQuiz.id));
      } else {
        doStart(serverQuiz.id);
      }
      return;
    }

    // 2. Локальный поиск (свои тесты)
    const localQuiz = findQuizByCodePin(code, pin);
    if (localQuiz) {
      pushQuizToServer(localQuiz).catch(()=>{});
      if (!state.user) {
        showAuthScreen(() => { API.recordAccess(localQuiz.id, state.user?.name||'Гость').catch(()=>{}); startQuizFromAll(localQuiz.id); });
      } else {
        API.recordAccess(localQuiz.id, state.user?.name||'Гость').catch(()=>{});
        startQuizFromAll(localQuiz.id);
      }
      return;
    }

    // 3. Не найдено
    codeInput.classList.add('error');
    pinInput.classList.add('error');
    if (errText) errText.textContent = LANG==='ru'
      ? 'Тест не найден. Проверьте код и PIN.'
      : 'Test topilmadi. Kod va PIN-ni tekshiring.';
    errMsg.classList.add('visible');
  });
}

// Быстро обновить бейдж в сайдбаре без полной перерисовки
function renderSidebarBadge(navId, value) {
  const item = document.querySelector(`.nav-item[data-nav="${navId}"] .nav-badge`);
  if (!item) return;
  if (value) { item.textContent = value; item.style.display = ''; }
  else item.style.display = 'none';
}

// Найти тест в обоих хранилищах (мои + найденные)
function findQuizInAll(id) {
  return state.quizzes.find(q=>q.id===id) || state.foundQuizzes.find(q=>q.id===id);
}

// Запустить тест из любого хранилища
function startQuizFromAll(id) {
  const quiz = findQuizInAll(id);
  if (!quiz) return;
  showStartScreen(quiz, {});
}


// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
async function init() {
  // 1. Normalise existing quizzes — add codes if missing
  let changed = false;
  state.quizzes.forEach(q => {
    if (!q.code || !q.pin) { ensureQuizCodes(q); changed = true; }
  });
  if (changed) saveStorage(STORAGE.QUIZZES, state.quizzes);

  // 2. Restore session from server if we have a token
  const token = getAuthToken();
  if (token && !state.user) {
    const meResult = await API.me();
    if (meResult.ok) {
      saveUser(meResult.data.user);
    } else {
      // Token expired/invalid — clear it
      setAuthToken(null);
    }
  }

  // 3. Sync quizzes and history from server
  if (getAuthToken()) {
    // Push all local quizzes to server (so they become searchable by code+PIN)
    pushAllLocalQuizzesToServer().catch(()=>{});
    await syncQuizzesFromServer();
    syncHistoryFromServer(); // background
  }

  // 4. Check for ?q= (base64 embedded quiz in URL)
  const params = new URLSearchParams(location.search);
  const b64Param = params.get('q');
  if (b64Param) {
    const imported = importQuizFromUrl(b64Param);
    if (imported) {
      const existing = state.quizzes.find(q=>q.code===imported.code);
      const quizToUse = existing || imported;
      if (!existing) {
        state.quizzes.unshift(imported);
        saveStorage(STORAGE.QUIZZES, state.quizzes);
        pushQuizToServer(imported);
      }
      history.replaceState({}, '', location.pathname);
      if (!state.user) {
        showAuthScreen(()=> startQuiz(quizToUse.id));
      } else {
        startQuiz(quizToUse.id);
      }
      return;
    }
  }

  // 5. Legacy ?quiz=id param
  const legacyId = params.get('quiz');
  if (legacyId) {
    const found = state.quizzes.find(q=>q.id===legacyId);
    if (found) {
      history.replaceState({}, '', location.pathname);
      if (!state.user) { showAuthScreen(()=>startQuiz(found.id)); }
      else startQuiz(found.id);
      return;
    }
  }

  // 6. ?code=XXX&pin=YYYY direct link
  const urlCode = params.get('code');
  const urlPin  = params.get('pin');
  if (urlCode && urlPin) {
    history.replaceState({}, '', location.pathname);
    // Try server first
    const sr = await API.findByCodePin(urlCode, urlPin);
    if (sr.ok && sr.data.quiz) {
      const sq = sr.data.quiz;
      const ei = state.quizzes.findIndex(q=>q.id===sq.id);
      if (ei>=0) state.quizzes[ei]=sq; else state.quizzes.unshift(sq);
      saveStorage(STORAGE.QUIZZES, state.quizzes);
      if (!state.user) { showAuthScreen(()=>startQuiz(sq.id)); }
      else startQuiz(sq.id);
      return;
    }
    // Fallback: local
    const foundByCode = findQuizByCodePin(urlCode, urlPin);
    if (foundByCode) {
      if (!state.user) { showAuthScreen(()=>startQuiz(foundByCode.id)); }
      else startQuiz(foundByCode.id);
      return;
    }
    // Pre-fill search widget
    const afterLoad = () => {
      renderApp();
      setTimeout(()=>{
        const ci = document.getElementById('find-code-input');
        const pi = document.getElementById('find-pin-input');
        if (ci) ci.value = urlCode;
        if (pi) { pi.value = urlPin; document.getElementById('find-quiz-btn')?.click(); }
      }, 400);
    };
    if (!state.user) { showAuthScreen(afterLoad); } else { afterLoad(); }
    return;
  }

  // 6. Handle ?live= (join live session from link)
  const liveParam = params.get('live');
  if (liveParam) {
    history.replaceState({}, '', location.pathname);
    renderApp();
    setTimeout(() => {
      navigate('live');
      setTimeout(() => {
        const nameVal = state.user?.name || '';
        const avatar = state.user?.avatar || '🧑';
        if (state.user) {
          joinLiveSession(liveParam.toUpperCase(), nameVal || (LANG==='ru'?'Участник':'Ishtirokchi'), avatar);
        } else {
          showAuthScreen(() => {
            navigate('live');
            setTimeout(() => joinLiveSession(liveParam.toUpperCase(), state.user?.name || (LANG==='ru'?'Участник':'Ishtirokchi'), state.user?.avatar || '🧑'), 300);
          });
        }
      }, 300);
    }, 200);
    return;
  }

  // 7. Handle Payme return URL (?payment_order=...)
  const paymentOrder = params.get('payment_order');
  if (paymentOrder) {
    history.replaceState({}, '', location.pathname);
    renderApp();
    // Show payment result toast after short delay
    setTimeout(() => {
      toast(
        LANG === 'ru'
          ? '✅ Платёж обрабатывается. Подписка будет активирована в течение минуты.'
          : '✅ To\'lov qayta ishlanmoqda. Obuna bir daqiqa ichida faollashadi.',
        'success', 6000
      );
      navigate('plans');
    }, 500);
    return;
  }

  // 8. Show auth if first time
  if (!state.user) {
    showAuthScreen(()=>renderApp());
    return;
  }

  renderApp();
}

document.addEventListener('DOMContentLoaded', init);
