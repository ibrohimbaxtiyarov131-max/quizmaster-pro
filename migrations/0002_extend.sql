-- Migration 0002: Add is_locked, quiz_accesses table

-- Добавить поле is_locked в quizzes (1 = закрыт для прохождения, 0 = открыт)
ALTER TABLE quizzes ADD COLUMN is_locked INTEGER DEFAULT 0;

-- Таблица доступа: кто находил/проходил тест (по code+PIN)
CREATE TABLE IF NOT EXISTS quiz_accesses (
  id          TEXT PRIMARY KEY,
  quiz_id     TEXT NOT NULL,
  user_id     TEXT,
  user_name   TEXT DEFAULT 'Гость',
  user_email  TEXT,
  user_avatar TEXT DEFAULT '🧑',
  accessed_at INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_accesses_quiz ON quiz_accesses(quiz_id);
CREATE INDEX IF NOT EXISTS idx_accesses_user ON quiz_accesses(user_id);
