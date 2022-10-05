import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import OpenMics from './OpenMics'
import OpenMic from './OpenMic'

import { fetchOpenMics } from '../actions'

function App() {
  const [inputs, setInputs] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOpenMics())
  }, [])

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
