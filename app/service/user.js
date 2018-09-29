'use strict';

const {
    Service
} = require('egg')

class UserService extends Service {
    async isUserInBlackList(userId) {
        return true
    }

    async add(username, password) {
        if (!username || !password) throw new Error('必须输入账号名和密码')
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

    async modify(username, oldPassword, newPassword) {
        if (!username && !oldPassword && !newPassword) throw new Error('必须输入账号名和密码')
        const model = this.ctx.model.user
        const obj = {
            username,
            password: oldPassword
        }
        let user = await model.findOneAndUpdate(obj, {
            $set: {
                password: newPassword
            }
        })
        if (!user) throw new Error('不知道犯了什么错，反正修改密码错了')
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
        return isUserValid ? true : false
    }
}

module.exports = UserService