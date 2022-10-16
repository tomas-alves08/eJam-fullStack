import {
  getOpenMicsAPI,
  getOneOpenMicAPI,
  addOpenMicAPI,
  deleteOpenMicAPI,
  updateOpenMicAPI,
} from '../api'

import { monthsArr } from '../funcs'

export const DISPLAY_OPENMICS = 'DISPLAY_OPENMICS'
export const DISPLAY_OPENMIC = 'DISPLAY_OPENMIC'
export const SEARCH_OPENMIC = 'SEARCH_OPENMIC'
export const ADD_OPENMIC = 'ADD_OPENMIC'
export const UPDATE_OPENMICS = 'UPDATE_OPENMICS'
export const UPDATE_DISPLAY = 'UPDATE_DISPLAY'
export const DELETE_OPENMICS = 'DELETE_OPENMICS'

// GET OPENMICS ACTIONS

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
      alert('FETCH OPEN MIC ERROR: ', err.message)
    }
  }
}

export function getOneOpenMicACT(openMic) {
  return {
    type: DISPLAY_OPENMIC,
    payload: openMic,
  }
}

export function fetchOneOpenMic(id) {
  return async (dispatch) => {
    try {
      const resp = await getOneOpenMicAPI(id)
      console.log('GEt One Open Mic: ', resp)
      dispatch(getOneOpenMicACT(resp))
    } catch (err) {
      alert('FETCH ONE OPEN MIC ERROR: ', err.message)
    }
  }
}

// SEARCH OPENMICS
export function searchOpenMicsACT(foundData, city) {
  return {
    type: SEARCH_OPENMIC,
    payload: {
      foundData,
      city,
    },
  }
}

export function findOpenMics(foundCity) {
  return async (dispatch) => {
    try {
      const resp = await getOpenMicsAPI()
      console.log('Find open mics resp CITY: ', foundCity)
      console.log('city: ', foundCity)
      const foundOpenMics = resp.filter((openMic) => openMic.city === foundCity)
      console.log('Find open mics: ', foundOpenMics)
      dispatch(searchOpenMicsACT(foundOpenMics, foundCity))
    } catch (err) {
      alert('FIND OPEN MIC: ', err.message)
    }
  }
}

// CREATE OPENMICS ACTIONS

export function addOpenMicACT(openMic) {
  return {
    type: ADD_OPENMIC,
    payload: openMic,
  }
}

export function createOpenMic(openMic) {
  return async (dispatch) => {
    // Change Date Format from '2022-10-19' to '2022-OCT-19'
    let dateArr = openMic.date.split('-')
    const month = monthsArr.find((el, i) => i == dateArr[1])

    dateArr[1] = month
    const date = dateArr.reverse().join('-')
    openMic.date = date

    try {
      const resp = await addOpenMicAPI(openMic)
      console.log('resp ID: ', resp.id)
      const respOneOpenMic = await getOneOpenMicAPI(resp.id)
      console.log('resp created: ', respOneOpenMic)
      dispatch(addOpenMicACT(respOneOpenMic))
    } catch (err) {
      alert('CREATE OPEN MIC ERROR: ', err.message)
    }
  }
}

// UPDATE OPENMICS ACTIONS

export function displayUpdateACT(status, id) {
  return {
    type: UPDATE_DISPLAY,
    payload: {
      status,
      id,
    },
  }
}

export function showUpdate(status, id) {
  return async (dispatch) => {
    try {
      dispatch(displayUpdateACT(status, id))
    } catch (err) {
      alert('DISPLAY UPDATE ERROR: ', err.message)
    }
  }
}

export function updateOpenMicACT(openMic) {
  return {
    type: UPDATE_OPENMICS,
    payload: openMic,
  }
}

export function changeOpenMic(id, openMic) {
  return async (dispatch) => {
    try {
      console.log(openMic)
      const resp = await updateOpenMicAPI(id, openMic)

      console.log('NOTE: ', resp)

      dispatch(updateOpenMicACT(resp))
    } catch (err) {
      alert('UPDATE OPEN MIC ERROR: ', err.message)
    }
  }
}

// DELETE OPENMICS ACTIONS

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
      alert('REMOVE OPEN MIC ERROR: ', err.message)
    }
  }
}
