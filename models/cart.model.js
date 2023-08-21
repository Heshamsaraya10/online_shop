const { rejects } = require('assert')
const mongoose = require('mongoose')
const { resolve } = require('path')

const DB_URL = 'mongodb://localhost:27017/online-shop'


const cartSchema = mongoose.Schema({
    name: String,
    price: Number,
    amount: Number,
    userId: String,
    productId: String,
    timeStamp: Number,
})

const cartItem = mongoose.model("cart", cartSchema)

exports.addNewItem = data => {
    return new Promise((resolve, rejects) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                let item = new cartItem(data);
                return item.save();
            })
            .then(() => {
                mongoose.disconnect();
                resolve();
            })
            .catch(err => {
                mongoose.disconnect();
                rejects(err);
            })
    })
}