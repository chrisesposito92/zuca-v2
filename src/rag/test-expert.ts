#!/usr/bin/env node
/**
 * Quick test for expert-assistant RAG integration
 */

import { config } from 'dotenv';
config();

import { expertAssistant, formatExpertResponse } from '../pipeline/steps/expert-assistant';

async function main() {
  const question = process.argv[2] || 'What is a contract modification in Zuora Revenue?';

  console.log('\n🧪 Testing Expert Assistant with RAG\n');
  console.log(`Question: "${question}"\n`);
  console.log('─'.repeat(60));

  const startTime = Date.now();

  try {
    const response = await expertAssistant(question);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log('\n📝 Response:\n');
    console.log(formatExpertResponse(response));
    console.log('\n─'.repeat(60));
    console.log(`\nConfidence: ${(response.confidence * 100).toFixed(0)}%`);
    console.log(`Time: ${elapsed}s`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
