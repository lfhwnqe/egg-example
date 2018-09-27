'use strict';

const users = [{
    id: 1,
    username: 'admin',
    password: 123456
}, {
    id: 2,
    username: 'user',
    password: 123456
}]
class UsersModel {
    async list() {
        return users
    }

    async addOne(product) {
        if (!product.id || !product.name) throw Error('invalid product')
        users.push(product)
    }

    async getOneById(id) {
        const user = users.find(p => p.id === Number(id))
        return user
    }

    async login(username, password) {
        const user = users.find(p => p.username === username && Number(p.password) === Number(password))
        return user
    }

    async isUserValid(userId) {
        const user = await this.getOneById(userId)
        return !!user
    }
}

module.exports = UsersModel