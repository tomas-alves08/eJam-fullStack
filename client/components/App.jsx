import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import OpenMics from './OpenMics'
import OpenMic from './OpenMic'

function App() {
  const [inputs, setInputs] = useState([])

  return (
    <>
      <Nav />

      <div>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route
            path={'/register'}
            element={<Register inputs={inputs} setInputs={setInputs} />}
          />
          <Route path={'/search'} element={<OpenMics />} />
          <Route
            path="openMics/:openMicId"
            element={<OpenMic inputs={inputs} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
