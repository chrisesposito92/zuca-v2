/**
 * ZUCA HTTP API Server
 *
 * REST API for analyzing use cases and managing sessions.
 *
 * Endpoints:
 *   POST /api/analyze          - Analyze a new use case
 *   POST /api/uc-generate      - Generate use cases for a customer
 *   POST /api/sessions/:id/follow-up - Handle follow-up query
 *   GET  /api/sessions         - List all sessions
 *   GET  /api/sessions/:id     - Get session details
 *   DELETE /api/sessions/:id   - Delete a session
 *   POST /api/quick            - Quick capability detection
 *   GET  /health               - Health check
 */

import express, { Request, Response, NextFunction } from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import { createServer } from 'http';
import { ZucaInput, validateZucaInput } from '../types/input';
import { UCGeneratorInput, validateUCGeneratorInput } from '../types/uc-generator';
import {
  runPipeline,
  handleFollowUp,
  quickAnalysis,
  getSession,
  listSessions,
  deleteSession,
} from '../pipeline/index';
import { runUCGenerator } from '../pipeline/uc-generator/index';
import { config, debugLog } from '../config';

const app = express();
app.use(express.json({ limit: '10mb' }));

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    debugLog(`${req.method} ${req.path} - ${res.statusCode} (${Date.now() - start}ms)`);
  });
  next();
});

// Error handler type
interface ApiError extends Error {
  statusCode?: number;
}

// Async handler wrapper
const asyncHandler = (fn: (req: Request, res: Response) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res)).catch(next);
  };

/**
 * POST /api/analyze
 * Analyze a new use case
 */
app.post('/api/analyze', asyncHandler(async (req: Request, res: Response) => {
  const input = req.body as ZucaInput;

  // Validate input
  try {
    validateZucaInput(input);
  } catch (error: any) {
    res.status(400).json({
      error: 'Invalid input',
      details: error.message,
    });
    return;
  }

  debugLog('Starting analysis', { customer: input.customer_name });

  try {
    const result = await runPipeline(input);
    res.json({
      success: true,
      session_id: result.session_id,
      result,
    });
  } catch (error: any) {
    debugLog('Analysis failed', { error: error.message });
    res.status(500).json({
      error: 'Analysis failed',
      details: error.message,
    });
  }
}));

/**
 * POST /api/sessions/:id/follow-up
 * Handle a follow-up query in an existing session
 */
app.post('/api/sessions/:id/follow-up', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { query } = req.body;

  if (!query || typeof query !== 'string') {
    res.status(400).json({
      error: 'Missing query',
      details: 'Request body must include a "query" string',
    });
    return;
  }

  try {
    const response = await handleFollowUp(id, query);
    res.json({
      success: true,
      type: response.type,
      data: response.data,
    });
  } catch (error: any) {
    if (error.message.includes('Session not found')) {
      res.status(404).json({
        error: 'Session not found',
        details: error.message,
      });
    } else {
      res.status(500).json({
        error: 'Follow-up failed',
        details: error.message,
      });
    }
  }
}));

/**
 * GET /api/sessions
 * List all active sessions
 */
app.get('/api/sessions', asyncHandler(async (_req: Request, res: Response) => {
  const sessions = listSessions().map((s) => ({
    id: s.id,
    customer_name: s.input.customer_name,
    created_at: s.createdAt,
    last_updated_at: s.lastUpdatedAt,
    conversation_turns: s.conversationHistory.length,
  }));

  res.json({
    success: true,
    sessions,
  });
}));

/**
 * GET /api/sessions/:id
 * Get details of a specific session
 */
app.get('/api/sessions/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const session = getSession(id);

  if (!session) {
    res.status(404).json({
      error: 'Session not found',
    });
    return;
  }

  res.json({
    success: true,
    session: {
      id: session.id,
      created_at: session.createdAt,
      last_updated_at: session.lastUpdatedAt,
      input: session.input,
      result: session.result,
      conversation_history: session.conversationHistory,
    },
  });
}));

/**
 * DELETE /api/sessions/:id
 * Delete a session
 */
app.delete('/api/sessions/:id', asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = deleteSession(id);

  if (!deleted) {
    res.status(404).json({
      error: 'Session not found',
    });
    return;
  }

  res.json({
    success: true,
    message: 'Session deleted',
  });
}));

