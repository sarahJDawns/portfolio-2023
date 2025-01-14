import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      urls: z.object({
        github: z.string(),
      }),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
