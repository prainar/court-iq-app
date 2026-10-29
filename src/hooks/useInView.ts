import { useEffect, useRef, useState } from 'react'

/**
 * Observes an element and reports when it first scrolls into view.
 * Fires once, then stops observing — used to trigger reveal animations
 * and count-ups. Returns a ref to attach and the current in-view state.
 */
export default function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.unobserve(el)
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView] as const
}
