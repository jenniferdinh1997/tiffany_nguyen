import FinalCta from '../../components/FinalCta/FinalCta'
import PageHeader from '../../components/PageHeader/PageHeader'
import Photo from '../../components/Photo/Photo'
import './About.css'

const chapters = [
  {
    eyebrow: 'Where it started',
    title: 'Meet Dr. Tiffany',
    body: [
      'My path to chiropractic started with my dad.',
      'Watching someone I loved experience chronic pain made me want to understand the body differently and figure out how I could help.',
      'That curiosity eventually led me to chiropractic school.',
      'I thought I was going to school to learn how to help other people.',
      "I didn't realize how much I would learn about my own body along the way.",
    ],
  },
  {
    title: 'Then I became the beginner.',
    body: [
      "I didn't walk into chiropractic school with years of athletic experience.",
      "I wasn't naturally strong.",
      'I was new to strength training and movement, and I was learning from the ground up.',
      'At the same time, I dealt with my own daily aches and pain.',
      'Being a beginner was humbling.',
      "There were moments when I felt underestimated or overlooked because I was small, because I was a woman, and because I didn't have the athletic background that seemed so common around me.",
      'But eventually, I realized something:',
      "Most people aren't experts either.",
    ],
  },
  {
    title: 'Most people are just trying to figure it out.',
    body: [
      "Most people aren't professional athletes.",
      "Most people don't know how to strength train.",
      "Most people aren't naturally confident in their bodies.",
      "And most people don't walk into a chiropractic office knowing exactly what their body needs.",
      "I know what it's like to be the person who doesn't feel like they belong in the room.",
      'So I wanted to become the person who makes that room feel a little more welcoming.',
    ],
  },
  {
    title: 'I started building my own strength.',
    body: [
      'I started strength training.',
      'I learned how to move.',
      'I learned what it felt like to be uncomfortable and unsure.',
      'I learned what it felt like to start from basically zero and slowly become stronger.',
      'And the more I learned about my own body, the more I understood the people who would eventually sit across from me.',
      "You don't have to already be strong to start.",
      "You don't have to already know what you're doing.",
      'You just have to start somewhere.',
    ],
  },
  {
    title: 'Seven offices. A lot of learning.',
    body: [
      'During my training, I had the opportunity to intern in seven different chiropractic offices.',
      'Each experience showed me something different: different techniques, different doctors, different patient populations, different ways of thinking about care.',
      'I took pieces from each experience and started forming my own philosophy:',
      "Good care isn't about making everyone fit the same mold.",
      "It's about understanding the person in front of you.",
    ],
  },
  {
    title: "That's the chiropractor I wanted to become.",
    body: [
      "I don't expect my patients to know how to move.",
      "I don't expect you to understand anatomy.",
      "I don't expect you to be athletic.",
      "I don't expect you to walk in knowing exactly what's wrong.",
      "That's my job.",
      "My job is to meet you where you are, understand what's happening, explain it in a way that makes sense, and help you build from there.",
    ],
  },
]

function About() {
  return (
    <>
      <PageHeader eyebrow="Meet your chiropractor" title="I wasn’t the athlete in the room.">
        <p>I didn&rsquo;t grow up playing sports.</p>
        <p>I wasn&rsquo;t the strongest person in the room.</p>
        <p>
          And when I entered chiropractic school, I definitely didn&rsquo;t feel like I fit the mold
          of what a chiropractor was &ldquo;supposed&rdquo; to look like.
        </p>
        <p>
          But that ended up becoming one of the most important parts of becoming the chiropractor I
          am today.
        </p>
      </PageHeader>

      <section className="section section--tight">
        <Photo label="Photo: Dr. Tiffany" className="about__photo" />
      </section>

      {chapters.map((chapter, i) => (
        <section key={chapter.title} className={`section${i % 2 === 0 ? ' section--sand' : ''}`}>
          <div className="split split--top">
            <div>
              {chapter.eyebrow && <p className="eyebrow">{chapter.eyebrow}</p>}
              <h2 className="heading">{chapter.title}</h2>
            </div>
            <div className="prose prose--lead">
              {chapter.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--ink">
        <h2 className="heading about__belong">Everyone starts somewhere.</h2>
        <div className="prose prose--lead">
          <p>Whether you&rsquo;re an athlete trying to perform better&hellip;</p>
          <p>Someone returning to exercise&hellip;</p>
          <p>Someone who spends most of their day at a desk&hellip;</p>
          <p>Someone who&rsquo;s been dealing with pain for years&hellip;</p>
          <p>Or someone who has never considered themselves &ldquo;active&rdquo; at all&hellip;</p>
          <p className="pull-quote">You belong here.</p>
          <p>You deserve to feel capable in your body.</p>
          <p>And that&rsquo;s what I want to help you build.</p>
        </div>
      </section>

      <section className="section">
        <div className="split split--top">
          <div>
            <p className="eyebrow">Why Kör</p>
            <h2 className="heading">Kör was created around that belief.</h2>
          </div>
          <div className="prose prose--lead">
            <p className="pull-quote">
              Care should meet you where you are, not where someone thinks you should be.
            </p>
            <p>
              That&rsquo;s why my approach combines chiropractic care with extensive hands-on soft
              tissue work, movement, mobility, and strengthening strategies when appropriate.
            </p>
            <p>Not because everyone needs to become an athlete.</p>
            <p>Because everyone deserves to become more capable in their own body.</p>
          </div>
        </div>
      </section>

      <FinalCta>
        <p>You don&rsquo;t need to know exactly what&rsquo;s wrong before reaching out.</p>
        <p>We&rsquo;ll take it from there.</p>
      </FinalCta>
    </>
  )
}

export default About
