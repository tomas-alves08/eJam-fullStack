import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import OpenMic from './OpenMic'
import Update from './Update'

function App() {
  return (
    <>
      <Nav />

      <div>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/search'} element={<OpenMic />} />
          <Route path={'/update'} element={<Update />} />
        </Routes>
      </div>
    </>
  )
}

export default App
