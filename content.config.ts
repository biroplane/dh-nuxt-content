import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    sect: defineCollection({
      type: 'page',
      source: 'sections/**/*.md'
    }),
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md'
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md'
    })
  }
})