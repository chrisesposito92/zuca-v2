-- Migration: Add clarification questions support
-- Run this in your Neon SQL editor

-- 1. Add clarification_state column to sessions table
-- This stores the pending question and answers when pipeline is paused
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS clarification_state JSONB DEFAULT NULL;

-- 2. Create user_preferences table for storing per-user settings
CREATE TABLE IF NOT EXISTS user_preferences (
    user_id UUID PRIMARY KEY REFERENCES auth_users(id) ON DELETE CASCADE,
    skip_clarifications BOOLEAN DEFAULT FALSE,  -- "Never ask me questions" setting
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create index for faster lookups on sessions with pending clarifications
CREATE INDEX IF NOT EXISTS idx_sessions_clarification_status
ON sessions(status)
WHERE status = 'awaiting_clarification';

-- 4. Add comment for documentation
COMMENT ON COLUMN sessions.clarification_state IS 'JSON state for clarification questions: {pendingQuestion, pausedAtStep, partialResult, askedAt, answers[]}';
COMMENT ON COLUMN sessions.status IS 'Session status: pending | running | awaiting_clarification | completed | failed';
