import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOneOpenMicAPI, deleteOpenMicAPI } from '../api'

import Form from './Form'

const OpenMic = ({ inputs }) => {
  const [foundOpenMic, setFoundOpenMic] = useState({})
  const [displayUpdate, setDisplayUpdate] = useState(false)
  const { openMicId } = useParams()
  const navigate = useNavigate()

  console.log('inputs: ', inputs)
  console.log('openMic ID: ', openMicId)

  const handleLoadOpenMic = async () => {
    const selectedOpenMic = await getOneOpenMicAPI(openMicId)
    setFoundOpenMic(selectedOpenMic)
  }

  const handleDelete = async (id) => {
    const openMicArr = await deleteOpenMicAPI(id)
    // setDisplayFoundMic(openMicArr)
    alert('Open Deleted')
    navigate('/register')
  }

  const handleUpdate = async (id) => {
    setDisplayUpdate(true)
  }

  useEffect(() => {
    handleLoadOpenMic()
  }, [])

  return (
    <>
      {foundOpenMic !== null && <h2>{foundOpenMic?.venue}</h2>}
      {foundOpenMic !== null && <h3>City: {foundOpenMic?.city}</h3>}
      {foundOpenMic !== null && <h3>Day: {foundOpenMic?.day}</h3>}
      {foundOpenMic !== null && (
        <p>
          From: {foundOpenMic?.start_time} To: {foundOpenMic?.finish_time}
        </p>
      )}
      {foundOpenMic?.instrument_one !== null && (
        <p>
          Available Instruments: {foundOpenMic?.instrument_one}
          {foundOpenMic?.instrument_two && `, ${foundOpenMic.instrument_two}`}
          {foundOpenMic?.instrument_three &&
            `, ${foundOpenMic.instrument_three}`}
          {foundOpenMic?.instrument_four && `, ${foundOpenMic.instrument_four}`}
          {foundOpenMic?.instrument_five && `, ${foundOpenMic.instrument_five}`}
          {foundOpenMic?.instrument_six && `, ${foundOpenMic.instrument_six}`}
        </p>
      )}
      <div>
        {foundOpenMic !== null && (
          <button onClick={handleUpdate}>Update</button>
        )}
        {foundOpenMic !== null && (
          <button onClick={() => handleDelete(foundOpenMic?.id)}>Delete</button>
        )}
      </div>
      <div>{displayUpdate && <Form />}</div>
    </>
  )
}

export default OpenMic
