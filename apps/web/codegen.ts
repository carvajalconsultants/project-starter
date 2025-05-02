import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql",
  documents: ["app/**/*.tsx", "app/**/*.ts"],
  generates: {
    "./app/gql/": {
      preset: "client",
      config: {
        scalars: {
          BigInt: "string",
          BigFloat: "string",
          Cursor: "string",
          Date: "string",
          Datetime: "string",
          JSON: "string",
          UUID: "string",
        },
      },
    },
  },
};

// eslint-disable-next-line import-x/no-default-export
export default config;