/**
 * POST /api/quick
 * Quick capability detection without full pipeline
 */
app.post('/api/quick', asyncHandler(async (req: Request, res: Response) => {
  const { description } = req.body;

  if (!description || typeof description !== 'string') {
    res.status(400).json({
      error: 'Missing description',
      details: 'Request body must include a "description" string',
    });
    return;
  }

  try {
    const result = await quickAnalysis(description);
    res.json({
      success: true,
      detected_capabilities: result.detected,
      matched_use_cases: result.matched.matched_guc,
    });
  } catch (error: any) {
    res.status(500).json({
      error: 'Quick analysis failed',
      details: error.message,
    });
  }
}));

/**
 * POST /api/uc-generate
 * Generate use cases for a customer based on web research
 */
app.post('/api/uc-generate', asyncHandler(async (req: Request, res: Response) => {
  const input = req.body as UCGeneratorInput;

  // Validate input
  try {
    validateUCGeneratorInput(input);
  } catch (error: any) {
    res.status(400).json({
      error: 'Invalid input',
      details: error.message,
    });
    return;
  }

  debugLog('Starting UC generation', { customer: input.customer_name, website: input.customer_website });

  try {
    const result = await runUCGenerator(input, {
      useLocalFormatting: req.query.local === 'true',
    });

    res.json({
      success: true,
      session_id: result.session_id,
      research: result.research,
      generated: result.generated,
      formatted: result.formatted,
      use_cases: result.use_cases,
    });
  } catch (error: any) {
    debugLog('UC generation failed', { error: error.message });
    res.status(500).json({
      error: 'Use case generation failed',
      details: error.message,
    });
  }
}));

/**
 * GET /health
 * Health check endpoint
 */
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err: ApiError, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(err.statusCode || 500).json({
    error: 'Internal server error',
    details: config.app.nodeEnv === 'development' ? err.message : undefined,
  });
});

// Create HTTP server and WebSocket server
const server = createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

// WebSocket connection handler for streaming responses
wss.on('connection', (ws: WebSocket) => {
  debugLog('WebSocket client connected');

  ws.on('message', async (message: Buffer) => {
    try {
      const data = JSON.parse(message.toString());

      switch (data.type) {
        case 'analyze':
          try {
            validateZucaInput(data.input);
            ws.send(JSON.stringify({ type: 'status', message: 'Starting analysis...' }));

            const result = await runPipeline(data.input);

            ws.send(JSON.stringify({
              type: 'result',
              session_id: result.session_id,
              result,
            }));
          } catch (error: any) {
            ws.send(JSON.stringify({
              type: 'error',
              message: error.message,
            }));
          }
          break;

        case 'follow-up':
          try {
            const response = await handleFollowUp(data.session_id, data.query);
            ws.send(JSON.stringify({
              type: 'follow-up-result',
              response_type: response.type,
              data: response.data,
            }));
          } catch (error: any) {
            ws.send(JSON.stringify({
              type: 'error',
              message: error.message,
            }));
          }
          break;

        default:
          ws.send(JSON.stringify({
            type: 'error',
            message: `Unknown message type: ${data.type}`,
          }));
      }
    } catch (error: any) {
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Invalid message format',
      }));
    }
  });

  ws.on('close', () => {
    debugLog('WebSocket client disconnected');
  });
});

// Start server
const PORT = config.server.port;

export function startServer(): void {
  server.listen(PORT, () => {
    console.log(`ZUCA API Server running on http://localhost:${PORT}`);
    console.log(`WebSocket available at ws://localhost:${PORT}/ws`);
    console.log('');
    console.log('Endpoints:');
    console.log('  POST /api/analyze          - Analyze a use case');
    console.log('  POST /api/uc-generate      - Generate use cases for a customer');
    console.log('  POST /api/sessions/:id/follow-up - Follow-up query');
    console.log('  GET  /api/sessions         - List sessions');
    console.log('  GET  /api/sessions/:id     - Get session');
    console.log('  DELETE /api/sessions/:id   - Delete session');
    console.log('  POST /api/quick            - Quick analysis');
    console.log('  GET  /health               - Health check');
  });
}

// Start if run directly
if (import.meta.url.endsWith(process.argv[1]?.replace(/^file:\/\//, '') || '')) {
  startServer();
}

export { app, server };
