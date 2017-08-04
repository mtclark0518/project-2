var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');

var User = new mongoose.Schema({
	email 		: String,
	password 	: String
});

User.methods.hash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

module.exports = mongoose.model('User', User);