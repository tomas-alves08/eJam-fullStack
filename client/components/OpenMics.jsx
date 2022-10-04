import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getOpenMicsAPI } from '../api'
import { useSelector } from 'react-redux'

const OpenMics = ({ inputs }) => {
  const [displayOpenMic, setDisplayOpenMic] = useState([])
  const openMicArr = useSelector((state) => state.openMicRed)

  console.log('selector: ', openMicArr)
  console.log('inputs: ', inputs)

  // const handleLoad = async () => {
  //   const openMicsArr = await getOpenMicsAPI()
  //   setDisplayOpenMic([...openMicsArr, inputs])
  // }

  useEffect(() => {
    // handleLoad()
  }, [inputs])

  return (
    <>
      <h1>Open Mics</h1>
      {openMicArr?.map((openMic) => (
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
