import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const HomeDescription = () => {
  const navigate = useNavigate()

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
              class="icon"
              id="Guitar-icon"
              src="./img/instrument1.png"
              alt="Guitar-icon"
            />
          </div>
          <div className="instrument-icon">
            <img
              class="icon"
              id="Keyboard-icon"
              src="./img/instrument2.png"
              alt="Keyboard-icon"
            />
          </div>
          {/* <img
            class="icon"
            id="Drumkit-icon"
            src="./img/instrument3.png"
            alt="drumkit-icon"
          /> */}
          <div className="instrument-icon">
            <img
              class="icon"
              id="Congas-icon"
              src="./img/instrument4.png"
              alt="congas-icon"
            />
          </div>
          <div className="instrument-icon">
            <img
              class="icon"
              id="Mic-icon"
              src="./img/instrument5.png"
              alt="mic-icon"
            />
          </div>
          <div className="instrument-icon">
            <img
              class="icon"
              id="Saxophone-icon"
              src="./img/instrument6.png"
              alt="saxophone-icon"
            />
          </div>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">FIND AN OPEN MIC CLOSE TO YOU</p>
        </div>
        <div className="text-container">
          <p className="text">
            All open mic enthusiasts are welcome whether you are:
            <ul className="bullet-points">
              <li>
                Looking for a place to perform or jam with other like minded
                people
              </li>
              <li>Trying to promote your venue</li>
              <li>Just looking for live music</li>
            </ul>
          </p>
        </div>
        <div className="phrase-container">
          <p className="phrase">Share your music, share your love!</p>
        </div>
        <div className="buttons-container">
          <button onClick={handleClick} className="button register-button">
            Register an Open Mic
          </button>
        </div>
      </div>
    </>
  )
}

export default HomeDescription
