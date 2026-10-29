import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PCard from '../components/PCard'
import CompareIcon from '../components/CompareIcon'
import CountStat from '../components/CountStat'
import VideoHero from '../components/VideoHero'
import Marquee from '../components/Marquee'
import performancePhoto from '../assets/cards/performance.jpg'
import strategyPhoto from '../assets/cards/strategy.jpg'
import developmentPhoto from '../assets/cards/development.jpg'
import teamPhoto from '../assets/cards/team.jpg'

export default function Home() {
  return (
    <>
      <VideoHero />

      <Marquee />

      {/* The problem — researched */}
      <section className="section-pad-sm section-glow" id="problem">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">The Problem</span>
            <h2 className="h2">Film review is where games go to get forgotten.</h2>
            <p className="lede">
              A frame-by-frame breakdown runs <strong>15–30 minutes per player</strong> — so most
              programs manage it twice a season, not twice a week. The footage holds the answers.
              There's just never enough time to find them.
            </p>
          </Reveal>
          <Reveal className="grid grid-3 stagger">
            <div className="stat-tile" style={{ ['--i' as string]: 0 }}>
              <div className="stat-tile-num">2+ hrs</div>
              <p>of raw footage after a single game — most of it dead time between plays.</p>
            </div>
            <div className="stat-tile" style={{ ['--i' as string]: 1 }}>
              <div className="stat-tile-num">2×<span>/season</span></div>
              <p>how often deep film review actually happens, when it should be weekly.</p>
            </div>
            <div className="stat-tile" style={{ ['--i' as string]: 2 }}>
              <div className="stat-tile-num">100%</div>
              <p>human — limited by attention, fatigue, and whatever a coach catches live.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why we exist */}
      <section className="section-pad-sm section-glow">
        <div className="container">
          <Reveal className="section-head reveal-up">
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

      {/* How it works — what you see → what you get */}
      <section className="section-pad-sm section-alt section-glow">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">How It Works</span>
            <h2 className="h2">Footage in. Decisions out.</h2>
            <p className="lede">Three steps from a recorded game to something you can coach on.</p>
          </Reveal>
          <Reveal className="timeline stagger auto">
            <div className="timeline-step active">
              <div className="timeline-dot"><span className="timeline-num">1</span></div>
              <h4>Upload footage</h4>
              <p>Drop in game or practice video from any camera — no special hardware.</p>
              <span className="timeline-outcome">You see: your game, ready to analyze.</span>
            </div>
            <div className="timeline-step active">
              <div className="timeline-dot"><span className="timeline-num">2</span></div>
              <h4>The AI analyzes every possession</h4>
              <p>Our AI watches the full game — tracking players, the ball, shots, spacing, and workload frame by frame — and decides what actually matters.</p>
              <span className="timeline-outcome">You see: live stats, shot charts, and trends build in real time.</span>
            </div>
            <div className="timeline-step active">
              <div className="timeline-dot"><span className="timeline-num">3</span></div>
              <h4>Get coach-ready insight</h4>
              <p>Plain-language recommendations tied to the exact moments that drove them.</p>
              <span className="timeline-outcome">You get: a substitution, a matchup, a set to run next.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product overview */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Product Overview</span>
            <h2 className="h2">One platform. Every layer of the game.</h2>
            <p className="lede">
              Continuous monitoring, strategic intelligence, and long-term development tracking — built for players,
              coaches, and programs.
            </p>
          </Reveal>
          <Reveal className="grid grid-4 stagger auto">
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

      {/* Stats — researched industry context */}
      <section className="section-pad-sm">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">The Shift</span>
            <h2 className="h2">Video intelligence isn't the future. It's the fastest-moving part of the game.</h2>
            <p className="lede">
              The sports-analytics market is growing ~27% a year, and video analysis is its single
              biggest segment. Elite teams already run on it — PBA Sports brings it to everyone else.
            </p>
          </Reveal>
          <Reveal className="grid grid-3">
            <CountStat value="$52B" label="Projected sports-analytics market by 2034, up from ~$7.7B in 2026 (industry data)" />
            <CountStat value="28%" label="Share of that market held by video analysis — the dominant segment (industry data)" />
            <CountStat value="90%+" label="Keypoint-tracking accuracy modern computer vision reaches in crowded, multi-player scenes" />
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="section-pad-sm section-alt section-glow">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Why PBA Sports</span>
            <h2 className="h2">Pro-level analysis, without a pro-level staff.</h2>
            <p className="lede">
              The insight elite teams pay analysts for — automated, objective, and priced for
              every level of the game.
            </p>
          </Reveal>
          <Reveal className="grid grid-4 stagger">
            <div className="why-card tilt" style={{ ['--i' as string]: 0 }}>
              <span className="why-glyph">◎</span>
              <h3 className="h3">Automatic</h3>
              <p>No manual tagging. Upload footage and the analysis runs itself.</p>
            </div>
            <div className="why-card tilt" style={{ ['--i' as string]: 1 }}>
              <span className="why-glyph">✦</span>
              <h3 className="h3">Objective</h3>
              <p>Every possession judged the same way — no fatigue, no bias, no missed moments.</p>
            </div>
            <div className="why-card tilt" style={{ ['--i' as string]: 2 }}>
              <span className="why-glyph">↗</span>
              <h3 className="h3">Actionable</h3>
              <p>Not a wall of numbers — clear recommendations tied to the plays behind them.</p>
            </div>
            <div className="why-card tilt" style={{ ['--i' as string]: 3 }}>
              <span className="why-glyph">◈</span>
              <h3 className="h3">Every level</h3>
              <p>Built for youth, school, academy, and club programs — not just the pros.</p>
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
              <Link to="/platform" className="btn btn-primary btn-glow">
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
