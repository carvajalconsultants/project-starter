import { GraphileCarvajalPreset } from "@carvajalconsultants/graphile";
import { makePgService } from "postgraphile/adaptors/pg";

import type { GraphileConfig } from "graphile-config";

/**
 * PostGraphile configuration preset that sets up a secure, performant GraphQL API.
 *
 * This configuration enables:
 * - Real-time data updates through event streams
 * - Interactive GraphQL development environment
 * - Simplified database schema naming
 */
const preset: GraphileConfig.Preset = {
  extends: [GraphileCarvajalPreset],

  grafserv: {
    port: 5678,
    graphiql: true,
    watch: true,
    graphqlPath: "/api/graphql",
    eventStreamPath: "/api/graphql",
  },

  /**
   * Database connection configuration that specifies which schemas contain
   * our business logic and data models.
   *
   * - app_public: Contains publicly accessible database objects
   */
  pgServices: [
    makePgService({
      connectionString: process.env.POSTGRES_CONNECTION_STRING,

      schemas: ["app_public"],
    }),
  ],
};

export default preset;
