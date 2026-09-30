import FaqList from '../components/FaqList.jsx'
import FinalCta from '../components/FinalCta.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { extraFaqs, faqs } from '../content/site.js'

function Faq() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions, answered." />

      <section className="section">
        <FaqList items={[...faqs, ...extraFaqs]} />
      </section>

      <FinalCta>
        <p>You don&rsquo;t need to know exactly what&rsquo;s wrong before reaching out.</p>
        <p>We&rsquo;ll take it from there.</p>
      </FinalCta>
    </>
  )
}

export default Faq
