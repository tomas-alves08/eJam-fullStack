import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'

const HomeDescription = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const handleClick = () => {
    navigate('/register')
  }

  return (
    <>
      <div className="description-container">
        <div className="title-container">
          <p className="title">eJam</p>
        </div>
        <div className="icons-container">
          <div className="instrument-icon">
            <img
              className="icon"
              id="Guitar-icon"
              src="./img/Guitar.png"
              alt="Guitar-icon"
            />
          </div>
          <div className="instrument-icon">
            <img
              className="icon"
              id="Keyboard-icon"
              src="./img/Keyboard.png"
              alt="Keyboard-icon"
            />
          </div>
          <div className="instrument-icon">
            <img
              className="icon"
              id="Congas-icon"
              src="./img/Congas.png"
              alt="congas-icon"
            />
          </div>
          <div className="instrument-icon">
            <img
              className="icon"
              id="Mic-icon"
              src="./img/Mic.png"
              alt="mic-icon"
            />
          </div>
          <div className="instrument-icon">
            <img
              className="icon"
              id="Saxophone-icon"
              src="./img/Saxophone.png"
              alt="saxophone-icon"
            />
          </div>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">FIND AN OPEN MIC CLOSE TO YOU</p>
        </div>
        <div className="text-container">
          <div>
            <p className="text">
              All open mic enthusiasts are welcome whether you are:
            </p>
            <ul className="bullet-points">
              <li>
                Looking for a place to perform or jam with other like minded
                people
              </li>
              <li>Trying to promote your venue</li>
              <li>Just looking for live music</li>
            </ul>
          </div>
        </div>
        <div className="phrase-container">
          <p className="phrase">Share your music, share your love!</p>
        </div>
        <div className="buttons-container">
          {user && (
            <button onClick={handleClick} className="button register-button">
              Register an Open Mic
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default HomeDescription
