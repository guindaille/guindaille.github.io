import { defineConfig } from 'astro/config';
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://guindaille.github.io",
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [
      [remarkToc, { tight: true, heading: "Sommaire" }],
    ],
  },
  integrations: [
    sitemap(),
    tailwind(),
  ],
});