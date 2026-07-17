import { caseStudiesData } from './caseStudiesData'

export const projectsData = caseStudiesData.map((project, index) => ({
  id: index + 1,
  projectName: project.title,
  projectDesc: project.summary,
  tags: project.tags,
  code: '',
  demo: `/projects/${project.slug}`,
  image: ''
}))
