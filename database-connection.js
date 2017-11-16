const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/js-boardgame', {useMongoClient: true})
