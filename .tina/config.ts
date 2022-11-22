
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "67a0521b-5f90-4193-b03d-313ebc34c789",
  token: "83d9f876af784a683fefa46475eb71667a66c571",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/data/blog-posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            list: true,
            name: "tags",
            label: "Tags",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "datetime",
            name: "editDate",
            label: "Edit Date",
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "image",
            name: "coverPath",
            label: "Cover Image",
          },
        ],
      },
    ],
  },
});
