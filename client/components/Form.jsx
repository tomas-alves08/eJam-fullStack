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
  const formFields = {
    venue: '',
    location: '',
    city: '',
    frequency: '',
    day: '',
    date: '',
    start_time: '',
    finish_time: '',
    instrument_one: '',
    instrument_two: '',
    instrument_three: '',
    instrument_four: '',
  }
  const [formData, setFormData] = useState(formFields)
  const [frequency, setFrequency] = useState('weekly')
  const openMicFrequency = [Weekly, Fortnightly, Monthly, One - Off]
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

    setFormData(formFields)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    dispatch(changeOpenMic(formDataId, { ...formData, id: formDataId }))
    dispatch(showUpdate(false, formDataId))
    setFormData(formFields)
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
        <div>
          <label>
            Region:
            <select>
              <option value="north_island">North Island</option>
              <option value="south_island">South Island</option>
            </select>
          </label>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <label>
            Frequency:
            <select>
              <option value="weekly">Weekly</option>
              <option value="fortnightly">Fortnightly</option>
              <option value="monthly">Monthly</option>
              <option value="one-off">One-Off</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Week of the Month:
            <select>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="last">Last</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Day Of The Week:
            <input
              type="input"
              name="day"
              value={formData.day || ''}
              onChange={handleChange}
              placeholder="Insert Start Time"
            />
          </label>
        </div>
        <div>
          <label>
            One-Off Date:
            <input
              type="date"
              name="date"
              value={formData.start_time || ''}
              onChange={handleChange}
              placeholder="Insert Start Time"
            />
          </label>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <label>Instruments:</label>
          <br />
          <input
            type="checkbox"
            id="acoustic-guitar"
            name="acoustic-guitar"
            value="acoustic-guitar"
          />
          <label for="acoustic-guitar">Acoustic Guitar</label>

          <input
            type="checkbox"
            id="eletric-guitar"
            name="eletric-guitar"
            value="eletric-guitar"
          />
          <label for="eletric-guitar">Eletric Guitar</label>

          <input type="checkbox" id="bass" name="bass" value="bass" />
          <label for="bass">Bass</label>

          <input
            type="checkbox"
            id="drum-kit"
            name="drum-kit"
            value="drum-kit"
          />
          <label for="drum-kit">Drum Kit</label>
        </div>

        <button>{displayAddForm ? 'Add' : 'Update'}</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default Form
