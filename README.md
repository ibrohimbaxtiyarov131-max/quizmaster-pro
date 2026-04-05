# QuizMaster Pro

Полнофункциональная платформа для создания, прохождения и управления тестами с поддержкой Live-сессий, тарифной системой и платёжной интеграцией Payme.

---

## 📋 Содержание

- [Стек технологий](#стек-технологий)
- [Структура проекта](#структура-проекта)
- [Функции приложения](#функции-приложения)
- [Установка и локальный запуск](#установка-и-локальный-запуск)
- [Продакшен сборка и публикация](#продакшен-сборка-и-публикация)
- [Переменные окружения](#переменные-окружения)
- [База данных](#база-данных)
- [Тарифная система](#тарифная-система)
- [API-маршруты](#api-маршруты)

---

## 🛠 Стек технологий

| Компонент | Технология |
|-----------|-----------|
| **Backend** | [Hono](https://hono.dev/) (TypeScript) — Cloudflare Workers/Pages |
| **Frontend** | Vanilla JS + Tailwind CSS (CDN) + Font Awesome |
| **База данных** | Cloudflare D1 (SQLite) |
| **Деплой** | Cloudflare Pages |
| **Платежи** | Payme Business (UzCard / Humo) |
| **Сборщик** | Vite 6 + @hono/vite-cloudflare-pages |
| **CLI** | Wrangler 4 |

> ⚠️ Не использует React, Next.js, Node.js-сервер или PostgreSQL. Всё работает на Cloudflare Edge Runtime.

---

## 📁 Структура проекта

```
webapp/
├── src/
│   └── index.tsx           # Весь серверный код (Hono-приложение + все API)
├── public/
│   └── static/
│       ├── app.js          # Весь клиентский код (SPA на Vanilla JS)
│       ├── app.css         # Стили приложения
│       └── quiz-upload.js  # Парсер файлов (Word/Excel/TXT/JSON)
├── migrations/
│   ├── 0001_initial.sql    # Базовые таблицы (users, quizzes, sessions, attempts)
│   ├── 0002_extend.sql     # Дополнения к схеме
│   ├── 0003_restrictions.sql  # Ограничения доступа пользователей
│   ├── 0004_billing.sql    # Таблицы оплаты и подписок
│   ├── 0005_live_and_plans.sql # Live-сессии и тарифные планы
│   └── 0006_fix_teacher_plan.sql # Обновление лимита плана Учитель
├── dist/                   # Скомпилированный бандл (gitignored)
├── .wrangler/              # Локальный D1-стейт (gitignored)
├── ecosystem.config.cjs    # Конфиг PM2 для dev-сервера
├── wrangler.jsonc          # Конфиг Cloudflare Wrangler
├── vite.config.ts          # Конфиг Vite
├── package.json
├── tsconfig.json
├── .env.example            # Пример переменных окружения
└── README.md
```

---

## ✅ Функции приложения

### Тесты
- Создание тестов с 5 типами вопросов: одиночный, множественный, текст, правда/ложь, сопоставление
- Импорт из Word (.docx), Excel (.xlsx), TXT, JSON
- Таймер на весь тест и на каждый вопрос
- Рандомизация вопросов и ответов
- Пороговый балл для прохождения
- Изображения к вопросам
- Публикация по коду+PIN или прямой ссылке
- Блокировка/разблокировка теста
- Управление доступом пользователей

### Аналитика
- Кто открывал тест (доступы с датой)
- Попытки с баллами, временем, деталями ответов
- Средний балл, процент прохождения
- Экспорт CSV

### Live Quiz Session
- Хост создаёт сессию с 8-символьным кодом + QR-код
- Участники подключаются по коду или ссылке
- Синхронное прохождение теста всеми участниками
- Таймер на каждый вопрос (15-60 сек)
- Мини-рейтинг в реальном времени
- Результаты: подиум, таблица участников с баллами и местом

### Тарифная система
- **Free** — 0 сум, 120 баллов/день, 5 тестов, 300 попыток/мес, 20 участников Live
- **Teacher** — 29 000 сум/мес, 75 тестов, 10 000 попыток/мес, 100 участников Live
- **Business** — 69 000 сум/мес, 500 тестов, 50 000 попыток/мес, 300 участников Live
- Оплата через Payme (UzCard / Humo)
- VIP-доступ для администратора

---

## 🚀 Установка и локальный запуск

### Требования
- Node.js 18+
- npm 9+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

### 1. Установка зависимостей

```bash
git clone https://github.com/YOUR_USERNAME/quizmaster-pro.git
cd quizmaster-pro
npm install
```

### 2. Создание локальной базы данных

```bash
# Применить все миграции локально
npx wrangler d1 migrations apply quizmaster-db --local
```

### 3. Настройка переменных окружения

```bash
cp .env.example .dev.vars
# Отредактируйте .dev.vars — укажите свои ключи Payme
```

### 4. Сборка и запуск

```bash
# Сборка
npm run build

# Запуск через PM2 (рекомендуется)
pm2 start ecosystem.config.cjs

# Или напрямую через wrangler
npx wrangler pages dev dist --d1=quizmaster-db --local --ip 0.0.0.0 --port 3000
```

Откройте браузер: **http://localhost:3000**

---

## 🌐 Продакшен сборка и публикация на Cloudflare Pages

### 1. Авторизация в Cloudflare

```bash
npx wrangler login
```

### 2. Создание D1-базы данных в продакшене

```bash
npx wrangler d1 create quizmaster-production
# Скопируйте database_id из вывода и вставьте в wrangler.jsonc
```

### 3. Применение миграций в продакшене

```bash
npx wrangler d1 migrations apply quizmaster-production
```

### 4. Создание Pages-проекта

```bash
npx wrangler pages project create quizmaster-pro --production-branch main
```

### 5. Деплой

```bash
npm run build
npx wrangler pages deploy dist --project-name quizmaster-pro
```

### 6. Настройка секретов (переменных окружения)

```bash
npx wrangler pages secret put PAYME_MERCHANT_ID --project-name quizmaster-pro
npx wrangler pages secret put PAYME_SECRET_KEY --project-name quizmaster-pro
npx wrangler pages secret put PAYME_TEST_SECRET_KEY --project-name quizmaster-pro
npx wrangler pages secret put APP_URL --project-name quizmaster-pro
# Значение APP_URL = https://your-project.pages.dev
```

### Деплой на Vercel

> ⚠️ Проект использует Cloudflare Workers runtime (D1, KV). Vercel **не поддерживает** Cloudflare D1 напрямую. Для деплоя на Vercel потребуется замена базы данных на Neon, PlanetScale или другую PostgreSQL/MySQL базу через REST API.
>
> **Рекомендуется использовать Cloudflare Pages** — платформа нативно поддерживает весь стек.

---

## 🔧 Переменные окружения

Создайте файл `.dev.vars` (для локальной разработки) или настройте через Wrangler Secrets (для продакшена):

```env
# Payme Business — платёжный шлюз
PAYME_MERCHANT_ID=your_merchant_id_here
PAYME_SECRET_KEY=your_production_secret_key
PAYME_TEST_SECRET_KEY=your_test_secret_key
PAYME_TEST_MODE=true

# URL вашего приложения (для return_url после оплаты)
APP_URL=https://your-project.pages.dev
```

Смотрите `.env.example` для полного списка.

---

## 🗄 База данных

**Тип:** Cloudflare D1 (SQLite)  
**Расположение (локально):** `.wrangler/state/v3/d1/`  
**Расположение (продакшен):** Cloudflare глобальная сеть

### Основные таблицы

| Таблица | Описание |
|---------|----------|
| `users` | Пользователи (email, avatar, provider) |
| `sessions` | Сессии авторизации |
| `quizzes` | Тесты (questions_json, settings) |
| `attempts` | Результаты прохождений |
| `quiz_accesses` | Кто открывал тест |
| `quiz_user_restrictions` | Заблокированные пользователи |
| `subscriptions` | Активные подписки |
| `billing_orders` | История платежей Payme |
| `user_points` | Дневные баллы (Free план) |
| `points_log` | Лог списания баллов |
| `live_sessions` | Live-сессии (код, статус, вопросы) |
| `live_participants` | Участники Live-сессий |
| `live_answers` | Ответы в Live-сессии |
| `plans` | Тарифные планы |

### Шаги миграции

```bash
# Локально
npx wrangler d1 migrations apply quizmaster-db --local

# Продакшен
npx wrangler d1 migrations apply quizmaster-production
```

---

## 💰 Тарифная система

| Параметр | Free | Teacher | Business |
|----------|------|---------|----------|
| Цена | 0 | 29 000 сум/мес | 69 000 сум/мес |
| Активных тестов | 5 | 75 | 500 |
| Попыток/мес | 300 | 10 000 | 50 000 |
| Live участников | 20 | 100 | 300 |
| Устройств | 1 | 3 | 10 |
| Ежедневные баллы | 120 | — | — |

**VIP-аккаунт:** `ibrohimbaxtiyarov131@gmail.com` — автоматически получает Business-план бессрочно.

---

## 🔌 API-маршруты

### Auth
- `POST /api/auth/register` — регистрация
- `POST /api/auth/login` — вход по email+пароль
- `POST /api/auth/social` — вход через соцсети

### Quizzes
- `GET /api/quizzes` — мои тесты
- `POST /api/quizzes` — создать тест
- `PUT /api/quizzes/:id` — обновить тест
- `DELETE /api/quizzes/:id` — удалить тест
- `GET /api/quizzes/find?code=&pin=` — найти по коду+PIN
- `GET /api/quizzes/:id/accesses` — кто открывал
- `POST /api/quizzes/:id/access` — записать факт доступа

### Attempts
- `POST /api/attempts` — сохранить результат
- `GET /api/attempts` — история

### Analytics
- `GET /api/analytics/:quizId` — детальная аналитика по тесту
- `GET /api/admin/overview` — общая статистика

### Live Sessions
- `POST /api/live/create` — создать сессию
- `POST /api/live/:id/join` — присоединиться
- `GET /api/live/:id/state` — состояние сессии
- `POST /api/live/:id/start` — запустить тест
- `POST /api/live/:id/next` — следующий вопрос
- `POST /api/live/:id/answer` — отправить ответ
- `POST /api/live/:id/finish` — завершить
- `GET /api/live/:id/results` — результаты
- `GET /api/live` — история сессий

### Billing
- `GET /api/plans` — список тарифов
- `GET /api/billing/my` — моя подписка
- `GET /api/billing/points` — баллы и лимиты
- `POST /api/billing/spend` — списать баллы
- `POST /api/billing/create-order` — создать заказ Payme
- `GET /api/billing/history` — история платежей
- `POST /api/billing/payme` — webhook Payme

---

## 📱 Используемые CDN-библиотеки (только на фронтенде)

```html
<!-- Иконки -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- Шрифты -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Парсер Word-документов -->
<script src="https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js"></script>
```

---

## 🔐 Безопасность

- Пароли хешируются через SHA-256 (Web Crypto API)
- JWT-подобные токены сессий (32 символа, хранятся в D1)
- Все приватные API требуют Bearer-токен
- Payme-подпись проверяется через HMAC SHA-256
- VIP-доступ по email прописан только на сервере

---

## 📝 Лицензия

MIT License — свободное использование, модификация и распространение.
