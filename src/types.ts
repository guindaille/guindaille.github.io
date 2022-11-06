export type NavItems = {
  [key: string]: NavItem
};

export type NavItem = {
  path: string
  title: string
};

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  created: string;
  updated: string;
  slug: string;
  tags: string[];
};
