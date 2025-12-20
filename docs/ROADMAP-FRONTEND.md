# ZUCA v2 Frontend Roadmap

This document tracks the implementation of the ZUCA v2 web frontend.

## Overview

- **Framework**: Next.js 16 App Router (Turbopack)
- **UI Library**: HeroUI with custom Zuora theme
- **Database**: Vercel Postgres
- **Deployment**: Vercel
- **Architecture**: Monorepo with shared types from `src/`

## Current Status

| Phase | Status | Notes |
|-------|--------|-------|
| 1. Foundation | ✅ Complete | Monorepo + HeroUI + Next.js 16 |
| 2. Database & Auth | ✅ Complete | JWT + cookies, password/invite auth |
| 3. API Migration | ⏳ Pending | |
| 4. Core UI Forms | ⏳ Pending | |
| 5. Solution View | ⏳ Pending | |
| 6. Conversation | ⏳ Pending | |
| 7. History & Polish | ⏳ Pending | |
| 8. Deployment | ⏳ Pending | |

---

## Phase 1: Foundation ✅

### Tasks
- [x] Create `apps/web/` directory structure
- [x] Initialize Next.js 16 with TypeScript
- [x] Install HeroUI and configure with theme
- [x] Set up Tailwind CSS
- [x] Configure TypeScript paths for `src/` imports
- [x] Move logos to `apps/web/public/`
- [x] Set up root workspace package.json
- [x] Create main layout with sidebar
- [x] Create route groups: (auth) and (main)

### Key Files
```
apps/web/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── middleware.ts
└── app/
    ├── layout.tsx
    ├── providers.tsx
    ├── (auth)/login/page.tsx
    └── (main)/
        ├── layout.tsx
        ├── analyze/page.tsx
        └── history/page.tsx
```

---

## Phase 2: Database & Auth ✅

### Tasks
- [x] Create database schema SQL
- [x] Implement `lib/db.ts` for Postgres client
- [x] Implement `lib/auth.ts` for JWT handling
- [x] Create `/api/auth/login` route
- [x] Create `/api/auth/logout` route
- [x] Create `/api/auth/me` route
- [x] Build login page with HeroUI (tabs for password/invite)
- [x] Add auth middleware
- [x] Create `useAuth` hook for client-side auth state
- [x] Add logout button to sidebar

### Database Schema
```sql
sessions (id, input, result, status, user_id, session_type, current_step, error_message)
messages (id, session_id, role, content, message_type, sequence_number)
auth_users (id, email, password_hash, invite_code_used, is_active)
invite_codes (code, max_uses, use_count, expires_at, is_active)
feedback (id, session_id, user_id, target_type, rating, comment)  -- thumbs up/down
bug_reports (id, session_id, user_id, title, description, context, github_issue_url, status)
```

### Key Files Created
```
apps/web/
├── lib/
│   ├── schema.sql          # PostgreSQL schema
│   ├── db.ts               # Database operations
│   └── auth.ts             # JWT + auth utilities
├── hooks/
│   └── useAuth.ts          # Client-side auth hook
├── middleware.ts           # Route protection
├── .env.local              # Development env vars
├── .env.example            # Template env vars
└── app/api/
    ├── health/route.ts
    └── auth/
        ├── login/route.ts
        ├── logout/route.ts
        └── me/route.ts
```

### Auth Flow
1. User visits protected route → middleware checks for `auth-token` cookie
2. If missing → redirect to `/login`
3. Login page offers password or invite code auth
4. On success → JWT stored in httpOnly cookie for 7 days
5. Sidebar shows user type and logout button

---

## Phase 3: API Migration

### Endpoints to Migrate
| Express | Next.js | Status |
|---------|---------|--------|
| POST /api/analyze | app/api/analyze/route.ts | ⏳ |
| POST /api/uc-generate | app/api/uc-generate/route.ts | ⏳ |
| GET /api/sessions | app/api/sessions/route.ts | ⏳ |
| GET /api/sessions/:id | app/api/sessions/[id]/route.ts | ⏳ |
| DELETE /api/sessions/:id | app/api/sessions/[id]/route.ts | ⏳ |
| POST /api/sessions/:id/follow-up | app/api/sessions/[id]/follow-up/route.ts | ⏳ |

