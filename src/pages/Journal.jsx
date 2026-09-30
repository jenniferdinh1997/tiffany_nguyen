import ArticleGrid from '../components/ArticleGrid.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import JournalHero from '../components/JournalHero.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'

function Journal() {
  return (
    <>
      <JournalHero as="h1" />

      <section className="section journal-list">
        <div className="journal">
          <FeatureCard>
            A deeper look at the experiences, education, and perspective behind the chiropractor
            you&rsquo;ll meet at Kör.
          </FeatureCard>
          <ArticleGrid />
        </div>
      </section>

      <NewsletterSignup />
    </>
  )
}

export default Journal
