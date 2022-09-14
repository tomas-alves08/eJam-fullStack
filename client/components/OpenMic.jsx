import React, { useState, useEffect } from 'react'
import { getOpenMicsAPI, deleteOpenMicAPI } from '../api'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { fetchOpenMics } from '../actions'
import { useDispatch } from 'react-redux'

const OpenMic = () => {
  const [displayOpenMic, setDisplayOpenMic] = useState([])
  const openMicsArr = useSelector((redux) => redux.openMics)
  const dispatch = useDispatch()

  console.log('OpenMic Component: ', openMicsArr[0])

  const handleLoad = () => {}

  const handleDelete = async (id) => {
    const openMicArr = await deleteOpenMicAPI(id)
    // setDisplayOpenMic(openMicArr)
  }

  // const handleUpdate = async()

  useEffect(() => {
    dispatch(fetchOpenMics())
    // setDisplayOpenMic(openMicsArr)
    console.log('OpenMic: ', displayOpenMic)
  }, [])

  return (
    <>
      <h1>Open Mics</h1>
      <button onClick={handleLoad}>Get Open Mics</button>
      {openMicsArr?.map((openMic) => (
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
