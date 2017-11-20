const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const LevelSchema = mongoose.Schema({
    levelNumber: {
        type: Number,
        required: true,
    }
})

LevelSchema.plugin(AutoIncrement, { inc_field: 'levelId' })

module.exports = mongoose.model('Level', LevelSchema)
