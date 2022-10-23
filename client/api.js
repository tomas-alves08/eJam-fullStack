import request from 'superagent'

const url = '/api/v1/openMics'

export async function getOpenMicsAPI() {
  try {
    const resp = await request.get(url)
    return resp.body
  } catch (err) {
    alert('ERROR: ', err.message)
  }
}

export async function getOneOpenMicAPI(id) {
  try {
    const resp = await request.get(`${url}/${id}`)
    return resp.body
  } catch (err) {
    alert('ERROR: ', err.message)
  }
}

export async function addOpenMicAPI(openMic) {
  try {
    const resp = await request.post(url).send(openMic)
    return resp.body
  } catch (err) {
    alert('ERROR: ', err.message)
  }
}

export async function deleteOpenMicAPI(id) {
  try {
    const deleteResp = await request.del(`${url}/${id}`)
    return deleteResp.body
  } catch (err) {
    alert('ERROR: ', err.message)
  }
}

export async function updateOpenMicAPI(id, updateData) {
  try {
    const updateResp = await request.patch(`${url}/${id}`).send(updateData)
    return updateResp.body
  } catch (err) {
    alert('ERROR: ', err.message)
  }
}
