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
  author: string;
  tags?: string[];
  publishedDate?: string;
  lastEditDate?: string;
  coverUrl?: string;
};
