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
  tags: {
    path: "/tags",
    title: "tags"
  },
  media: {
    path: "/media",
    title: "media"
  },
  about: {
    path: "/about",
    title: "about"
  }
};
