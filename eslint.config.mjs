import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "**/.idea/",
      "**/.vscode/",
      "**/build/",
      "**/dist/",
      "**/node_modules/",
      "**/src/api/gql/",
      "**/src/components/ui/",
      "tailwind.config.js",
      "vite.config.*",
      "codegen.ts",
      "eslint.config.mjs ",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      eqeqeq: "error",
      "no-console": "warn",
      curly: "error",
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],      
      complexity: ["error", 10],
    },
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },
]);
