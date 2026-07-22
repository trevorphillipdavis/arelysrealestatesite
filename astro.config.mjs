import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/realtor-website', // Omit this line if using a custom root domain (e.g., agentname.com)
  integrations: [tailwind()],
});