// app/routes/__root.tsx
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

import inter400 from "@fontsource/inter/latin-400.css?url";
import inter500 from "@fontsource/inter/latin-500.css?url";
import inter700 from "@fontsource/inter/latin-700.css?url";

import mainCss from "../main.css?url";

import type { ReactNode } from "react";

const RootComponent = () => (
  <RootDocument>
    <Outlet />
  </RootDocument>
);

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang="en" data-theme="light">
    <head>
      <HeadContent />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: mainCss,
      },
      { rel: "stylesheet", href: inter400 },
      { rel: "stylesheet", href: inter500 },
      { rel: "stylesheet", href: inter700 },
    ],
  }),
  component: RootComponent,
});
