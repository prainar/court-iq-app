import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Tracks an element's progress through the viewport as a value from 0 → 1:
 *   0  = the element's top is at the bottom of the viewport (just entering)
 *   1  = the element's bottom is at the top of the viewport (just left)
 * Used to drive parallax. Throttled via requestAnimationFrame; passive listener.
 * Returns a constant 0.5 (neutral) under reduced motion so nothing drifts.
 */
export default function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0.5)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      // range over which the element travels through the viewport
      const total = rect.height + vh
      const travelled = vh - rect.top
      const p = Math.min(Math.max(travelled / total, 0), 1)
      setProgress(p)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return [ref, progress] as const
}
