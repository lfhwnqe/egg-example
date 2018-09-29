'use strict';
module.exports = app => {
    try {
        var mongoose = app.mongoose;
        var Schema = mongoose.Schema;
        var ArticleSchema = new Schema({
            title: {
                type: String,
                required: true,
                max: 64,
                min: [0, '必须输入文章标题'],
                unique: true
            },
            content: {
                type: String,
                required: true,
                min: [0, '必须输入文章内容'],
                max: 20000
            },
            description: {
                type: String,
                required: true,
                min: [0, '必须输入文章概述'],
                max: 256
            },
            user: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            }

            // todo 保存图片数据，考虑使用base64加密保存，学习数据的处理，加解密
            // imgs: {

            // }
        });
        return mongoose.model('Article', ArticleSchema);
    } catch (e) {
        return mongoose.model('Article');
    }
}