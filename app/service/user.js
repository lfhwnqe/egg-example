'use strict';

const {
    Service
} = require('egg')

class UserService extends Service {
    async isUserInBlackList(userId) {
        return true
    }

    async login(username, password) {
        const user = await this.ctx.model.user.login(username, password)
        if (!user) throw new Error('invalid username or password')
        return user.id
    }

    async isUserLogin(userId) {
        const isUserValid = await this.ctx.model.user.isUserValid(userId)
        return isUserValid
    }
}

module.exports = UserService