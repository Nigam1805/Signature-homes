import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { HERO_CONTENT } from '../content/siteContent'

interface HeroSectionProps {
  backgroundImage?: string
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  const image = backgroundImage ?? HERO_CONTENT.backgroundImage

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt="Construction"
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        {/* Gradient Overlay (Premium look) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[80vh] items-center px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Title */}
          <motion.h1
            className="max-w-2xl text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl" animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {HERO_CONTENT.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-xl text-lg text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Primary Button */}
            <Button
              size="lg"
              variant="default"
              className="bg-primary text-white shadow hover:bg-primary/90"
              asChild
            >
              <Link to="/projects">{HERO_CONTENT.ctaPrimary}</Link>
            </Button>

            {/* Secondary Button */}
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