import { MarkdownInstance } from "astro";
import readingTime from "reading-time";
import { PostMetadata } from "$/types";

export const toTitleCase = (str: string) => str.replace(
  /\w\S*/g,
  function (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  }
);

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
  return {
    slug: post.file.split("/blog-posts/").pop().split(".").shift(),
    readingTime: `${Math.ceil(minutes)} min`,
  };
}
