// const { useInsertionEffect } = require('react')

const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const conn = require('knex')(config)

function getAllOpenMics(db = conn) {
  return db('openMics_').select()
}

function addOpenMic(newOpenMic, db = conn) {
  return db('openMics_').insert(newOpenMic)
}

function getTheOpenMic(id, db = conn) {
  return db('openMics_').select().where('id', id).first()
}

function deleteOneOpenMic(id, db = conn) {
  return db('openMics_').del().where('id', id)
}

function updateOneOpenMic(openMic, db = conn) {
  return db('openMics_').update(openMic).where('id', openMic.id)
}

module.exports = {
  getAllOpenMics,
  addOpenMic,
  getTheOpenMic,
  deleteOneOpenMic,
  updateOneOpenMic,
}
