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
    console.log('Search: ', e.target.name, ' ', e.target.value)
    setSearch(e.target.value)
    console.log(search)
  }

  if (search.length > 0) {
    city = citiesData.filter((city) => city.city.match(search))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Handle Search: ', city)
    dispatch(findOpenMics(city))

    setSearch('')
  }

  // display a search bar containing region, city, day of the week
  // choose one or more searching parameters to display open mics accordingly
  // filter all

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSearch} className="register-form">
          <input
            id="city"
            name="city"
            value={search || ''}
            placeholder="Insert City Name to Find Open Mics"
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    </>
  )
}

export default Search
