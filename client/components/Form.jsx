import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import citiesData from '../../nz.json'

import { createOpenMic, changeOpenMic, showUpdate } from '../actions'

const Form = ({ displayAddForm }) => {
  let formFields = {
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
    instrument_five: '',
    instrument_six: '',
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Update Redux Store State
  let displayUpdate = useSelector((state) => state.updateReducer)
  const formDataId = displayUpdate.id
  console.log('Display Update: ', displayUpdate)

  // OpenMics Redux Store State
  const openMicArr = useSelector((state) => state.openMicRed)
  const selectedOpenMic = openMicArr.find((openMic) => openMic.id == formDataId)

  if (displayUpdate.status === true) {
    formFields = { ...selectedOpenMic }
  }

  const [formData, setFormData] = useState(formFields)

  // Dropdown Arrays
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

  console.log('status: ', displayUpdate.status)
  console.log('Form Fields: ', formFields)

  // Cities in NZ
  const citiesNorthIsland = citiesData.filter((city) => city.lat >= -41.2889)
  const citiesSouthIsland = citiesData.filter((city) => city.lat < -41.2889)

  // Functions
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

  const handleCancel = () => {
    dispatch(showUpdate(false, formDataId))
  }

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
                defaultValue={selectedOpenMic.region || formData.region || ''}
                onChange={handleChange}
              >
                <option value="Select">Select your Region</option>
                <option value="North Island">North Island</option>
                <option value="South Island">South Island</option>
              </select>
            </td>
          </tr>

          {formData.region && (
            <tr>
              <td>
                <label htmlFor="city">City:</label>
              </td>
              <td>
                <select
                  id="city"
                  name="city"
                  defaultValue={selectedOpenMic.city || formData.city || ''}
                  onChange={handleChange}
                >
                  {formData.region === 'North Island' &&
                    citiesNorthIsland.map((city) => (
                      <option value={`${city.city}`}>{`${city.city}`}</option>
                    ))}
                  {formData.region === 'South Island' &&
                    citiesSouthIsland.map((city) => (
                      <option value={`${city.city}`}>{`${city.city}`}</option>
                    ))}
                </select>
              </td>
            </tr>
          )}

          <tr>
            <td>
              <label htmlFor="pub">Venue:</label>
            </td>
            <td>
              <input
                type="text"
                id="pub"
                name="venue"
                defaultValue={selectedOpenMic.venue || formData.venue || ''}
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
                defaultValue={
                  selectedOpenMic.location || formData.location || ''
                }
                onChange={handleChange}
                placeholder="Insert address"
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
                defaultValue={
                  selectedOpenMic.frequency || formData.frequency || ''
                }
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
                  defaultValue={selectedOpenMic.day || formData.day || ''}
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
                  defaultValue={selectedOpenMic.date || formData.date || ''}
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
                defaultValue={
                  selectedOpenMic.start_time || formData.start_time || ''
                }
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
                defaultValue={
                  selectedOpenMic.finish_time || formData.finish_time || ''
                }
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
                    defaultValue={
                      selectedOpenMic.instrument_one ||
                      formData.instrument_one ||
                      ''
                    }
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
                      defaultValue={
                        selectedOpenMic.instrument_two ||
                        formData.instrument_two ||
                        ''
                      }
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
                      defaultValue={
                        selectedOpenMic.instrument_three ||
                        formData.instrument_three ||
                        ''
                      }
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
                      defaultValue={
                        selectedOpenMic.instrument_four ||
                        formData.instrument_four ||
                        ''
                      }
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
                      defaultValue={
                        selectedOpenMic.instrument_five ||
                        formData.instrument_five ||
                        ''
                      }
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
                      defaultValue={
                        selectedOpenMic.instrument_six ||
                        formData.instrument_six ||
                        ''
                      }
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
                <button class="button" role="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default Form
