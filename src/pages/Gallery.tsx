import { motion } from 'motion/react'
import { GalleryGrid } from '../components/GalleryGrid'
import { GALLERY_ITEMS, GALLERY_CONTENT } from '../content/siteContent'

export function Gallery() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold md:text-5xl">{GALLERY_CONTENT.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {GALLERY_CONTENT.subtitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          {GALLERY_CONTENT.description}
        </p>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <GalleryGrid items={GALLERY_ITEMS} />
      </motion.div>
    </div>
  )
}
