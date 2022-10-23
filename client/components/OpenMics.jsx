import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOpenMics, showUpdate } from '../actions'
import { sorter } from '../funcs'

const OpenMics = () => {
  const searchData = useSelector((state) => state.searchReducer)
  const dispatch = useDispatch()

  const city = searchData.city
  const openMicArr = searchData.foundData

  const handleLoad = async () => {
    dispatch(fetchOpenMics())
    dispatch(showUpdate(false, ''))
  }

  // SORT OPEN MICS BY WEEK DAY
  const sortedOpenMics = openMicArr?.sort(function sortByDay(a, b) {
    let day1 = a.day
    let day2 = b.day
    return sorter[day1] - sorter[day2]
  })

  useEffect(() => {
    handleLoad()
  }, [openMicArr])

  return (
    <>
      <div className="openMics-container">
        {city?.length === 0 ? (
          <p className="openMic-title">Sorry! City not found.</p>
        ) : openMicArr?.length > 0 ? (
          <p className="openMic-title">Open Mics Found in {city}</p>
        ) : (
          city && <p className="openMic-title">No Open Mic Found in {city}</p>
        )}
        {city === ''
          ? null
          : openMicArr && (
              <div className="openMics-card-container">
                {openMicArr?.map((openMic) => (
                  <div key={openMic.id} className="openMic-card">
                    {openMic?.venue && (
                      <Link to={`/openMics/${openMic?.id}`}>
                        <h2 className="openMic-venue" key={openMic?.id}>
                          {openMic?.venue}
                        </h2>
                      </Link>
                    )}
                    <div className="openMic-info">
                      {openMic?.city && (
                        <p className="openMic-city">City: {openMic?.city}</p>
                      )}
                      {openMic?.frequency &&
                        (openMic?.frequency === 'Weekly' ||
                        openMic?.frequency === 'Fortnightly' ? (
                          <p className="openMic-day">
                            {openMic?.frequency} on {openMic?.day}s
                          </p>
                        ) : openMic?.frequency === 'Monthly' ? (
                          <p className="openMic-day">
                            Every {openMic?.week} {openMic?.day} of the Month
                          </p>
                        ) : (
                          openMic?.frequency === 'One-Off' && (
                            <p className="openMic-day">
                              One-Off Event on {openMic?.date}
                            </p>
                          )
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
      </div>
    </>
  )
}

export default OpenMics
