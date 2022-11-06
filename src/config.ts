import type { NavItems } from "$/types";

export const SITE = {
  name: "Guindaille Beer Crafting",
  title: "🍺 Guindaille",
  lang: "fr",
  postsPerPage: 5,
};

export const NAV_ITEMS: NavItems = {
  blog: {
    path: "/blog",
    title: "articles"
  },
  about: {
    path: "/a-propos",
    title: "a propos"
  }
};
