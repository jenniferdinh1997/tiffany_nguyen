import './JournalHero.css'

// Full-bleed journal banner. Add a photo at public/images/journal.jpg to replace the gradient.
interface JournalHeroProps {
  /** Use "h1" when the banner is the page title, "h2" when it is a section. */
  as?: 'h1' | 'h2'
}

function JournalHero({ as: Heading = 'h2' }: JournalHeroProps) {
  return (
    <section className="journal-hero">
      <p className="journal-hero__eyebrow">The Kör Journal</p>
      <Heading className="journal-hero__title">Journal</Heading>
      <p className="journal-hero__text">
        Things worth knowing about your body: movement, recovery, chiropractic care, strength,
        mobility, wellness, and the things I wish more people knew.
      </p>
    </section>
  )
}

export default JournalHero
