// extract-check.mjs — wyciąga bloki kodu TS z HTML i sprawdza je kompilatorem.
// Użycie: node extract-check.mjs <plik.html> [...]
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Użycie: node extract-check.mjs <plik.html> [...]');
  process.exit(2);
}

const outDir = join(process.cwd(), 'extracted');
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const decode = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

let total = 0;
let failed = 0;

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const re = /<pre[^>]*>\s*<code([^>]*)>([\s\S]*?)<\/code>\s*<\/pre>/g;
  let m;
  let i = 0;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    const body = decode(m[2].replace(/^\n/, '').replace(/\s+$/, ''));
    const isTs = /language-ts|lang-ts|data-lang="ts"|class="[^"]*ts\b/.test(attrs) || /\b(interface|type|enum|const|function|import|export)\b/.test(body);
    if (!isTs) continue;
    i += 1;
    total += 1;
    const name = `${basename(file, '.html').replace(/[^a-z0-9]+/gi, '_')}_${String(i).padStart(2, '0')}.ts`;
    const path = join(outDir, name);
    writeFileSync(path, body + '\n');
    try {
      execFileSync('./node_modules/.bin/tsc', [
        '--ignoreConfig',
        '--noEmit',
        '--strict',
        '--target', 'ES2022',
        '--module', 'ESNext',
        '--moduleResolution', 'bundler',
        '--noUnusedLocals', 'false',
        path,
      ], { stdio: 'pipe' });
      console.log(`OK    ${name}`);
    } catch (e) {
      failed += 1;
      console.log(`FAIL  ${name}\n${e.stdout?.toString() ?? ''}${e.stderr?.toString() ?? ''}`);
    }
  }
}

console.log(`\nSprawdzono bloków: ${total}, błędów: ${failed}`);
process.exit(failed > 0 ? 1 : 0);
