import React, { useState, useEffect } from 'react'
import Form from './Form'
import OpenMic from './OpenMics'

import { useSelector } from 'react-redux'

const Register = () => {
  const [displayAddForm, setDisplayAddForm] = useState(false)
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false)

  const newOpenMic = useSelector((state) => state.openMicRed)

  useEffect(() => {
    setDisplayAddForm(false)
  }, [newOpenMic])

  return (
    <>
      <Form />
    </>
  )
}

export default Register
