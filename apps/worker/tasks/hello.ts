import { parse } from "valibot";

import { idSchema } from "../utils";

import type { Task } from "graphile-worker";

/**
 * A task that processes a job in the worker queue.
 *
 * This function is designed to handle asynchronous job processing in a worker queue system,
 * allowing for background processing of tasks without blocking the main application.
 *
 * All promises in it MUST be awaited.
 *
 * @param payload - The data payload associated with the job. This can contain any information
 *                 needed to process the job, such as user data, configuration settings,
 *                 or processing parameters.
 *
 * @param helpers - Utility functions and properties for job management.
 *
 * @returns Promise<void> - A promise that resolves when the job processing is complete
 */
export const hello: Task = (payload, helpers) => {
  // Ensure the payload contains a valid primary key before proceeding
  // This prevents processing invalid requests and maintains data integrity
  const validPayload = parse(idSchema, payload);

  console.log("Hello, world! Payload:", validPayload, "Job ID:", helpers.job.id);
};
