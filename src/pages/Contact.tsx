import { type FormEvent, useState } from 'react'
import Reveal from '../components/Reveal'

type Errors = { name?: string; email?: string; age?: string }

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  function validate(form: HTMLFormElement): Errors {
    const next: Errors = {}
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim()
    const age = (form.elements.namedItem('age') as HTMLInputElement)?.value.trim()

    if (!name) next.name = 'Please enter the athlete’s name.'
    if (!email) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'That email doesn’t look right.'
    if (!age) next.age = 'Let us know the age group.'
    return next
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(e.currentTarget)
    setErrors(found)
    if (Object.keys(found).length === 0) setSubmitted(true)
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

      <section className="section-pad section-glow">
        <div className="container">
          <Reveal className="contact-grid">
            <div className="panel">
              {submitted ? (
                <div className="contact-success">
                  <span className="badge">Received</span>
                  <h3 className="h3 mt-1">Thanks — your inquiry is in.</h3>
                  <p className="mt-1">
                    We've received your details and will be in touch soon about early access and next steps.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="h3">Enrollment inquiry</h3>
                  <p className="mt-1">
                    Share a few details below and our team will follow up to confirm eligibility and next steps.
                  </p>
                  <form className="mt-2" onSubmit={handleSubmit} noValidate>
                    <div className="form-grid">
                      <div className="field">
                        <label htmlFor="name">Player / Athlete Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Full name"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <span className="field-error">{errors.name}</span>}
                      </div>
                      <div className="field">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
                      <div className="field">
                        <label htmlFor="age">Age Group</label>
                        <input
                          type="text"
                          id="age"
                          name="age"
                          placeholder="e.g. U-14, High School, College"
                          aria-invalid={!!errors.age}
                        />
                        {errors.age && <span className="field-error">{errors.age}</span>}
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
                    <button type="submit" className="btn btn-primary btn-glow mt-2">
                      Submit Enrollment Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>

            <aside className="contact-next">
              <span className="eyebrow">What happens next</span>
              <div className="next-step">
                <span className="next-num">1</span>
                <div>
                  <h4>We review your inquiry</h4>
                  <p>A team member checks eligibility for the current early-access cohort.</p>
                </div>
              </div>
              <div className="next-step">
                <span className="next-num">2</span>
                <div>
                  <h4>We reach out within a few days</h4>
                  <p>You'll hear from us by email with pricing and a short intro call option.</p>
                </div>
              </div>
              <div className="next-step">
                <span className="next-num">3</span>
                <div>
                  <h4>We walk you through onboarding</h4>
                  <p>Upload your first game footage and see your sample dashboard come to life.</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
