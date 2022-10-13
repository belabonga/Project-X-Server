const route      = require('express').Router()
    , Controller = require('../Controllers/games')

route.get('/', Controller.readAllGames);
route.get('/:id',Controller.readOneGames);

module.exports = route