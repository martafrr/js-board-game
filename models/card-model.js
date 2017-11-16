const util = require('../util');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
//const cards = require('../index');

const CardSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
        minlenght: 3
    },
    answer: {
        type: String,
        required: true,
    },
    levelNum: {
        type: Number,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

CardSchema.plugin(AutoIncrement, { inc_field: 'id'})

module.exports = mongoose.model('Card', CardSchema)
