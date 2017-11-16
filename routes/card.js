const express = require('express')
const router = express.Router()

const CardService = require('../services/card-service')

router.get('/', async (req, res, next) => {
    res.send(await CardService.findAll())
})

router.get('/all', async (req, res, next) => {
    const card = await CardService.findAll()

    res.render('card-list', { card })
})

router.get('/:cardId', async (req, res, next) => {
    const card = await CardService.find(req.params.id)

    res.render('card-detail', { card })
})

router.post('/', async (req, res, next) => {
    const card = await CardService.add(req.body)

    res.send(card)
})

// users who have passed this question
router.post('/:cardId/users', async (req, res, next) => {
    const card = await CardService.find(req.params.cardId)
    const targetedUser = await CardService.find(req.body.targetId)

    card.users.addToSet(targetedUser)
    const updatedCard = await card.save()

    res.send(updatedCard)
})

router.delete('/:cardId', async (req, res, next) => {
    await CardService.del(req.params.cardId)

    res.send('ok!')
})

module.exports = router