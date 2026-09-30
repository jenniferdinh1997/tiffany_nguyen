import Button from '../components/Button.jsx'
import FinalCta from '../components/FinalCta.jsx'
import PageHeader from '../components/PageHeader.jsx'
import StepList from '../components/StepList.jsx'

const houseCallSteps = [
  {
    number: '1',
    name: 'Book',
    title: 'Book your time.',
    text: 'Choose your appointment time and complete your intake forms before your visit.',
  },
  {
    number: '2',
    name: 'I come to you',
    title: 'I arrive at your home.',
    text: "I'll arrive at your home with what I need for your appointment.",
  },
  {
    number: '3',
    name: 'We assess',
    title: "We figure out what's going on.",
    text: "We'll talk, assess, and figure out what's actually going on.",
  },
  {
    number: '4',
    name: 'We treat',
    title: 'Hands-on and unrushed.',
    text: 'Your appointment is hands-on, personalized, and unrushed.',
  },
  {
    number: '5',
    name: 'You keep building',
    title: 'You leave with a plan.',
    text: "You'll leave with recommendations to help you continue working toward your goals.",
  },
]

function MobileExperience() {
  return (
    <>
      <PageHeader eyebrow="The mobile experience" title="Your chiropractor comes to you.">
        <p>
          Concierge chiropractic care was created for people who want more from their healthcare
          experience.
        </p>
        <p className="pull-quote">
          More time.
          <br />
          More privacy.
          <br />
          More personalization.
          <br />
          Less rushing.
        </p>
      </PageHeader>

      <section className="section section--sand">
        <p className="eyebrow">What your house call looks like</p>
        <StepList steps={houseCallSteps} />
      </section>

      <section className="section">
        <div className="split">
          <div>
            <p className="eyebrow">Service area</p>
            <h2 className="heading">Orange County, California</h2>
            <div className="prose prose--lead">
              <p>House-call availability depends on your location and scheduling.</p>
              <p>Not sure if you&rsquo;re within the service area?</p>
            </div>
          </div>
          <div>
            <Button to="/contact#question">Check your address</Button>
          </div>
        </div>
      </section>

      <FinalCta>
        <p>You don&rsquo;t need to know exactly what&rsquo;s wrong before reaching out.</p>
        <p>We&rsquo;ll take it from there.</p>
      </FinalCta>
    </>
  )
}

export default MobileExperience
