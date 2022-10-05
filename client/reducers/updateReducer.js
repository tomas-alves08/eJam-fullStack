import { UPDATE_OPENMICS, UPDATE_DISPLAY } from '../actions'

function updateReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_OPENMICS:
      return state.map((openMic) => {
        if (openMic.id === payload) openMic = payload
        return openMic
      })
    case UPDATE_DISPLAY:
      return payload
    default:
      return state
  }
}

export default updateReducer
