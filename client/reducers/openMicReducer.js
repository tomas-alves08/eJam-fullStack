import {
  DISPLAY_OPENMICS,
  DISPLAY_OPENMIC,
  ADD_OPENMIC,
  UPDATE_OPENMICS,
  DELETE_OPENMICS,
} from '../actions'

function openMicRed(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case DISPLAY_OPENMICS:
      return payload
    case DISPLAY_OPENMIC:
      return payload
    case ADD_OPENMIC:
      return [...state, payload]
    case UPDATE_OPENMICS:
      return state.map((openMic) => {
        if (openMic.id === payload) openMic = payload
        return openMic
      })
    case DELETE_OPENMICS:
      return state.filter((openMic) => openMic.id !== payload)
    default:
      return state
  }
}

export default openMicRed
