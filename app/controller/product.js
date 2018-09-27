'use strict';

const {
    Controller
} = require('egg')

const ProductModel = require('./model/product')

const productModel = new ProductModel()

class ProductController extends Controller {
    async index() {
        const products = await productModel.list()
        this.ctx.body = {
            products
        };
    }

    async getOneById() {
        const {
            id
        } = this.ctx.query
        const product = await productModel.getOneById()
        this.ctx.body = {
            product
        }
    }

    async addOne() {
        const {
            product
        } = this.ctx.request.body
        await productModel.addOne(product)
        this.ctx.body = {
            product
        }
    }
}

module.exports = ProductController;