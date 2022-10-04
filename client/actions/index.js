import {
  getOpenMicsAPI,
  getOneOpenMicAPI,
  addOpenMicAPI,
  deleteOpenMicAPI,
  // updateOpenMicAPI,
} from '../api'

export const DISPLAY_OPENMICS = 'DISPLAY_OPENMICS'
export const DISPLAY_OPENMIC = 'DISPLAY_OPENMIC'
export const ADD_OPENMIC = 'ADD_OPENMIC'
export const UPDATE_OPENMICS = 'UPDATE_OPENMICS'
export const DELETE_OPENMICS = 'DELETE_OPENMICS'

export function getOpenMicsACT(openMics) {
  return {
    type: DISPLAY_OPENMICS,
    payload: openMics,
  }
}

export function fetchOpenMics() {
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
    type: ADD_OPENMIC,
    payload: openMic,
  }
}

export function getOneOpenMicACT(id) {
  return {
    type: DISPLAY_OPENMIC,
    payload: id,
  }
}

export function fetchOneOpenMic(id) {
  return async (dispatch) => {
    try {
      const resp = await getOneOpenMicAPI(id)
      dispatch(getOneOpenMicACT(resp))
    } catch (err) {
      console.log('FETCH ONE OPEN MIC ERROR: ', err.message)
    }
  }
}

export function createOpenMic(openMic) {
  return async (dispatch) => {
    try {
      const resp = await addOpenMicAPI(openMic)
      console.log('resp ID: ', resp.id)
      const respOneOpenMic = await getOneOpenMicAPI(resp.id)
      console.log('resp created: ', respOneOpenMic)
      dispatch(addOpenMicACT(respOneOpenMic))
    } catch (err) {
      console.log('CREATE OPEN MIC ERROR: ', err.message)
    }
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

export function removeOpenMic(id) {
  return async (dispatch) => {
    try {
      const respId = await deleteOpenMicAPI(id)
      console.log('Action delete: ', respId)
      dispatch(deleteOpenMicACT(respId))
    } catch (err) {
      console.log('REMOVE OPEN MIC ERROR: ', err.message)
    }
  }
}
