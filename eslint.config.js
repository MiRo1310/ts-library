import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
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
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,vue}"],
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
      "vue/multi-word-component-names": "off",
      "vue/no-unused-components": "warn",
      "vue/no-mutating-props": "error",
      "vue/no-unused-properties": [
        "error",
        {
          groups: ["props"],
          deepData: false,
          ignorePublicMembers: false,
        },
      ],
      complexity: ["error", 10],
    },
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },
]);
