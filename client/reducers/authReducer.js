import { USER_TOKEN } from '../actions'

function authReducer(state = '', action) {
  const { type, payload } = action

  switch (type) {
    case USER_TOKEN:
      return payload
    default:
      return state
  }
}

export default authReducer
