/**
 * Configuration for the background job processing system.
 * This setup enables the application to handle asynchronous tasks like:
 * - Sending emails
 * - Processing data imports
 * - Generating reports
 * - Handling long-running operations
 *
 * @typedef {Object} GraphileConfig
 * @property {Object} worker - Core worker configuration
 * @property {string} worker.connectionString - PostgreSQL connection string for the job queue database
 */

import { WorkerPreset } from "graphile-worker";

/**
 * Main worker configuration that extends the base Graphile Worker preset.
 * This preset provides essential job queue functionality while allowing
 * customization for our specific needs.
 *
 * The worker will:
 * 1. Connect to PostgreSQL using the provided DATABASE_URL
 * 2. Watch for new jobs in the queue
 * 3. Process jobs based on their type and priority
 * 4. Handle retries and failures automatically
 */
const preset: GraphileConfig.Preset = {
  extends: [WorkerPreset],

  worker: {
    connectionString: process.env.DATABASE_URL,
  },
};

export default preset;
