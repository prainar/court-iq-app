import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Animates a number from 0 → `target` over `duration` ms once `active` is true.
 * Snaps straight to the target when the user prefers reduced motion.
 * Re-runs whenever `target` changes (used by the dashboard when switching players).
 */
export default function useCountUp(
  target: number,
  active: boolean,
  { duration = 1100, decimals = 0 }: { duration?: number; decimals?: number } = {},
) {
  const [value, setValue] = useState(0)
  const frame = useRef<number>(0)

  useEffect(() => {
    if (!active) return

    if (prefersReducedMotion() || duration <= 0) {
      setValue(target)
      return
    }

    let start: number | null = null
    const from = 0

    const tick = (now: number) => {
      if (start === null) start = now
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic for a lively-but-settling feel
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(from + (target - from) * eased)
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target, active, duration])

  const factor = Math.pow(10, decimals)
  return Math.round(value * factor) / factor
}
