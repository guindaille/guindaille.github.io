import { MarkdownInstance } from "astro";
import { PostMetadata } from "$/types";
import readingTime from "reading-time";

export function getPosts(files: MarkdownInstance<PostMetadata>[], { take }: { take?: number } = {}) {
  const sliceArgs = [0];
  if (Number.isInteger(take)) {
    sliceArgs.push(take);
  }
  return files
    .filter((post) => new Date(post.frontmatter.publishDate) < new Date())
    .sort((a, b) => (new Date(b.frontmatter.publishDate)).valueOf() - (new Date(a.frontmatter.publishDate)).valueOf())
    .slice(...sliceArgs);
}

export function getPostData(post: MarkdownInstance<PostMetadata>) {
  const { minutes } = readingTime(post.rawContent())
  const pathWithoutExt = post.file.split("/blog-posts/").pop().split(".").shift();
  const slug = pathWithoutExt.replace(/\/index$/g, "").split("/").join("-");
  return {
    permalink: `/${slug}`,
    slug,
    readingTime: `${Math.ceil(minutes)} min`,
  };
}

export function getTagsWithPosts(files: MarkdownInstance<PostMetadata>[]) {
  const tags = new Map<string, MarkdownInstance<PostMetadata>[]>();
  for (const post of getPosts(files)) {
    const uniqueTags = new Set(post.frontmatter.tags);
    for (const tag of uniqueTags) {
      if (!tags.has(tag)) {
        tags.set(tag, []);
      }
      tags.get(tag).push(post);
    }
  }
  return tags;
}

export const dynamicImport = (path: string) => {
  return import.meta.env.PROD ? path : import(/* @vite-ignore */`../${path}`);
}
