import { z, defineCollection, type SchemaContext } from 'astro:content'
import { formatDate } from '../utils/utils'

const authorsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image()
    })
})

const recipesCollection = defineCollection({
  type: 'content',
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

// ✅ Reusable schema for data cards
const cardSchema = ({ image }: SchemaContext) =>
  z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    imageUrl: image() // expects an imported image (not "/public/..." path)
  })

const landingPageCollection = defineCollection({
  type: 'data',
  schema: cardSchema
})

const borderlandPageCollection = defineCollection({
  type: 'data',
  schema: cardSchema
})

const introductionCardsCollection = defineCollection({
  type: 'data',
  schema: cardSchema
})

export const collections = {
  authors: authorsCollection,
  recipes: recipesCollection,

  introduction: landingPageCollection,
  borderland: borderlandPageCollection,
  introductionCards: introductionCardsCollection
}
