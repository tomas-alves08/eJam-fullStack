import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import OpenMic from './OpenMic'
import Update from './Update'

function App() {
  const [inputs, setInputs] = useState([])
  // const [updateId, setUpdateId] = useState('')

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
            element={
              <Register
                inputs={inputs}
                setInputs={setInputs}
                // setUpdateId={setUpdateId}
              />
            }
          />
          <Route path={'/search'} element={<OpenMic />} />
          <Route
            path={'/update'}
            element={<Update inputs={inputs} setInputs={setInputs} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
