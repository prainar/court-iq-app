import type { ReactNode } from 'react'

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
  const classes = ['pcard', size === 'sm' ? 'pcard-sm' : '', person ? 'pcard-person' : ''].filter(Boolean).join(' ')

  return (
    <div className={classes} style={{ '--p1': p1, '--p2': p2 } as React.CSSProperties}>
      <div className="pcard-portrait">
        {photo && <img src={photo} alt={photoAlt ?? ''} className="pcard-photo" />}
        {person ? (
          <span className="jersey-badge">{num}</span>
        ) : (
          <>
            <span className="pcard-num">{num}</span>
            {glyph && <span className="pcard-glyph">{glyph}</span>}
          </>
        )}
      </div>
      <div className="pcard-body">
        <h3>{title}</h3>
        <p>{children}</p>
        {statVal && (
          <div className="pcard-stat">
            <span className="val">{statVal}</span>
            <span className="lbl">{statLabel}</span>
          </div>
        )}
      </div>
    </div>
  )
}
