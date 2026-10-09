import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import vue from '@astrojs/vue'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://DarekRepos.github.io/recipes/',
  base: '/recipes',
  integrations: [icon(), vue(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl', 'de']
  },
  vite: {
    plugins: [tailwindcss()], // [2] Add it here to the Vite pipeline
  },
})