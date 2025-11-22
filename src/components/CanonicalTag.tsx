import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'

const BASE_URL = 'https://danielsandstrom.org'

export function CanonicalTag() {
  const router = useRouterState()
  const pathname = router.location.pathname
  const canonicalUrl = `${BASE_URL}${pathname}`

  useEffect(() => {
    // Remove any existing canonical tag
    const existingCanonical = document.querySelector('link[rel="canonical"]')
    if (existingCanonical) {
      existingCanonical.remove()
    }

    // Create and add the new canonical tag
    const link = document.createElement('link')
    link.rel = 'canonical'
    link.href = canonicalUrl
    document.head.appendChild(link)
  }, [canonicalUrl])

  return null
}

