import FinalCta from '../../components/FinalCta/FinalCta'
import PageHeader from '../../components/PageHeader/PageHeader'
import './Approach.css'

const techniques = [
  {
    title: 'Chiropractic adjustments',
    text: 'Targeted chiropractic care designed to support joint movement and function.',
  },
  {
    title: 'Extensive soft tissue work',
    text: 'Hands-on work focused on areas of tension, restriction, and discomfort.',
  },
  { title: 'Cupping', text: 'Dynamic or static cupping may be incorporated when appropriate.' },
  {
    title: 'Muscle scraping / IASTM',
    text: 'Instrument-assisted soft tissue work used for specific areas of restriction.',
  },
  {
    title: 'Manual therapy',
    text: 'Hands-on techniques selected according to your presentation and goals.',
  },
  {
    title: 'Mobility + Functional Range Conditioning',
    text: 'Movement strategies designed to help you build usable mobility and control.',
  },
  {
    title: 'Corrective exercise',
    text: 'Personalized exercises to help you build strength and capacity outside of your appointment.',
  },
  {
    title: 'Webster Technique',
    text: 'An individualized chiropractic approach used during pregnancy when appropriate.',
  },
]

function Approach() {
  return (
    <>
      <PageHeader eyebrow="My approach" title="Your body isn’t a checklist.">
        <p>There isn&rsquo;t one technique that works for everyone.</p>
        <p>Your treatment is built from what we find during your assessment.</p>
      </PageHeader>

      <section className="section section--sand">
        <div className="card-grid">
          {techniques.map((technique) => (
            <article key={technique.title} className="card">
              <h3>{technique.title}</h3>
              <p>{technique.text}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta>
        <p className="pull-quote">The point isn&rsquo;t to do everything.</p>
        <p>The point is to do what you need.</p>
      </FinalCta>
    </>
  )
}

export default Approach
