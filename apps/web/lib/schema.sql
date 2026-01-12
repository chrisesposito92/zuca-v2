-- ZUCA v2 Database Schema for Vercel Postgres
-- Run this SQL in the Vercel Postgres console to set up the database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable pgvector extension for RAG embeddings
CREATE EXTENSION IF NOT EXISTS "vector";

-- Auth Users table
CREATE TABLE IF NOT EXISTS auth_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    invite_code_used VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Invite Codes table
CREATE TABLE IF NOT EXISTS invite_codes (
    code VARCHAR(50) PRIMARY KEY,
    max_uses INTEGER DEFAULT 1,
    use_count INTEGER DEFAULT 0,
    expires_at TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sessions table (pipeline runs)
CREATE TABLE IF NOT EXISTS sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    session_type VARCHAR(20) NOT NULL, -- 'analyze' | 'uc-generate' | 'revenue-snapshot'
    llm_model VARCHAR(50),             -- 'gpt-5.2' | 'gemini-3-pro-preview' | 'gemini-3-flash-preview'
    input JSONB NOT NULL,              -- ZucaInput or UCGeneratorInput
    result JSONB,                      -- ZucaOutput or UCGeneratorOutput
    status VARCHAR(30) DEFAULT 'pending', -- pending | running | awaiting_clarification | completed | failed
    current_step INTEGER DEFAULT 0,
    error_message TEXT,
    user_id UUID REFERENCES auth_users(id) ON DELETE SET NULL,
    clarification_state JSONB          -- State for clarification questions (pendingQuestion, pausedAtStep, answers)
);

-- User Preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
    user_id UUID PRIMARY KEY REFERENCES auth_users(id) ON DELETE CASCADE,
    skip_clarifications BOOLEAN DEFAULT FALSE,  -- "Never ask me questions" setting
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages table (conversation history)
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    role VARCHAR(10) NOT NULL,         -- 'user' | 'assistant'
    content TEXT NOT NULL,
    message_type VARCHAR(20) DEFAULT 'text',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    sequence_number INTEGER NOT NULL
);

