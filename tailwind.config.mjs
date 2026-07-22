/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        c21: {
          gold: '#C49A45',
          dark: '#111111',
        },
      },
    },
  },
  plugins: [],
}