import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getOpenMicsAPI } from '../api'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOpenMics, showUpdate } from '../actions'

const OpenMics = () => {
  const openMicArr = useSelector((state) => state.searchReducer)
  const dispatch = useDispatch()

  console.log('selector: ', openMicArr)

  const handleLoad = async () => {
    dispatch(fetchOpenMics())
    dispatch(showUpdate(false, ''))
  }

  useEffect(() => {
    handleLoad()
  }, [openMicArr])

  return (
    <>
      <div className="openMics-container">
        {openMicArr && (
          <p className="openMic-title">
            Open Mics Found in {openMicArr[0]?.city}
          </p>
        )}
        {openMicArr && (
          <div>
            {openMicArr?.map((openMic) => (
              <div className="openMic-card">
                {openMic?.venue && (
                  <Link to={`/openMics/${openMic?.id}`}>
                    <h2 key={openMic?.id}>{openMic?.venue}</h2>
                  </Link>
                )}
                <div>
                  {openMic?.city && (
                    <p className="openMic-city">City: {openMic?.city}</p>
                  )}
                  {openMic?.day && (
                    <p className="openMic-day">Day: {openMic?.day}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default OpenMics
