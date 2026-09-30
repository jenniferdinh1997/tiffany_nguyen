import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Approach from './pages/Approach.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Journal from './pages/Journal.jsx'
import MobileExperience from './pages/MobileExperience.jsx'
import NotFound from './pages/NotFound.jsx'
import Services from './pages/Services.jsx'
import WhatITreat from './pages/WhatITreat.jsx'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
