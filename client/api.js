import request from 'superagent'

const url = '/api/v1/openMics'

export async function getOpenMicsAPI() {
  const resp = await request.get(url)
  console.log('API', resp.body)
  return resp.body
}

export async function addOpenMicAPI(openMic) {
  console.log('Add API:', openMic)

  const resp = await request.post(url).send(openMic)
  console.log(resp.body)
  return resp.body
}

export async function deleteOpenMicAPI(id) {
  console.log('Delete API: ', id)

  const deleteResp = await request.delete(`${url}/${id}`)
  console.log('Delete Response API: ', deleteResp.body)
  return deleteResp.body
}

export async function updateOpenMicAPI(updateData) {
  console.log('Update API: ')

  const updateResp = await request.put(`${url}`).send(updateData)
  console.log('Update Response API: ', updateResp.body)
  return updateResp.body
}
