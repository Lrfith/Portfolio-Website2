import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/routes/Home'
import { Route, Routes, Router } from 'react-router-dom'
import Skills from './assets/routes/Skills'
import Projects from './assets/routes/Projects'
import Contact from './assets/routes/Contact'
import Certificates from './assets/routes/Certificates'

const App = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col bg-gray-50'>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App