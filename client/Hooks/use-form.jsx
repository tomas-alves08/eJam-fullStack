import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const useFormData = (
  formFields,
  input = true,
  label,
  id,
  name,
  valueState,
  valueSelectedOpenMic,
  valueFormData,
  placeholder,
  selectArr,
  type
) => {
  // AUTH
  const token = useSelector((state) => state.authReducer)

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

    if (displayUpdate.status) {
      setFormData({
        ...selectedOpenMic,
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

  return (
    <>
      {input && (
        <>
          <td>
            <label htmlFor={id}>{label}</label>
          </td>
          <td>
            <input
              type={type}
              id={id}
              name={name}
              defaultValue={
                { valueState }?.status
                  ? valueSelectedOpenMic.venue || valueFormData.venue || ''
                  : valueFormData.venue || ''
              }
              onChange={handleChange}
              placeholder={placeholder}
            />
          </td>
        </>
      )}
      {!input && (
        <>
          <td>
            <label htmlFor={id}>{{ label }}</label>
          </td>
          <td>
            <select
              id={id}
              name={name}
              defaultValue={
                { valueState }?.status
                  ? valueSelectedOpenMic?.city || valueFormData.city || ''
                  : valueFormData.city || ''
              }
              onChange={handleChange}
            >
              {selectArr.map((el) => (
                <option key={el.id} value={`${el}`}>{`${el}`}</option>
              ))}
            </select>
          </td>
        </>
      )}
    </>
  )
}

export default useFormData
