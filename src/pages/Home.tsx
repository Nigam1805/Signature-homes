import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { HeroSection } from '../components/HeroSection'
import { ServicesGrid } from '../components/ServicesGrid'
import { ProjectGrid } from '../components/ProjectGrid'
import { StatsSection } from '../components/StatsSection'
import { Button } from '../components/ui/button'
import {
  SERVICES,
  PROJECTS,
  STATS,
  HOME_SECTIONS,
} from '../content/siteContent'

export function Home() {
  return (
    <>
      <HeroSection />

      <section className="container mx-auto max-w-6xl px-4 py-20 md:py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            {HOME_SECTIONS.servicesTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {HOME_SECTIONS.servicesSubtitle}
          </p>
        </motion.div>
        <div className="mt-12">
          <ServicesGrid services={SERVICES} showViewAll />
        </div>
      </section>

      <StatsSection stats={STATS} title={HOME_SECTIONS.statsTitle} />

      <section className="container mx-auto max-w-6xl px-4 py-20 md:py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            {HOME_SECTIONS.projectsTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {HOME_SECTIONS.projectsSubtitle}
          </p>
        </motion.div>
        <div className="mt-12">
          <ProjectGrid
            projects={PROJECTS.slice(0, 3)}
            viewDetailsLabel={HOME_SECTIONS.projectsCta}
          />
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">{HOME_SECTIONS.viewAllProjects}</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.h2
            className="text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {HOME_SECTIONS.aboutTitle}
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {HOME_SECTIONS.aboutSubtitle}
          </motion.p>
          <Button variant="default" className="mt-8 font-semibold" asChild>
            <Link to="/about">{HOME_SECTIONS.aboutCta}</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto max-w-3xl px-4 py-20 md:py-28">
        <motion.div
          className="rounded-2xl border border-border bg-primary px-8 py-12 text-center text-white md:py-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold md:text-3xl">
            {HOME_SECTIONS.finalCtaTitle}
          </h2>
          <p className="mt-4 opacity-95">
            {HOME_SECTIONS.finalCtaSubtitle}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="mt-8 border-white/70 bg-white/10 font-semibold text-white hover:bg-white/20"
            asChild
          >
            <Link to="/contact">{HOME_SECTIONS.finalCtaButton}</Link>
          </Button>
        </motion.div>
      </section>
    </>
  )
}
