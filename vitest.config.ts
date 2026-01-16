import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    include: ["src/**/*.{test,spec}.{js,ts}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
  },
});
