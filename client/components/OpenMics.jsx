import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getOpenMicsAPI } from '../api'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOpenMics } from '../actions'

const OpenMics = ({ inputs }) => {
  // const [loadOpenMic, setLoadOpenMic] = useState([])
  const openMicArr = useSelector((state) => state.searchReducer)
  const dispatch = useDispatch()
  // const newOpenMic = useSelector((state) => state.addReducer)
  // console.log(newOpenMic)
  // setLoadOpenMic(newOpenMic)
  console.log('selector: ', openMicArr)
  console.log('inputs: ', inputs)

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
        <p className="openMic-title">
          Open Mics Found in {openMicArr[0]?.city}
        </p>
        <div className="openMic-card">
          {openMicArr?.map((openMic) => (
            <>
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
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default OpenMics
