import { useState } from 'react'

// TODO: connect to an email service (e.g. Mailchimp, Flodesk) so sign-ups are saved.
function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="section newsletter">
      <div className="split">
        <div>
          <p className="eyebrow">Stay connected</p>
          <h2 className="heading">Come hang out.</h2>
          <div className="prose">
            <p>
              Movement tips, wellness education, practice updates, behind-the-scenes moments, and
              the occasional special offer.
            </p>
            <p>No weird spam. Just things I actually think you&rsquo;ll find useful.</p>
          </div>
        </div>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <label className="form__field form__field--full">
            Your email
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <div className="form__field--full">
            <button type="submit" className="button">
              Join the circle
            </button>
          </div>
          {submitted && (
            <p className="form__status" role="status">
              Sign-ups aren&rsquo;t connected yet — this form is a preview.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default NewsletterSignup
