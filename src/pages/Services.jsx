import Button from '../components/Button.jsx'
import FinalCta from '../components/FinalCta.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { BOOKING_URL } from '../content/site.js'

const visitIncludes = [
  'Comprehensive assessment',
  'Chiropractic adjustments',
  'Extensive soft tissue work',
  'Cupping',
  'Muscle scraping / IASTM',
  'Manual therapy',
  'Mobility work',
  'Corrective exercise',
  'Personalized recommendations',
]

function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Care that comes to you.">
        <p>Concierge mobile chiropractic.</p>
      </PageHeader>

      <section className="section section--sand">
        <div className="split split--top">
          <div>
            <p className="eyebrow">60-minute house call</p>
            <h2 className="heading">A full one-on-one appointment, brought to you.</h2>
          </div>
          <div>
            <p className="prose prose--lead">Your visit may include:</p>
            <ul className="check-list services__list">
              {visitIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card-grid section--cream-cards">
          <article className="card">
            <p className="card__label">First visit</p>
            <h3>Getting the full picture.</h3>
            <p>
              We&rsquo;ll discuss your history, symptoms, lifestyle, movement, and goals, complete
              an appropriate assessment, and begin treatment when indicated.
            </p>
            <p>You should leave understanding what we&rsquo;re working on and why.</p>
          </article>
          <article className="card">
            <p className="card__label">Follow-up visit</p>
            <h3>Your care should evolve as you do.</h3>
            <p>We&rsquo;ll reassess.</p>
            <p>We&rsquo;ll talk about what&rsquo;s changed.</p>
            <p>We&rsquo;ll continue the treatment that makes sense.</p>
            <p>And when appropriate, we&rsquo;ll progress your movement and strengthening work.</p>
          </article>
        </div>
      </section>

      <section className="section section--sand">
        <div className="split">
          <div>
            <p className="eyebrow">Private pay</p>
            <h2 className="heading">Your time matters. So does mine.</h2>
            <div className="prose">
              <p>Kör is a private-pay concierge practice.</p>
              <p>
                If you have out-of-network benefits, documentation may be available for you to
                submit to your insurance carrier.
              </p>
            </div>
          </div>
          <div className="card price-card">
            <p className="card__label">60-minute mobile visit</p>
            {/* TODO: set the visit price. */}
            <p className="price-card__amount">$XXX</p>
            <p>Credit / debit accepted.</p>
            {/* TODO: add HSA/FSA wording once confirmed. */}
            <p>[HSA/FSA language once confirmed.]</p>
            <div>
              <Button to={BOOKING_URL}>Book a visit</Button>
            </div>
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

export default Services
