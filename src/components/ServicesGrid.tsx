import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import {
  Hammer,
  Layers,
  ClipboardList,
  PencilRuler,
  Calculator,
  ClipboardCheck,
  TreePine,
  Building2,
} from 'lucide-react'
import type { SERVICES } from '../content/siteContent'

const iconMap = {
  hammer: Hammer,
  layers: Layers,
  clipboard: ClipboardList,
  drafting: PencilRuler,
  calculator: Calculator,
  'clipboard-check': ClipboardCheck,
  tree: TreePine,
  building: Building2,
} as const

interface ServicesGridProps {
  services: readonly (typeof SERVICES)[number][]
  showViewAll?: boolean
}

// export function ServicesGrid({ services, showViewAll = false }: ServicesGridProps) {
//   return (
//     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//       {services.map((service, i) => {
//         const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Building2
//         return (
//           <motion.div
//             key={service.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             whileHover={{ y: -4 }}
//           >
//             <Card className="h-full overflow-hidden border-border/60 transition-shadow hover:shadow-lg">
//               <div className="aspect-[4/3] overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.name}
//                   className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <CardHeader className="pb-2">
//                 <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
//                   <Icon className="h-5 w-5" />
//                 </div>
//                 <h3 className="text-lg font-semibold">{service.name}</h3>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   {service.description}
//                 </p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       })}
//       {showViewAll && (
//         <div className="flex items-center justify-center sm:col-span-2 lg:col-span-4">
//           <Button variant="outline" size="lg" asChild>
//             <Link to="/services">View all services</Link>
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }
export function ServicesGrid({ services, showViewAll = false }: ServicesGridProps) {
  const displayedServices = showViewAll ? services.slice(0, 4) : services;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {displayedServices.map((service, i) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Building2

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full overflow-hidden border-border/60 transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}

      {showViewAll && (
        <div className="flex items-center justify-center sm:col-span-2 lg:col-span-4">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">View all services</Link>
          </Button>
        </div>
      )}
    </div>
  )
}