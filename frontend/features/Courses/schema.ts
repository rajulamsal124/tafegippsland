import { z } from 'zod';
export const CourseSchema = z.object({
  id: z.number(),
  attributes: z.object({
    Title: z.string(),
    description: z.string(),
    Duration: z.number(),
    prerequisties: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    publishedAt: z.string(),
  }),
});
