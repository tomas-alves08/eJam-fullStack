import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { findOpenMics } from '../actions'

import citiesData from '../../nz.json'

const Search = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  let city = ''

  const handleChange = (e) => {
    let value = e.target.value

    if (value.length > 0) {
      city = value[0].toUpperCase() + value.slice(1).toLowerCase()
    } else {
      city = null
    }

    setSearch(city)
  }

  if (search !== null) {
    city = citiesData.filter((city) => city.city.match(search))
  }

  const handleSearch = (e) => {
    e.preventDefault()

    dispatch(findOpenMics(city[0]?.city ? city[0]?.city : ''))
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
          <button className="button search-button">Search</button>
        </form>
      </div>
    </>
  )
}

export default Search
