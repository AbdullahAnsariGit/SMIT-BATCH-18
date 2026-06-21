import React from 'react'
import Home from './screens/Home'
import Contact from './screens/Contact'
import Blog from './screens/Blog'
import Service from './screens/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './screens/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Service />} />
        <Route path='courses' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App