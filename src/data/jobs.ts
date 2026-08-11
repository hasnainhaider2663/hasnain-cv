import { marked } from 'marked'
import metadata from './jobs.json'

export type Job = (typeof metadata)[number] & { description: string }

const descriptions = import.meta.glob('../content/jobs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export const jobs: Job[] = metadata.map((job) => {
  const source = descriptions[`../content/jobs/${job.slug}.md`]
  if (!source) throw new Error(`Missing job description: ${job.slug}.md`)

  return {
    ...job,
    description: marked.parse(source, { async: false }),
  }
})
