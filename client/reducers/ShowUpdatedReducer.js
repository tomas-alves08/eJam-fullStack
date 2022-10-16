import { UPDATE_OPENMICS } from '../actions'

function showUpdatedReducer(state = '', action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_OPENMICS:
      return payload
    default:
      return state
  }
}

export default showUpdatedReducer
