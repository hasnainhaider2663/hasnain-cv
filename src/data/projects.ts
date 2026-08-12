import { marked } from 'marked'
import metadata from './projects.json'

type ProjectMeta = {
  slug: string
  name: string
  tag: string | null
  period: string
  stack: string[]
  link: string | null
  linkLabel: string | null
}

export type Project = ProjectMeta & { description: string }

const descriptions = import.meta.glob('../content/projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export const projects: Project[] = metadata.map((project) => {
  const source = descriptions[`../content/projects/${project.slug}.md`]
  if (!source) throw new Error(`Missing project description: ${project.slug}.md`)

  return {
    ...project,
    description: marked.parse(source, { async: false }),
  }
})
