import ArticleGrid from '../components/ArticleGrid.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import NewsletterSignup from '../components/NewsletterSignup.jsx'
import PageHeader from '../components/PageHeader.jsx'

function Journal() {
  return (
    <>
      <PageHeader eyebrow="The Kör Journal" title="Things worth knowing about your body.">
        <p>
          Movement, recovery, chiropractic care, strength, mobility, wellness, and the things I wish
          more people knew about their bodies.
        </p>
      </PageHeader>

      <section className="section section--sand">
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
