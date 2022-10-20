import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Form from './Form'

const Update = () => {
  const displayUpdate = useSelector((state) => state.updateReducer)
  const updatedOpenMic = useSelector((state) => state.oneOpenMicRed)
  const token = useSelector((state) => state.authReducer)

  const id = useParams()

  console.log(updatedOpenMic)

  const openMicId = displayUpdate.id
  console.log('Update Id: ', openMicId)

  // Authorization
  const [authorization, setAuthorization] = useState(false)

  const authorize = () => {
    console.log('Open Mic AuthID: ', updatedOpenMic?.auth_token)
    console.log('Updated Token: ', token)
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
