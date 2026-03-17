import { motion } from 'motion/react'
import { Card, CardContent } from '../components/ui/card'
import { Check } from 'lucide-react'
import { ABOUT_CONTENT } from '../content/siteContent'

export function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        {/* Hero image */}
        <motion.div
          className="overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={ABOUT_CONTENT.heroImage}
            alt=""
            className="h-56 w-full object-cover md:h-72"
          />
        </motion.div>

        {/* Title & subtitle - centered */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="mt-10 text-4xl font-bold text-foreground md:text-5xl">
            {ABOUT_CONTENT.title}
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            {ABOUT_CONTENT.subtitle}
          </p>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          className="mx-auto mt-10 text-base text-justify text-foreground/80 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {ABOUT_CONTENT.intro}
        </motion.p>

        {/* The Signature Advantage - white card with shadow */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden rounded-lg border-0 bg-card shadow-md">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                {ABOUT_CONTENT.missionTitle}
              </h2>
              <p className="mt-5 text-base text-justify text-foreground/80 leading-relaxed">
                {ABOUT_CONTENT.missionText}
              </p>
              <ul className="mt-10 space-y-8">
                {ABOUT_CONTENT.values.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-foreground">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base text-justify text-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why Choose Us - on page background, no card */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {ABOUT_CONTENT.teamTitle}
          </h2>
          <p className="mt-5 text-base text-justify text-foreground/80 leading-relaxed">
            {ABOUT_CONTENT.teamText}
          </p>
        </motion.div>

        {/* Stats */}
        {/* <div className="mt-20">
          <StatsSection stats={STATS} title={HOME_SECTIONS.statsTitle} />
        </div> */}
      </div>
    </div>
  )
}
