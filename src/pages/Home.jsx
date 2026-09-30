import FinalCta from '../components/FinalCta.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import Approach from '../sections/Approach.jsx'
import Credentials from '../sections/Credentials.jsx'
import FaqSection from '../sections/FaqSection.jsx'
import Hero from '../sections/Hero.jsx'
import Investment from '../sections/Investment.jsx'
import JournalSection from '../sections/JournalSection.jsx'
import MeetDoctor from '../sections/MeetDoctor.jsx'
import MobileVisit from '../sections/MobileVisit.jsx'
import Press from '../sections/Press.jsx'
import RightPlace from '../sections/RightPlace.jsx'
import ServicesDark from '../sections/ServicesDark.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Timeline from '../sections/Timeline.jsx'

// Sections follow the order of the Kör Body website copy doc (the "yes ladder").
function Home() {
  return (
    <>
      <Hero />
      <Press />
      <RightPlace />
      <MeetDoctor />
      <Approach />
      <Timeline />
      <MobileVisit />
      <ServicesDark />
      <Investment />
      <Credentials />
      <Testimonials />
      <FaqSection />
      <JournalSection />
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
