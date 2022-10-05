import { combineReducers } from 'redux'

import openMicRed from './openMicReducer'
import addReducer from './addReducer'
import deleteReducer from './deleteReducer'
import updateReducer from './updateReducer'

export default combineReducers({
  openMicRed,
  addReducer,
  deleteReducer,
  updateReducer,
})
