import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PCard from '../components/PCard'
import InteractiveDashboard from '../components/InteractiveDashboard'
import LiveTicker from '../components/LiveTicker'
import platformHero from '../assets/platform-hero.jpg'

const capabilities = [
  { p1: '#26302c', p2: '#12241c', num: '01', glyph: '◎', title: 'Performance Monitoring', stat: ['100%', 'Court Coverage'], body: 'Detects every player on the floor and tracks movement, speed, and distance covered across the full game.' },
  { p1: '#2c2630', p2: '#1c1224', num: '02', glyph: '✦', title: 'Strategic Insights', stat: ['Live', 'Possession Data'], body: 'Ball trajectory, possession time, and passing patterns surfaced as clear strategic recommendations.' },
  { p1: '#302620', p2: '#241408', num: '03', glyph: '↗', title: 'Training Analytics', stat: ['Per-Rep', 'Shot Tracking'], body: 'Shot location, shooting percentage, and scoring zones tracked across every practice and game rep.' },
  { p1: '#242c30', p2: '#0f1a24', num: '04', glyph: '◈', title: 'Team Intelligence', stat: ['5v5', 'Unit Reporting'], body: 'Offensive efficiency, defensive rating, spacing, and transition speed rolled up at the team level.' },
]

const features = [
  { p1: '#262a30', p2: '#12161f', num: '05', glyph: '◎', title: 'Player Detection', body: 'Every player identified and tracked automatically — no manual tagging.' },
  { p1: '#2c2630', p2: '#1c1224', num: '06', glyph: '▦', title: 'Heatmaps', body: 'Visualize positioning and movement density across the floor.' },
  { p1: '#302620', p2: '#241408', num: '07', glyph: '➤', title: 'Ball Tracking', body: 'Trajectory, possession, and pass accuracy, possession by possession.' },
  { p1: '#26302c', p2: '#12241c', num: '08', glyph: '◉', title: 'Shot Analysis', body: 'Location, percentage, and scoring zones for every attempt.' },
  { p1: '#242c30', p2: '#0f1a24', num: '09', glyph: '⛉', title: 'Defensive Analytics', body: 'Positioning, close-outs, steals, and blocks, flagged automatically.' },
  { p1: '#302026', p2: '#240a14', num: '10', glyph: '⚡', title: 'Speed & Distance', body: 'Per-player physical output and workload, every session.' },
  { p1: '#2a3026', p2: '#171f0c', num: '11', glyph: '◇', title: 'Team Spacing', body: 'Offensive spacing and floor balance tracked over time.' },
  { p1: '#262c30', p2: '#0f1922', num: '12', glyph: '↗', title: 'Player Profiles', body: 'Long-term development tracked per athlete, season over season.' },
]

const solutions = [
  { p1: '#26302c', p2: '#12241c', num: 'A', glyph: '◎', title: 'Basketball Academies', stat: ['Dev', 'Program Focus'], body: 'Structured, objective feedback loops to accelerate player development.' },
  { p1: '#2c2630', p2: '#1c1224', num: 'B', glyph: '✦', title: 'Schools', stat: ['K-12', 'Program Focus'], body: 'Give student athletes access to insight normally reserved for elite programs.' },
  { p1: '#302620', p2: '#241408', num: 'C', glyph: '↗', title: 'College Teams', stat: ['NCAA', 'Program Focus'], body: 'Monitor long-term progression across a full multi-season career.' },
  { p1: '#242c30', p2: '#0f1a24', num: 'D', glyph: '◈', title: 'Professional Clubs', stat: ['Pro', 'Program Focus'], body: 'Advanced performance intelligence layered on top of existing staff workflows.' },
  { p1: '#302026', p2: '#240a14', num: 'E', glyph: '●', title: 'Individual Players', stat: ['1:1', 'Program Focus'], body: 'Improve every training session with personal, ongoing feedback.' },
  { p1: '#2a3026', p2: '#171f0c', num: 'F', glyph: '◆', title: 'Youth Programs', stat: ['U-18', 'Program Focus'], body: 'Early talent development grounded in objective, consistent data.' },
]

