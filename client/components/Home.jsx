import React from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'
import OpenMics from './OpenMics'

const Home = () => {
  return (
    <>
      <div className="display-one">
        <OpenMics />
      </div>

      <div className="search-container">
        <Search />
      </div>

      <div>
        <div className="title-container">
          <p className="title">eJam</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">FIND AN OPEN MIC CLOSE TO YOU</p>
        </div>
        <div className="phrase-container">
          <p className="phrase">Share your music, share your love!</p>
        </div>
        <div className="buttons-container">
          {/* <button className="find">
            <Link to="/search">Find an Open Mic</Link>
          </button> */}
          <button className="register">
            <Link to="/register">Register an Open Mic</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
