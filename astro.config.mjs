import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://trevorphillipdavis.github.io', // Replace with your actual GitHub username domain
  base: '/arelysrealestatesite',
  integrations: [tailwind()],
});