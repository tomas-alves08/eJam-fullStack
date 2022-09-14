import React, { useState } from 'react'
import Form from './Form'
import OpenMic from './OpenMic'

const Register = () => {
  const [inputs, setInputs] = useState([])

  console.log(inputs)
  return (
    <>
      <Form inputs={inputs} setInputs={setInputs} />
      <OpenMic />
    </>
  )
}

export default Register
