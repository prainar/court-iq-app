import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'

/**
 * Animated version of the `.stat` block. Give it a display `value` such as
 * "1M+", "51%", "4.8km", "1,000s" and it animates the numeric part from 0 → N
 * on scroll, preserving any prefix/suffix and decimal places.
 */
export default function CountStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const [ref, inView] = useInView(0.3)

  // Split into [prefix][number][suffix]. The number may contain a decimal.
  const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/)
  const prefix = match?.[1] ?? ''
  const rawNumber = match?.[2] ?? ''
  const suffix = match?.[3] ?? ''

  const hasComma = rawNumber.includes(',')
  const numeric = parseFloat(rawNumber.replace(/,/g, '')) || 0
  const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0

  const current = useCountUp(numeric, inView, { decimals })

  const formatted = hasComma
    ? Math.round(current).toLocaleString('en-US')
    : current.toFixed(decimals)

  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
