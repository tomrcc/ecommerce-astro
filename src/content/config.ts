import { defineCollection, z } from 'astro:content';

export const collections = {
  pages: defineCollection({
    schema: z.object({
      title: z.string(),
      page_size: z.number().optional(),
      content_blocks: z.array(z.any()).optional(),
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
