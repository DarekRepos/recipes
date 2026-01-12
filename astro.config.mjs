import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://DarekRepos.github.io/recipes/',
  base: '/recipes',
  integrations: [tailwind(), icon(), vue(), mdx(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl", "de"],
  },
});