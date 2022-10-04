import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { getOneOpenMicAPI, deleteOpenMicAPI } from '../api'
import { removeOpenMic } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

import Form from './Form'

const OpenMic = ({ inputs }) => {
  const [foundOpenMic, setFoundOpenMic] = useState(null)
  const [displayOpenMic, setDisplayOpenMic] = useState(false)
  const [displayUpdate, setDisplayUpdate] = useState(false)
  const { openMicId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openMicArr = useSelector((state) => state.openMicRed)

  const handleLoadOpenMic = async () => {
    const selectedOpenMic = openMicArr.find(
      (openMic) => openMic.id == openMicId
    )
    setFoundOpenMic(selectedOpenMic)

    if (selectedOpenMic !== '') setDisplayOpenMic(true)
  }

  const handleDelete = async (id) => {
    // const openMicArr = await deleteOpenMicAPI(id)
    // setDisplayFoundMic(openMicArr)
    dispatch(removeOpenMic(openMicId))
    alert('Open Deleted')
    navigate('/register')
  }

  const handleUpdate = async (id) => {
    setDisplayUpdate(true)
  }

  useEffect(() => {
    handleLoadOpenMic()
  }, [openMicArr])

  return (
    <>
      <div className="display-container">
        {displayOpenMic && <h2>{foundOpenMic?.venue}</h2>}
        {displayOpenMic && <h3>City: {foundOpenMic?.city}</h3>}
        {displayOpenMic && <h3>Day: {foundOpenMic?.day}</h3>}
        {displayOpenMic && (
          <p>
            From: {foundOpenMic?.start_time} To: {foundOpenMic?.finish_time}
          </p>
        )}
        {foundOpenMic?.instrument_one !== null && (
          <p>
            {`Available Instruments: ${foundOpenMic?.instrument_one}`}
            {foundOpenMic?.instrument_two && `, ${foundOpenMic.instrument_two}`}
            {foundOpenMic?.instrument_three &&
              `, ${foundOpenMic.instrument_three}`}
            {foundOpenMic?.instrument_four &&
              `, ${foundOpenMic.instrument_four}`}
            {foundOpenMic?.instrument_five &&
              `, ${foundOpenMic.instrument_five}`}
            {foundOpenMic?.instrument_six && `, ${foundOpenMic.instrument_six}`}
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
    </>
  )
}

export default OpenMic
