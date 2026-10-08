import type { Faq } from '../../content/site'
import './FaqList.css'

interface FaqListProps {
  items: Faq[]
}

function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={item.question} className="faq__item" open={i === 0}>
          <summary className="faq__question">{item.question}</summary>
          <p className="faq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqList
