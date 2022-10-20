import { DISPLAY_OPENMICS } from '../actions'

function openMicRed(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case DISPLAY_OPENMICS:
      return payload
    default:
      return state
  }
}

export default openMicRed
