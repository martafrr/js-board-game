const fs = require('fs')
const UserModel = require('../models/user-model')

async function findAll() {
    return UserModel.find().populate('friends')
}

async function add(user) {
    return UserModel.create(user)
}

async function del(userId) {
    return UserModel.remove({ userId })
}

async function find(userId) {
    return UserModel.findOne({ userId }).populate('friends')
}

module.exports = {
    findAll,
    find,
    add,
    del
}