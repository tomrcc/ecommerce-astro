import { defineCollection, z } from 'astro:content';

export const collections = {
	pages: defineCollection({
		schema: z.object({
			title: z.string(),
			content_blocks: z.array(z.any()),
		}),
	}),
};
