const route      = require('express').Router()
    , Controller = require('../Controllers/transactions')

route.post('/', Controller.addTrans)

module.exports = route
