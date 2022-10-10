import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findOpenMics } from '../actions'

import citiesData from '../../nz.json'

const Search = () => {
  const displayUpdate = useSelector((state) => state.updateReducer)
  const openMicsArr = useSelector((state) => state.openMicRed)
  const dispatch = useDispatch()

  let city = ''

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    let value = e.target.value
    let city

    if (value.length > 0) {
      city = value[0].toUpperCase() + value.slice(1).toLowerCase()
    }

    setSearch(city)
  }

  if (search !== null) {
    city = citiesData.filter((city) => city.city.match(search))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Handle Search: ', city)

    dispatch(findOpenMics(city))

    // setSearch('')
  }

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            id="city"
            name="city"
            value={search || ''}
            placeholder="  Insert City Name to Find Open Mics"
            onChange={handleChange}
            className="search-input"
          />
          <button className="search-button">Search</button>
        </form>
      </div>
    </>
  )
}

export default Search
