import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sourceSchema = z.object({
  label: z.string().trim().min(1),
  url: z.url().optional(),
  note: z.string().trim().optional(),
});

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
  }),
  schema: z
    .object({
      title: z.string().trim().min(1).max(180),
      description: z.string().trim().min(1).max(360),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      author: z.literal('RIMO').default('RIMO'),
      language: z.string().trim().min(2).max(12).default('en'),
      kind: z
        .enum(['concept', 'proof', 'problem', 'note'])
        .default('note'),
      topics: z.array(z.string().trim().min(1)).default([]),
      tags: z.array(z.string().trim().min(1)).default([]),
      series: z.string().trim().optional(),
      level: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Beginner'),
      prerequisites: z.array(z.string().trim().min(1)).default([]),
      sources: z.array(sourceSchema).default([]),
      featured: z.boolean().default(false),
      start_here: z.boolean().default(false),
      draft: z.boolean().default(false),
    })
    .superRefine((entry, context) => {
      if (entry.updated && entry.updated.getTime() < entry.date.getTime()) {
        context.addIssue({
          code: 'custom',
          message: 'updated cannot be earlier than date',
          path: ['updated'],
        });
      }
    }),
});

export const collections = { articles };
