export const SITE = {
  name: 'Maddy',
  author: 'RIMO',
  title: 'Maddy — Notes in Mathematics',
  description:
    'A working archive of definitions, proofs, examples, and open questions in mathematics by RIMO.',
  github: 'https://github.com/rimoooliii',
  repository: 'https://github.com/rimoooliii/Maddy',
  motto: 'Definitions. Proofs. Counterexamples.',
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

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function readingMinutes(body = '') {
  const words = body
    .replace(/---[\s\S]*?---/, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export const KIND_LABEL = {
  concept: 'Concept',
  proof: 'Proof',
  problem: 'Problem',
  note: 'Notebook',
} as const;
