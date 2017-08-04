var LocalStrategy = require('passport-local').Strategy,
	User = require('../models/user_model.js');


module.exports = function(passport) {
	passport.serializeUser(function(user, callback) {
		callback(null, user.id);
	});

	passport.deserializeUser(function(id, callback) {
		User.findById(id, function(err, user) {
			callback(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true
	}, function(req, email, password, callback) {
		User.findOne({ 'local.email' : email }, function(err, user) {
			if (err) return callback(err);

			if (user) {
				return callback(null, false, req.flash('signupMessage', 'email already in use'));
			} else {
				var newUser 			= new User();
				newUser.local.email 	= email;
				newUser.local.password 	= newUser.hash(password);
				
				newUser.save(function(err) {
					if (err) throw err;
					return callback(null, newUser);
				});
			}
		});
	}));
};