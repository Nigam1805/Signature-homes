import { motion } from 'motion/react'
import { ProjectGrid } from '../components/ProjectGrid'
import { PROJECTS, PROJECTS_PAGE_CONTENT, HOME_SECTIONS } from '../content/siteContent'

export function Projects() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold md:text-5xl">
          {PROJECTS_PAGE_CONTENT.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {PROJECTS_PAGE_CONTENT.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <ProjectGrid
          projects={PROJECTS}
          viewDetailsLabel={HOME_SECTIONS.projectsCta}
        />
      </motion.div>
    </div>
  )
}
