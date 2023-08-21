const productsModle = require('../models/products.model')
exports.getProduct = (req, res, next) => {
    productsModle.getFirstProduct().then(product => {
        res.render('product', {
            product: product,
            session: req.session
        })
    })
}
exports.getProductById = (req, res, next) => {
    let id = req.params.id
    productsModle.getProductById(id).then((product) => {
        res.render('product', {
            product: product,
            session: req.session
        })
    })
}