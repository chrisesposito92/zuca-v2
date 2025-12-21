/**
 * POST /api/uc-generate/fun-facts
 *
 * Generate fun facts about a company for display during loading screens.
 * This is a lightweight endpoint designed to return quickly.
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateCompanyFunFacts } from '@zuca/pipeline/uc-generator';

interface FunFactsRequest {
  customer_name: string;
  customer_website?: string;
}

export async function POST(request: NextRequest) {
  try {
    const input: FunFactsRequest = await request.json();

    // Validate required field
    if (!input.customer_name || typeof input.customer_name !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input', details: 'customer_name is required' },
        { status: 400 }
      );
    }

    // Generate fun facts
    const result = await generateCompanyFunFacts({
      customer_name: input.customer_name.trim(),
      customer_website: input.customer_website?.trim(),
    });

    return NextResponse.json({
      success: true,
      company_name: result.company_name,
      fun_facts: result.fun_facts,
    });
  } catch (error: unknown) {
    console.error('Fun facts generation error:', error);
    const message = error instanceof Error ? error.message : 'Failed to generate fun facts';
    return NextResponse.json(
      { error: 'Fun facts generation failed', details: message },
      { status: 500 }
    );
  }
}
