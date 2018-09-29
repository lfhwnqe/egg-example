'use strict';
module.exports = app => {
    try {
        var mongoose = app.mongoose;
        var Schema = mongoose.Schema;
        var UserSchema = new Schema({
            username: {
                type: String,
                required: true,
                max: 64,
                min: [0, '必须输入用户名'],
                unique: true
            },
            password: {
                type: String,
                required: true,
                min: [0, '必须输入密码'],
                max: 32
            }
        });
        return mongoose.model('User', UserSchema);
    } catch (e) {
        return mongoose.model('User');
    }
}

// 'use strict';

// const users = [{
//     id: 1,
//     username: 'admin',
//     password: 123456
// }, {
//     id: 2,
//     username: 'user',
//     password: 123456
// }]
// class UsersModel {
//     constructor(app) {
//         console.log('app in constructor==>>', app)
//         this.app = app
//         this.model = null
//         this.init() // 初始化model
//     }

//     async init() {
//         const {
//             mongoose
//         } = this.app
//         console.log('mongoose==>>', mongoose, 'Schema in mongoose==>>', mongoose.Schema)
//         const Schema = mongoose.Schema
//         const UserSchema = new Schema({
//             username: {
//                 type: String,
//                 require: true,
//                 max: 64,
//                 min: [0, '必须输入用户名'],
//                 unique: true
//             },
//             password: {
//                 type: String,
//                 require: true,
//                 min: [0, '必须输入密码'],
//                 max: 32
//             }
//         })
//         const UserModel = await mongoose.model('User', UserSchema)
//         console.log('UserModel==>>', UserModel)
//         this.model = UserModel
//     }

//     async login(username, password) {
//         if (!this.model) {
//             await this.init()
//         }
//         console.log(username, password)
//         console.log('this, this.model===>>', this.model)
//         const user = await this.model.find({
//             username
//         })
//         console.log('user==>>', user)
//         if (!user) throw new Error('no such user or wrong password')

//         if (password !== user.password) throw new Error('no such user or wrong password')

//         console.log('user==>>', user)
//         // console.log(this.app.mongoose)
//         // const user = users.find(p => p.username === username && Number(p.password) === Number(password))
//         return user
//     }
//     async list() {
//         return users
//     }

//     async addOne(product) {
//         if (!product.id || !product.name) throw Error('invalid product')
//         users.push(product)
//     }

//     async getOneById(id) {
//         const user = users.find(p => p.id === Number(id))
//         return user
//     }

//     async isUserValid(userId) {
//         const user = await this.getOneById(userId)
//         return !!user
//     }
// }

// module.exports = UsersModel