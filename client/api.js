import request from 'superagent'

const url = '/api/v1/openMics'

export async function getOpenMicsAPI() {
  try {
    const resp = await request.get(url)
    console.log('API', resp.body)
    return resp.body
  } catch (err) {
    console.log('ERROR: ', err.message)
  }
}

export async function getOneOpenMicAPI(id) {
  try {
    const resp = await request.get(`${url}/${id}`)
    console.log('API Get One OpenMic: ', resp.body)
    return resp.body
  } catch (err) {
    console.log('ERROR: ', err.message)
  }
}

export async function addOpenMicAPI(openMic) {
  console.log('Add API:', openMic)

  try {
    const resp = await request.post(url).send(openMic)
    console.log('Resp Add Api: ', resp.body)
    return resp.body
  } catch (err) {
    console.log('ERROR: ', err.message)
  }
}

export async function deleteOpenMicAPI(id) {
  console.log('Delete API: ', id)
  console.log(`${url}/${id}`)

  try {
    const deleteResp = await request.del(`${url}/${id}`)
    console.log('Delete Response API: ', deleteResp.body)
    return deleteResp.body
  } catch (err) {
    console.log('ERROR: ', err.message)
  }
}

export async function updateOpenMicAPI(id, updateData) {
  console.log('Update API: ', updateData)

  try {
    const updateResp = await request.patch(`${url}/${id}`).send(updateData)
    console.log('Update Response API: ', updateResp.body)
    return updateResp.body
  } catch (err) {
    console.log('ERROR: ', err.message)
  }
}
