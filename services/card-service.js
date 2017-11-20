const fs = require('fs')
const CardModel = require('../models/card-model')

async function findAll() {
    return CardModel.find().populate('usersPassed')
}

async function add(card) {
    return CardModel.create(card)
}

async function del(cardId) {
    return CardModel.remove({ cardId })
}

async function find(cardId) {
    return CardModel.findOne({ cardId }).populate('usersPassed')
}

module.exports = {
    findAll,
    find,
    add,
    del
}