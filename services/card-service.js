const fs = require('fs')

const CardModel = require('../models/card-model')

async function findAll() {
    return CardModel.find().populate('users‚')
}

async function add(card) {
    return CardModel.create(card)
}

async function del(id) {
    return CardModel.remove({ id })
}

async function find(id) {
    return CardModel.findOne({ id }).populate('users')
}

module.exports = {
    findAll,
    find,
    add,
    del
}