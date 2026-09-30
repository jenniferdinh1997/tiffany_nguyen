import FinalCta from '../components/FinalCta.jsx'
import PageHeader from '../components/PageHeader.jsx'

const areas = [
  { title: 'Back + Spine', text: 'Back pain · neck pain · disc-related conditions · sciatica' },
  {
    title: 'Shoulders + Arms',
    text: "Shoulder pain · tennis elbow · golfer's elbow · carpal tunnel",
  },
  { title: 'Hips + Lower Extremity', text: 'Hip pain · knee pain · ankle sprains and strains' },
  { title: 'Head + Neck', text: 'Headaches · migraines · neck tension' },
  {
    title: 'Movement + Recovery',
    text: 'Mobility restrictions · muscle tension · rehabilitation · strength and movement',
  },
  {
    title: 'Prenatal + Postpartum',
    text: 'Individualized care throughout pregnancy and postpartum recovery.',
  },
]

function WhatITreat() {
  return (
    <>
      <PageHeader
        eyebrow="What I help with"
        title="Your body is talking. Let’s figure out what it’s saying."
      >
        <p>Your pain doesn&rsquo;t always tell the whole story.</p>
        <p>
          We&rsquo;ll look at where you&rsquo;re hurting, how you&rsquo;re moving, what may be
          contributing, and what your body needs to move forward.
        </p>
      </PageHeader>

      <section className="section section--sand">
        <div className="card-grid">
          {areas.map((area) => (
            <article key={area.title} className="card">
              <p className="card__label">{area.title}</p>
              <h3>{area.text}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split split--top">
          <div>
            <p className="eyebrow">Important</p>
            <h2 className="heading heading--sm">
              Not every condition is appropriate for chiropractic care.
            </h2>
          </div>
          <div className="prose prose--lead">
            <p>
              If your history or presentation suggests you need additional evaluation, imaging, or
              another healthcare professional, I&rsquo;ll tell you.
            </p>
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

export default WhatITreat
