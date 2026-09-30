import FinalCta from '../components/FinalCta.jsx'
import PageHeader from '../components/PageHeader.jsx'
import StepList from '../components/StepList.jsx'

const steps = [
  {
    number: '01',
    name: 'Connect',
    title: 'We talk first.',
    text: "What's going on? What have you tried? What do you want to get back to?",
  },
  {
    number: '02',
    name: 'Clarity',
    title: 'Then we assess.',
    text: "We'll look beyond the painful area and consider the bigger picture.",
  },
  {
    number: '03',
    name: 'Cultivate',
    title: 'We build your plan together.',
    text: "I'll explain what I'm finding, what I'm recommending, and why.",
  },
  {
    number: '04',
    name: 'Restore',
    title: 'Then we get to work.',
    text: 'Hands-on care is tailored to what your body needs.',
  },
  {
    number: '05',
    name: 'Transform',
    title: 'Then we build what comes next.',
    text: 'Mobility and strengthening strategies can help you continue progressing outside of the appointment.',
  },
]

function HowItWorks() {
  return (
    <>
      <PageHeader eyebrow="How it works · Your first visit" title="Nothing I do is random.">
        <p>Every step exists for a reason.</p>
      </PageHeader>

      <section className="section">
        <StepList steps={steps} />
      </section>

      <FinalCta>
        <p className="pull-quote">You don&rsquo;t have to figure it out alone.</p>
      </FinalCta>
    </>
  )
}

export default HowItWorks
