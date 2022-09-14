import { RECEIVE_OPEN_MICS } from '../actions'

function openMics(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_OPEN_MICS:
      return [...state, payload]
    default:
      return state
  }
}

export default openMics
