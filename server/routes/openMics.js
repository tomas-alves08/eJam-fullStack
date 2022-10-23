const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', async (req, res) => {
  try {
    const openMics = await db.getAllOpenMics()

    res.json(openMics)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const foundOpenMic = await db.getOneOpenMic(id)
    res.json(foundOpenMic)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const addedOpenMicId = await db.addOpenMic(req.body)
    const openMic = await db.getTheOpenMic(addedOpenMicId)
    res.json(openMic)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  try {
    const deletedOpenMic = await db.deleteOneOpenMic(id)
    res.json(deletedOpenMic)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const openMicUpdateData = req.body

  try {
    await db.updateOneOpenMic(openMicUpdateData, id)
    const updatedData = await db.getOneOpenMic(id)
    res.json(updatedData)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
