const express = require('express')
const router = express.Router()

const LevelService = require('../services/level-service')

router.get('/', async (req, res, next) => {
    res.send(await LevelService.findAll())
})

router.get('/all', async (req, res, next) => {
    const levels = await LevelService.findAll()

    res.render('level-list', { levels })
})

router.get('/:levelId', async (req, res, next) => {
    const level = await LevelService.find(req.params.levelId)

    res.render('level-detail', { level })
})

router.post('/', async (req, res, next) => {
    const level = await LevelService.add(req.body)

    res.send(level)
})

router.delete('/:levelId', async (req, res, next) => {
    await LevelService.del(req.params.levelId)

    res.send('ok!')
})

module.exports = router