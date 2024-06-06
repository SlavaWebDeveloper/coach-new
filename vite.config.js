import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 8080,
  },
});
