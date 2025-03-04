import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './assets/Navbar.jsx'
import Footer from './assets/Footer.jsx'
import Products from './assets/Products.jsx'
import Frame from './assets/Frame.jsx'
import Detail from './assets/Detail.jsx'
import Begin from './assets/Begin.jsx'
import Savat from './assets/Savat.jsx'
import CartListProvider from './assets/Context/Cartlist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartListProvider>
      <BrowserRouter>
        <Navbar />
        <Frame />
        <Routes>
          <Route path="/" element={<Begin />} />
          <Route path='/product+categories' element={<Products />} />
          <Route path='/Product_detail/:id' element={<Detail />} />
          <Route path='/Savat' element={<Savat />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartListProvider>
  </StrictMode>,
)
