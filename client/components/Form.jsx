import React, { useState } from 'react'
import { addOpenMicAPI } from '../api'

const Form = ({ inputs, setInputs }) => {
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

    const newOpenMic = await addOpenMicAPI(formData)

    setInputs([...inputs, newOpenMic])

    setFormData({
      venue: '',
      location: '',
      city: '',
      start_time: '',
      finish_time: '',
    })
  }

  //   console.log(newOpenMic)

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
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
            type="text"
            name="start_time"
            value={formData.start_time || ''}
            onChange={handleChange}
            placeholder="Insert day"
          />
        </label>
        <label>
          Finish Time:
          <input
            type="text"
            name="finish_time"
            value={formData.finish_time || ''}
            onChange={handleChange}
            placeholder="Insert Time"
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
