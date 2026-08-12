import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../src/content/articles/', import.meta.url));
const forbidden = [
  ['值得注意的是', '直接写出需要注意的事实'],
  ['需要强调的是', '删除强调语，说明具体后果'],
  ['不难发现', '说明如何发现，或直接给出推导'],
  ['显而易见', '补上理由，或删去判断'],
  ['众所周知', '给出事实或来源'],
  ['让我们深入', '直接进入问题'],
  ['本文将探讨', '直接陈述文章处理的问题'],
  ['本文旨在', '直接陈述文章处理的问题'],
  ['综上所述', '删除总结套话，保留新结论'],
  ['总而言之', '删除总结套话，保留新结论'],
  ['至关重要', '说明具体影响'],
  ['意义重大', '说明对谁、在哪一步产生什么影响'],
  ['不容忽视', '写出具体风险'],
  ['—', '改用句号、逗号或更直接的句法'],
  ['It is important to note', 'start with the claim'],
  ['This article will explore', 'start with the subject'],
  ["Let's dive in", 'start with the subject'],
  ['In conclusion', 'state the conclusion without announcing it'],
];

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  }));
  return nested.flat().filter((path) => ['.md', '.mdx'].includes(extname(path)));
}

function proseOnly(source) {
  return source
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/`[^`]*`/g, '');
}

const failures = [];
for (const file of await files(ROOT)) {
  const source = proseOnly(await readFile(file, 'utf8'));
  for (const [phrase, advice] of forbidden) {
    if (source.toLowerCase().includes(phrase.toLowerCase())) {
      failures.push(`${relative(process.cwd(), file)}: “${phrase}” — ${advice}`);
    }
  }
}

if (failures.length) {
  console.error('Stop-slop prose check failed:\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  console.error('\nThis check catches only obvious tells. Complete the manual review in docs/ARTICLE_PUBLISHING_GUIDE.zh-CN.md.');
  process.exit(1);
}

console.log('Stop-slop prose check passed.');
