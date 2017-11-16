const util = require('../util');
const level = require('../index');

module.exports = class Level {
    constructor(levelNumber) {
        this.levelNumber = levelNumber
        this.levelNumCards = []
        this.users = []
        this.cardId = util.uuid()
    }

   // addLevel(levelNumber, cards) {
   //     levels = levels.concat(new Level(levelNumber));
   // }

   static create(obj) {
       return new Level(obj.levelNumber)
   }

}