const cartModel = require('../models/cart.model')
const validationResut = require('express-validator').validationResult

exports.postCart = (req, res, next) => {
    if (validationResut(req).isEmpty()) {
        cartModel.addNewItem({
            name: req.body.name,
            price: req.body.price,
            amount: req.body.amount,
            productID: req.body.productID,
            userID: req.session.userID,
            timeStamp: Date.now()
        }).then(() => {
            res.redirect("/cart")
        }).catch(err => {
            console.log(err)
        })
    } else {
        req.flash("validationErrors", validationResut(req).array())
        res.redirect(req.body.redirectTo)
    }
}