import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  // No GitHub Pages o site fica em /efycaz-contabilidade/ (definido pelo workflow via BASE_PATH)
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        privacidade: path.resolve(__dirname, "privacidade.html"),
      },
    },
  },
});
