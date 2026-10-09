import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { formatDate } from './utils/utils'

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image()
    })
})

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/recipes' }),
  schema: ({ image }) =>
    z.object({
      locale: z.enum(['en', 'pl', 'de']),
      author: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      date: z.string().transform((str) => formatDate(new Date(str))),
      image: image(),
      title: z.string()
    })
})

type ContentImageSchema = {
  image: (...args: any[]) => any
}

const cardSchema = ({ image }: ContentImageSchema) =>
  z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    imageUrl: image()
  })

const introduction = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/introduction' }),
  schema: cardSchema
})

const borderland = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/borderland' }),
  schema: cardSchema
})

const introductionCards = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/introductionCards' }),
  schema: cardSchema
})

export const collections = {
  authors,
  recipes,
  introduction,
  borderland,
  introductionCards
}
