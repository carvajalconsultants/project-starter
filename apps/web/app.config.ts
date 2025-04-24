// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";

import { paraglideVitePlugin } from "@inlang/paraglide-js";

export default defineConfig({
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./app/paraglide",
        // We get the locale in this order: override from cookie, browser setting, default (usually English)
        strategy: ["cookie", "preferredLanguage", "baseLocale"],
      }),
    ],
  },
  server: {
    experimental: {
      websocket: true,
    },
  },
});
