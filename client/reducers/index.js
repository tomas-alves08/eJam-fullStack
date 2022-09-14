import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import openMics from './openMics'

export default combineReducers({
  errorMessage,
  openMics,
})
