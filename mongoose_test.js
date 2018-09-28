const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
mongoose.Promise = Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log('db is connected')
})

const kittySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },

});

kittySchema.methods.speak = function () {
    var greeting = this.name ?
        "Meow name is " + this.name :
        "I don't have a name";
    console.log(greeting);
}
const Kitten = mongoose.model('Kitten', kittySchema);

const fluffy = new Kitten({
    name: 'fluffy' + Math.random()
});
// fluffy.speak(); // "Meow name is fluffy"

// 保存数据
// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     fluffy.speak();
// });

// // 查看所有数据
// Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
// })

// // 带条件查询
// Kitten.find({
//     name: /^fluff/
// }, (err, data) => {
//     console.log('data==>>', data)
// });

(async (params) => {
    // const kitten = await Kitten.findOne()
    // return kitten

    // const user = await Kitten.findOneAndUpdate({
    //     name: "fluffy"
    // }, {
    //     name: "updatedName"
    // }, {
    //     new: true
    // })
    // return user


    // users在最后flow.exec()执行
    const filter = {}
    if (params.name) filter.name = params.name
    const flow = Kitten.find(filter)
    if (params.projection) flow.select(params.projection)
    if (params.sort) flow.sort(params.sort)

    const users = await flow.exec()
    return users

})({
    name: 'xiaoli',
    projection: {
        age: 1
    },
    sort: "-age" // sort:{age:-1}
}).then(r => {
    console.log(r)
}).catch(e => {
    console.log('new error', e)
})