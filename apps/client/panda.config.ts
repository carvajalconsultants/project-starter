import { cciPreset } from "@carvajalconsultants/ui-primitives/src/cci-preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Minimal tokens as per: https://panda-css.com/docs/guides/minimal-setup
  presets: [cciPreset],

  // Where to look for your css declarations
  include: ["../../node_modules/@carvajalconsultants/ui-primitives/src/**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}"],

  // Whether to use css reset
  preflight: true,

  // Hash/Obfuscate classNames
  // hash: true,

  // Generate styled-system jsx
  jsxFramework: "react",

  // Everything must be type safe, so this makes sure nobody can add invalid values
  strictTokens: true,
  strictPropertyValues: true,

  // Files to exclude
  exclude: [],
});
