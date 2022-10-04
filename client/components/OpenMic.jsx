import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOneOpenMicAPI, deleteOpenMicAPI } from '../api'
import { fetchOneOpenMic } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

import Form from './Form'

const OpenMic = ({ inputs }) => {
  const [foundOpenMic, setFoundOpenMic] = useState(null)
  const [displayOpenMic, setDisplayOpenMic] = useState(false)
  const [displayUpdate, setDisplayUpdate] = useState(false)
  const { openMicId } = useParams()
  const navigate = useNavigate()

  const openMicArr = useSelector((state) => state.openMicRed)
  // const dispatch = useDispatch()

  console.log('inputs: ', inputs)
  console.log('openMic ID: ', openMicId)
  console.log('OpenMic Array: ', openMicArr)
  console.log('Found Open Mic: ', foundOpenMic)

  const handleLoadOpenMic = async () => {
    // const selectedOpenMic = await getOneOpenMicAPI(openMicId)
    const selectedOpenMic = openMicArr.find(
      (openMic) => openMic.id === openMicId
    )
    console.log('Selected OpenMic: ', selectedOpenMic)
    setFoundOpenMic(selectedOpenMic)
    if (selectedOpenMic !== '') setDisplayOpenMic(true)
    console.log('Display OpenMic: ', displayOpenMic)
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
      {displayOpenMic === true && (
        <div className="display-container">
          {displayOpenMic == true && <h2>{foundOpenMic?.venue}</h2>}
          {displayOpenMic == true ? <h3>City: {foundOpenMic?.city}</h3> : null}
          {foundOpenMic !== null && <h3>Day: {foundOpenMic?.day}</h3>}
          {foundOpenMic !== null && (
            <p>
              From: {foundOpenMic?.start_time} To: {foundOpenMic?.finish_time}
            </p>
          )}
          {foundOpenMic?.instrument_one !== null && (
            <p>
              {`Available Instruments: ${foundOpenMic?.instrument_one}`}
              {foundOpenMic?.instrument_two &&
                `, ${foundOpenMic.instrument_two}`}
              {foundOpenMic?.instrument_three &&
                `, ${foundOpenMic.instrument_three}`}
              {foundOpenMic?.instrument_four &&
                `, ${foundOpenMic.instrument_four}`}
              {foundOpenMic?.instrument_five &&
                `, ${foundOpenMic.instrument_five}`}
              {foundOpenMic?.instrument_six &&
                `, ${foundOpenMic.instrument_six}`}
            </p>
          )}
          <div>
            {foundOpenMic !== null && (
              <button onClick={handleUpdate}>Update</button>
            )}
            {foundOpenMic !== null && (
              <button onClick={() => handleDelete(foundOpenMic?.id)}>
                Delete
              </button>
            )}
          </div>
          <div>{displayUpdate && <Form />}</div>
        </div>
      )}
    </>
  )
}

export default OpenMic
