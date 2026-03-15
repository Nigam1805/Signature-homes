import { useState } from 'react'
import { motion } from 'motion/react'
import { X } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Button } from '../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '../components/ui/dialog'
import {
  DESIGNS_PAGE_CONTENT,
  SINGLE_STOREY_PLANS,
  TWO_STOREY_PLANS,
} from '../content/siteContent'

type Plan = { id: string; name: string; image: string; description?: string }

function PlanCard({
  plan,
  index,
  onViewPlan,
}: {
  plan: Plan
  index: number
  onViewPlan: (plan: Plan) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full overflow-hidden border-border/60 transition-shadow hover:shadow-lg">
        <div className="aspect-[4/3] overflow-hidden bg-muted/30">
          <img
            src={plan.image}
            alt={plan.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <h3 className="font-semibold">{plan.name}</h3>
        </CardHeader>
        <CardContent className="pt-0">
          {plan.description ? (
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-3">
              {plan.description}
            </p>
          ) : null}
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => onViewPlan(plan)}
          >
            {DESIGNS_PAGE_CONTENT.viewPlanLabel}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function PlanFullScreen({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="inset-0 h-full max-h-none w-full max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-black/95 p-0"
        onPointerDownOutside={onClose}
        onEscapeKeyDown={onClose}
      >
        <DialogTitle className="sr-only">{plan.name}</DialogTitle>
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogClose>
        <div className="flex h-full min-h-screen w-full flex-col items-center justify-center p-4 pt-16">
          <img
            src={plan.image}
            alt={plan.name}
            className="max-h-[calc(100vh-8rem)] max-w-full object-contain"
          />
          <div className="absolute bottom-6 left-1/2 w-full max-w-lg -translate-x-1/2 space-y-1 rounded-md bg-black/60 px-4 py-3 text-center">
            <p className="font-medium text-white">{plan.name}</p>
            {plan.description ? (
              <p className="text-sm text-white/90">{plan.description}</p>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function Designs() {
  const [fullScreenPlan, setFullScreenPlan] = useState<Plan | null>(null)

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      {fullScreenPlan && (
        <PlanFullScreen plan={fullScreenPlan} onClose={() => setFullScreenPlan(null)} />
      )}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold md:text-5xl">
          {DESIGNS_PAGE_CONTENT.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {DESIGNS_PAGE_CONTENT.subtitle}
        </p>
      </motion.div>

      {/* In-page category links */}
      <motion.nav
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="#single-storey"
          className="rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
        >
          {DESIGNS_PAGE_CONTENT.singleStoreyTitle}
        </a>
        <a
          href="#two-storey"
          className="rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
        >
          {DESIGNS_PAGE_CONTENT.twoStoreyTitle}
        </a>
      </motion.nav>

      {/* Single storey section */}
      <section id="single-storey" className="scroll-mt-24 pt-16 md:pt-20">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold md:text-3xl">
            {DESIGNS_PAGE_CONTENT.singleStoreyTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {DESIGNS_PAGE_CONTENT.singleStoreySubtitle}
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SINGLE_STOREY_PLANS.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={i}
              onViewPlan={(p) => setFullScreenPlan(p)}
            />
          ))}
        </div>
      </section>

      {/* Two storey section */}
      <section id="two-storey" className="scroll-mt-24 pt-20 md:pt-24">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold md:text-3xl">
            {DESIGNS_PAGE_CONTENT.twoStoreyTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {DESIGNS_PAGE_CONTENT.twoStoreySubtitle}
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TWO_STOREY_PLANS.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={i}
              onViewPlan={(p) => setFullScreenPlan(p)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
