import React from 'react'
import { useSelector } from 'react-redux'

import Form from './Form'

const Update = () => {
  const displayUpdate = useSelector((state) => state.updateReducer)
  const updatedOpenMic = useSelector((state) => state.openMicRed)

  const openMicId = displayUpdate.id
  console.log('Update Id: ', openMicId)

  // console.log('Updated OpenMic Id: ', openMicId)
  // console.log('Update OpenMicArr: ', openMicArr)
  // const selectedOpenMic = openMicArr.find((openMic) => openMic.id == openMicId)

  // console.log('Updated OpenMic: ', selectedOpenMic)
  // console.log(openMicArr)

  console.log(displayUpdate)
  return (
    <div className="update-page-container">
      <p className="register-title">
        Update {updatedOpenMic?.venue} OpenMic's details
      </p>

      <div className="openmic-page-form">
        {displayUpdate.status && <Form />}
      </div>
    </div>
  )
}

export default Update
