import { z, defineCollection } from "astro:content"
import { formatDate } from "../utils/utils"

const authorsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            image: image(),
        }),
})

const recipesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            author: z.string(),
            description: z.string(),
            tags: z.array(z.string()),
            date: z
                .string()
                .transform(str => formatDate(new Date(str))),
            image: image(),
            title: z.string(),
        }),
})

const landingPageCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        imageUrl: image(),
    }),
});
const borderlandPageCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        imageUrl: image(),
    }),
});

export const collections = {
    'authors': authorsCollection,
    'recipes': recipesCollection,
    'introduction': landingPageCollection,
    'borderland': borderlandPageCollection,
};