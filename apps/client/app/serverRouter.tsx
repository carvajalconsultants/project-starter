// app/serverRouter.tsx
import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import { ssr } from "@carvajalconsultants/headstart/client";
import { Provider } from "urql";

import { client } from "./graphql/serverProvider";
import { routeTree } from "./routeTree.gen";

import type { ReactNode } from "react";

export const createRouter = () => {
  const router = createTanStackRouter({
    routeTree,
    context: {
      client,
    },

    // Send data to client so URQL can be hydrated.
    dehydrate: () => ({ initialData: ssr.extractData() }),

    // Wrap our entire route with the URQL provider so we can execute queries and mutations.
    Wrap: ({ children }: { children: ReactNode }) => <Provider value={client}>{children}</Provider>,
  });

  return router;
};
