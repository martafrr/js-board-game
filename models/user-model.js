const util = require('../util');
const users = require('../index');

module.exports = class User {
    constructor(name, mail, age, level) {
        this.name = name
        this.mail = mail
        this.age = age
        this.level = level
        this.following = []
        this.cardId = util.uuid()
    } 
    followUser(followingUser, followedUser) {
        followingUser.following = followingUser.following.concat(followedUser);
    }

    sayName() {
        console.log(this.name)
    }

    static create(obj) {
        return new User(obj.name, obj.mail, obj.age, obj.level)
    }

}