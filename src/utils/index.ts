import { MarkdownInstance } from "astro";
import readingTime from "reading-time";
import { PostMetadata } from "$/types";

export function getPosts(files: MarkdownInstance<PostMetadata>[], { take }: { take?: number } = {}) {
  const sliceArgs = [0];
  if (Number.isInteger(take)) {
    sliceArgs.push(take);
  }
  return files
    .filter((post) => new Date(post.frontmatter.publishedDate) < new Date())
    .sort((a, b) => (new Date(b.frontmatter.publishedDate)).valueOf() - (new Date(a.frontmatter.publishedDate)).valueOf())
    .slice(...sliceArgs);
}

export function getPostData(post) {
  const { minutes } = readingTime(post.rawContent())
  const slug = post.file.split("/blog-posts/").pop().split(".").shift();
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
