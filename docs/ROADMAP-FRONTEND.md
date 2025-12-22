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
| 3. API Migration | ✅ Complete | 13 endpoints migrated |
| 4. Core UI Forms | ✅ Complete | AnalyzeForm + UCGeneratorModal |
| 5. Solution View | ✅ Complete | Tabs: Summary/Subscription/Contracts/Billings/RevRec |
| 6. Conversation | ✅ Complete | Follow-up chat panel with Edit Field/Regenerate actions |
| 7. History & Polish | ✅ Complete | Session list with search/delete |
| 8. Deployment | ⏳ Pending | |
| 9. Model Selection | ✅ Complete | Multi-provider (GPT/Gemini) selection + persistence |

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

## Phase 3: API Migration ✅

### Endpoints Migrated
| Route | Method | Status |
|-------|--------|--------|
| /api/analyze | POST | ✅ |
| /api/uc-generate | POST | ✅ |
| /api/sessions | GET | ✅ |
| /api/sessions/[id] | GET/DELETE | ✅ |
| /api/sessions/[id]/follow-up | POST | ✅ |
| /api/sessions/[id]/edit | POST | ✅ |
| /api/sessions/[id]/regenerate | POST | ✅ |
| /api/feedback | POST/GET | ✅ |
| /api/bugs | POST/GET | ✅ |
| /api/health | GET | ✅ |
| /api/auth/login | POST | ✅ |
| /api/auth/logout | POST | ✅ |
| /api/auth/me | GET | ✅ |

### Smart Rerun Logic
The `/api/sessions/[id]/edit` endpoint implements field-level reruns:
- Tracks field → pipeline step dependencies
- Only clears affected step results from `previousResult`
- Pipeline skips steps that already have cached results

| Field | Affected Steps |
|-------|----------------|
| customer_name | (display only) |
| contract_start_date | contract_intel, contracts_orders, billings, revrec_waterfall |
| terms_months | contract_intel, subscription_spec, contracts_orders, billings, revrec_waterfall |
| use_case_description | detected_capabilities, matched_golden_use_cases, subscription_spec, pob_mapping |
| is_allocations | pob_mapping, contracts_orders, revrec_waterfall |

### GitHub Integration
Bug reports auto-create issues in `zuca-v2` repo via GitHub API:
- Requires `GITHUB_TOKEN` env var with `repo` scope
- Issues include full context: session input/output, browser info, error logs
- Bug report record updated with issue URL after creation

### Key Files Created
```
apps/web/app/api/
├── health/route.ts
├── analyze/route.ts
├── uc-generate/route.ts
├── sessions/
│   ├── route.ts
│   └── [id]/
│       ├── route.ts
│       ├── follow-up/route.ts
│       ├── edit/route.ts
│       └── regenerate/route.ts
├── feedback/route.ts
└── bugs/route.ts
```

---

## Phase 4: Core UI Forms ✅

### Completed
- [x] `app/(main)/analyze/page.tsx` - Full form with API integration
- [x] UC Generator Modal integrated in analyze page
- [x] Use Case Card selection from generated results
- [x] React Query hooks for API calls (`hooks/useAnalyze.ts`, `hooks/useUCGenerator.ts`, `hooks/useSessions.ts`)
- [x] Form validation and error handling with toast notifications
- [x] Loading states and disabled form during submission

### Key Files Created
```
apps/web/
├── hooks/
│   ├── useAnalyze.ts      # Analyze mutation + form helper
│   ├── useUCGenerator.ts  # UC Generator mutation
│   └── useSessions.ts     # Sessions CRUD hooks
└── app/(main)/analyze/page.tsx  # Updated with full API integration
```

---

## Phase 5: Solution View ✅

### Completed
- [x] `app/(main)/solution/[id]/page.tsx` - Full solution view with tabs
- [x] Summary tab with markdown rendering
- [x] Subscription Spec tab with rate plans and charges
- [x] Contracts/Orders table with ZR data
- [x] Billings table with ZB data
- [x] Rev Rec Waterfall table
- [x] Raw JSON tab for debugging
- [x] Export to JSON and clipboard copy functionality
- [x] Loading skeletons and error states

### Tables Rendered
- Contracts/Orders (POB Name, Template, Sell Price, Allocated Price)
- Billings (Invoice Date, Charge, Rate Plan, Amount)
- Rev Rec Waterfall (POB, Period, Event, Amount)

---

## Phase 9: Model Selection ✅

### Completed
- [x] Model selector (GPT-5.2 / Gemini 3 Pro / Gemini 3 Flash) in Analyze + UC Generator flows
- [x] Disable switching while a run is in progress
- [x] Persist model choice per session (DB + history/solution views)
- [x] Regenerate can choose a different model
- [x] Backend + CLI support for model selection

### Related Plan
- See `docs/PLAN-GEMINI-MODEL-SUPPORT.md`

---

## Phase 6: Conversation ✅

### Components Built
- [x] `components/chat/ConversationPanel.tsx` - Main panel with message history
- [x] `components/chat/MessageBubble.tsx` - User/assistant message display with markdown
- [x] `components/chat/ChatInput.tsx` - Text input with send button
- [x] `components/chat/ActionButtons.tsx` - Edit Field dropdown + Regenerate button

### Features
- [x] Edit Field (smart rerun) - Dropdown to select field, modal to edit, only reruns affected steps
- [x] Regenerate (full rerun) - Confirmation modal, runs full pipeline from scratch
- [x] Follow-up questions - Chat input sends to `/api/sessions/[id]/follow-up`
- [x] Integrated into solution view as right sidebar panel

---

## Phase 7: History & Polish ✅

### Completed
- [x] `app/(main)/history/page.tsx` - Full session list with search and delete
- [x] Session cards with status chips and customer names
- [x] Search/filter by customer name or session ID
- [x] Delete confirmation modal
- [x] Loading skeletons
- [x] Error states

### Remaining Polish (Nice to Have)
- [ ] Responsive design pass for mobile
- [ ] Global error boundaries
- [ ] Feedback buttons (thumbs up/down) per section
- [ ] Bug report modal

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
