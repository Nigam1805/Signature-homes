import { motion } from 'motion/react'
import { ServicesGrid } from '../components/ServicesGrid'
import { SERVICES, SERVICES_PAGE_CONTENT } from '../content/siteContent'

export function Services() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold md:text-5xl">
          {SERVICES_PAGE_CONTENT.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {SERVICES_PAGE_CONTENT.subtitle}
        </p>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ServicesGrid services={SERVICES} />
      </motion.div>
    </div>
  )
}
