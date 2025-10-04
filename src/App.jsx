import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './Components/HomeMain'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import About from './Pages/About'
import Conatct from './Pages/Conatct'
import BlogHeader from './Pages/BlogHeader'
import BlogDetailHeader from './Pages/BlogDetailHeader'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/blogs" element={<BlogHeader />} />
        <Route path="/blog/:id" element={<BlogDetailHeader />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
