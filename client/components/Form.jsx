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

  const frequencyArr = [
    'Select the Frequency of the Event',
    'Weekly',
    'Fortnightly',
    'Monthly',
    'One-Off',
  ]
  const weekdayArr = [
    'Select Day of the Week',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const weekOfTheMonthArr = [
    'Select the week of the month',
    'First',
    'Second',
    'Third',
    'Last',
  ]
  const instrumentsArr = [
    'Select Instrument',
    'Acoustic Guitar',
    'Eletric Guitar',
    'Bass',
    'Drum Kit',
    'Cajon',
    'Congas',
    'Bongos',
    'Shakers',
    'Saxophone',
    'Trumpet',
    'Flute',
  ]

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const displayUpdate = useSelector((state) => state.updateReducer)
  const formDataId = displayUpdate.id
  console.log('Display Update: ', displayUpdate)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(e.target.value)
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

  // const handleCancel = () => {
  //   dispatch((displayUpdate = { status: false, id: formDataId }))
  // }

  return (
    <div className="form-container">
      <form
        onSubmit={displayUpdate.status ? handleUpdate : handleSubmit}
        className="register-form"
      >
        <table>
          <tr>
            <td className="form-lable">
              <label htmlFor="region">Region:</label>
            </td>
            <td className="form-data">
              <select
                id="region"
                name="region"
                value={formData.region || ''}
                onChange={handleChange}
              >
                <option value="Select">Select your Region</option>
                <option value="North Island">North Island</option>
                <option value="South Island">South Island</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="pub">Venue:</label>
            </td>
            <td>
              <input
                type="text"
                id="pub"
                name="venue"
                value={formData.venue || ''}
                onChange={handleChange}
                placeholder="Inser venue"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="location">Adderss:</label>
            </td>
            <td>
              <input
                id="location"
                type="text"
                name="location"
                value={formData.location || ''}
                onChange={handleChange}
                placeholder="Insert address"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="city">City:</label>
            </td>
            <td>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city || ''}
                onChange={handleChange}
                placeholder="Insert your city"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="frequency">Frequency:</label>
            </td>
            <td>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency || ''}
                onChange={handleChange}
              >
                {frequencyArr.map((el) => (
                  <option value={`${el}`}>{`${el}`}</option>
                ))}
              </select>
            </td>
          </tr>

          {formData.frequency === 'Monthly' && (
            <tr>
              <td>
                <label htmlFor="week-month">Week of the Month:</label>
              </td>
              <td>
                <select id="week-month">
                  {weekOfTheMonthArr.map((el) => (
                    <option value={`${el}`}>{`${el}`}</option>
                  ))}
                </select>
              </td>
            </tr>
          )}

          {formData.frequency !== 'One-Off' && formData.frequency !== '' && (
            <tr>
              <td>
                <label htmlFor="day">Day Of The Week:</label>
              </td>
              <td>
                <select
                  id="day"
                  name="day"
                  value={formData.day || ''}
                  onChange={handleChange}
                >
                  {weekdayArr.map((el) => (
                    <option value={`${el}`}>{`${el}`}</option>
                  ))}
                </select>
              </td>
            </tr>
          )}

          {formData.frequency === 'One-Off' && (
            <tr>
              <td>
                <label htmlFor="date">One-Off Date:</label>
              </td>
              <td>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.start_time || ''}
                  onChange={handleChange}
                  placeholder="Insert Start Time"
                />
              </td>
            </tr>
          )}

          <tr>
            <td>
              <label htmlFor="start_time">Start Time:</label>
            </td>
            <td>
              <input
                type="time"
                id="start_time"
                name="start_time"
                value={formData.start_time || ''}
                onChange={handleChange}
                placeholder="Insert Start Time"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="finish_time">Finish Time:</label>
            </td>
            <td>
              <input
                type="time"
                id="finish_time"
                name="finish_time"
                value={formData.finish_time || ''}
                onChange={handleChange}
                placeholder="Insert End Time"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Instruments:</label>
            </td>
            <td>
              <>
                <div>
                  <label>1.</label>
                  <select
                    id="instrument_one"
                    name="instrument_one"
                    value={formData.instrument_one || ''}
                    onChange={handleChange}
                  >
                    {instrumentsArr.map((el) => (
                      <option value={`${el}`}>{`${el}`}</option>
                    ))}
                  </select>
                </div>

                {formData.instrument_one && (
                  <div>
                    <label>2.</label>
                    <select
                      id="instrument_two"
                      name="instrument_two"
                      value={formData.instrument_two || ''}
                      onChange={handleChange}
                    >
                      {instrumentsArr.map((el) => (
                        <option value={`${el}`}>{`${el}`}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.instrument_two && (
                  <div>
                    <label>3.</label>
                    <select
                      id="instrument_three"
                      name="instrument_three"
                      value={formData.instrument_three || ''}
                      onChange={handleChange}
                    >
                      {instrumentsArr.map((el) => (
                        <option value={`${el}`}>{`${el}`}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.instrument_three && (
                  <div>
                    <label>4.</label>
                    <select
                      id="instrument_four"
                      name="instrument_four"
                      value={formData.instrument_four || ''}
                      onChange={handleChange}
                    >
                      {instrumentsArr.map((el) => (
                        <option value={`${el}`}>{`${el}`}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.instrument_four && (
                  <div>
                    <label>5.</label>
                    <select
                      id="instrument_five"
                      name="instrument_five"
                      value={formData.instrument_five || ''}
                      onChange={handleChange}
                    >
                      {instrumentsArr.map((el) => (
                        <option value={`${el}`}>{`${el}`}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.instrument_five && (
                  <div>
                    <label>6.</label>
                    <select
                      id="instrument_six"
                      name="instrument_six"
                      value={formData.instrument_six || ''}
                      onChange={handleChange}
                    >
                      {instrumentsArr.map((el) => (
                        <option value={`${el}`}>{`${el}`}</option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="form-buttons">
                <button class="button" role="button">
                  {displayAddForm ? 'Add' : 'Update'}
                </button>
                {/* <button onClick={handleCancel}>Cancel</button> */}
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default Form
