import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createOpenMic } from '../actions'

const Form = ({
  inputs,
  setInputs,
  displayAddForm,
  setDisplayAddForm,
  setDisplayUpdateForm,
}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    venue: '',
    location: '',
    city: '',
    start_time: '',
    finish_time: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const { data } = req.body
    console.log('Handle Submit:', formData)

    // const newOpenMic = await addOpenMicAPI(formData)

    dispatch(createOpenMic(formData))

    // setInputs([...inputs, newOpenMic])

    setFormData({
      venue: '',
      location: '',
      city: '',
      start_time: '',
      finish_time: '',
    })
  }

  const handleCancel = () => {
    setDisplayAddForm(false)
    setDisplayUpdateForm(false)
  }

  //   console.log(newOpenMic)

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Region:
          <select>
            <option value="north_island">North Island</option>
            <option value="south_island">South Island</option>
          </select>
        </label>

        <label>
          Venue:
          <input
            type="text"
            id="pub"
            name="venue"
            value={formData.venue || ''}
            onChange={handleChange}
            placeholder="Inser venue"
          />
        </label>

        <label>
          Adderss:
          <input
            type="text"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            placeholder="Insert address"
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city || ''}
            onChange={handleChange}
            placeholder="city"
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            name="start_time"
            value={formData.start_time || ''}
            onChange={handleChange}
            placeholder="Insert Start Time"
          />
        </label>
        <label>
          Finish Time:
          <input
            type="time"
            name="finish_time"
            value={formData.finish_time || ''}
            onChange={handleChange}
            placeholder="Insert End Time"
          />
        </label>

        <button>{displayAddForm ? 'Add' : 'Update'}</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default Form
