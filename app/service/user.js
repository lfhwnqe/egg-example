'use strict';

const {
    Service
} = require('egg')

class UserService extends Service {
    async isUserInBlackList(userId) {
        return true
    }

    async add(username, password) {
        const model = this.ctx.model.user
        let user = await model.findOne({
            username
        })
        if (user) throw new Error('用户名已存在，请更换新的用户名')
        user = await model.create({
            username,
            password
        })
        return user._id
    }

    async login(username, password) {
        const user = await this.ctx.model.user.findOne({
            username,
            password
        })
        if (!user) throw new Error('no such user or wrong password')
        return user._id
    }

    async isUserLogin(userId) {
        const isUserValid = await this.ctx.model.user.findOne({
            _id: userId
        })
        console.log('isUserValid==>>', isUserValid)
        return isUserValid ? true : false
    }
}

module.exports = UserService