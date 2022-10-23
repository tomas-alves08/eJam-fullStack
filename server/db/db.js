const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const conn = knex(config[env])

function getOneOpenMic(id, db = conn) {
  return db('openMics').select().where('id', id).first()
}

function getAllOpenMics(db = conn) {
  return db('openMics').select()
}

function addOpenMic(newOpenMic, db = conn) {
  return db('openMics').insert(newOpenMic)
}

function getTheOpenMic(id, db = conn) {
  return db('openMics').select().where('id', id).first()
}

function deleteOneOpenMic(id, db = conn) {
  return db('openMics').del().where('id', id)
}

function updateOneOpenMic(openMic, id, db = conn) {
  return db('openMics').update(openMic).where('id', id)
}

module.exports = {
  getAllOpenMics,
  getOneOpenMic,
  addOpenMic,
  getTheOpenMic,
  deleteOneOpenMic,
  updateOneOpenMic,
}
