import { useState, type FormEvent } from 'react'
import { contactFormEndpoint, profile } from '../data/content'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      await fetch(contactFormEndpoint, {
        method: 'POST',
        body: new FormData(form),
      })
      setStatus('ok')
      form.reset()
      window.setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s talk</h2>
          <p className="section__lead">
            Open to internships, collaborations, and conversations about data,
            ML, and product engineering.
          </p>

          <ul className="contact__details">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                {profile.phone}
              </a>
            </li>
          </ul>

          <div className="contact__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>

          <a href={profile.cvUrl} download className="btn btn--primary">
            Download CV
          </a>
        </div>

        <form className="contact__form" name="submit-to-google-sheet" onSubmit={onSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="Name" required autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="Email" required autoComplete="email" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="Message" rows={6} required />
          </label>
          <button
            type="submit"
            className="btn btn--primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'ok' && (
            <p className="contact__status contact__status--ok" role="status">
              Message sent successfully.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__status contact__status--error" role="alert">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
