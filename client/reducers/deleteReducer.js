import { DELETE_OPENMICS } from '../actions'

function deleteReducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case DELETE_OPENMICS:
      return state.filter((openMic) => openMic.id !== payload)
    default:
      return state
  }
}

export default deleteReducer
