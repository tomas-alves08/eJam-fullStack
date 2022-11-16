import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import ContextHook from '../useContext/context-hook'

import Nav from './Nav'
import Home from './Home'
import AuthForm from './AuthForm'
import Contact from './Contact'
import Register from './Register'
import OpenMics from './OpenMics'
import OpenMic from './OpenMic'
import Footer from './Footer'
import Update from './Update'

import { fetchOpenMics } from '../actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOpenMics())
  }, [])

  return (
    <>
      <Nav />

      <ContextHook.Provider value={{}}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/signin'} element={<AuthForm />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/search'} element={<OpenMics />} />
          <Route path="openMics/:openMicId" element={<OpenMic />} />
          <Route path="openMics/:openMicId/update" element={<Update />} />
        </Routes>
      </ContextHook.Provider>
      <Footer />
    </>
  )
}

export default App
