const route      = require('express').Router()
    , Controller = require('../Controllers/session')
    
route.post('/login', Controller.login);
route.post('/register', Controller.register);
route.post('/google-signin', Controller.googleSignIn);

module.exports = route;