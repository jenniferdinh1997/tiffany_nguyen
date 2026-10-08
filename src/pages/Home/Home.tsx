import FinalCta from '../../components/FinalCta/FinalCta'
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup'
import Approach from '../../sections/Approach/Approach'
import Credentials from '../../sections/Credentials/Credentials'
import FaqSection from '../../sections/FaqSection/FaqSection'
import Hero from '../../sections/Hero/Hero'
import Investment from '../../sections/Investment/Investment'
import JournalSection from '../../sections/JournalSection/JournalSection'
import MeetDoctor from '../../sections/MeetDoctor/MeetDoctor'
import MobileVisit from '../../sections/MobileVisit/MobileVisit'
import Press from '../../sections/Press/Press'
import RightPlace from '../../sections/RightPlace/RightPlace'
import ServicesDark from '../../sections/ServicesDark/ServicesDark'
import Testimonials from '../../sections/Testimonials/Testimonials'
import Timeline from '../../sections/Timeline/Timeline'
import './Home.css'

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
