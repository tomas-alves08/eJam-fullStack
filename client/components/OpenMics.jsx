import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getOpenMicsAPI } from '../api'

const OpenMics = ({ inputs }) => {
  const [displayOpenMic, setDisplayOpenMic] = useState([])

  console.log(inputs)

  const handleLoad = async () => {
    const openMicsArr = await getOpenMicsAPI()
    setDisplayOpenMic([...openMicsArr, inputs])
  }

  useEffect(() => {
    handleLoad()
  }, [inputs])

  return (
    <>
      <h1>Open Mics</h1>
      {displayOpenMic?.map((openMic) => (
        <>
          {openMic?.venue && (
            <Link to={`/openMics/${openMic?.id}`}>
              <h2 key={openMic?.id}>{openMic?.venue}</h2>
            </Link>
          )}
          {openMic?.city && <p>City: {openMic?.city}</p>}
          {openMic?.day && <p>Day: {openMic?.day}</p>}
        </>
      ))}
    </>
  )
}

export default OpenMics
