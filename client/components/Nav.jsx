import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <h1>Open Mic NZ </h1>
          <FontAwesomeIcon className="icon-guitar" icon={faGuitar} />
        </div>
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

            <li className="nav-item">
              <Link to="/SignIn">
                <p>Sign In</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/SignUp">
                <p>Sign Up</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
