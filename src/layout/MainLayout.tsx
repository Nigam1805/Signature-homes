import { Outlet, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

/**
 * Wraps all pages with a shared Navbar and Footer.
 * Used by AppRoutes.
 */
export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
