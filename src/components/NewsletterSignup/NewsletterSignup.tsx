import { useState } from 'react'
import './NewsletterSignup.css'

// TODO: connect to an email service (e.g. Mailchimp, Flodesk) so sign-ups are saved.
function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="newsletter">
      <p className="newsletter__eyebrow">Stay connected</p>
      <h2 className="newsletter__title">
        Come <em>hang out.</em>
      </h2>

      <div className="envelope" aria-hidden="true">
        <div className="envelope__back" />
        <div className="envelope__card">
          <span className="envelope__card-script">You&rsquo;re</span>
          <span className="envelope__card-mono">INVITED</span>
        </div>
        <div className="envelope__front">Kör</div>
      </div>

      <p className="newsletter__text">
        Movement tips, wellness education, practice updates, behind-the-scenes moments, and the
        occasional special offer. No weird spam. Just things I actually think you&rsquo;ll find
        useful.
      </p>

      <form
        className="newsletter__form"
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <label className="visually-hidden" htmlFor="newsletter-email">
          Your email
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Your email"
          required
          autoComplete="email"
        />
        <button type="submit" className="button">
          Join the circle
        </button>
      </form>
      {submitted && (
        <p className="newsletter__status" role="status">
          Sign-ups aren&rsquo;t connected yet. This form is a preview.
        </p>
      )}
    </section>
  )
}

export default NewsletterSignup
