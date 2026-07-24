import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[-[a-z0-9]]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
  }),
});

const consumerEducation = defineCollection({
  loader: glob({ pattern: '**/[-[a-z0-9]]*.{md,mdx}', base: './src/content/consumer-education' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    readTime: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = { blog, consumerEducation };