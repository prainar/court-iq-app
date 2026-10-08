import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PCard from '../components/PCard'

const values = [
  { p1: '#26302c', p2: '#12241c', num: '01', title: 'Innovation', body: 'We push at the edge of applied computer vision for sport.' },
  { p1: '#2c2630', p2: '#1c1224', num: '02', title: 'Performance', body: "Every feature ships because it makes players better, not just because it's possible." },
  { p1: '#302620', p2: '#241408', num: '03', title: 'Transparency', body: "We're honest about what's built, what's in progress, and what's still a roadmap item." },
  { p1: '#242c30', p2: '#0f1a24', num: '04', title: 'Community', body: 'Open source and open research, so the whole ecosystem moves forward together.' },
]

const team = [
  { p1: '#26302c', p2: '#12241c', num: '01', title: 'Founder', body: 'Product & vision' },
  { p1: '#2c2630', p2: '#1c1224', num: '02', title: 'Engineering', body: 'Platform & infrastructure' },
  { p1: '#302620', p2: '#241408', num: '03', title: 'Research', body: 'Computer vision & ML' },
  { p1: '#242c30', p2: '#0f1a24', num: '04', title: 'Design', body: 'Product & brand' },
]

export default function About() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1 className="display display-sm">
            Building the future of
            <br />
            basketball intelligence.
          </h1>
          <p className="lede mt-1">
            PBA Sports started with a simple observation: every level of basketball generates enormous
            amounts of game footage, but only a tiny fraction of teams have the staff or tools to turn it into real
            insight.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="h2">Started from a problem every coach knows.</h2>
            </div>
            <p>
              Coaches record games, then spend hours re-watching footage to catch what they missed live — and even
              then, human attention and bias limit what gets noticed. We're building PBA Sports to
              close that gap: an AI platform that watches every possession the same way, every time, and turns it
              into insight a coaching staff can act on immediately.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-pad-sm section-alt">
        <div className="container">
          <Reveal className="grid grid-2">
            <div className="panel">
              <span className="eyebrow">Mission</span>
              <h3 className="h3">Help every basketball player improve.</h3>
              <p>
                Give players and coaches at every level access to objective, professional-grade performance insight
                — not just teams with dedicated analytics staff.
              </p>
            </div>
            <div className="panel">
              <span className="eyebrow">Vision</span>
              <h3 className="h3">The world's leading basketball intelligence platform.</h3>
              <p>
                A future where advanced performance analysis is accessible to schools, academies, clubs, and
                professional programs everywhere, not reserved for the top of the sport.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Values</span>
            <h2 className="h2">What guides how we build.</h2>
          </Reveal>
          <Reveal className="grid grid-4">
            {values.map((v) => (
              <PCard key={v.num} p1={v.p1} p2={v.p2} num={v.num} title={v.title} size="sm">
                {v.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad-sm section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Team</span>
            <h2 className="h2">A small team, building in the open.</h2>
            <p className="lede">
              We're an early-stage team spanning engineering, research, and design — currently in prototype/pilot
              stage and growing deliberately.
            </p>
          </Reveal>
          <Reveal className="grid grid-4">
            {team.map((t) => (
              <PCard key={t.num} p1={t.p1} p2={t.p2} num={t.num} title={t.title} size="sm" person>
                {t.body}
              </PCard>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Careers */}
      <section className="section-pad" id="careers">
        <div className="container">
          <Reveal className="cta-band">
            <span className="badge">Careers</span>
            <h2 className="h2 mt-1">Coming soon.</h2>
            <p className="lede">We're not hiring yet, but we're always glad to hear from people who care about basketball and AI.</p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
