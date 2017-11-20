const fs = require('fs')
const LevelModel = require('../models/level-model')

async function findAll() {
    return LevelModel.find()
    //.populate('')
}

async function add (level) {
    return LevelModel.create(level)
}

async function del(levelId) {
    return LevelModel.remove({ levelId })
}

async function find(levelId) {
    return LevelModel.findOne({ levelId })
    //.populate(')
}

module.exports = {
    findAll,
    find,
    add,
    del
}