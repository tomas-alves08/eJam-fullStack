const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', async (req, res) => {
  try {
    const openMics = await db.getAllOpenMics()
    // console.log('router:', openMics)
    res.json(openMics)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const foundOpenMic = await db.getOneOpenMic(id)
    console.log('BackEnd Get One OpenMic: ', foundOpenMic)
    res.json(foundOpenMic)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/', async (req, res) => {
  console.log('Post req.body: ', req.body)

  try {
    const addedOpenMicId = await db.addOpenMic(req.body)
    console.log('Post router: ', addedOpenMicId)
    const openMic = await db.getTheOpenMic(addedOpenMicId)
    // console.log('router:', openMic)
    res.json(openMic)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  console.log('Router Delete: ', id)
  try {
    const deletedOpenMic = await db.deleteOneOpenMic(id)
    console.log('Router: ', deletedOpenMic)
    // const remainderOpenMics = await db.getAllOpenMics()
    res.json(deletedOpenMic)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const openMicUpdateData = req.body

  console.log('Router Update: ', id, openMicUpdateData)
  try {
    await db.updateOneOpenMic(openMicUpdateData, id)
    const updatedData = await db.getOneOpenMic(id)
    console.log('Router Patch: ', updatedData)
    // const dataArr = await db.getAllOpenMics()
    res.json(updatedData)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
