import { type FormEvent, useState } from 'react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Enroll</span>
          <h1 className="display display-sm">
            Let's talk basketball
            <br />
            intelligence.
          </h1>
          <p className="lede mt-1">
            Tell us about your player or program and we'll reach out about early access, pricing, and what onboarding
            looks like.
          </p>
        </div>
      </header>

      <section className="section-pad">
        <div className="container">
          <Reveal className="panel" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h3 className="h3">Enrollment inquiry</h3>
            <p className="mt-1">
              Share a few details below and our team will follow up to confirm eligibility and next steps.
            </p>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Player / Athlete Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label htmlFor="age">Age Group</label>
                  <input type="text" id="age" name="age" placeholder="e.g. U-14, High School, College" required />
                </div>
                <div className="field">
                  <label htmlFor="program">Program / Team</label>
                  <input type="text" id="program" name="program" placeholder="School, club, or academy name" />
                </div>
                <div className="field full">
                  <label htmlFor="message">Anything else we should know?</label>
                  <textarea id="message" name="message" rows={4} placeholder="Goals, schedule, or questions about enrollment" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit Enrollment Inquiry
              </button>
              {submitted && (
                <p className="mt-1" style={{ color: 'var(--accent)' }}>
                  Thanks — we've received your inquiry and will be in touch soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
