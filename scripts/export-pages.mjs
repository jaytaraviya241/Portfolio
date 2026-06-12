import { cpSync, existsSync, mkdirSync, rmSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const distHtml = join(distDir, "app.html");
const distAssets = join(distDir, "assets");
const distFavicon = join(distDir, "favicon.svg");
const rootIndex = join(rootDir, "index.html");
const rootAssets = join(rootDir, "assets");
const rootFavicon = join(rootDir, "favicon.svg");

if (!existsSync(distHtml)) {
  throw new Error(`Build output not found: ${distHtml}`);
}

rmSync(rootAssets, { recursive: true, force: true });
mkdirSync(rootAssets, { recursive: true });
cpSync(distAssets, rootAssets, { recursive: true });
copyFileSync(distHtml, rootIndex);
copyFileSync(distFavicon, rootFavicon);
