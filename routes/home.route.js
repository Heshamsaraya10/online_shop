const router = require('express').Router()
const homeController = require('../controllers/home.controller')

router.get('/', homeController.getHome)

router.post('/products', homeController.insetToProducts)
module.exports = router