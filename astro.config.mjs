import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Replace with your actual deployed domain URL
  site: 'https://arelystheamazingrealtor.com',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});