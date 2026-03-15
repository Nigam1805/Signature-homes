import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { X } from 'lucide-react'
import { Button } from './ui/button'

export type GalleryItem = { readonly src: string; readonly caption?: string }

interface GalleryGridProps {
  items: readonly GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  function openLightbox(index: number) {
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.button
            key={item.src + i}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            onClick={() => openLightbox(i)}
          >
            <img
              src={item.src}
              alt={item.caption || `Gallery ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.caption ? (
              <span className="absolute inset-x-0 bottom-0 bg-black/60 py-1.5 text-center text-xs text-white">
                {item.caption}
              </span>
            ) : null}
          </motion.button>
        ))}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl border-0 bg-black/95 p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Image preview</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 text-white hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedIndex}
                src={items[selectedIndex].src}
                alt={items[selectedIndex].caption || `Gallery ${selectedIndex + 1}`}
                className="max-h-[85vh] w-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            {items[selectedIndex].caption ? (
              <p className="bg-black/70 px-4 py-2 text-center text-sm text-white">
                {items[selectedIndex].caption}
              </p>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
