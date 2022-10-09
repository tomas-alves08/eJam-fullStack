import { DISPLAY_OPENMICS, DISPLAY_OPENMIC } from '../actions'

function openMicRed(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case DISPLAY_OPENMICS:
      return payload
    case DISPLAY_OPENMIC:
      return payload
    default:
      return state
  }
}

export default openMicRed