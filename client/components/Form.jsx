import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { createOpenMic, changeOpenMic, showUpdate } from '../actions'

const Form = ({
  inputs,
  setInputs,
  displayAddForm,
  setDisplayAddForm,
  setDisplayUpdateForm,
}) => {
  const [formData, setFormData] = useState({
    venue: '',
    location: '',
    city: '',
    start_time: '',
    finish_time: '',
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const displayUpdate = useSelector((state) => state.updateReducer)
  const formDataId = displayUpdate.id
  console.log('Display Update: ', displayUpdate)

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
    console.log('Handle Submit:', formData)

    dispatch(createOpenMic(formData))

    setFormData({
      venue: '',
      location: '',
      city: '',
      start_time: '',
      finish_time: '',
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    dispatch(changeOpenMic(formDataId, { ...formData, id: formDataId }))
    dispatch(showUpdate(false, formDataId))
    setFormData({
      venue: '',
      location: '',
      city: '',
      start_time: '',
      finish_time: '',
    })
    displayUpdate.status = false
    navigate('/register')
  }

  const handleCancel = () => {
    dispatch((displayUpdate = { status: false, id: formDataId }))
  }

  return (
    <div className="form-container">
      <form
        onSubmit={displayUpdate.status ? handleUpdate : handleSubmit}
        className="register-form"
      >
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
