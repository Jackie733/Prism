import { copyFileSync, mkdirSync } from 'fs';
mkdirSync('dist', { recursive: true });
copyFileSync('src/themes.css', 'dist/themes.css');
