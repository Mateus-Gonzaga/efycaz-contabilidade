import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

/**
 * Política de segurança (CSP) via <meta>, só no build de produção.
 * O GitHub Pages não permite cabeçalhos HTTP próprios, então a política vai no HTML.
 * No dev ela ficaria de fora para não quebrar o recarregamento automático do Vite.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'", // React usa atributos style= (variáveis CSS das animações)
  "img-src 'self' data:", // data: = favicon animado (canvas) e textura do fundo
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com", // mapa da seção "Onde estamos"
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

function securityMeta(): Plugin {
  return {
    name: "efycaz-security-meta",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(
        "<head>",
        `<head>\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />\n    <meta name="referrer" content="strict-origin-when-cross-origin" />`,
      );
    },
  };
}

export default defineConfig({
  // No GitHub Pages o site fica em /efycaz-contabilidade/ (definido pelo workflow via BASE_PATH)
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss(), securityMeta()],
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
