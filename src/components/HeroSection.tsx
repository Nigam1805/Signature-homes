import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { HERO_CONTENT } from '../content/siteContent'

interface HeroSectionProps {
  /** Optional override for background image URL */
  backgroundImage?: string
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  const image = backgroundImage ?? HERO_CONTENT.backgroundImage

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Construction"
          className="h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0 bg-primary/80"
          aria-hidden
        />
      </div>
      <div className="relative flex min-h-[70vh] flex-col justify-center px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            className="text-4xl font-bold leading-tight text-white drop-shadow-md md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {HERO_CONTENT.title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/95 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {HERO_CONTENT.subtitle}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              variant="default"
              className="bg-primary text-white shadow hover:bg-primary/90"
              asChild
            >
              <Link to="/projects">{HERO_CONTENT.ctaPrimary}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/contact">{HERO_CONTENT.ctaSecondary}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
