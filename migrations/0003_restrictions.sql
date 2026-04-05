-- Migration 0003: Per-user access restrictions for quizzes
-- Владелец теста может запретить конкретному пользователю проходить тест

CREATE TABLE IF NOT EXISTS quiz_user_restrictions (
  id          TEXT PRIMARY KEY,
  quiz_id     TEXT NOT NULL,
  user_id     TEXT NOT NULL,          -- заблокированный пользователь
  user_name   TEXT DEFAULT 'Unknown',
  user_email  TEXT,
  restricted_by TEXT NOT NULL,        -- кто заблокировал (owner_id)
  reason      TEXT DEFAULT '',        -- необязательная причина
  created_at  INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (quiz_id)         REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id)         REFERENCES users(id)   ON DELETE CASCADE,
  FOREIGN KEY (restricted_by)   REFERENCES users(id)   ON DELETE CASCADE,
  UNIQUE(quiz_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_restrictions_quiz ON quiz_user_restrictions(quiz_id);
CREATE INDEX IF NOT EXISTS idx_restrictions_user ON quiz_user_restrictions(user_id);
