'use strict';

const {
    Service
} = require('egg')

class CartService extends Service {
    // service处理添加商品到购物车操作之前，查询有无具体产品等
    async addProductToCart(userId, productId, amount) {
        const user = await this.ctx.model.user.getOneById(userId)
        if (!user) throw new Error('no such user')
        const product = await this.ctx.model.product.getOneById(productId)
        if (!product) throw new Error('no such product')
        const cart = await this.ctx.model.cart.addProductToCart(userId, productId, amount)
        return cart
    }
}

module.exports = CartService