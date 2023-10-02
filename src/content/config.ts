import { defineCollection, z } from 'astro:content';

export const collections = {
  pages: defineCollection({
    schema: z.object({
      title: z.string(),
      shop_page: z.boolean(),
      grid_size: z.number(),
      content_blocks: z.array(z.any()),
    }),
  }),
  shop: defineCollection({
    schema: z.object({
      id: z.number(),
      name: z.string(),
      description: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      price: z.number(),
    }),
  }),
};
