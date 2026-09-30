import './FaqList.css'

function FaqList({ items }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.question} className="faq__item">
          <summary className="faq__question">{item.question}</summary>
          <p className="faq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqList
