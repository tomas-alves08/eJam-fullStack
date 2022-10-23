import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { showUpdate, removeOpenMic, fetchOneOpenMic } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'

const OpenMic = () => {
  const [authorization, setAuthorization] = useState(false)

  const { openMicId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // AUTH
  const [user, setUser] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const token = useSelector((state) => state.authReducer)

  // REDUX
  const openMicResp = useSelector((state) => state.openMicRed)

  let selectedOpenMic =
    openMicResp.length > 1
      ? openMicResp?.find((openMic) => openMic.id == openMicId)
      : openMicResp[0]

  // FUNCTIONS
  const handleDelete = async (id) => {
    dispatch(removeOpenMic(openMicId))
    alert('Open Deleted')
    navigate('/')
    navigate(0)
  }

  const handleUpdate = async (status, id) => {
    dispatch(fetchOneOpenMic(openMicId))
    dispatch(showUpdate(true, openMicId))

    navigate(`/openMics/${openMicId}/update`)
  }

  // USE EFFECT
  useEffect(() => {
    console.log('Selected OpenMic Auth: ', selectedOpenMic?.auth_token)
    console.log('Token: ', token)
    if (
      selectedOpenMic?.auth_token === token ||
      selectedOpenMic?.auth_token == user?.uid
    )
      setAuthorization(true)

    window.scrollTo(0, 0)
  }, [selectedOpenMic])

  return (
    <div>
      <div className="display-container">
        <div className="openmic-page">
          {selectedOpenMic?.venue && (
            <p className="openmic-page-venue">{selectedOpenMic?.venue}</p>
          )}

          {selectedOpenMic?.city && selectedOpenMic?.location && (
            <p className="openmic-page-info">
              Address: {selectedOpenMic?.location} - {selectedOpenMic?.city}
            </p>
          )}

          {selectedOpenMic?.frequency === 'Weekly' ? (
            <p className="openmic-page-info">
              Every {selectedOpenMic?.day} from {selectedOpenMic?.start_time} to{' '}
              {selectedOpenMic?.finish_time}
            </p>
          ) : selectedOpenMic?.frequency === 'Fortnightly' ? (
            <p className="openmic-page-info">
              Every Second {selectedOpenMic?.day} from{' '}
              {selectedOpenMic?.start_time} to {selectedOpenMic?.finish_time}
            </p>
          ) : selectedOpenMic?.frequency === 'Monthly' ? (
            <p className="openmic-page-info">
              Every {selectedOpenMic.week} {selectedOpenMic?.day} from{' '}
              {selectedOpenMic?.start_time} to {selectedOpenMic?.finish_time}
            </p>
          ) : (
            selectedOpenMic?.frequency === 'One-Off' && (
              <p className="openmic-page-info">
                Event will happen on {selectedOpenMic?.date} from{' '}
                {selectedOpenMic?.start_time} to {selectedOpenMic?.finish_time}
              </p>
            )
          )}

          {selectedOpenMic?.instrument_one !== null && (
            <p className="openmic-page-info">
              {`Available Instruments: ${selectedOpenMic?.instrument_one}`}
              {selectedOpenMic?.instrument_two &&
                `, ${selectedOpenMic.instrument_two}`}
              {selectedOpenMic?.instrument_three &&
                `, ${selectedOpenMic.instrument_three}`}
              {selectedOpenMic?.instrument_four &&
                `, ${selectedOpenMic.instrument_four}`}
              {selectedOpenMic?.instrument_five &&
                `, ${selectedOpenMic.instrument_five}`}
              {selectedOpenMic?.instrument_six &&
                `, ${selectedOpenMic.instrument_six}`}
            </p>
          )}

          {authorization && (
            <div>
              {selectedOpenMic !== null && (
                <button className="button" onClick={handleUpdate}>
                  Update
                </button>
              )}
              {selectedOpenMic !== null && (
                <button
                  className="button"
                  onClick={() => handleDelete(selectedOpenMic?.id)}
                >
                  Delete
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OpenMic
