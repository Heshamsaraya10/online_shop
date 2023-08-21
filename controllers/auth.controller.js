const authModle = require('../models/auth.model')
const validatorResult = require('express-validator').validationResult;

exports.getSignup = (req, res, next) => {
    res.render('signup', {
        authError: req.flash('authError')[0],
        validationErrors: req.flash('validationErrors'),
        session: req.session
    })
}

exports.postSignup = (req, res, next) => {
    if (validatorResult(req).isEmpty()) {
        authModle
            .creatNewUser(req.body.username, req.body.email, req.body.password)
            .then(() => {
                res.redirect('/login')
            })
            .catch(err => {
                console.log(err)
                req.flash('session', req.session)
                res.redirect('/signup')
            })
    } else {
        req.flash('validationErrors', validatorResult(req).array())
        res.redirect('/signup')
    }
}


exports.getLogin = (req, res, next) => {
    res.render('login', {
        authError: req.flash('authError')[0],
        validationErrors: req.flash("validationErrors"),
        session: false
    })
}

exports.PostLogin = (req, res, next) => {
    if (validatorResult(req).isEmpty()) {
        authModle
            .login(req.body.email, req.body.password)
            .then(id => {
                req.session.userId = id
                res.redirect("/")
            })
            .catch(err => {
                req.flash('authError', err)
                req.flash('isUser', req.session.isUser)
                // console.log(err)
                res.redirect('/login')
            })
    } else {
        req.flash('validationErrors', validatorResult(req).array())
        res.redirect('/login')
    }
}

exports.logout = (req, res, next) => {
    req.session.destroy(() => {
        req.session.userId = null
        req.flash('session', req.session)
        res.redirect('/')
    })

}