const techCards = [
  { p1: '#262a30', p2: '#12161f', num: '01', glyph: '☁', title: 'Cloud Infrastructure', body: 'Scalable storage and compute for video ingestion and processing.' },
  { p1: '#2c2630', p2: '#1c1224', num: '02', glyph: '◎', title: 'Computer Vision', body: 'Pose estimation tracks 17–25 body keypoints per player, frame by frame, holding 90%+ accuracy even in crowded scenes.' },
  { p1: '#302620', p2: '#241408', num: '03', glyph: '✦', title: 'Machine Learning', body: 'Event detection and pattern recognition — the same approach powering elite systems like Second Spectrum.' },
  { p1: '#26302c', p2: '#12241c', num: '04', glyph: '◈', title: 'Data & Analytics', body: 'Structured performance metrics, visualized for coaching decisions.' },
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
            From the first whistle to the final buzzer, Pitch tracks every player and every
            possession — turning raw gameplay into the coaching intelligence teams act on. One
            pipeline: computer vision in, decisions out.
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
      <section className="section-pad section-glow" id="capabilities">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Capabilities</span>
            <h2 className="h2">An AI analyst that never looks away.</h2>
          </Reveal>
          <Reveal className="grid grid-4 stagger auto">
            {capabilities.map((c) => (
              <PCard key={c.num} p1={c.p1} p2={c.p2} num={c.num} glyph={c.glyph} title={c.title} statVal={c.stat[0]} statLabel={c.stat[1]}>
                {c.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Dashboard showcase */}
      <section className="section-pad-sm section-alt section-glow" id="dashboard">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Coach Dashboard</span>
            <h2 className="h2">Insight, not just data.</h2>
            <p className="lede">
              Pick a player and watch every panel respond. Each one answers a coaching question
              directly — not just displays a number.
            </p>
          </Reveal>
          <Reveal className="dash-layout">
            <InteractiveDashboard />
            <LiveTicker />
          </Reveal>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section-pad section-glow">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Platform Features</span>
            <h2 className="h2">Built for every layer of the game.</h2>
          </Reveal>
          <Reveal className="grid grid-4 stagger auto">
            {features.map((f) => (
              <PCard key={f.num} p1={f.p1} p2={f.p2} num={f.num} glyph={f.glyph} title={f.title} size="sm">
                {f.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-pad section-alt section-glow" id="solutions">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Solutions</span>
            <h2 className="h2">Built for every level of the game.</h2>
            <p className="lede">
              Instead of one-size-fits-all analytics, Pitch Basketball Academy adapts to the program using it.
            </p>
          </Reveal>
          <Reveal className="grid grid-3 stagger auto">
            {solutions.map((s) => (
              <PCard key={s.num} p1={s.p1} p2={s.p2} num={s.num} glyph={s.glyph} title={s.title} statVal={s.stat[0]} statLabel={s.stat[1]}>
                {s.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="section-pad section-glow" id="technology">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Technology</span>
            <h2 className="h2">Built with modern AI infrastructure.</h2>
            <p className="lede">
              Pitch Basketball Academy is designed as a cloud-native AI solution — video processing, model inference,
              and analytics all run on scalable, secure infrastructure rather than a single local machine. It's the
              same class of computer vision reshaping the sport at the pro level, built to run on footage from any
              camera you already own.
            </p>
          </Reveal>

          <Reveal className="grid grid-4 mb-2 stagger auto">
            {techCards.map((t) => (
              <PCard key={t.num} p1={t.p1} p2={t.p2} num={t.num} glyph={t.glyph} title={t.title} size="sm">
                {t.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Research */}
      <section className="section-pad" id="research">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Research</span>
            <h2 className="h2">Advancing basketball intelligence research.</h2>
            <p className="lede">
              Our work spans player performance modeling, game intelligence, and applied computer vision for sport —
              grounded in transparent, responsible AI practice.
            </p>
          </Reveal>
          <Reveal className="grid grid-4 mb-2 stagger auto">
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
      <section className="section-pad section-alt section-glow" id="roadmap">
        <div className="container">
          <Reveal className="section-head reveal-up">
            <span className="eyebrow">Roadmap</span>
            <h2 className="h2">Where we are, and where we're headed.</h2>
            <span className="badge">Currently in prototype / pilot stage</span>
          </Reveal>
          <Reveal className="grid grid-3 stagger auto">
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
              <Link to="/contact" className="btn btn-primary btn-glow">
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
