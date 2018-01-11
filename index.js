const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const CardService = require('./services/card-service')
const LevelService = require('./services/level-service')
const UserService = require('./services/user-service')

require('./database-connection')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')

const card = require('./routes/card')
const user = require('./routes/user')
const level = require('./routes/level')

app.use('/cards', card)
app.use('/users', user)
app.use('/levels', level)

app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server listening')
})


const addCartToLevel = (cardToAssign, levelTo) => (levels[levelTo].cards = levels[levelTo].cards.concat(cardToAssign));

