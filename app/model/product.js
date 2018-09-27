'use strict';

const products = [{
    id: 1,
    name: 'product1',
    priceInCents: 100000 // 单位分
}, {
    id: 2,
    name: 'product2',
    priceInCents: 500000
}, {
    id: 3,
    name: 'product3',
    priceInCents: 1200000
}]
class ProductModel {
    async list() {
        return products
    }

    async addOne(product) {
        if (!product.id || !product.name) throw Error('invalid product')
        products.push(product)
    }

    async getOneById(id) {
        const product = products.find(p => p.id === Number(id))
        return product
    }
}

module.exports = ProductModel