import ArticleGrid from '../components/ArticleGrid.jsx'
import Button from '../components/Button.jsx'
import FaqList from '../components/FaqList.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import FinalCta from '../components/FinalCta.jsx'
import Navbar from '../components/Navbar.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import Photo from '../components/Photo.jsx'
import StepList from '../components/StepList.jsx'
import {
  BOOKING_URL,
  FEATURE_URL,
  REVIEWS_URL,
  conditions,
  credentials,
  faqs,
  firstVisitSteps,
  testimonials,
} from '../content/site.js'
import './Home.css'

// Drop the hero photo at public/images/hero.jpg to replace the placeholder background.
const HERO_IMAGE = '/images/hero.jpg'

function Home() {
  return (
    <>
      <section className="hero" style={{ '--hero-image': `url(${HERO_IMAGE})` }}>
        <Navbar overlay />

        <div className="hero__content">
          <p className="hero__tagline">
            <span>Concierge Mobile Chiropractic</span>
            <span className="hero__heart" aria-hidden="true">
              ♥
            </span>
            <span>Orange County</span>
          </p>
          <h1 className="hero__title">
            Move better.
            <br />
            Feel stronger.
          </h1>
          <div className="hero__footer">
            <p className="hero__intro">
              Personalized, hands-on chiropractic care brought directly to you — built around your
              body, your goals, and the life you want to get back to.
            </p>
            <Button to={BOOKING_URL} variant="light">
              Start your journey
            </Button>
          </div>
          <p className="hero__meta">One-on-one care · 60-minute house calls · Orange County</p>
        </div>
      </section>

      <section className="section section--tight press">
        <p className="eyebrow">As seen in</p>
        <p className="press__name">VoyageLA</p>
        <Button to={FEATURE_URL} variant="outline">
          Read the feature
        </Button>
      </section>

      <section className="section section--sand">
        <p className="eyebrow">What I help with</p>
        <div className="split split--top">
          <div>
            <h2 className="heading">You&rsquo;re in the right place if&hellip;</h2>
            <div className="prose prose--lead">
              <p>Maybe you&rsquo;ve been dealing with pain for a while.</p>
              <p>
                Maybe something hurts after a workout, a long day at your desk, or simply moving
                through life.
              </p>
              <p>
                Maybe you&rsquo;re not even sure what&rsquo;s wrong — you just know your body
                doesn&rsquo;t feel like itself.
              </p>
              <p className="pull-quote">That&rsquo;s where we start.</p>
            </div>
          </div>
          <div>
            <ul className="tag-list">
              {conditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
            <p className="home__note">Your symptoms are the starting point — not the whole story.</p>
            <Button to="/what-i-treat" variant="outline">
              See what I treat
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <Photo label="Photo: Dr. Tiffany" />
          <div>
            <p className="eyebrow">Meet your chiropractor</p>
            <h2 className="heading">Hey — I&rsquo;m Dr. Tiffany.</h2>
            <div className="prose">
              <p className="pull-quote">
                I&rsquo;m a chiropractor who believes good care starts with actually listening.
              </p>
              <p>
                I want to know what&rsquo;s hurting, but I also want to know how you move, what
                you&rsquo;ve been dealing with, what your day-to-day looks like, and what you
                actually want to get back to doing.
              </p>
              <p>
                My approach combines chiropractic care with extensive hands-on soft tissue work,
                mobility, and strengthening strategies when appropriate.
              </p>
              <p>
                Because I don&rsquo;t think you should have to fit into a certain type of person to
                feel comfortable in a chiropractic office.
              </p>
              <p>Everyone starts somewhere.</p>
            </div>
            <div className="actions">
              <Button to="/about">Meet Dr. Tiffany</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <p className="eyebrow">My approach</p>
        <div className="split split--top">
          <h2 className="heading home__big">
            Nothing I do is random.
            <br />
            <em>Every technique has a reason.</em>
          </h2>
          <div>
            <div className="prose prose--lead">
              <p>
                Your care may include chiropractic adjustments, extensive soft tissue work, cupping,
                muscle scraping, manual therapy, mobility work, or corrective exercise — depending
                on what your body actually needs.
              </p>
              <p>
                I don&rsquo;t believe in throwing every technique at you just because I can.
              </p>
              <p>
                The goal is to understand what&rsquo;s going on, explain it to you, and create a
                plan that makes sense.
              </p>
            </div>
            <div className="actions">
              <Button to="/approach" variant="light">
                Explore my approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Your first visit</p>
        <h2 className="heading">Let&rsquo;s figure it out — together.</h2>
        <StepList steps={firstVisitSteps} />
        <div className="actions home__row">
          <p className="pull-quote home__row-text">
            You don&rsquo;t have to know exactly what&rsquo;s wrong before you come in. That&rsquo;s
            what I&rsquo;m here for.
          </p>
          <Button to="/how-it-works" variant="outline">
            What to expect
          </Button>
        </div>
      </section>

      <section className="section section--sand">
        <div className="split">
          <div>
            <p className="eyebrow">The mobile experience</p>
            <h2 className="heading">Your chiropractor comes to you.</h2>
            <div className="prose prose--lead">
              <p>
                No driving across town.
                <br />
                No crowded waiting room.
                <br />
                No rushing through an appointment because the next patient is already waiting.
              </p>
              <p>
                Kör is a concierge mobile practice, which means I bring your chiropractic
                appointment directly to you.
              </p>
              <p>
                Your home becomes the treatment space — comfortable, private, and focused entirely
                on you.
              </p>
            </div>
          </div>
          <div className="card home__info-card">
            <p className="card__label">Orange County</p>
            <h3>Concierge house calls</h3>
            <ul className="check-list">
              <li>60-minute appointments</li>
              <li>New + follow-up patients</li>
            </ul>
            <div>
              <Button to="/mobile-experience">Check your service area</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Services</p>
        <h2 className="heading">Care that&rsquo;s built around you.</h2>
        <div className="card-grid section--cream-cards home__services">
          <article className="card">
            <p className="card__label">60-minute house call</p>
            <h3>Concierge chiropractic</h3>
            <p>A full, one-on-one chiropractic appointment brought directly to you.</p>
            <p>
              Your visit may include assessment, chiropractic adjustments, extensive soft tissue
              work, mobility work, corrective exercise, and other appropriate techniques based on
              what we find.
            </p>
            <div>
              <Button to="/services" variant="outline">
                View pricing
              </Button>
            </div>
          </article>
          <article className="card">
            <p className="card__label">First visit</p>
            <h3>Understanding the bigger picture.</h3>
            <p>
              We&rsquo;ll go through your history, discuss what&rsquo;s been going on, assess your
              movement and function, and begin treatment when appropriate.
            </p>
            <p>You should leave knowing what we&rsquo;re working on and why.</p>
          </article>
          <article className="card">
            <p className="card__label">Follow-up visit</p>
            <h3>Your care should evolve as you do.</h3>
            <p>
              We&rsquo;ll check in, reassess your progress, continue the hands-on work that makes
              sense, and adjust your plan as your body changes.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--sand">
        <div className="split">
          <div>
            <p className="eyebrow">Investment</p>
            <h2 className="heading">Your time matters. So does mine.</h2>
            <div className="prose">
              <p>
                Kör is a private-pay concierge practice designed around unrushed, one-on-one care.
              </p>
              <p>
                If your insurance plan includes out-of-network chiropractic benefits, you may request
                documentation to submit to your insurance carrier.
              </p>
            </div>
          </div>
          <div className="card price-card">
            <p className="card__label">60-minute mobile chiropractic visit</p>
            {/* TODO: set the visit price. */}
            <p className="price-card__amount">$XXX</p>
            {/* TODO: confirm HSA/FSA wording. */}
            <p>Private pay · Credit/debit · [HSA/FSA if applicable]</p>
            <div>
              <Button to={BOOKING_URL}>Book a visit</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Education + certifications</p>
        <h2 className="heading">Always learning. Always evolving.</h2>
        <ul className="credentials">
          {credentials.map((item) => (
            <li key={item.title}>
              <span className="credentials__title">{item.title}</span>
              {item.detail && <span className="credentials__detail">{item.detail}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--sand">
        <p className="eyebrow">Real people. Real experiences.</p>
        <h2 className="heading">People who feel like themselves again.</h2>
        <div className="card-grid">
          {testimonials.map((item, i) => (
            <figure key={i} className="card testimonial">
              <blockquote className="pull-quote">{item.quote}</blockquote>
              <figcaption>— {item.author}</figcaption>
            </figure>
          ))}
        </div>
        {REVIEWS_URL && (
          <div className="actions">
            <Button to={REVIEWS_URL} variant="outline">
              Read more reviews
            </Button>
          </div>
        )}
      </section>

      <section className="section">
        <div className="split split--top">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="heading">Questions, answered.</h2>
            <Button to="/faq" variant="outline">
              All questions
            </Button>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="section section--sand">
        <p className="eyebrow">The Kör Journal</p>
        <h2 className="heading">Things worth knowing about your body.</h2>
        <div className="prose prose--lead">
          <p>
            Movement, recovery, chiropractic care, strength, mobility, wellness, and the things I
            wish more people knew about their bodies.
          </p>
        </div>
        <div className="home__journal">
          <FeatureCard>
            A little more about the person behind Kör, my approach to chiropractic care, and the
            experiences that have shaped the way I work with patients.
          </FeatureCard>
          <p className="eyebrow home__journal-next">What&rsquo;s next</p>
          <ArticleGrid />
        </div>
        <div className="actions">
          <Button to="/journal" variant="outline">
            View articles
          </Button>
        </div>
      </section>

      <NewsletterSignup />

      <FinalCta>
        <p>You don&rsquo;t need to know exactly what&rsquo;s wrong before reaching out.</p>
        <p>
          Tell me what&rsquo;s been going on, what you&rsquo;ve been struggling with, and what
          you&rsquo;d love to get back to doing.
        </p>
        <p>We&rsquo;ll take it from there.</p>
      </FinalCta>
    </>
  )
}

export default Home
