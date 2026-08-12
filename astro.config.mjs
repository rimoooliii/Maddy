import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://rimoooliii.github.io',
  base: '/Maddy',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: false, throwOnError: false }]],
    }),
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
