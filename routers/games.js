const route      = require('express').Router()
    , Controller = require('../Controllers/games')

route.get('/', Controller.readAllGames);

module.exports = route