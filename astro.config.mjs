import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://trevorphillipdavis.github.io',
  base: '/arelysrealestatesite',
  integrations: [tailwind()],
});