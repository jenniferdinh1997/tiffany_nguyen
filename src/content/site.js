// Shared copy and settings used across multiple pages.
// Edit the words here and every page that uses them updates.

// Where every "Book" button goes. Swap for your online booking link (e.g. Jane) when ready.
export const BOOKING_URL = '/contact#book'

// Link for "Read the feature" buttons. Swap for the VoyageLA article URL.
export const FEATURE_URL = '/journal'

// Link for "Read more reviews" (e.g. your Google reviews page). The button stays hidden until set.
export const REVIEWS_URL = null

export const INSTAGRAM_HANDLE = 'thechiropractiff'

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'What I Treat', to: '/what-i-treat' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Journal', to: '/journal' },
]

export const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'What I Treat', to: '/what-i-treat' },
  { label: 'Journal', to: '/journal' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export const conditions = [
  'Back pain',
  'Neck pain',
  'Shoulder pain',
  'Hip pain',
  'Knee pain',
  'Sciatica',
  'Disc-related conditions',
  'Headaches & migraines',
  'Muscle tension',
  'Mobility restrictions',
  'Sports injuries',
  'Ankle sprains & strains',
  "Tennis & golfer's elbow",
  'Carpal tunnel',
  'Osteoarthritis',
  'Prenatal & postpartum care',
  'Recovery & rehabilitation',
]

export const firstVisitSteps = [
  {
    number: '01',
    name: 'Connect',
    title: 'First, we talk.',
    text: "Your history. Your symptoms. Your goals. What you've tried. What you're hoping to get back to.",
  },
  {
    number: '02',
    name: 'Clarity',
    title: 'Then, we assess.',
    text: "I'll look at the bigger picture — not just the area that hurts — so we can better understand what's contributing to what you're experiencing.",
  },
  {
    number: '03',
    name: 'Cultivate',
    title: "We'll create a plan together.",
    text: "I'll explain what I'm finding, what I'm recommending, and why.",
  },
  {
    number: '04',
    name: 'Restore',
    title: 'Then we get to work.',
    text: 'Your treatment may include hands-on chiropractic care, soft tissue work, cupping, muscle scraping, or other appropriate techniques.',
  },
  {
    number: '05',
    name: 'Transform',
    title: 'And we build from there.',
    text: "When appropriate, we'll incorporate mobility, strengthening, and movement strategies so you can keep progressing outside of your appointment.",
  },
]

export const credentials = [
  { title: 'Doctor of Chiropractic', detail: 'Dr. Tiffany Nguyen, DC' },
  { title: 'Webster Technique' },
  { title: 'Functional Range Conditioning' },
  // TODO: add other certifications once finalized.
]

// TODO: replace with approved patient testimonials.
export const testimonials = [
  { quote: '[Approved patient testimonial]', author: 'Patient / Initials' },
  { quote: '[Approved patient testimonial]', author: 'Patient / Initials' },
  { quote: '[Approved patient testimonial]', author: 'Patient / Initials' },
]

export const faqs = [
  {
    question: 'Do I need a referral?',
    answer:
      "You can reach out directly to inquire about care. If I feel like you need imaging, additional evaluation, or another type of provider, I'll let you know.",
  },
  {
    question: 'What should I wear?',
    answer:
      "Whatever you can comfortably move in. Workout clothes are great, but you don't need to show up dressed like you're headed to the gym.",
  },
  {
    question: 'Do you only do adjustments?',
    answer:
      'Nope. Depending on what you need, treatment may include chiropractic adjustments, extensive soft tissue work, cupping, muscle scraping, manual therapy, mobility work, and corrective exercise.',
  },
  {
    question: 'Will I be adjusted on my first visit?',
    answer: "Not necessarily. We'll assess first and talk through what's appropriate for you.",
  },
  {
    question: 'How long is an appointment?',
    answer: 'Appointments are approximately 60 minutes.',
  },
  {
    question: 'Do I have to keep coming forever?',
    answer:
      'No. My goal is to help you understand your body and become more confident in taking care of it. We’ll reassess your progress and make decisions about ongoing care together.',
  },
  {
    question: 'Do you work with athletes?',
    answer:
      "Absolutely. But you don't have to be an athlete to work with me. Whether you're training five days a week or you've never stepped foot in a gym, your care starts where you are.",
  },
  {
    question: 'Do you see pregnant patients?',
    answer:
      "Yes. I'm trained in the Webster Technique and can provide individualized prenatal chiropractic care when appropriate.",
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Kör is a private-pay practice. If you have out-of-network benefits, you may request documentation to submit to your insurance carrier. Coverage and reimbursement depend on your individual plan.',
  },
]

// Extra questions shown only on the full FAQ page.
export const extraFaqs = [
  {
    question: "I'm not active at all. Can I still come?",
    answer:
      "Absolutely. You don't need to be strong, flexible, athletic, or experienced with exercise. Everyone starts somewhere.",
  },
  {
    question: 'Where do you travel?',
    answer: 'Orange County, California. Availability varies by location.',
  },
]

export const articles = [
  {
    title: 'Why does my pain keep coming back?',
    teaser: "Sometimes the painful area isn't the whole story.",
  },
  {
    title: 'What actually happens during a chiropractic adjustment?',
    teaser: "Let's take the mystery out of chiropractic care.",
  },
  {
    title: "You don't have to be an athlete to start strength training",
    teaser: 'Everyone starts somewhere.',
  },
  {
    title: 'What should I expect from a mobile chiropractic visit?',
    teaser: 'No waiting room required.',
  },
]
