export const initialLoginReducer = {
  updateState: false,
  deleteState: false,
  openMicCity: '',
  ref: {},
}

export const login_reducer = (state, action) => {
  const { type, payload } = action

  // console.log('state-change-red ACTION: ', type, payload)
  // console.log('state-change-red STATE: ', state)

  // if (type === 'DELETE') {
  //   const newCity = payload.city
  //   const newUpdate = payload.delete
  //   const newState = {
  //     ...state,
  //     deleteState: newUpdate,
  //     openMicCity: newCity,
  //   }
  //   return newState
  // } else if (type === 'UPDATE') {
  //   const newState = { ...state, updateState: payload }
  //   return newState
  // } else if (type === 'SEARCH') {
  //   const newState = {
  //     ...state,
  //     openMicCity: payload.openMicCity,
  //     ref: payload.ref,
  //   }
  //   return newState
  // }
  // else {
  return state
  // }
}
