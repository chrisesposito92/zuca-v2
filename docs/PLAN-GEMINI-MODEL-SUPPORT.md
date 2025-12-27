# Plan: Multi-Provider LLM Support (OpenAI GPT-5.2 + Gemini 3 Pro/Flash)

## Goals
- Add **Gemini 3 Pro Preview** and **Gemini 3 Flash Preview** as selectable execution backends for *all* pipeline steps.
- Enforce **no mix-and-match** within a run: one model choice = all steps use that model.
- Preserve **structured outputs** and **tooling** behavior.
- Make model selection available in **frontend**, **API**, and **CLI**.
- Maintain compatibility with existing OpenAI (GPT-5.2) behavior by default.

## Key Constraints & Decisions
- **Gemini tool mixing:** Gemini docs show **native tools + function calling together only in the Live API** (multi-tool use). For REST `generateContent`, we attempt both and **fall back to function tools only** if the API rejects mixed tools. This preserves `ask_zuora` when conflicts occur.
- **Reasoning levels:**
  - GPT: `low | medium | high`
  - Gemini 3 Pro: `low | high` (map GPT `medium` → `high`)
  - Gemini 3 Flash: `minimal | low | medium | high` (map GPT `low|medium|high` → `low|medium|high`)
## Confirmed Decisions (Locked)
- **ask_zuora scope:** Enabled everywhere it was already enabled (all steps that include MCP tools).
- **url_context:** Enabled for **all Gemini requests** by default (no-op if unused).
- **Session model:** Persisted on sessions; **regenerations can override** with a different model.

## Open Questions
None (decisions resolved).

## Proposed Architecture
### 1) LLM Provider Abstraction
- Introduce a **provider-aware client** in `src/llm/`:
  - `openaiClient.ts` (existing logic)
  - `geminiClient.ts` (new; REST via `fetch` or official SDK)
- Keep `complete()` as the single entrypoint, but route based on model/provider.

### 2) Unified Model Selection
- Add `LLMModel` union type: `gpt-5.2 | gemini-3-pro-preview | gemini-3-flash-preview`.
- Add `PipelineOptions.model` (and `UCGeneratorOptions.model`).
- Propagate model selection to all steps via `CompletionOptions.model`.

### 3) Gemini Request Features
- **Structured output:** `response_mime_type: application/json` + `response_json_schema`.
- **Tools mapping:**
  - `web_search` → `google_search`
  - `code_interpreter` → `code_execution`
  - (optional) `url_context`
- **Reasoning mapping:** map GPT reasoning to Gemini `thinking_level`.

### 4) MCP (ask_zuora) Integration for Gemini
- Use **Model Context Protocol SDK** to connect to the MCP server URL.
- Expose **ask_zuora** as a Gemini function tool with schema `{ prompt, session }`.
- Execute function calls locally and feed results back to Gemini.
- Enforce the tool-conflict policy from the open questions above.

### 5) API/CLI/UI Surface Area
- **CLI:** add `--model` flag for analyze / interactive / quick / uc-generate.
- **Backend API (Next.js):** accept `model` in request body, pass through to pipeline.
- **Frontend:** add a model selector on the Analyze + UC Generator forms; disable while run is in progress.
- **Sessions:** store selected model in DB (`sessions.llm_model`) and display in history/solution header.

## Implementation Steps
1. **Config updates**
   - Add `GEMINI_API_KEY`, default model settings, and validation.
   - Update `.env.example` (root + web).
2. **LLM client refactor**
   - Split OpenAI + Gemini logic; keep `complete()` API stable.
   - Implement Gemini request format, tool mapping, and reasoning mapping.
3. **MCP integration**
   - Add MCP client wrapper for `ask_zuora` (Gemini function calling).
   - Apply tool-conflict policy.
4. **Pipeline + UC Generator**
   - Thread `model` through orchestrators, steps, follow-up, and patch flows.
5. **API + CLI**
   - Add model to request/flags and pass to pipeline.
6. **Frontend**
   - Add model selector UI; include in API requests; persist per session.
7. **Docs**
   - Update `README.md`, `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP-FRONTEND.md`.

## Testing Plan
- Unit sanity: run one step with each provider (mocked if needed).
- Manual checks:
  - Analyze + UC generator run with each model.
  - Model switching disabled while running.
  - Regenerate uses stored model.
  - ask_zuora works in expert assistant (Gemini).

---

## Status
- **Implemented** (Gemini 3 Pro/Flash support, model selection, and session persistence are in place).
