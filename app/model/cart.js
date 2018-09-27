'use strict';

const carts = [
    //     {
    //     id: 1,
    //     userId: 1,
    //     products: [{
    //         productId: 1,
    //         amount: 2
    //     }]
    // }
]
class CartsModel {
    async list() {
        return carts
    }

    async getOneByUserId(userId) {
        const found = carts.find(p => p.userId === Number(userId))
        if (found) return found
        const newCart = {
            userId,
            products: []
        }
        carts.push(newCart)
        return newCart
    }

    async addProductToCart(userId, productId, amount) {
        let cart = await this.getOneByUserId(userId)
        const found = cart.products.find(p => p.productId === productId) // 验证是否存在
        if (found) {
            found.amount += amount
        } else {
            cart.products.push({
                productId,
                amount
            })
        }
        return cart
    }

    async removeProductFromCart(userId, productId) {
        const cart = await this.getOneByUserId(userId)
        const index = cart.product.findeIndex(p => p.productId === productId) // 验证是否存在
        if (index > -1) {
            cart.products.splice(index, 1)
        }
    }
}

module.exports = CartsModel