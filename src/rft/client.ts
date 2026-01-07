/**
 * RFT Client - Creates and manages Reinforcement Fine-Tuning jobs
 */

import OpenAI from 'openai';
import fs from 'fs';
import { buildModelGraderConfig } from './grader-prompt';
import type { RFTJobStatus } from './types';

const RFT_MODEL = 'o4-mini-2025-04-16';

export class RFTClient {
  private client: OpenAI;

  constructor(apiKey?: string) {
    this.client = new OpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
  }

  /**
   * Upload a training/validation file for RFT
   */
  async uploadFile(filePath: string): Promise<string> {
    const file = await this.client.files.create({
      file: fs.createReadStream(filePath),
      purpose: 'fine-tune',
    });

    console.log(`Uploaded ${filePath} -> ${file.id}`);
    return file.id;
  }

  /**
   * Create an RFT job with model grader
   */
  async createJob(config: {
    trainingFileId: string;
    validationFileId: string;
    suffix?: string;
    epochs?: number;
    batchSize?: number;
    reasoningEffort?: 'low' | 'medium' | 'high';
    graderModel?: string;
  }): Promise<string> {
    const {
      trainingFileId,
      validationFileId,
      suffix,
      epochs = 3,
      batchSize = 4,
      reasoningEffort = 'medium',
      graderModel = RFT_MODEL,
    } = config;

    const graderConfig = buildModelGraderConfig(graderModel);

    // Note: The exact API structure may vary - this follows the documented pattern
    const job = await this.client.fineTuning.jobs.create({
      training_file: trainingFileId,
      validation_file: validationFileId,
      model: RFT_MODEL,
      suffix: suffix,
      method: {
        type: 'reinforcement',
        reinforcement: {
          grader: graderConfig as any, // Type assertion needed for grader config
          hyperparameters: {
            reasoning_effort: reasoningEffort,
            n_epochs: epochs,
            batch_size: batchSize,
          },
        },
      },
    } as any); // Type assertion for RFT-specific fields

    console.log(`Created RFT job: ${job.id}`);
    return job.id;
  }

  /**
   * Get job status
   */
  async getJobStatus(jobId: string): Promise<RFTJobStatus> {
    const job = await this.client.fineTuning.jobs.retrieve(jobId);

    return {
      id: job.id,
      status: job.status as RFTJobStatus['status'],
      model: job.model,
      createdAt: new Date(job.created_at * 1000).toISOString(),
      finishedAt: job.finished_at
        ? new Date(job.finished_at * 1000).toISOString()
        : undefined,
      trainedTokens: job.trained_tokens || undefined,
      error: job.error?.message,
    };
  }

  /**
   * List recent RFT jobs
   */
  async listJobs(limit: number = 10): Promise<RFTJobStatus[]> {
    const jobs = await this.client.fineTuning.jobs.list({ limit });

    return jobs.data.map((job) => ({
      id: job.id,
      status: job.status as RFTJobStatus['status'],
      model: job.model,
      createdAt: new Date(job.created_at * 1000).toISOString(),
      finishedAt: job.finished_at
        ? new Date(job.finished_at * 1000).toISOString()
        : undefined,
      trainedTokens: job.trained_tokens || undefined,
      error: job.error?.message,
    }));
  }

  /**
   * Cancel a running job
   */
  async cancelJob(jobId: string): Promise<void> {
    await this.client.fineTuning.jobs.cancel(jobId);
    console.log(`Cancelled job: ${jobId}`);
  }

  /**
   * Stream job events
   */
  async *streamEvents(
    jobId: string
  ): AsyncGenerator<{ type: string; message: string; data?: any }> {
    const events = await this.client.fineTuning.jobs.listEvents(jobId, {
      limit: 100,
    });

    for (const event of events.data.reverse()) {
      yield {
        type: event.level || 'info',
        message: event.message,
        data: event.data,
      };
    }
  }

  /**
   * Wait for job completion with progress updates
   */
  async waitForCompletion(
    jobId: string,
    onProgress?: (status: RFTJobStatus) => void,
    pollIntervalMs: number = 30000
  ): Promise<RFTJobStatus> {
    const terminalStates = ['succeeded', 'failed', 'cancelled'];

    while (true) {
      const status = await this.getJobStatus(jobId);

      if (onProgress) {
        onProgress(status);
      }

      if (terminalStates.includes(status.status)) {
        return status;
      }

      await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
    }
  }
}

/**
 * Convenience function to run complete RFT workflow
 */
export async function runRFTWorkflow(options: {
  trainFile: string;
  validFile: string;
  suffix?: string;
  epochs?: number;
  verbose?: boolean;
}): Promise<{ jobId: string; status: RFTJobStatus }> {
  const { trainFile, validFile, suffix, epochs = 3, verbose = false } = options;

  const client = new RFTClient();

  // Upload files
  if (verbose) console.log('Uploading training file...');
  const trainFileId = await client.uploadFile(trainFile);

  if (verbose) console.log('Uploading validation file...');
  const validFileId = await client.uploadFile(validFile);

  // Create job
  if (verbose) console.log('Creating RFT job...');
  const jobId = await client.createJob({
    trainingFileId: trainFileId,
    validationFileId: validFileId,
    suffix,
    epochs,
  });

  // Wait for completion
  if (verbose) console.log('Waiting for job completion...');
  const status = await client.waitForCompletion(jobId, (s) => {
    if (verbose) {
      console.log(`Status: ${s.status}${s.trainedTokens ? ` (${s.trainedTokens} tokens)` : ''}`);
    }
  });

  return { jobId, status };
}
