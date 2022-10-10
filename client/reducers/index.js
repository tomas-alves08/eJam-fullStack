import { combineReducers } from 'redux'

import openMicRed from './openMicReducer'
import addReducer from './addReducer'
import deleteReducer from './deleteReducer'
import updateReducer from './updateReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  openMicRed,
  searchReducer,
  addReducer,
  deleteReducer,
  updateReducer,
})
