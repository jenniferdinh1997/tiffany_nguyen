import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Approach from './pages/Approach/Approach'
import Contact from './pages/Contact/Contact'
import Faq from './pages/Faq/Faq'
import Home from './pages/Home/Home'
import HowItWorks from './pages/HowItWorks/HowItWorks'
import Journal from './pages/Journal/Journal'
import MobileExperience from './pages/MobileExperience/MobileExperience'
import NotFound from './pages/NotFound/NotFound'
import Services from './pages/Services/Services'
import WhatITreat from './pages/WhatITreat/WhatITreat'

// Preview builds (VITE_HASH_ROUTER=1) use #/page links so they work on hosts without server rewrites.
const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what-i-treat" element={<WhatITreat />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="mobile-experience" element={<MobileExperience />} />
          <Route path="approach" element={<Approach />} />
          <Route path="faq" element={<Faq />} />
          <Route path="journal" element={<Journal />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
