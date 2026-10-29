import useScrollProgress from './useScrollProgress'

/**
 * Parallax helper. Attach the returned ref to an element and spread `style`
 * onto the layer you want to drift. `strength` is the total px travel across
 * the element's full pass through the viewport (negative = moves up on scroll).
 */
export default function useParallax<T extends HTMLElement = HTMLDivElement>(
  strength = 60,
) {
  const [ref, progress] = useScrollProgress<T>()
  // center the motion so the element sits neutral mid-viewport
  const offset = (progress - 0.5) * strength
  const style = { transform: `translate3d(0, ${offset.toFixed(1)}px, 0)` }
  return [ref, style] as const
}
