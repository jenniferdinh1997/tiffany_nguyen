import ArticleGrid from '../components/ArticleGrid.jsx'
import Button from '../components/Button.jsx'
import JournalHero from '../components/JournalHero.jsx'

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