-- Feedback table (thumbs up/down on responses)
-- target_type: 'session' for overall, or section names like 'summary', 'contracts', 'billings', 'revrec'
CREATE TABLE IF NOT EXISTS feedback (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth_users(id) ON DELETE SET NULL,
    target_type VARCHAR(50) NOT NULL,     -- 'session' | 'summary' | 'contracts' | 'billings' | 'revrec'
    rating VARCHAR(10) NOT NULL,          -- 'positive' | 'negative'
    categories TEXT[],                    -- preset feedback categories (e.g., ['inaccurate', 'incomplete'])
    comment TEXT,                         -- optional free-form details
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Migration: Add categories column if table already exists
ALTER TABLE feedback ADD COLUMN IF NOT EXISTS categories TEXT[];

-- Bug Reports table (user-submitted issues, auto-opened in GitHub)
CREATE TABLE IF NOT EXISTS bug_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES sessions(id) ON DELETE SET NULL,
    user_id UUID REFERENCES auth_users(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    context JSONB,                        -- full context: input, output, browser info, error logs
    github_issue_url TEXT,                -- populated after issue is created
    github_issue_number INTEGER,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending' | 'submitted' | 'failed'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Zuora Connections table (stores encrypted tenant credentials per user)
CREATE TABLE IF NOT EXISTS zuora_connections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth_users(id) ON DELETE CASCADE,
    tenant_name TEXT NOT NULL,
    base_url TEXT NOT NULL,
    client_id TEXT NOT NULL,
    client_secret_encrypted TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RAG Document Chunks table (for vector search)
CREATE TABLE IF NOT EXISTS doc_chunks (
    id TEXT PRIMARY KEY,                    -- e.g., "zuora-billing/bill-runs.md#0"
    content TEXT NOT NULL,                  -- The chunk text
    embedding vector(1536) NOT NULL,        -- OpenAI text-embedding-3-small dimension
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    product TEXT NOT NULL,                  -- 'zuora-billing' | 'zuora-platform' | 'zuora-revenue'
    section TEXT,                           -- Optional H2/H3 section header
    filename TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_status ON sessions(status);
CREATE INDEX IF NOT EXISTS idx_messages_session_id ON messages(session_id);
CREATE INDEX IF NOT EXISTS idx_messages_sequence ON messages(session_id, sequence_number);
CREATE INDEX IF NOT EXISTS idx_feedback_session_id ON feedback(session_id);
CREATE INDEX IF NOT EXISTS idx_feedback_rating ON feedback(rating);
CREATE INDEX IF NOT EXISTS idx_bug_reports_session_id ON bug_reports(session_id);
CREATE INDEX IF NOT EXISTS idx_bug_reports_status ON bug_reports(status);
CREATE INDEX IF NOT EXISTS idx_zuora_connections_user_id ON zuora_connections(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_zuora_connections_user_name ON zuora_connections(user_id, tenant_name);
CREATE UNIQUE INDEX IF NOT EXISTS idx_zuora_connections_active ON zuora_connections(user_id) WHERE is_active;

-- Vector similarity index for RAG (HNSW is faster for our dataset size)
CREATE INDEX IF NOT EXISTS idx_doc_chunks_embedding ON doc_chunks
    USING hnsw (embedding vector_cosine_ops);
CREATE INDEX IF NOT EXISTS idx_doc_chunks_product ON doc_chunks(product);

-- Function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for sessions updated_at
DROP TRIGGER IF EXISTS update_sessions_updated_at ON sessions;
CREATE TRIGGER update_sessions_updated_at
    BEFORE UPDATE ON sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for zuora_connections updated_at
DROP TRIGGER IF EXISTS update_zuora_connections_updated_at ON zuora_connections;
CREATE TRIGGER update_zuora_connections_updated_at
    BEFORE UPDATE ON zuora_connections
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- Self-Learning Pipeline Tables (Phase 5)
-- ============================================================================

-- Corrections table - stores learned fixes from evaluation failures
CREATE TABLE IF NOT EXISTS corrections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    test_case_id VARCHAR(100) NOT NULL,
    step_name VARCHAR(50) NOT NULL,
    issue_type VARCHAR(50) NOT NULL,
    pattern VARCHAR(255) NOT NULL,
    pattern_embedding vector(1536),          -- For semantic search
    input_summary TEXT NOT NULL,
    incorrect_output JSONB,
    expected_behavior TEXT NOT NULL,
    correction TEXT NOT NULL,
    example_fix JSONB,
    criteria_id VARCHAR(100),
    confidence FLOAT DEFAULT 1.0,
    times_applied INTEGER DEFAULT 0,
    success_rate FLOAT DEFAULT 0.0,
    -- Lifecycle management fields
    archived BOOLEAN DEFAULT FALSE,
    archived_at TIMESTAMPTZ,
    archived_reason TEXT,
    last_maintained_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prompt suggestions table - stores LLM-generated prompt improvements
CREATE TABLE IF NOT EXISTS prompt_suggestions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    step_name VARCHAR(50) NOT NULL,
    pattern VARCHAR(255) NOT NULL,
    occurrence_count INTEGER DEFAULT 1,
    suggested_update TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',    -- pending | approved | rejected | applied
    applied_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for corrections
CREATE INDEX IF NOT EXISTS idx_corrections_step_name ON corrections(step_name);
CREATE INDEX IF NOT EXISTS idx_corrections_pattern ON corrections(pattern);
CREATE INDEX IF NOT EXISTS idx_corrections_test_case ON corrections(test_case_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_corrections_unique ON corrections(test_case_id, step_name, pattern);
CREATE INDEX IF NOT EXISTS idx_corrections_archived ON corrections(archived);
CREATE INDEX IF NOT EXISTS idx_corrections_active ON corrections(step_name) WHERE archived = FALSE;

-- Vector similarity index for corrections embeddings
CREATE INDEX IF NOT EXISTS idx_corrections_embedding ON corrections
    USING hnsw (pattern_embedding vector_cosine_ops)
    WHERE pattern_embedding IS NOT NULL;

-- Indexes for prompt suggestions
CREATE INDEX IF NOT EXISTS idx_prompt_suggestions_step ON prompt_suggestions(step_name);
CREATE INDEX IF NOT EXISTS idx_prompt_suggestions_status ON prompt_suggestions(status);

-- Unique partial index for upsert on pending suggestions (required by ON CONFLICT clause)
CREATE UNIQUE INDEX IF NOT EXISTS idx_prompt_suggestions_unique_pending
    ON prompt_suggestions(step_name, pattern)
    WHERE status = 'pending';

-- Trigger for corrections updated_at
DROP TRIGGER IF EXISTS update_corrections_updated_at ON corrections;
CREATE TRIGGER update_corrections_updated_at
    BEFORE UPDATE ON corrections
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for prompt_suggestions updated_at
DROP TRIGGER IF EXISTS update_prompt_suggestions_updated_at ON prompt_suggestions;
CREATE TRIGGER update_prompt_suggestions_updated_at
    BEFORE UPDATE ON prompt_suggestions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
