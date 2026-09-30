import { useState } from 'react'
import FinalCta from '../components/FinalCta.jsx'
import './Contact.css'

// TODO: connect to a HIPAA-compliant form or your practice software before going live,
// since visitors may describe health concerns here.
function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="inquire">
        <p className="inquire__eyebrow">Have a question?</p>
        <h1 className="inquire__title">Inquire</h1>
        <p className="inquire__text">Not sure if Kör is the right fit? That&rsquo;s okay.</p>
      </section>

      <section id="question" className="contact">
        <h2 className="contact__title">Tell me what&rsquo;s going on.</h2>
        <p className="contact__intro">
          I&rsquo;ll help you figure out the next step.
        </p>

        <form
          className="contact__form"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <label>
            First name
            <input name="firstName" required autoComplete="given-name" placeholder="Jane" />
          </label>
          <label>
            Last name
            <input name="lastName" required autoComplete="family-name" placeholder="Smith" />
          </label>
          <label className="contact__full">
            Email
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label className="contact__full">
            Phone
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label className="contact__full">
            What&rsquo;s going on?
            <textarea name="whatsGoingOn" />
          </label>
          <label className="contact__full">
            What would you like help with?
            <textarea name="helpWith" />
          </label>
          <label className="contact__full">
            Is there anything else you&rsquo;d like me to know?
            <textarea name="anythingElse" />
          </label>
          <div className="contact__full">
            <button type="submit" className="button button--light">
              Send message
            </button>
          </div>
          {submitted && (
            <p className="contact__full contact__status" role="status">
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
