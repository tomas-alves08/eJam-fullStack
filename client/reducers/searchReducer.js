import { SEARCH_OPENMIC } from '../actions'

function searchReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SEARCH_OPENMIC:
      return payload
    default:
      return state
  }
}

export default searchReducer
