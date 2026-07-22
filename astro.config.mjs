import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arelystheamazingrealtor.com,
  base: '/arelysrealestatesite',
  integrations: [tailwind()],
});