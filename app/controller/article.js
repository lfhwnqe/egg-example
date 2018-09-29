'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async list() {
        const {
            pageNum,
            pageSize,
            ...options
        } = this.ctx.query
        const lists = await this.ctx.service.article.lists(pageNum, pageSize, options)
        this.ctx.body = {
            lists
        }
    }

    async addArticle() {
        const {
            title,
            content,
            description,
            userId,
        } = this.ctx.request.body
        const date = Date.now()
        const article = await this.ctx.service.article.add(title, content, description, userId, date)
        this.ctx.body = {
            article
        }
    }
    async modifyArticle() {
        const {
            title,
            content,
            description,
            id
        } = this.ctx.request.body
        let options = {
            title,
            content,
            description,
        }
        for (let key in options) {
            if (!options[key]) {
                delete options[key]
            }
        }
        const article = await this.ctx.service.article.modify(options, id)
        this.ctx.body = {
            article
        }

    }

}

module.exports = ArticleController;