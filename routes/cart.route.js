const router = require('express').Router()
const check = require('express-validator').check

const authGuard = require('./guards/auth.guard')
const cartController = require('../controllers/cart.controller')

router.post(
    '/'
    , authGuard.isAuth,
    check('amount')
        .not()
        .isEmpty()
        .withMessage("amount is required")
        .isInt({ min: 1 })
        .withMessage('amount must be grater then 0'),

    cartController.postCart

)

module.exports = router;