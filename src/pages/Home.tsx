import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PCard from '../components/PCard'
import CompareIcon from '../components/CompareIcon'
import heroPhoto from '../assets/hero-basketball.jpg'
import performancePhoto from '../assets/cards/performance.jpg'
import strategyPhoto from '../assets/cards/strategy.jpg'
import developmentPhoto from '../assets/cards/development.jpg'
import teamPhoto from '../assets/cards/team.jpg'

export default function Home() {
  return (
    <>
      <header className="hero">
        <img src={heroPhoto} alt="Basketball approaching the hoop mid-shot in a packed arena" className="hero-photo" />
        <div className="hero-content">
          <span className="eyebrow">Basketball Intelligence Platform</span>
          <h1 className="display">
            Every Game.
            <br />
            Every Decision.
            <br />
            Every Improvement.
          </h1>
          <p className="lede mt-2">
            We're building an AI-powered basketball intelligence platform that continuously monitors
            player performance, identifies strategic opportunities, and delivers data-driven insights
            that help athletes improve their game.
          </p>
          <div className="btn-row">
            <Link to="/platform" className="btn btn-primary">
              Explore Platform
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Join Early Access
            </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="court-line"></div>
      </div>

      {/* Why we exist */}
      <section className="section-pad-sm">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why We're Building It</span>
            <h2 className="h2">From hours of footage to minutes of insight.</h2>
          </Reveal>
          <Reveal className="compare">
            <div className="compare-col old">
              <span className="compare-tag">Today</span>
              <h3 className="h3">Traditional Review</h3>
              <p>Manual, slow, and inconsistent — insights depend entirely on what a coach happens to catch live.</p>
              <div className="compare-steps">
                <div className="compare-step">
                  <span className="compare-icon">
                    <CompareIcon name="record" />
                  </span>
                  Record the game
                </div>
                <div className="compare-step">
                  <span className="compare-icon">
                    <CompareIcon name="clock" />
                  </span>
                  Watch 2+ hours of footage
                </div>
                <div className="compare-step">
                  <span className="compare-icon">
                    <CompareIcon name="pencil" />
                  </span>
                  Take manual notes
                </div>
                <div className="compare-step">
                  <span className="compare-icon">
                    <CompareIcon name="frown" />
                  </span>
                  Miss key events
                </div>
                <div className="compare-step">
                  <span className="compare-icon">
                    <CompareIcon name="turtle" />
                  </span>
                  Slow, biased improvement
                </div>
              </div>
            </div>
            <div className="compare-col new">
              <span className="compare-tag accent">PBA Sports</span>
              <h3 className="h3">Our Vision</h3>
              <p>Automated, objective, and continuous — every possession analyzed the same way, every time.</p>
              <div className="compare-steps">
                <div className="compare-step">
                  <span className="compare-icon accent">
                    <CompareIcon name="record" />
                  </span>
                  Record the game
                </div>
                <div className="compare-step">
                  <span className="compare-icon accent">
                    <CompareIcon name="bot" />
                  </span>
                  AI analyzes performance
                </div>
                <div className="compare-step">
                  <span className="compare-icon accent">
                    <CompareIcon name="chart" />
                  </span>
                  Performance insights generated
                </div>
                <div className="compare-step">
                  <span className="compare-icon accent">
                    <CompareIcon name="target" />
                  </span>
                  Actionable coaching recommendations
                </div>
                <div className="compare-step">
                  <span className="compare-icon accent">
                    <CompareIcon name="trend" />
                  </span>
                  Continuous improvement
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product overview */}
      <section className="section-pad section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Product Overview</span>
            <h2 className="h2">One platform. Every layer of the game.</h2>
            <p className="lede">
              Continuous monitoring, strategic intelligence, and long-term development tracking — built for players,
              coaches, and programs.
            </p>
          </Reveal>
          <Reveal className="grid grid-4">
            <PCard
              p1="#26302c"
              p2="#12241c"
              num="01"
              glyph="◎"
              title="Performance Monitoring"
              statVal="100%"
              statLabel="Possessions Tracked"
              photo={performancePhoto}
              photoAlt="Player rising for a dunk, tracked mid-motion"
            >
              Continuously observes games and practice sessions to understand player activity across every possession.
            </PCard>
            <PCard
              p1="#2c2630"
              p2="#1c1224"
              num="02"
              glyph="✦"
              title="Strategy Intelligence"
              statVal="Live"
              statLabel="Spacing Analysis"
              photo={strategyPhoto}
              photoAlt="Players contesting a shot, showing court spacing and positioning"
            >
              Surfaces positioning, spacing, and decision-making patterns that shape stronger overall game strategy.
            </PCard>
            <PCard
              p1="#302620"
              p2="#241408"
              num="03"
              glyph="↗"
              title="Player Development"
              statVal="Season"
              statLabel="Growth Tracking"
              photo={developmentPhoto}
              photoAlt="Close-up of a basketball hoop and net"
            >
              Tracks performance over time so athletes and coaches can measure growth and refine training goals.
            </PCard>
            <PCard
              p1="#242c30"
              p2="#0f1a24"
              num="04"
              glyph="◈"
              title="Team Analytics"
              statVal="5v5"
              statLabel="Unit Reporting"
              photo={teamPhoto}
              photoAlt="Wide view of a full arena during a game"
            >
              Gives coaching staff team-level insight that encourages collaboration and tactical improvement.
            </PCard>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad-sm">
        <div className="container">
          <Reveal className="grid grid-3">
            <div className="stat">
              <div className="stat-num">1M+</div>
              <div className="stat-label">Basketball games played every year at the youth &amp; amateur level</div>
            </div>
            <div className="stat">
              <div className="stat-num">1,000s</div>
              <div className="stat-label">Hours of footage reviewed manually across programs each season</div>
            </div>
            <div className="stat">
              <div className="stat-num">100%</div>
              <div className="stat-label">Our goal: AI-powered analysis available to every athlete, not just the pros</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="cta-band">
            <span className="badge">Early access · Prototype stage</span>
            <h2 className="h2 mt-1">See what AI-powered basketball intelligence looks like.</h2>
            <p className="lede">We're building in the open and onboarding early partner programs now.</p>
            <div className="btn-row">
              <Link to="/platform" className="btn btn-primary">
                Explore Platform
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Talk to Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
