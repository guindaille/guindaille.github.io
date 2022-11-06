import type { NavItems } from "$/types";

export const SITE = {
  name: "Guindaille Beer Crafting",
  title: "🍺 Guindaille",
  postsPerPage: 5,
};

export const NAV_ITEMS: NavItems = {
  home: {
    path: "/",
    title: "home"
  },
  blog: {
    path: "/blog",
    title: "blog"
  },
  about: {
    path: "/about",
    title: "about"
  }
};
