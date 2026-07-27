import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

const consumerEducation = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/consumer-education" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/locations" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { 
  blog, 
  'consumer-education': consumerEducation,
  locations,
};