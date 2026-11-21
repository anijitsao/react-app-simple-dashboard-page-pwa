import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
  },
  test: {
    environment: "jsdom",
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ["text", "html"],
      include: ['src/**/*.{js,jsx}'], // Only track coverage for your source files
    }
  },
});
