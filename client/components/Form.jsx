import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  weekdayArr,
  frequencyArr,
  weekOfTheMonthArr,
  instrumentsArr,
  citiesNorthIsland,
  citiesSouthIsland,
} from '../funcs.js'

import { createOpenMic, changeOpenMic, showUpdate } from '../actions'

const Form = () => {
  let formFields = {
    venue: '',
    location: '',
    city: '',
    frequency: '',
    day: '',
    week: '',
    date: '',
    start_time: '',
    finish_time: '',
    instrument_one: '',
    instrument_two: '',
    instrument_three: '',
    instrument_four: '',
    instrument_five: '',
    instrument_six: '',
    auth_token: '',
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // AUTH
  const token = useSelector((state) => state.authReducer)
  console.log('Form Token: ', token)

  // Update Redux Store State
  let displayUpdate = useSelector((state) => state.updateReducer)
  const formDataId = displayUpdate.id

  // OpenMics Redux Store State
  const selectedOpenMic = useSelector((state) => state.oneOpenMicRed)

  if (displayUpdate.status === true) {
    formFields = { ...selectedOpenMic }
  }

  const [formData, setFormData] = useState(formFields)

  // FUNCTIONS
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    console.log('FORM displayStatus', displayUpdate.status)

    if (displayUpdate.status) {
      setFormData({
        ...formData,
        auth_token: token,
        [name]: value,
      })
    } else {
      setFormData({
        ...formData,
        auth_token: token,
        [name]: value,
      })
    }
  }

  console.log('FORM formData: ', formData)

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(createOpenMic(formData))

    setFormData(formFields)
    navigate('/')
    navigate(0)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    dispatch(changeOpenMic(formDataId, { ...formData, id: formDataId }))
    dispatch(showUpdate(false, formDataId))

    setFormData(formFields)
    displayUpdate.status = false

    navigate(`/`)

    // this command refreshes the page
    navigate(0)
  }

  const handleCancel = () => {
    if (displayUpdate.status) navigate(`/openMics/${formDataId}`)
    dispatch(showUpdate(false, formDataId))
  }

  return (
    <div className="form-container">
      <form
        onSubmit={displayUpdate.status ? handleUpdate : handleSubmit}
        className="register-form"
      >
        <table>
          <tbody>
            <tr>
              <td className="form-lable">
                <label htmlFor="region">Region:</label>
              </td>
              <td className="form-data">
                <select
                  id="region"
                  name="region"
                  defaultValue={
                    displayUpdate?.status
                      ? selectedOpenMic?.region || formData.region || ''
                      : formData.region || ''
                  }
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
                    defaultValue={
                      displayUpdate?.status
                        ? selectedOpenMic?.city || formData.city || ''
                        : formData.city || ''
                    }
                    onChange={handleChange}
                  >
                    {formData.region === 'North Island' &&
                      citiesNorthIsland.map((city) => (
                        <option
                          key={city.id}
                          value={`${city.city}`}
                        >{`${city.city}`}</option>
                      ))}
                    {formData.region === 'South Island' &&
                      citiesSouthIsland.map((city) => (
                        <option
                          key={city.id}
                          value={`${city.city}`}
                        >{`${city.city}`}</option>
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
                  // type="text"
                  id="pub"
                  name="venue"
                  defaultValue={
                    displayUpdate?.status
                      ? selectedOpenMic.venue || formData.venue || ''
                      : formData.venue || ''
                  }
                  onChange={handleChange}
                  placeholder="Insert venue"
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
                  // type="text"
                  name="location"
                  defaultValue={
                    displayUpdate?.status
                      ? selectedOpenMic.location || formData.location || ''
                      : formData.location || ''
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
                    displayUpdate?.status
                      ? selectedOpenMic.frequency || formData.frequency || ''
                      : formData.frequency || ''
                  }
                  onChange={handleChange}
                >
                  {frequencyArr.map((el) => (
                    <option key={el.id} value={`${el}`}>{`${el}`}</option>
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
                  <select
                    id="week-month"
                    name="week"
                    defaultValue={
                      displayUpdate?.status
                        ? selectedOpenMic.week || formData.week || ''
                        : formData.week || ''
                    }
                    onChange={handleChange}
                  >
                    {weekOfTheMonthArr.map((el) => (
                      <option key={el.id} value={`${el}`}>{`${el}`}</option>
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
                    defaultValue={
                      displayUpdate?.status
                        ? selectedOpenMic.day || formData.day || ''
                        : formData.day || ''
                    }
                    onChange={handleChange}
                  >
                    {weekdayArr.map((el) => (
                      <option key={el.id} value={`${el}`}>{`${el}`}</option>
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
                    defaultValue={
                      displayUpdate?.status
                        ? selectedOpenMic.date || formData.date || ''
                        : formData.date || ''
                    }
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
                    displayUpdate?.status
                      ? selectedOpenMic.start_time || formData.start_time || ''
                      : formData.start_time || ''
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
                    displayUpdate?.status
                      ? selectedOpenMic.finish_time ||
                        formData.finish_time ||
                        ''
                      : formData.finish_time || ''
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
                        displayUpdate?.status
                          ? selectedOpenMic.instrument_one ||
                            formData.instrument_one ||
                            ''
                          : formData.instrument_one || ''
                      }
                      onChange={handleChange}
                    >
                      {instrumentsArr.map((el) => (
                        <option key={el.id} value={`${el}`}>{`${el}`}</option>
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
                          displayUpdate?.status
                            ? selectedOpenMic.instrument_two ||
                              formData.instrument_two ||
                              ''
                            : formData.instrument_two || ''
                        }
                        onChange={handleChange}
                      >
                        {instrumentsArr.map((el) => (
                          <option key={el.id} value={`${el}`}>{`${el}`}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {formData.instrument_two && (
                    <tr>
                      <td>
                        <label>3.</label>
                      </td>
                      <td>
                        <select
                          id="instrument_three"
                          name="instrument_three"
                          defaultValue={
                            displayUpdate?.status
                              ? selectedOpenMic.instrument_three ||
                                formData.instrument_three ||
                                ''
                              : formData.instrument_three || ''
                          }
                          onChange={handleChange}
                        >
                          {instrumentsArr.map((el) => (
                            <option
                              key={el.id}
                              value={`${el}`}
                            >{`${el}`}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  )}

                  {formData.instrument_three && (
                    <div>
                      <label>4.</label>
                      <select
                        id="instrument_four"
                        name="instrument_four"
                        defaultValue={
                          displayUpdate?.status
                            ? selectedOpenMic.instrument_four ||
                              formData.instrument_four ||
                              ''
                            : formData.instrument_four || ''
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
                          displayUpdate?.status
                            ? selectedOpenMic.instrument_five ||
                              formData.instrument_five ||
                              ''
                            : formData.instrument_five || ''
                        }
                        onChange={handleChange}
                      >
                        {instrumentsArr.map((el) => (
                          <option key={el.id} value={`${el}`}>{`${el}`}</option>
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
                          displayUpdate?.status
                            ? selectedOpenMic.instrument_six ||
                              formData.instrument_six ||
                              ''
                            : formData.instrument_six || ''
                        }
                        onChange={handleChange}
                      >
                        {instrumentsArr.map((el) => (
                          <option key={el.id} value={`${el}`}>{`${el}`}</option>
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
                  <button className="button" role="button">
                    {displayUpdate.status ? 'Update' : 'Add'}
                  </button>
                  <button
                    className="button"
                    role="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Form
