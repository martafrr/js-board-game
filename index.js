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


// instantiating some users
//users = users.concat(new User('Marta', 'hi@marta.com', 26));
//users = users.concat(new User('Andreas', 'hi@andreas.com', 33));

// instantiating some cards
// cards = cards.concat(new Card(
//     'What is JavaScript?',
//     'JavaScript is a cross-platform, object-oriented scripting language.',
//     0
// ));
// cards = cards.concat(new Card(
//     'What is the difference between undefined and not defined?',
//     'Not defined means that it doesn\'t exist and has not been declared. However if you declare a variable and not define the value it holds, this var is undefined.',
//     0
// ));



// const readFile = async (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf8', (err, content) => {
//             if(err) return reject(err);
//             resolve(content);
//         })
//     })
// }

// const file = [1].map(number => 'file.txt');

// const main = async () => {
//     const content1 = await readFile(file[0])
//     console.log(content1)
// }
// main()