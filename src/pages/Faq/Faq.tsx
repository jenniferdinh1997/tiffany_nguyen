import FaqList from '../../components/FaqList/FaqList'
import FinalCta from '../../components/FinalCta/FinalCta'
import PageHeader from '../../components/PageHeader/PageHeader'
import { extraFaqs, faqs } from '../../content/site'
import './Faq.css'

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
