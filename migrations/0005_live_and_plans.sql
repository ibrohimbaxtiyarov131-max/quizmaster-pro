-- Migration 0005: Live Quiz Sessions + Updated Plans + Points System

-- ─── Обновление тарифных планов (удалить старые, вставить новые) ──────────────
PRAGMA foreign_keys = OFF;
DELETE FROM subscriptions;
DELETE FROM payments;
DELETE FROM plans;
PRAGMA foreign_keys = ON;

INSERT INTO plans (id, name_ru, name_uz, price_uzs, price_month, max_quizzes, max_questions, max_attempts, features_json, is_active, sort_order) VALUES
  ('free', 'Бесплатный', 'Bepul', 0, 0,
   5, 9999, 300,
   '["120 баллов в день","До 5 активных тестов","До 300 прохождений/мес","Базовая аналитика","Импорт Word, Excel, TXT, JSON","1 устройство","Live-сессия до 20 участников"]',
   1, 0),
  ('teacher', 'Учитель', "O'qituvchi", 29000, 2900000,
   100, 9999, 10000,
   '["До 100 активных тестов","До 10 000 прохождений/мес","Полная аналитика","Безлимитный экспорт","Сертификаты","Управление доступом","Просмотр кто открыл и проходил","3 устройства","Live-сессия до 100 участников"]',
   1, 1),
  ('business', 'Бизнес / Центр', 'Biznes / Markaz', 69000, 6900000,
   500, 9999, 50000,
   '["До 500 активных тестов","До 50 000 прохождений/мес","Всё из Учителя","До 10 устройств","До 5 сотрудников","Расширенная аналитика","Live-сессия до 300 участников","Приоритетная поддержка"]',
   1, 2);

-- ─── Баллы пользователей (Free plan daily points) ─────────────────────────────
CREATE TABLE IF NOT EXISTS user_points (
  user_id     TEXT PRIMARY KEY,
  points      INTEGER NOT NULL DEFAULT 120,
  last_refill INTEGER DEFAULT (unixepoch()),  -- когда последний раз пополнялись
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ─── Лог списания баллов ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS points_log (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL,
  action      TEXT NOT NULL,   -- create_quiz|import|analytics|export|live_start|attempts_20
  cost        INTEGER NOT NULL,
  balance     INTEGER NOT NULL, -- остаток после списания
  created_at  INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_points_log_user ON points_log(user_id);

-- ─── Счётчик устройств (сессии по user_agent / IP) ───────────────────────────
CREATE TABLE IF NOT EXISTS user_devices (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL,
  device_hash TEXT NOT NULL,   -- SHA256(user_agent + ip)
  last_seen   INTEGER DEFAULT (unixepoch()),
  UNIQUE(user_id, device_hash),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_devices_user ON user_devices(user_id);

-- ─── Live Quiz Sessions ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS live_sessions (
  id           TEXT PRIMARY KEY,          -- session ID (6 chars, uppercase)
  quiz_id      TEXT NOT NULL,
  host_id      TEXT NOT NULL,             -- owner user_id
  host_name    TEXT NOT NULL DEFAULT 'Ведущий',
  status       TEXT NOT NULL DEFAULT 'waiting',  -- waiting|active|finished
  current_q    INTEGER NOT NULL DEFAULT 0,        -- текущий вопрос (0 = не начат)
  q_started_at INTEGER,                           -- unix timestamp начала вопроса
  q_time_limit INTEGER NOT NULL DEFAULT 30,       -- сек на вопрос
  max_participants INTEGER NOT NULL DEFAULT 20,
  quiz_json    TEXT NOT NULL DEFAULT '{}',        -- snapshot вопросов на момент старта
  created_at   INTEGER DEFAULT (unixepoch()),
  started_at   INTEGER,
  finished_at  INTEGER,
  FOREIGN KEY (host_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_live_sessions_status ON live_sessions(status);

-- ─── Участники live-сессии ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS live_participants (
  id           TEXT PRIMARY KEY,
  session_id   TEXT NOT NULL,
  user_id      TEXT,                      -- NULL = гость
  name         TEXT NOT NULL DEFAULT 'Участник',
  avatar       TEXT DEFAULT '🧑',
  score        INTEGER NOT NULL DEFAULT 0,
  correct      INTEGER NOT NULL DEFAULT 0,
  wrong        INTEGER NOT NULL DEFAULT 0,
  answers_json TEXT NOT NULL DEFAULT '{}', -- {qIndex: answer}
  joined_at    INTEGER DEFAULT (unixepoch()),
  last_ping    INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (session_id) REFERENCES live_sessions(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_live_part_session ON live_participants(session_id);

-- ─── Ответы участников по каждому вопросу ────────────────────────────────────
CREATE TABLE IF NOT EXISTS live_answers (
  id             TEXT PRIMARY KEY,
  session_id     TEXT NOT NULL,
  participant_id TEXT NOT NULL,
  q_index        INTEGER NOT NULL,
  answer         TEXT,                    -- JSON answer value
  is_correct     INTEGER DEFAULT 0,
  points         INTEGER DEFAULT 0,       -- очки за скорость
  answered_at    INTEGER DEFAULT (unixepoch()),
  UNIQUE(session_id, participant_id, q_index),
  FOREIGN KEY (session_id) REFERENCES live_sessions(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_live_answers_session ON live_answers(session_id);
CREATE INDEX IF NOT EXISTS idx_live_answers_part    ON live_answers(participant_id);
