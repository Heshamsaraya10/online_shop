const mongoose = require('mongoose')

const bcrypt = require('bcrypt')
const { Promiseromise } = require('dns')
const { resolve } = require('path')
const { rejects } = require('assert')

const DB_URL = 'mongodb://localhost:27017/online-shop'

const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
})

const User = mongoose.model("user", userSchema)

exports.creatNewUser = (username, email, password) => {

    return new Promise((resolve, rejects) => {
        mongoose.connect(DB_URL).then(() => {
            return User.findOne({ email: email })
        }).then(user => {
            if (user) {
                mongoose.disconnect()
                rejects('email is used')
            }
            else {
                return bcrypt.hash(password, 10)
            }
        }).then(hashedPassword => {
            let user = new User({
                username: username,
                email: email,
                password: hashedPassword
            })
            return user.save()
        }).then(() => {
            mongoose.disconnect()
            resolve()
        }).catch(err => rejects(err))
    })
}


exports.login = (email, password) => {



    return new Promise((resolve, rejects) => {
        mongoose.connect(DB_URL).then(() => User.findOne({ email: email })).then(user => {
            if (!user) {
                mongoose.mongoose.disconnect()
                console.log(product)
                rejects('there is no user matches this email')
            } else {
                bcrypt.compare(password, user.password).then(same => {
                    if (!same) {
                        mongoose.disconnect()
                        rejects('passowrd is incorect')
                    } else {
                        mongoose.disconnect()
                        resolve(user._id)
                    }
                })
            }
        }).catch(err => {
            mongoose.disconnect()
            rejects(err)
        })
    })
}
























