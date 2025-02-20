import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './assets/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './assets/About.jsx'
import Footer from './assets/footer.jsx'
import Section from './assets/Section.jsx'
import Contact from './assets/Contact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />


    </BrowserRouter>

  </StrictMode>,
)
