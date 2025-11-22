import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { CanonicalTag } from '../components/CanonicalTag'

export const Route = createRootRoute({
  component: () => (
    <>
      <CanonicalTag />
      <Navbar />
      <Outlet />
    </>
  ),
})
