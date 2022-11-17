import React, { useEffect, useState } from 'react'

import Search from './Search'
import OpenMics from './OpenMics'
import HomeDescription from './HomeDescription'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'

import { useDispatch } from 'react-redux'
import { setUserToken } from '../actions'

const Home = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  if (user) dispatch(setUserToken(user?.uid))

  return (
    <>
      <div className="home-container">
        <HomeDescription user={user} />
        <div className="display-one">
          <Search />
          <OpenMics />
        </div>
      </div>
    </>
  )
}

export default Home
