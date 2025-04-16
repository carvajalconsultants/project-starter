// app/graphql/serverProvider.tsx
import { ssr } from "@carvajalconsultants/headstart/client";
import { grafastExchange } from "@carvajalconsultants/headstart/server";
import { Client } from "urql";

import { pgl } from "../../pgl";

/**
 * Configure URQL for server side querying with Grafast.
 *
 * This removes the need to make an HTTP request to ourselves and simply executes the GraphQL query.
 */
export const client = new Client({
  url: ".",
  exchanges: [ssr, grafastExchange(pgl)],
});
