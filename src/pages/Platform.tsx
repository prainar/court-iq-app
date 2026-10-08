import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PCard from '../components/PCard'
import platformHero from '../assets/platform-hero.jpg'

const capabilities = [
  { p1: '#26302c', p2: '#12241c', num: '01', glyph: '◎', title: 'Performance Monitoring', stat: ['100%', 'Court Coverage'], body: 'Detects every player on the floor and tracks movement, speed, and distance covered across the full game.' },
  { p1: '#2c2630', p2: '#1c1224', num: '02', glyph: '✦', title: 'Strategic Insights', stat: ['Live', 'Possession Data'], body: 'Ball trajectory, possession time, and passing patterns surfaced as clear strategic recommendations.' },
  { p1: '#302620', p2: '#241408', num: '03', glyph: '↗', title: 'Training Analytics', stat: ['Per-Rep', 'Shot Tracking'], body: 'Shot location, shooting percentage, and scoring zones tracked across every practice and game rep.' },
  { p1: '#242c30', p2: '#0f1a24', num: '04', glyph: '◈', title: 'Team Intelligence', stat: ['5v5', 'Unit Reporting'], body: 'Offensive efficiency, defensive rating, spacing, and transition speed rolled up at the team level.' },
]

const features = [
  { p1: '#262a30', p2: '#12161f', num: '05', title: 'Player Detection', body: 'Every player identified and tracked automatically.' },
  { p1: '#2c2630', p2: '#1c1224', num: '06', title: 'Heatmaps', body: 'Visualize positioning and movement density.' },
  { p1: '#302620', p2: '#241408', num: '07', title: 'Ball Tracking', body: 'Trajectory, possession, and pass accuracy.' },
  { p1: '#26302c', p2: '#12241c', num: '08', title: 'Shot Analysis', body: 'Location, percentage, and scoring zones.' },
  { p1: '#242c30', p2: '#0f1a24', num: '09', title: 'Defensive Analytics', body: 'Positioning, close-outs, steals, and blocks.' },
  { p1: '#302026', p2: '#240a14', num: '10', title: 'Speed & Distance', body: 'Per-player physical output, every session.' },
  { p1: '#2a3026', p2: '#171f0c', num: '11', title: 'Team Spacing', body: 'Offensive spacing and floor balance over time.' },
  { p1: '#262c30', p2: '#0f1922', num: '12', title: 'Player Profiles', body: 'Long-term development tracked per athlete.' },
]

const solutions = [
  { p1: '#26302c', p2: '#12241c', num: 'A', title: 'Basketball Academies', stat: ['Dev', 'Program Focus'], body: 'Structured, objective feedback loops to accelerate player development.' },
  { p1: '#2c2630', p2: '#1c1224', num: 'B', title: 'Schools', stat: ['K-12', 'Program Focus'], body: 'Give student athletes access to insight normally reserved for elite programs.' },
  { p1: '#302620', p2: '#241408', num: 'C', title: 'College Teams', stat: ['NCAA', 'Program Focus'], body: 'Monitor long-term progression across a full multi-season career.' },
  { p1: '#242c30', p2: '#0f1a24', num: 'D', title: 'Professional Clubs', stat: ['Pro', 'Program Focus'], body: 'Advanced performance intelligence layered on top of existing staff workflows.' },
  { p1: '#302026', p2: '#240a14', num: 'E', title: 'Individual Players', stat: ['1:1', 'Program Focus'], body: 'Improve every training session with personal, ongoing feedback.' },
  { p1: '#2a3026', p2: '#171f0c', num: 'F', title: 'Youth Programs', stat: ['U-18', 'Program Focus'], body: 'Early talent development grounded in objective, consistent data.' },
]

const techCards = [
  { p1: '#262a30', p2: '#12161f', num: '01', title: 'Cloud Infrastructure', body: 'Scalable storage and compute for video ingestion and processing.' },
  { p1: '#2c2630', p2: '#1c1224', num: '02', title: 'Computer Vision', body: 'Player and ball detection frame-by-frame across full match footage.' },
  { p1: '#302620', p2: '#241408', num: '03', title: 'Machine Learning', body: 'Event detection and pattern recognition trained on game data.' },
  { p1: '#26302c', p2: '#12241c', num: '04', title: 'Data & Analytics', body: 'Structured performance metrics, visualized for coaching decisions.' },
]

const researchTopics = ['Player Performance', 'Game Intelligence', 'Movement Analysis', 'Ethical AI']

