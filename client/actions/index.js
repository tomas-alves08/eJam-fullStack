import {
  getOpenMicsAPI,
  getOneOpenMicAPI,
  addOpenMicAPI,
  deleteOpenMicAPI,
  updateOpenMicAPI,
} from '../api'

export const DISPLAY_OPENMICS = 'DISPLAY_OPENMICS'
export const ADD_OPENMICS = 'ADD_OPENMICS'
export const UPDATE_OPENMICS = 'UPDATE_OPENMICS'
export const DELETE_OPENMICS = 'DELETE_OPENMICS'

export function getOpenMicsACT(openMics) {
  return {
    type: DISPLAY_OPENMICS,
    payload: openMics,
  }
}

export function fetchOpenMic() {
  return async (dispatch) => {
    try {
      const respArr = await getOpenMicsAPI()
      dispatch(getOpenMicsACT(respArr))
    } catch (err) {
      console.log('FETCH OPEN MIC ERROR: ', err.message)
    }
  }
}

export function addOpenMicACT(openMic) {
  return {
    type: ADD_OPENMICS,
    payload: openMic,
  }
}

export function updateOpenMicACT(id) {
  return {
    type: UPDATE_OPENMICS,
    payload: id,
  }
}

export function deleteOpenMicACT(id) {
  return {
    type: DELETE_OPENMICS,
    payload: id,
  }
}
