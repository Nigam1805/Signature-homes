import { motion } from 'motion/react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'

interface EventCardProps {
  title: string
  date: string
  time: string
  description: string
  location: string
  index?: number
}

/**
 * Card for displaying a single event in lists and previews.
 */
export function EventCard({
  title,
  date,
  time,
  description,
  location,
  index = 0,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <Card className="h-full overflow-hidden border-border/50 transition-shadow hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{date}</Badge>
            <span className="text-muted-foreground text-xs">{time}</span>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-muted-foreground text-sm">{description}</p>
          <p className="text-muted-foreground text-xs">{location}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
