const route                 = require('express').Router()
    , { Error }             = require('../helpers/errors')
    
    , transaction           = require('./transaction')
    , session               = require('./session')
    , games                 = require('./games');

route.get('/', (req, res) => {
    res.send("HELP ME GOD")
});

route.use('/', session)
route.use('/games', games)

// AUTH
// ROUTE UNDER THIS NEEDS AUTH
// route.use(authentication)

route.use('/transactions', transaction)

// ERROR HELPER
// route.use(Error)

module.exports = route
