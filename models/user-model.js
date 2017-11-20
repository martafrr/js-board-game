const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 3
    },
    mail: {
        type: String,
        required: true,
        minlenght: 6
    },
    age: {
        type: Number,
        required: true
    },
    userLevel: {
        type: Number,
        required: true
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        //ref: 'Friend'
    }]
})

UserSchema.plugin(AutoIncrement, { inc_field: 'userId' })

module.exports = mongoose.model('User', UserSchema)