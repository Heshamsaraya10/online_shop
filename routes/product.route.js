const router = require('express').Router()
const productController = require('../controllers/product.controller')

router.get("/:id", productController.getProductById)
router.get('/',productController.getProduct)

// router.post('/products', homeController.insetToProducts)
module.exports = router