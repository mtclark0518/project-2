var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	passport = require('passport'),
	userController = require('../controllers/user_controller'),
	viewsController = require('../controllers/views_controller');



router.route('/')
	.get(viewsController.landing);

router.route('/signup')
	.get( userController.getSignup)
	.post( userController.postSignup);

// function postSignup('/signup', function(response) {



module.exports = router;