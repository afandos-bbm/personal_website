import { z, defineCollection } from 'astro:content'

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string())
  })
})

export const collections = {
  projects: projectsCollection
}
