'use strict';

const {
    Controller
} = require('egg')

// const ProductModel = require('../model/product') // 改用loader来获取model

// const productModel = new ProductModel()

class ProductController extends Controller {
    async index() {
        const products = await this.ctx.model.product.list()
        this.ctx.body = {
            products
        };
    }

    async getOneById() {
        const {
            id
        } = this.ctx.query
        // const product = await productModel.getOneById()
        const product = await this.ctx.model.product.getOneById(id)
        this.ctx.body = {
            product
        }
    }

    async addOne() {
        const {
            product
        } = this.ctx.request.body
        // await productModel.addOne(product)
        this.ctx.model.product.addOne(product)
        this.ctx.body = {
            product
        }
    }
}

module.exports = ProductController;