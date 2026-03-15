import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import type { PROJECTS } from '../content/siteContent'

interface ProjectGridProps {
  projects: readonly (typeof PROJECTS)[number][]
  viewDetailsLabel: string
  showViewAll?: boolean
}

export function ProjectGrid({
  projects,
  viewDetailsLabel,
  showViewAll = false,
}: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -2 }}
        >
          <Card className="h-full overflow-hidden border-border/60 transition-shadow hover:shadow-lg">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-muted-foreground text-sm">{project.location}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <Button variant="outline" size="sm">
                {viewDetailsLabel}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      {showViewAll && (
        <div className="flex items-center justify-center sm:col-span-2 lg:col-span-3">
          <Button variant="default" size="lg" asChild>
            <Link to="/projects">{viewDetailsLabel}</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
