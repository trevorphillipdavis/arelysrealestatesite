import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arelystheamazingrealtor.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => ![
        'https://arelystheamazingrealtor.com/open-house/',
        'https://arelystheamazingrealtor.com/brokers-open/',
        'https://arelystheamazingrealtor.com/brokers-open/thank-you/',
      ].includes(page),
    }),
  ],
});
