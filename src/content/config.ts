import { defineCollection, z } from 'astro:content';

export const collections = {
  pages: defineCollection({
    schema: z.object({
      title: z.string(),
      shop_page: z.boolean().optional(),
      grid_size: z.number().optional(),
      content_blocks: z.array(z.any()).optional(),
    }),
  }),
};
