import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { showUpdate, removeOpenMic } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

import Form from './Form'

const OpenMic = () => {
  const [foundOpenMic, setFoundOpenMic] = useState(null)
  const [displayOpenMic, setDisplayOpenMic] = useState(false)

  const { openMicId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let displayUpdate = useSelector((state) => state.updateReducer)

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
    dispatch(showUpdate(true, openMicId))
  }

  useEffect(() => {
    handleLoadOpenMic()
  }, [openMicArr])

  return (
    <div>
      <div className="display-container">
        <div className="openmic-page">
          {foundOpenMic?.venue && (
            <p className="openmic-page-venue">{foundOpenMic?.venue}</p>
          )}

          {foundOpenMic?.city && foundOpenMic?.location && (
            <p className="openmic-page-info">
              Address: {foundOpenMic?.location} - {foundOpenMic?.city}
            </p>
          )}

          {foundOpenMic?.frequency === 'Weekly' ? (
            <p className="openmic-page-info">
              Every {foundOpenMic?.day} from {foundOpenMic?.start_time} to{' '}
              {foundOpenMic?.finish_time}
            </p>
          ) : foundOpenMic?.frequency === 'Fortnightly' ? (
            <p className="openmic-page-info">
              Every Second {foundOpenMic?.day} from {foundOpenMic?.start_time}{' '}
              to {foundOpenMic?.finish_time}
            </p>
          ) : foundOpenMic?.frequency === 'Monthly' ? (
            <p className="openmic-page-info">
              Every {foundOpenMic.week} {foundOpenMic?.day} from{' '}
              {foundOpenMic?.start_time} to {foundOpenMic?.finish_time}
            </p>
          ) : (
            foundOpenMic?.frequency === 'One-Off' && (
              <p className="openmic-page-info">
                Event will happen on {foundOpenMic?.date} from{' '}
                {foundOpenMic?.start_time} to {foundOpenMic?.finish_time}
              </p>
            )
          )}

          {foundOpenMic?.instrument_one !== null && (
            <p className="openmic-page-info">
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
              <button className="button" onClick={handleUpdate}>
                Update
              </button>
            )}
            {foundOpenMic !== null && (
              <button
                className="button"
                onClick={() => handleDelete(foundOpenMic?.id)}
              >
                Delete
              </button>
            )}
          </div>
          <div className="openmic-page-form">
            {displayUpdate.status && <Form />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenMic
