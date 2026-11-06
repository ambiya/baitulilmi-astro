import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string().optional(),
		featured_image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional()
			.nullable(),
		publishedAt: z.coerce.date().optional(),
		category: z.array(z.string()).default([]),
		tag: z.array(z.string()).default([]),
	}),
});

const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
	schema: z.object({
		title: z.string(),
		slug: z.string().optional(),
	}),
});

export const collections = { posts, pages };
