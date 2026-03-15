import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { NAVIGATION, SITE_NAME, HERO_CONTENT, LOGO_URL } from '../content/siteContent'
import { cn } from '../lib/utils'

/**
 * Main navigation bar. Items come from siteContent.ts (NAVIGATION).
 * Includes mobile menu with open/close animation.
 */
export function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-1 text-foreground transition-opacity hover:opacity-85"
          aria-label={SITE_NAME}
        >
          <img
            src={LOGO_URL}
            alt=""
            className="h-9 w-auto max-w-[110px] object-contain object-left sm:h-10 sm:max-w-[120px]"
            style={{ opacity: 1 }}
            decoding="async"
          />
          <span className="text-xs font-semibold tracking-tight text-foreground sm:text-sm md:text-base">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop nav - show from 640px up */}
        <ul className="hidden items-center gap-1 sm:flex">
          {NAVIGATION.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary',
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA - visible on desktop */}
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">{HERO_CONTENT.ctaSecondary}</Link>
          </Button>
        </div>

        {/* Mobile menu button - only on small screens */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/40 bg-background sm:hidden"
          >
            <ul className="container flex flex-col gap-1 px-4 py-4">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm font-medium',
                      location.pathname === item.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-primary/10 hover:text-primary'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    {HERO_CONTENT.ctaSecondary}
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
