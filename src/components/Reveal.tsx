import { type CSSProperties, type ReactNode } from 'react'
import useInView from '../hooks/useInView'

export default function Reveal({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const [ref, visible] = useInView(0.15)

  return (
    <div ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}
