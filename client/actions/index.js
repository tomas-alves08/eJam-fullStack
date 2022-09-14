import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_OPEN_MICS = 'RECEIVE_OPEN_MICS'

const url = '/api/v1/openMics'

export function receiveOpenMics(data) {
  return {
    type: RECEIVE_OPEN_MICS,
    payload: data,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchOpenMics() {
  return (dispatch) => {
    return request
      .get(url)
      .then((res) => {
        console.log(res.body)
        dispatch(receiveOpenMics(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
