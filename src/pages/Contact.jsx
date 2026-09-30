import { useState } from 'react'
import FinalCta from '../components/FinalCta.jsx'
import PageHeader from '../components/PageHeader.jsx'

// TODO: connect to a HIPAA-compliant form or your practice software before going live,
// since visitors may describe health concerns here.
function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHeader eyebrow="Contact" title="Have a question?">
        <p>Not sure if Kör is the right fit?</p>
        <p>That&rsquo;s okay.</p>
        <p>Tell me what&rsquo;s going on and I&rsquo;ll help you figure out the next step.</p>
      </PageHeader>

      <section id="question" className="section section--sand">
        <form
          className="form contact__form"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <label className="form__field">
            First name
            <input name="firstName" required autoComplete="given-name" />
          </label>
          <label className="form__field">
            Last name
            <input name="lastName" required autoComplete="family-name" />
          </label>
          <label className="form__field">
            Email
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label className="form__field">
            Phone
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label className="form__field form__field--full">
            What&rsquo;s going on?
            <textarea name="whatsGoingOn" />
          </label>
          <label className="form__field form__field--full">
            What would you like help with?
            <textarea name="helpWith" />
          </label>
          <label className="form__field form__field--full">
            Is there anything else you&rsquo;d like me to know?
            <textarea name="anythingElse" />
          </label>
          <div className="form__field--full">
            <button type="submit" className="button">
              Send message
            </button>
          </div>
          {submitted && (
            <p className="form__status" role="status">
              This form isn&rsquo;t connected yet — messages are not being sent.
            </p>
          )}
        </form>
      </section>

      <FinalCta>
        <p>You don&rsquo;t need to have all the answers.</p>
        <p>You don&rsquo;t need to know exactly what&rsquo;s wrong.</p>
        <p>You don&rsquo;t need to be an athlete.</p>
        <p>You don&rsquo;t need to know anything about chiropractic.</p>
        <p className="pull-quote">You just need to start somewhere.</p>
      </FinalCta>
    </>
  )
}

export default Contact
