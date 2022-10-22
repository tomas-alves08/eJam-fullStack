import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Form from './Form'

const Update = () => {
  const displayUpdate = useSelector((state) => state.updateReducer)
  const updatedOpenMic = useSelector((state) => state.oneOpenMicRed)
  const token = useSelector((state) => state.authReducer)

  // Authorization
  const [authorization, setAuthorization] = useState(false)

  const authorize = () => {
    if (updatedOpenMic?.auth_token === token) setAuthorization(true)
  }

  useEffect(() => {
    authorize()
  }, [updatedOpenMic])

  console.log(displayUpdate)
  return (
    <div className="update-page-container">
      {authorization && (
        <>
          <p className="register-title">
            Update {updatedOpenMic?.venue} OpenMic's details
          </p>

          <div className="openmic-page-form">
            {displayUpdate.status && <Form />}
          </div>
        </>
      )}
    </div>
  )
}

export default Update
