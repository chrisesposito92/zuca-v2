/**
 * GET /api/html-template/templates
 *
 * List available quick templates for the HTML Template Builder.
 * Optionally filter by mode (code or expression).
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  getTemplatesByMode,
  getTemplatesGroupedByCategory,
  getAllTemplates,
} from '@zuca/pipeline/html-templates/quick-templates';
import type { HTMLTemplateMode } from '@zuca/types/html-template';

export async function GET(request: NextRequest) {
  try {
    const mode = request.nextUrl.searchParams.get('mode') as HTMLTemplateMode | null;
    const grouped = request.nextUrl.searchParams.get('grouped') === 'true';

    if (grouped) {
      // Return templates grouped by category
      const templates = getTemplatesGroupedByCategory(mode || undefined);
      return NextResponse.json({ success: true, templates });
    }

    // Return flat list
    const templates = mode ? getTemplatesByMode(mode) : getAllTemplates();
    return NextResponse.json({ success: true, templates });
  } catch (error: unknown) {
    console.error('Templates error:', error);
    const message = error instanceof Error ? error.message : 'Failed to list templates';
    return NextResponse.json({ error: 'Failed to list templates', details: message }, { status: 500 });
  }
}
