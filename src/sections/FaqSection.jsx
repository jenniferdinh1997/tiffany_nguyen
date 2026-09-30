import Button from '../components/Button.jsx'
import FaqList from '../components/FaqList.jsx'
import { faqs } from '../content/site.js'
import './FaqSection.css'

function FaqSection() {
  return (
    <section className="faq-section">
      <div className="faq-section__intro">
        <h2 className="faq-section__title">Questions, answered.</h2>
        <div className="faq-section__bottom">
          <p>Not sure if Kör is the right fit? Here are the things people ask most.</p>
          <Button to="/contact#question" variant="outline">
            Ask a question
          </Button>
        </div>
      </div>
      <FaqList items={faqs} />
    </section>
  )
}

export default FaqSection
