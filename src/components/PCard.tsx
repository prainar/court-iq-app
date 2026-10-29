import type { ReactNode } from 'react'
import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'

type PCardProps = {
  p1: string
  p2: string
  num: string
  glyph?: ReactNode
  title: string
  children: ReactNode
  statVal?: string
  statLabel?: string
  size?: 'md' | 'sm'
  person?: boolean
  photo?: string
  photoAlt?: string
}

/**
 * Renders the card stat value, animating the number up on scroll when the
 * value is purely numeric (e.g. "100%", "5v5"). Non-numeric values such as
 * "Live" or "Season" are shown as-is.
 */
function CardStatValue({ value }: { value: string }) {
  const [ref, inView] = useInView(0.3)
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)

  const rawNumber = match?.[2] ?? ''
  const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0
  const current = useCountUp(parseFloat(rawNumber) || 0, inView && !!match, { decimals })

  if (!match) return <span className="val">{value}</span>

  return (
    <span className="val" ref={ref}>
      {match[1]}
      {current.toFixed(decimals)}
      {match[3]}
    </span>
  )
}

export default function PCard({
  p1,
  p2,
  num,
  glyph,
  title,
  children,
  statVal,
  statLabel,
  size = 'md',
  person = false,
  photo,
  photoAlt,
}: PCardProps) {
  // Only photo cards get the full-bleed image header. Person cards and all
  // icon cards render as compact icon-led glass cards (no empty grid block).
  const hasPhoto = !!photo
  const classes = ['pcard', size === 'sm' ? 'pcard-sm' : '', person ? 'pcard-person' : '', hasPhoto ? '' : 'pcard-flat']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={{ '--p1': p1, '--p2': p2 } as React.CSSProperties}>
      {hasPhoto ? (
        <div className="pcard-portrait">
          <img src={photo} alt={photoAlt ?? ''} className="pcard-photo" />
          <span className="pcard-num">{num}</span>
        </div>
      ) : person ? (
        <div className="pcard-head">
          <span className="jersey-badge">{num}</span>
        </div>
      ) : (
        <div className="pcard-head">
          <span className="pcard-glyph">{glyph ?? num}</span>
          <span className="pcard-num-sm">{num}</span>
        </div>
      )}
      <div className="pcard-body">
        <h3>{title}</h3>
        <p>{children}</p>
        {statVal && (
          <div className="pcard-stat">
            <CardStatValue value={statVal} />
            <span className="lbl">{statLabel}</span>
          </div>
        )}
      </div>
    </div>
  )
}
