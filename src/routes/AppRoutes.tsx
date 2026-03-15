import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Designs } from '../pages/Designs'
import { Services } from '../pages/Services'
import { Projects } from '../pages/Projects'
import { Gallery } from '../pages/Gallery'
import { Contact } from '../pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'designs', element: <Designs /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Projects /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
