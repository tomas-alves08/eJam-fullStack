import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { showUpdate, removeOpenMic } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

import Form from './Form'

const OpenMic = ({ inputs }) => {
  const [foundOpenMic, setFoundOpenMic] = useState(null)
  const [displayOpenMic, setDisplayOpenMic] = useState(false)
  // const [displayUpdate, setDisplayUpdate] = useState(false)
  const { openMicId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const displayUpdate = useSelector((state) => state.updateReducer)

  console.log('displayUpdate: ', displayUpdate)
  const openMicArr = useSelector((state) => state.openMicRed)

  const handleLoadOpenMic = async () => {
    const selectedOpenMic = openMicArr.find(
      (openMic) => openMic.id == openMicId
    )
    setFoundOpenMic(selectedOpenMic)

    if (selectedOpenMic !== '') setDisplayOpenMic(true)
  }

  const handleDelete = async (id) => {
    dispatch(removeOpenMic(openMicId))
    alert('Open Deleted')
    navigate('/register')
  }

  const handleUpdate = async (status, id) => {
    console.log('Open Mic Id: ', openMicId)
    // setDisplayUpdate(true)
    dispatch(showUpdate(true, openMicId))
    // navigate(`/openMics/${openMicId}`)
  }

  useEffect(() => {
    handleLoadOpenMic()
  }, [openMicArr])

  return (
    <>
      <div className="display-container">
        {foundOpenMic?.venue && <h2>{foundOpenMic?.venue}</h2>}
        {foundOpenMic?.city && <h3>City: {foundOpenMic?.city}</h3>}
        {foundOpenMic?.day && <h3>Day: {foundOpenMic?.day}</h3>}
        {foundOpenMic?.start_time && (
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
        <div>{displayUpdate.status && <Form />}</div>
      </div>
    </>
  )
}

export default OpenMic
