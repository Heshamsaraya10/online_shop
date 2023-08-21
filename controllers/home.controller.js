const productsModel = require('../models/products.model')
const { all } = require('../routes/home.route')

exports.getHome = async (req, res, next) => {
    let category = req.query.category
    let validCategories = ['clothes', 'mobile', 'combuters']
    if (category && validCategories.includes(category)) {
        productsModel.getAllProductsbycategory(category).then(product => {
            res.render('index', {
                products: product,
                session: req.session
            })
        })
    } else {

        return await productsModel.getAllProducts(category).then(products => {
            console.log(products)
            console.log(req.session.userId)
            res.render('index', {
                products: products,
                session: req.session,
                validationError: req.flash('validationErrors')[0]
            })
        })
    }
}

exports.insetToProducts = (req, res, next) => {
    // get products
    productsModel.insertMany()
}