### New Endpoints
| Route | Purpose |
|-------|---------|
| POST /api/sessions/[id]/edit | Smart rerun (edit field) |
| POST /api/sessions/[id]/regenerate | Full regeneration |
| POST /api/feedback | Submit thumbs up/down feedback |
| GET /api/feedback/stats | Get feedback statistics (admin) |
| POST /api/bugs | Submit bug report (auto-creates GitHub issue) |
| GET /api/bugs | List bug reports (admin) |

### GitHub Integration
Bug reports auto-create issues in `zuca-v2` repo via GitHub API:
- Requires `GITHUB_TOKEN` env var with `repo` scope
- Issues include full context: session input/output, browser info, error logs
- Bug report record updated with issue URL after creation

---

## Phase 4: Core UI Forms

### Components to Build
- [ ] `components/layout/Sidebar.tsx` (refactor from layout)
- [ ] `components/layout/Header.tsx`
- [ ] `components/forms/AnalyzeForm.tsx` (already exists, needs API integration)
- [ ] `components/forms/UCGeneratorModal.tsx`
- [ ] `components/forms/UseCaseCard.tsx`
- [ ] `components/feedback/BugReportModal.tsx` (global bug report form)

### Pages
- [x] `app/(main)/analyze/page.tsx` (form built, needs API wiring)

---

## Phase 5: Solution View

### Components to Build
- [ ] `components/solution/SolutionView.tsx`
- [ ] `components/solution/SolutionTabs.tsx`
- [ ] `components/solution/DataTable.tsx`
- [ ] `components/solution/ExportDropdown.tsx`
- [ ] `components/feedback/FeedbackButtons.tsx` (thumbs up/down per section)
- [ ] `components/feedback/FeedbackComment.tsx` (optional comment for thumbs down)

### Table Types
- Contracts/Orders (50+ columns)
- Billings
- Rev Rec Waterfall

---

## Phase 6: Conversation

### Components to Build
- [ ] `components/chat/ConversationPanel.tsx`
- [ ] `components/chat/MessageBubble.tsx`
- [ ] `components/chat/ChatInput.tsx`
- [ ] `components/chat/ActionButtons.tsx`

### Features
- Edit Field (smart rerun)
- Regenerate (full rerun)
- Follow-up questions

---

## Phase 7: History & Polish

### Components to Build
- [ ] `components/history/SessionList.tsx`
- [ ] `components/history/SessionCard.tsx`

### Pages
- [ ] `app/(main)/history/page.tsx` (placeholder exists)

### Polish
- [ ] Responsive design
- [ ] Error boundaries
- [ ] Loading skeletons

---

## Phase 8: Deployment

### Tasks
- [ ] Configure Vercel project
- [ ] Set up Vercel Postgres database
- [ ] Set environment variables
- [ ] Remove Express server (`src/api/server.ts`)
- [ ] Update CLAUDE.md
- [ ] Update README.md
- [ ] Test production deployment

---

## Tech Stack

| Category | Choice |
|----------|--------|
| Framework | Next.js 16 App Router (Turbopack) |
| UI Components | HeroUI |
| Styling | Tailwind CSS |
| State (Server) | React Query |
| State (Client) | Zustand |
| Forms | React Hook Form + Zod |
| Database | Vercel Postgres |
| Auth | JWT (jose) + bcrypt |
| Deployment | Vercel |

---

## Environment Variables

```bash
# Required
POSTGRES_URL=              # Vercel Postgres connection string
JWT_SECRET=                # Min 32 chars for production
ZUCA_PASSWORD=             # Shared password for simple auth
OPENAI_API_KEY=            # For pipeline processing

# Bug Reporting (GitHub Integration)
GITHUB_TOKEN=              # Personal access token with 'repo' scope
GITHUB_OWNER=              # Repository owner (e.g., 'your-org')
GITHUB_REPO=               # Repository name (e.g., 'zuca-v2')

# Optional
ZUORA_MCP_SERVER_URL=      # MCP server for Zuora guidance
```

---

## Development

```bash
# Start dev server
npm run dev:web

# Or from apps/web directory
npm run dev

# Test auth flow
curl -X POST http://localhost:3002/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"type":"password","value":"zuca-dev"}'
```
