import { ADD_OPENMIC } from '../actions'

function addReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case ADD_OPENMIC:
      return [...state, payload]
    default:
      return state
  }
}

export default addReducer
