import { motion } from 'motion/react'
import { Card, CardContent, CardHeader } from './ui/card'
import type { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  index?: number
}

/**
 * Card used in the Features section. Includes hover animation.
 */
export function FeatureCard({ title, description, icon, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full border-border/50 bg-card/50 transition-shadow hover:shadow-md">
        <CardHeader>
          {icon && <div className="mb-2 text-primary">{icon}</div>}
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
