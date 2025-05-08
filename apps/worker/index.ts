/**
 * Background Job Processing System
 *
 * This module implements a robust background job processing system using graphile-worker.
 * It handles computationally intensive or time-consuming tasks that should not block
 * the main application thread, such as:
 *
 * - Email notifications and communications
 * - Large data processing and ETL operations
 * - Report generation and file processing
 * - Third-party API integrations and webhooks
 * - Database maintenance and cleanup tasks
 *
 * Architecture:
 * - Uses PostgreSQL as a reliable, transactional job queue
 * - Supports multiple worker processes for horizontal scaling
 * - Provides automatic job retries and error handling
 * - Maintains job priorities and scheduling
 *
 * @module worker
 */

import { run } from "graphile-worker";

import preset from "./graphile.config";
import { hello } from "./tasks/hello";

/**
 * Initializes and manages the background job processing system.
 *
 * This function:
 * 1. Connects to the PostgreSQL job queue using the configured connection string
 * 2. Registers available task handlers (e.g., email, data processing tasks)
 * 3. Starts the job processing loop that watches for new jobs
 * 4. Handles graceful shutdown when the process is terminated
 *
 * @returns {Promise<void>} Resolves when the worker system shuts down gracefully
 * @throws {Error} If worker initialization fails or encounters fatal runtime errors
 */
const main = async () => {
  /**
   * Initialize the worker runner with our configuration and registered tasks.
   *
   * Tasks are manually registered here so tasks can be written in TypeScript and
   * later compiled into JavaScript for deployment.
   *
   * Scheduled tasks should be added via the `crontab` property and not the file for
   * bundling reasons.
   */
  const runner = await run({ preset, taskList: { hello } });

  // Keep the worker process alive and handle graceful shutdown
  await runner.promise;
};

// Bootstrap the worker system with error handling
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
