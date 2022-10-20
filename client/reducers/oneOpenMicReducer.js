import { DISPLAY_OPENMIC } from '../actions'

function oneOpenMicRed(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case DISPLAY_OPENMIC:
      console.log('DISPLAY_OPENMIC payload: ', payload)
      return payload
    default:
      return state
  }
}

export default oneOpenMicRed
