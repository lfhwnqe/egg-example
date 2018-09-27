'use strict';

const Controller = require('egg').Controller;

class CartController extends Controller {
    async addProductToCart() {
        const {
            userId,
            productId,
            amount
        } = this.ctx.request.body
        // const isUserVaild = await this.ctx.service.user.isUserLogin(userId)
        // // 多个地方调用就需要写多个代码，此时适合使用中间件
        // if (!isUserVaild) throw new Error('invalid user')       
        const isUserInBlackList = await this.ctx.service.user.isUserInBlackList(userId)
        if(isUserInBlackList) throw new Error('user is banned')    
        const cart = await this.ctx.service.cart.addProductToCart(userId, productId, amount)
        this.ctx.body = {
            cart
        }
    }

    async removeProducToCart() {

    }

    async removeAllFromCart() {

    }

}

module.exports = CartController;