-- QuizMaster Pro: Initial Schema
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id          TEXT PRIMARY KEY,          -- nanoid
  name        TEXT NOT NULL,
  email       TEXT UNIQUE,               -- email or NULL for social/guest
  avatar      TEXT DEFAULT '🧑',
  provider    TEXT DEFAULT 'email',      -- email | google | facebook | apple | whatsapp | guest
  password_hash TEXT,                    -- bcrypt-like (simple SHA256 hex for Cloudflare Workers)
  created_at  INTEGER DEFAULT (unixepoch()),
  last_seen   INTEGER DEFAULT (unixepoch())
);

-- Sessions table (token-based auth)
CREATE TABLE IF NOT EXISTS sessions (
  token       TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL,
  expires_at  INTEGER NOT NULL,
  created_at  INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Quizzes table (server-side storage)
CREATE TABLE IF NOT EXISTS quizzes (
  id          TEXT PRIMARY KEY,
  code        TEXT UNIQUE NOT NULL,     -- 6-digit access code
  pin         TEXT NOT NULL,            -- 4-digit PIN
  owner_id    TEXT,                     -- NULL = anonymous
  title       TEXT NOT NULL DEFAULT 'Untitled',
  description TEXT DEFAULT '',
  category    TEXT DEFAULT '',
  passing_score INTEGER DEFAULT 60,
  time_limit  INTEGER DEFAULT 0,        -- minutes, 0=unlimited
  question_timer INTEGER DEFAULT 0,     -- seconds per question
  shuffle_questions INTEGER DEFAULT 0,
  shuffle_answers   INTEGER DEFAULT 0,
  show_explanations TEXT DEFAULT 'end', -- each|end|none
  max_questions     INTEGER DEFAULT 0,
  questions_json    TEXT NOT NULL DEFAULT '[]',
  is_public   INTEGER DEFAULT 1,        -- 1=public (findable by code), 0=private
  created_at  INTEGER DEFAULT (unixepoch()),
  updated_at  INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Attempts/history table
CREATE TABLE IF NOT EXISTS attempts (
  id          TEXT PRIMARY KEY,
  quiz_id     TEXT NOT NULL,
  user_id     TEXT,                     -- NULL = guest
  user_name   TEXT DEFAULT 'Гость',
  percent     INTEGER NOT NULL,
  correct     INTEGER NOT NULL,
  wrong       INTEGER NOT NULL,
  skipped     INTEGER NOT NULL,
  total       INTEGER NOT NULL,
  passed      INTEGER DEFAULT 0,
  duration    INTEGER DEFAULT 0,        -- seconds
  answers_json TEXT DEFAULT '{}',
  created_at  INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Indexes for fast lookup
CREATE INDEX IF NOT EXISTS idx_quizzes_code    ON quizzes(code);
CREATE INDEX IF NOT EXISTS idx_quizzes_owner   ON quizzes(owner_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user   ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_quiz   ON attempts(quiz_id);
CREATE INDEX IF NOT EXISTS idx_attempts_user   ON attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_users_email     ON users(email);
