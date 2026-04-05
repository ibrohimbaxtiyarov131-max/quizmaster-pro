-- Migration 0004: Billing — Plans, Subscriptions, Payme Payments
-- Тарифные планы, подписки пользователей, история платежей Payme

-- ─── Таблица тарифных планов ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS plans (
  id          TEXT PRIMARY KEY,          -- 'free' | 'basic' | 'pro' | 'business'
  name_ru     TEXT NOT NULL,             -- Название (рус)
  name_uz     TEXT NOT NULL,             -- Название (узб)
  price_uzs   INTEGER NOT NULL DEFAULT 0,-- Цена в сумах (0 = бесплатно)
  price_month INTEGER NOT NULL DEFAULT 0,-- Цена/мес в тийинах (для Payme: UZS * 100)
  max_quizzes INTEGER NOT NULL DEFAULT 3,-- Макс. тестов (−1 = безлимит)
  max_questions INTEGER NOT NULL DEFAULT 10, -- Макс. вопросов в тесте
  max_attempts  INTEGER NOT NULL DEFAULT -1, -- Макс. попыток всего (-1 безлимит)
  features_json TEXT NOT NULL DEFAULT '[]',  -- JSON массив ключей фич
  is_active   INTEGER NOT NULL DEFAULT 1,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  INTEGER DEFAULT (unixepoch())
);

-- ─── Подписки пользователей ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS subscriptions (
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL,
  plan_id      TEXT NOT NULL DEFAULT 'free',
  status       TEXT NOT NULL DEFAULT 'active',  -- active | expired | cancelled | pending
  started_at   INTEGER DEFAULT (unixepoch()),
  expires_at   INTEGER,                          -- NULL = бессрочно (только free)
  payment_id   TEXT,                             -- ссылка на последний платёж
  created_at   INTEGER DEFAULT (unixepoch()),
  updated_at   INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (plan_id) REFERENCES plans(id)
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);

-- ─── История платежей Payme ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS payments (
  id              TEXT PRIMARY KEY,             -- наш внутренний ID
  user_id         TEXT NOT NULL,
  plan_id         TEXT NOT NULL,
  payme_id        TEXT UNIQUE,                  -- _id из Payme (после создания транзакции)
  payme_time      INTEGER,                      -- время транзакции Payme (unix ms)
  amount          INTEGER NOT NULL,             -- сумма в тийинах (UZS * 100)
  status          TEXT NOT NULL DEFAULT 'pending', -- pending | paid | cancelled | failed
  reason          INTEGER,                      -- код причины отмены Payme (1-5)
  order_id        TEXT NOT NULL,                -- наш уникальный order id
  perform_time    INTEGER,                      -- когда Payme подтвердил оплату
  cancel_time     INTEGER,
  created_at      INTEGER DEFAULT (unixepoch()),
  updated_at      INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (plan_id) REFERENCES plans(id)
);

CREATE INDEX IF NOT EXISTS idx_payments_user   ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_order  ON payments(order_id);

-- ─── Начальные данные: тарифные планы ─────────────────────────────────────────
INSERT OR IGNORE INTO plans (id, name_ru, name_uz, price_uzs, price_month, max_quizzes, max_questions, max_attempts, features_json, sort_order) VALUES
  ('free',     'Бесплатный', 'Bepul',       0,      0,       3,   10,  -1,
   '["3 теста","До 10 вопросов","Все типы вопросов","История результатов"]',
   0),
  ('basic',    'Базовый',    'Asosiy',   49000, 4900000,   20,   50,  -1,
   '["20 тестов","До 50 вопросов","Все типы вопросов","Таймеры","Импорт Word/TXT","Экспорт CSV","Аналитика","Блокировка тестов","Синхронизация устройств"]',
   1),
  ('pro',      'Профи',      'Pro',     99000, 9900000,  100, 9999,  -1,
   '["100 тестов","Безлимит вопросов","Все типы вопросов","Таймеры","Импорт Word/Excel/TXT/JSON","Экспорт PDF+CSV","Расширенная аналитика","Кто проходил тест","Управление доступом","Блокировка тестов","Синхронизация","Сертификаты"]',
   2),
  ('business', 'Бизнес',     'Biznes', 199000, 19900000,   -1, 9999,  -1,
   '["Безлимит тестов","Безлимит вопросов","Все функции Pro","Приоритетная поддержка","API доступ","Белая метка"]',
   3);
