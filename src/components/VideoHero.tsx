import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LiveTicker from './LiveTicker'
import useParallax from '../hooks/useParallax'
import heroPhoto from '../assets/platform-hero.jpg'

export default function VideoHero() {
  const [contentRef, contentStyle] = useParallax<HTMLDivElement>(60)
  // Gate entrance animations behind JS being ready, so the headline/CTAs are
  // always visible if animations never run.
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Kinetic headline words — each animates in on a stagger via --i
  let i = 0
  const word = (w: string, accent = false) => (
    <span className="kw" style={{ ['--i' as string]: i++ }} key={`${w}-${i}`}>
      <span className={accent ? 'kw-accent' : undefined}>{w}</span>
    </span>
  )

  return (
    <header className={`phero ${ready ? 'js-ready' : ''}`}>
      <div className="phero-media">
        <img
          src={heroPhoto}
          alt="Basketball player rising for a one-handed dunk in a darkened gym"
          className="phero-img"
        />
        <div className="phero-grain" aria-hidden="true" />
        <div className="phero-scrim" aria-hidden="true" />
      </div>

      <div className="container phero-wrap">
        <div className="phero-content" ref={contentRef} style={contentStyle}>
          <span className="phero-eyebrow">
            <span className="phero-live-dot" />
            AI Basketball Intelligence
          </span>
          <h1 className="phero-title">
            <span className="phero-line">{word('Upload')}{word('the')}{word('game.')}</span>
            <span className="phero-line">{word('Get')}{word('the')}{word('edge.', true)}</span>
          </h1>
          <p className="phero-lede">
            PBA Sports turns raw game footage into coach-ready insight. Our computer-vision engine
            watches every possession — tracking shots, movement, spacing, and fatigue — and hands
            you the decisions that change outcomes, in minutes instead of hours.
          </p>
          <div className="phero-cta">
            <Link to="/platform" className="btn btn-primary btn-glow">
              See It In Action
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Join Early Access <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className="phero-feed">
            <LiveTicker max={3} />
          </div>
        </div>
      </div>

      <a href="#problem" className="phero-scroll" aria-label="Scroll to content">
        <span className="phero-scroll-track">
          <span className="phero-scroll-dot" />
        </span>
        Scroll
      </a>
    </header>
  )
}
