import { combineReducers } from 'redux'

import openMicRed from './openMicReducer'
import oneOpenMicRed from './oneOpenMicReducer'
import addReducer from './addReducer'
import deleteReducer from './deleteReducer'
import updateReducer from './updateReducer'
import searchReducer from './searchReducer'
import showUpdatedReducer from './ShowUpdatedReducer'
import authReducer from './authReducer'

export default combineReducers({
  openMicRed,
  oneOpenMicRed,
  searchReducer,
  addReducer,
  deleteReducer,
  updateReducer,
  showUpdatedReducer,
  authReducer,
})
