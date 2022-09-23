import React, { useState } from 'react'
import Form from './Form'
import OpenMic from './OpenMics'

const Register = ({ inputs, setInputs }) => {
  const [displayAddForm, setDisplayAddForm] = useState(false)
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false)

  console.log(inputs)
  return (
    <>
      <OpenMic
        inputs={inputs}
        setInputs={setInputs}
        displayAddForm={displayAddForm}
        setDisplayAddForm={setDisplayAddForm}
        displayUpdateForm={displayUpdateForm}
        setDisplayUpdateForm={setDisplayUpdateForm}
      />
      <button onClick={() => setDisplayAddForm(true)}>Add New Open Mic</button>
      {displayAddForm && (
        <Form
          inputs={inputs}
          setInputs={setInputs}
          displayAddForm={displayAddForm}
          setDisplayAddForm={setDisplayAddForm}
          displayUpdateForm={displayUpdateForm}
          setDisplayUpdateForm={setDisplayUpdateForm}
        />
      )}
    </>
  )
}

export default Register
