import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    section: defineCollection({
      type: 'page',
      source: 'sections/**/*.md'
    }),
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
      schema:z.object({
        slug: z.optional(z.string()),
        uid:z.optional(z.string()),
        img:z.optional(z.string())
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md'
    }),
    locations: defineCollection({
      type:"data",
      schema:z.object({
        slug:z.string(),
        image: z.string(),
        title: z.string(),
        link: z.string()
      }),
      source:"locations/**/*.md",
    }),
    wedding: defineCollection({
      type:"data",
      schema:z.object({
        slug:z.string(),
        logo: z.string(),
        title: z.string(),
        description: z.string()
      }),
      source:"wedding/**/*.md",
    })
  }
})