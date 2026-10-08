import ArticleGrid from '../../components/ArticleGrid/ArticleGrid'
import Button from '../../components/Button/Button'
import JournalHero from '../../components/JournalHero/JournalHero'
import './JournalSection.css'

function JournalSection() {
  return (
    <>
      <JournalHero />
      <section className="section journal-list">
        <ArticleGrid />
        <div className="journal-list__more">
          <Button to="/journal" variant="outline">
            View articles
          </Button>
        </div>
      </section>
    </>
  )
}

export default JournalSection
