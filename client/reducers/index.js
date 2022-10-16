import { combineReducers } from 'redux'

import openMicRed from './openMicReducer'
import addReducer from './addReducer'
import deleteReducer from './deleteReducer'
import updateReducer from './updateReducer'
import searchReducer from './searchReducer'
import showUpdatedReducer from './ShowUpdatedReducer'

export default combineReducers({
  openMicRed,
  searchReducer,
  addReducer,
  deleteReducer,
  updateReducer,
  showUpdatedReducer,
})
