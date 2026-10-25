// Copies the page and its data into www/ and bundles the native plugins next to it.
import { mkdirSync, copyFileSync } from 'node:fs';
import { build } from 'esbuild';
mkdirSync('www/data', { recursive: true });
copyFileSync('../index.html', 'www/index.html');
copyFileSync('../data/leads.json', 'www/data/leads.json');
copyFileSync('../data/basemap.json', 'www/data/basemap.json');
await build({ entryPoints: ['native-entry.js'], bundle: true, minify: true, format: 'iife', target: 'es2019', outfile: 'www/native.js' });
console.log('www ready');
