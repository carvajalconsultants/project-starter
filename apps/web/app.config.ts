// app.config.ts
import optimizeLocales from "@react-aria/optimize-locales-plugin";
import { defineConfig } from "@tanstack/react-start/config";

import { paraglideVitePlugin } from "@inlang/paraglide-js";
import VitePluginSVGSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["../../tsconfig.json", "./tsconfig.json"],
      }),

      VitePluginSVGSpritemap(["../../node_modules/@carvajalconsultants/ui-primitives/public/icons/**/*.svg", "./public/icons/*.svg"], {
        prefix: false,
        svgo: {
          plugins: [
            {
              name: "removeAttrs",
              params: {
                attrs: ["class"],
              },
            },
          ],
        },
      }),

      {
        ...optimizeLocales.vite({
          locales: ["en-US"],
        }),
        enforce: "pre",
      },

      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./app/paraglide",
        // We get the locale in this order: override from cookie, browser setting, default (usually English)
        strategy: ["cookie", "preferredLanguage", "baseLocale"],
      }),
    ],
  },
  server: {
    preset: "bun",
    experimental: {
      websocket: true,
    },
  },
});
