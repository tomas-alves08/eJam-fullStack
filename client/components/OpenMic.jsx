import React, { useState, useEffect } from 'react'
import { getOpenMicsAPI, deleteOpenMicAPI } from '../api'
import { Link } from 'react-router-dom'

import Form from './Form'

const OpenMic = ({ inputs }) => {
  const [displayOpenMic, setDisplayOpenMic] = useState([])

  console.log(inputs)

  const handleLoad = async () => {
    const openMicsArr = await getOpenMicsAPI()
    setDisplayOpenMic([...openMicsArr, inputs])
  }

  const handleDelete = async (id) => {
    const openMicArr = await deleteOpenMicAPI(id)
    setDisplayOpenMic(openMicArr)
  }

  const handleUpdate = async (id) => {
    console.log(id)
  }

  useEffect(() => {
    handleLoad()
  }, [inputs])

  return (
    <>
      <h1>Open Mics</h1>
      <button onClick={handleLoad}>Get Open Mics</button>
      {displayOpenMic?.map((openMic) => (
        <>
          <h2>{openMic?.venue}</h2>
          <p>Address: {openMic?.location}</p>
          <p>City: {openMic?.city}</p>
          <p>
            From {openMic?.start_time} to {openMic?.finish_time}
          </p>
          <button onClick={() => handleDelete(openMic?.id)}>Delete</button>
          <Link to="/update">
            <button onClick={() => handleUpdate(openMic?.id)}>Update</button>
          </Link>
        </>
      ))}
    </>
  )
}

export default OpenMic
