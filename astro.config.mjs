import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://guindaille.github.io",
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [
      [remarkToc, { tight: true, heading: "Sommaire" }],
    ],
  },
  integrations: [sitemap()]
});