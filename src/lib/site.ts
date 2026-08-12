export const SITE = {
  name: 'Maddy',
  author: 'RIMO',
  title: 'Maddy — 数学学习札记',
  description:
    'RIMO 的个人数学学习项目：从问题出发，记录直觉、定义、证明与例题。',
  github: 'https://github.com/rimoooliii',
  repository: 'https://github.com/rimoooliii/Maddy',
  motto: '定义 · 例子 · 证明 · 反思',
} as const;

export function withBase(path = '') {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\/+/, '')}`.replace(/\/{2,}/g, '/');
}

export function articleSlug(entry: string | { id: string }) {
  const id = typeof entry === 'string' ? entry : entry.id;
  return id.replace(/\.(md|mdx)$/i, '').replace(/\/index$/i, '');
}

export function formatDate(date: Date, language = 'zh-CN') {
  return new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function readingMinutes(body = '') {
  const latinWords = body
    .replace(/---[\s\S]*?---/, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const hanCharacters = (body.match(/[\u3400-\u9fff]/g) ?? []).length;
  return Math.max(1, Math.ceil((latinWords + hanCharacters / 2.2) / 220));
}

export const KIND_LABEL = {
  concept: '概念',
  proof: '证明',
  problem: '例题',
  note: '札记',
} as const;
