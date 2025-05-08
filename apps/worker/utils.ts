import { object, pipe, string, uuid } from "valibot";

/**
 * Schema to validate the incoming payload contains a valid UUID.
 * This ensures data integrity before running the task as in:
 * https://worker.graphile.org/docs/typescript#using-type-assertion-functions
 *
 * This allows to use the single trigger function for all tables with single primary key "id":
 * https://worker.graphile.org/docs/sql-add-job#example-one-trigger-function-to-rule-them-all
 */
export const idSchema = object({
  id: pipe(string(), uuid("Invalid UUID")),
});
