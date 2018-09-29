'use strict';

const {
    Service
} = require('egg')

class ArticleService extends Service {
    async lists(
        pageNum = 1,
        pageSize = 10,
        options
    ) {
        // TODO 先用本办法拿到数据格式，防止查找出错
        const keys = Object.keys(this.ctx.model.article.schema.tree)
        for (let key in options) {
            if (key.indexOf(keys) < 0) {
                delete options[key]
            }
        }
        const lists = await this.ctx.model.article.find(options).limit(pageSize).skip((pageNum - 1) * pageSize)
        return lists
    }

    async add(title, content, description, user, date) {
        const article = await this.ctx.model.article.create({
            title,
            content,
            description,
            user,
            date
        })
        if (!article) throw new Error('添加文章错误')
        // return 'success'
        return article
    }
    async modify(options, id) {
        await this.ctx.model.article.findOneAndUpdate({
            _id: id
        }, {
            $set: options
        })
        const article = await this.ctx.model.article.findOne({
            _id: id
        })
        return article
    }
}

module.exports = ArticleService