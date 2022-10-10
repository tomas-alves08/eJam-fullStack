import React from 'react'

import Search from './Search'
import OpenMics from './OpenMics'
import HomeDescription from './HomeDescription'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <HomeDescription />
        <div className="display-one">
          <Search />
          <OpenMics />
        </div>
      </div>
    </>
  )
}

export default Home
