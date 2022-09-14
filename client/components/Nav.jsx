import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <h1>eJam</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-item">
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About">
                <p>About</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
