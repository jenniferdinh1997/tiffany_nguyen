import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import JournalHero from '../../components/JournalHero/JournalHero'
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup'
import './Journal.css'

function Journal() {
  return (
    <>
      <JournalHero as="h1" />

      <section className="section journal-page__list">
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
