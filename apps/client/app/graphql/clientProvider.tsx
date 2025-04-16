import { ssr } from "@carvajalconsultants/headstart/client";
import { authExchange } from "@urql/exchange-auth";
import { cacheExchange } from "@urql/exchange-graphcache";
//import { relayPagination } from "@urql/exchange-graphcache/extras";
import { Client, fetchExchange } from "urql";

/**
 * Creates an authentication exchange for handling secure GraphQL operations.
 * This exchange ensures that all GraphQL requests are properly authenticated
 * and handles authentication failures gracefully.
 *
 * @returns {Object} Authentication configuration object
 * @returns {Function} .addAuthToOperation - Prepares operations with auth context
 * @returns {Function} .didAuthError - Detects authentication failures after server request
 * @returns {Function} .refreshAuth - Handles auth token refresh
 */
const auth = authExchange(async () => {
  //TODO Implement authentication checking for the client s ide
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("IMPLEMENT CLIENT AUTH CHECK");
      resolve();
    }, 2000);
  });

  return {
    /**
     * Processes each GraphQL operation to include authentication context.
     * Currently configured as a pass-through as tokens are in cookies.
     *
     * @param {Operation} operation - The GraphQL operation to authenticate
     * @returns {Operation} The operation with authentication context
     */
    addAuthToOperation: (operation) => operation,

    /**
     * Identifies when an operation has failed due to authentication issues.
     * Used to trigger authentication refresh flows when needed.
     *
     * @param {Error} error - The GraphQL error response
     * @returns {boolean} True if the error was caused by authentication failure
     */
    didAuthError: (error) => error.graphQLErrors.some((e) => e.extensions?.code === "FORBIDDEN"),

    /**
     * Handles refreshing authentication when it becomes invalid.
     * Currently implemented as a no-op as token refresh is handled by getSession().
     */
    refreshAuth: async () => {
      /* No-op, this is done in getSession() */
    },
  };
});

/**
 * Configured GraphQL client for the application.
 * Provides a centralized way to make authenticated GraphQL requests with
 * proper caching and server-side rendering support.
 */
export const client = new Client({
  url: "http://localhost:3000/api/graphql",
  exchanges: [
    cacheExchange({
      resolvers: {
        Query: {
          // Implements relay-style pagination for fills pending match
          //queryName: relayPagination(),
        },
      },
    }),
    auth,
    ssr,
    fetchExchange,
  ],
});
