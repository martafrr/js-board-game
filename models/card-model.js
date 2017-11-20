const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

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
    usersPassed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

CardSchema.plugin(AutoIncrement, { inc_field: 'cardId'})

module.exports = mongoose.model('Card', CardSchema)
