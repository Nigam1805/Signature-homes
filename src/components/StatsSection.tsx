import { useState, useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'motion/react'
import type { STATS } from '../content/siteContent'

interface StatsSectionProps {
  stats: readonly (typeof STATS)[number][]
  title?: string
}

/** Parse "250+", "25", "180+" into number and suffix */
function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { number: 0, suffix: value }
  return { number: parseInt(match[1], 10), suffix: match[2] ?? '' }
}

function AnimatedCount({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)
  const { number: target, suffix } = parseStatValue(value)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 2,
      delay,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, target, delay])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function StatsSection({ stats, title }: StatsSectionProps) {
  return (
    <motion.section
      className="border-y border-border/60 bg-secondary/50 py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        {title && (
          <motion.h2
            className="mb-12 text-center text-2xl font-bold md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {title}
          </motion.h2>
        )}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: 'easeOut',
              }}
            >
              <p className="text-4xl font-bold text-primary md:text-5xl">
                <AnimatedCount value={stat.value} delay={i * 0.2} />
              </p>
              <motion.p
                className="mt-2 text-muted-foreground font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.35 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
