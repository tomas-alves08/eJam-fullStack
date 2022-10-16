import { UPDATE_DISPLAY } from '../actions'

function updateReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_DISPLAY:
      return payload
    default:
      return state
  }
}

export default updateReducer
