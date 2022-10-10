import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getOpenMicsAPI } from '../api'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOpenMics, showUpdate } from '../actions'

const OpenMics = () => {
  const searchData = useSelector((state) => state.searchReducer)
  const dispatch = useDispatch()

  console.log('selector: ', searchData.city)
  const city = searchData.city

  const openMicArr = searchData.foundData
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
        {city?.length > 0 && openMicArr.length > 0 ? (
          <p className="openMic-title">Open Mics Found in {city}</p>
        ) : (
          city && <p className="openMic-title">No Open Mic Found in {city}</p>
        )}
        {city === ''
          ? null
          : openMicArr && (
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
