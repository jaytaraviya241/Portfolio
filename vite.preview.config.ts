import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { fileURLToPath, URL } from "node:url";

// `npm run build:preview` → dist-preview/index.html
// One self-contained file (JS, CSS, fonts inlined) that runs from a
// double-click — no server, no build tooling needed to show the site.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist-preview",
    target: "es2020",
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 100_000,
  },
});
