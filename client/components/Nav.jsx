import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserToken } from '../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

const Nav = () => {
  const [user, setUser] = useState(false)
  const token = useSelector((state) => state.authReducer)
  token && console.log(token)

  const dispatch = useDispatch()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const logout = async () => {
    await signOut(auth)
    dispatch(setUserToken(''))
  }

  return (
    <>
      <nav className="nav-container">
        <Link to="/">
          <div className="logo">
            <h1>Open Mic NZ </h1>
            <FontAwesomeIcon className="icon-guitar" icon={faGuitar} />
          </div>
        </Link>

        <div className="nav-items">
          <ul>
            <li className="nav-item">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>

            {user ? (
              <li className="nav-item">
                <Link to="/">
                  <p onClick={logout}>Log Out</p>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/signin">
                  <p>Sign In</p>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