export default function Platform() {
  return (
    <>
      <header className="page-hero page-hero-photo">
        <img src={platformHero} alt="Player rising for a dunk beneath the hoop in a dimly lit gym" className="page-hero-img" />
        <div className="container">
          <span className="eyebrow">The Platform</span>
          <h1 className="display display-sm">
            Basketball Intelligence,
            <br />
            End to End.
          </h1>
          <p className="lede mt-1">
            From performance monitoring to strategic insight — one platform that turns raw gameplay into the
            coaching intelligence teams act on.
          </p>
        </div>
      </header>

      <div className="subnav">
        <div className="subnav-inner">
          <a href="#capabilities">Capabilities</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#solutions">Solutions</a>
          <a href="#technology">Technology</a>
          <a href="#research">Research</a>
          <a href="#roadmap">Roadmap</a>
        </div>
      </div>

      {/* Capabilities */}
      <section className="section-pad" id="capabilities">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Capabilities</span>
            <h2 className="h2">Everything a coaching staff needs, automated.</h2>
          </Reveal>
          <Reveal className="grid grid-4">
            {capabilities.map((c) => (
              <PCard key={c.num} p1={c.p1} p2={c.p2} num={c.num} glyph={c.glyph} title={c.title} statVal={c.stat[0]} statLabel={c.stat[1]}>
                {c.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Dashboard showcase */}
      <section className="section-pad-sm section-alt" id="dashboard">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Coach Dashboard</span>
            <h2 className="h2">Insight, not just data.</h2>
            <p className="lede">Every panel is designed to answer a coaching question directly — not just display a number.</p>
          </Reveal>
          <Reveal className="dash">
            <div className="dash-bar">
              <div className="dash-bar-left">
                <span className="dash-live">
                  <span className="dash-live-dot"></span>LIVE
                </span>
                <span className="dash-title">Player #12 · Session Summary</span>
              </div>
              <span className="faint" style={{ fontSize: '0.76rem' }}>
pitchacademy.app/dashboard
              </span>
            </div>

            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-num">28:00</span>
                <span className="dash-stat-label">Minutes Played</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num">51%</span>
                <span className="dash-stat-label">Field Goal</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num">4.8km</span>
                <span className="dash-stat-label">Distance</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num">5.2 m/s</span>
                <span className="dash-stat-label">Top Speed</span>
              </div>
            </div>

            <div className="dash-body">
              <div className="dash-panel">
                <div className="dash-panel-head">
                  <span className="dash-panel-title">Shooting Trend by Quarter</span>
                  <span className="dash-panel-badge down">-31 pts Q4</span>
                </div>
                <svg viewBox="0 0 320 140" className="trend-svg" preserveAspectRatio="none">
                  <line x1="0" y1="35" x2="320" y2="35" className="trend-grid" />
                  <line x1="0" y1="70" x2="320" y2="70" className="trend-grid" />
                  <line x1="0" y1="105" x2="320" y2="105" className="trend-grid" />
                  <polyline points="20,58 113,68 207,75 300,118" className="trend-line" />
                  {[
                    { x: 20, y: 58, pct: '62%' },
                    { x: 113, y: 68, pct: '58%' },
                    { x: 207, y: 75, pct: '55%' },
                    { x: 300, y: 118, pct: '31%' },
                  ].map((p) => (
                    <g key={p.x}>
                      <circle cx={p.x} cy={p.y} r="4.5" className="trend-dot" />
                      <text x={p.x} y={p.y - 12} className="trend-label" textAnchor="middle">
                        {p.pct}
                      </text>
                    </g>
                  ))}
                </svg>
                <div className="trend-axis">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                </div>
              </div>

              <div className="dash-panel">
                <div className="dash-panel-head">
                  <span className="dash-panel-title">Shot Chart</span>
                  <div className="shot-chart-key">
                    <span>
                      <i className="dot made"></i>Make
                    </span>
                    <span>
                      <i className="dot miss"></i>Miss
                    </span>
                  </div>
                </div>
                <svg viewBox="0 0 300 170" className="court-svg">
                  <rect x="1" y="1" width="298" height="168" rx="6" className="court-floor" />
                  <rect x="1" y="45" width="76" height="80" className="court-line-el" />
                  <path d="M 77 45 A 90 90 0 0 1 77 125" className="court-line-el" />
                  <path d="M 1 15 A 130 130 0 0 1 1 155" className="court-line-el" />
                  <circle cx="10" cy="85" r="2.5" className="hoop" />
                  {[
                    { x: 60, y: 55, made: true },
                    { x: 130, y: 40, made: true },
                    { x: 95, y: 130, made: true },
                    { x: 210, y: 120, made: false },
                    { x: 245, y: 65, made: true },
                    { x: 180, y: 30, made: false },
                  ].map((s, i) => (
                    <circle key={i} cx={s.x} cy={s.y} r="6" className={`shot-dot ${s.made ? 'made' : 'miss'}`} />
                  ))}
                </svg>
              </div>
            </div>

            <div className="dash-insight">
              <span className="dash-insight-tag">AI Insight</span>
              <p>
                Shooting efficiency drops 31 points in the 4th quarter, correlating with 7+ minutes of continuous
                floor time. Recommend a substitution window at the 7-minute mark to protect shot quality late in
                games.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Platform Features</span>
            <h2 className="h2">Built for every layer of the game.</h2>
          </Reveal>
          <Reveal className="grid grid-4">
            {features.map((f) => (
              <PCard key={f.num} p1={f.p1} p2={f.p2} num={f.num} title={f.title} size="sm">
                {f.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-pad section-alt" id="solutions">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Solutions</span>
            <h2 className="h2">Built for every level of the game.</h2>
            <p className="lede">
              Instead of one-size-fits-all analytics, PBA Sports adapts to the program using it.
            </p>
          </Reveal>
          <Reveal className="grid grid-3">
            {solutions.map((s) => (
              <PCard key={s.num} p1={s.p1} p2={s.p2} num={s.num} title={s.title} statVal={s.stat[0]} statLabel={s.stat[1]}>
                {s.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="section-pad" id="technology">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Technology</span>
            <h2 className="h2">Built with modern AI infrastructure.</h2>
            <p className="lede">
              PBA Sports is designed as a cloud-native AI solution — video processing, model inference,
              and analytics all run on scalable, secure infrastructure rather than a single local machine.
            </p>
          </Reveal>

          <Reveal className="grid grid-4 mb-2">
            {techCards.map((t) => (
              <PCard key={t.num} p1={t.p1} p2={t.p2} num={t.num} title={t.title} size="sm">
                {t.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Research */}
      <section className="section-pad" id="research">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Research</span>
            <h2 className="h2">Advancing basketball intelligence research.</h2>
            <p className="lede">
              Our work spans player performance modeling, game intelligence, and applied computer vision for sport —
              grounded in transparent, responsible AI practice.
            </p>
          </Reveal>
          <Reveal className="grid grid-4 mb-2">
            {researchTopics.map((topic) => (
              <div className="tag-card" key={topic}>
                <span className="tag-dot"></span>
                {topic}
              </div>
            ))}
          </Reveal>
          <Reveal>
            <div className="timeline">
              <div className="timeline-step active">
                <div className="timeline-dot"></div>
                <h4>Prototype</h4>
                <p>Core detection &amp; tracking models, 2026</p>
              </div>
              <div className="timeline-step">
                <div className="timeline-dot"></div>
                <h4>Pilot</h4>
                <p>Early partner programs testing live</p>
              </div>
              <div className="timeline-step">
                <div className="timeline-dot"></div>
                <h4>Beta</h4>
                <p>Expanded feature set, broader access</p>
              </div>
              <div className="timeline-step">
                <div className="timeline-dot"></div>
                <h4>Public Platform</h4>
                <p>General availability</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-pad section-alt" id="roadmap">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Roadmap</span>
            <h2 className="h2">Where we are, and where we're headed.</h2>
            <span className="badge">Currently in prototype / pilot stage</span>
          </Reveal>
          <Reveal className="grid grid-3">
            <div>
              <div className="roadmap-col-title">
                <span className="tag-dot"></span>Current
              </div>
              <div className="roadmap-list">
                <div className="roadmap-item">Player detection &amp; tracking (core CV pipeline)</div>
                <div className="roadmap-item">Shot &amp; possession analytics</div>
                <div className="roadmap-item">Coach dashboard (early access)</div>
              </div>
            </div>
            <div>
              <div className="roadmap-col-title">
                <span className="tag-dot"></span>Coming Soon
              </div>
              <div className="roadmap-list">
                <div className="roadmap-item">Automatic highlight generation</div>
                <div className="roadmap-item">Defensive analytics module</div>
                <div className="roadmap-item">Team comparison &amp; scouting reports</div>
              </div>
            </div>
            <div>
              <div className="roadmap-col-title">
                <span className="tag-dot"></span>Future Vision
              </div>
              <div className="roadmap-list">
                <div className="roadmap-item">Live, real-time game analysis</div>
                <div className="roadmap-item">Injury risk &amp; fatigue prediction</div>
                <div className="roadmap-item">Mobile coach companion app</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <Reveal className="cta-band">
            <h2 className="h2">Ready to see the platform in action?</h2>
            <p className="lede">We're onboarding a small group of early partner programs.</p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">
                Request Demo
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn About Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
