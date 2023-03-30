var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')

var User = require('../models/user_model')
var user_controller = require('../controllers/user_controller');

router.post('/Login', user_controller.loginuser);

module.exports = router;