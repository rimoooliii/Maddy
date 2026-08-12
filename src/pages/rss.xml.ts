import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, articleSlug, withBase } from '../lib/site';

export async function GET(context: { site?: URL }) {
  const entries = (await getCollection('articles', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? new URL('https://rimoooliii.github.io/Maddy/'),
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: withBase(`/articles/${articleSlug(entry)}/`),
      categories: entry.data.topics,
      author: SITE.author,
    })),
    customData: '<language>en</language>',
  });
}
