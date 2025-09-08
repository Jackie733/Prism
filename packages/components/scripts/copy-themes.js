import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source themes.css from tokens package (monorepo local path)
const src = resolve(__dirname, '../../tokens/src/themes.css');
const outDir = resolve(__dirname, '../dist');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, resolve(outDir, 'themes.css'));
console.log('[copy-themes] Copied themes.css to dist');

