exports.isAuth = (req, res, next) => {

    if (req.session.userId) next()
    else {
        req.flash('session', req.session)
        res.redirect('/login')
    }
}

exports.notAuth = (req, res, next) => {

    if (!req.session.userId) next()
    else {
        // req.flash('session', req.session)
        res.redirect('/')
    }
}