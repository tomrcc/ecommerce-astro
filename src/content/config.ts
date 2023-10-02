import { defineCollection, z } from 'astro:content';

export const collections = {
  pages: defineCollection({
    schema: z.object({
      title: z.string(),
      grid_size: z.number(),
      content_blocks: z.array(z.any()),
    }),
  }),
};
