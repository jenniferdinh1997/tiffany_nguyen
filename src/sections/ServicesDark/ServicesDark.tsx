import Button from '../../components/Button/Button'
import { BOOKING_URL } from '../../content/site'
import './ServicesDark.css'

const services = [
  {
    name: 'Concierge Chiropractic',
    detail: '60-minute house call',
    text: 'A full, one-on-one chiropractic appointment brought directly to you. Your visit may include assessment, chiropractic adjustments, extensive soft tissue work, mobility work, corrective exercise, and other appropriate techniques based on what we find.',
    cta: { label: 'View pricing', to: '/services' },
  },
  {
    name: 'First Visit',
    detail: 'Understanding the bigger picture',
    text: "We'll go through your history, discuss what's been going on, assess your movement and function, and begin treatment when appropriate. You should leave knowing what we're working on and why.",
    cta: { label: 'Book a visit', to: BOOKING_URL },
  },
  {
    name: 'Follow-up Visit',
    detail: 'Your care should evolve as you do',
    text: "We'll check in, reassess your progress, continue the hands-on work that makes sense, and adjust your plan as your body changes.",
    cta: { label: 'Learn more', to: '/services' },
  },
]

function ServicesDark() {
  return (
    <section className="services-dark">
      <header className="services-dark__header">
        <p className="services-dark__eyebrow">Services</p>
        <h2 className="services-dark__title">Care that&rsquo;s built around you.</h2>
        <Button to="/services" variant="ghost">
          View services
        </Button>
      </header>

      {services.map((service) => (
        <article key={service.name} className="services-dark__row">
          <div>
            <h3 className="services-dark__name">{service.name}</h3>
            <p className="services-dark__detail">{service.detail}</p>
          </div>
          <div className="services-dark__body">
            <p>{service.text}</p>
            <Button to={service.cta.to} variant="ghost">
              {service.cta.label}
            </Button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ServicesDark
