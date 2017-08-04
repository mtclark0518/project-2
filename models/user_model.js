var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');

mongoose.connect('mongodb://localhost/project2');


var User = mongoose.Schema({
	local: {
		email 		: String,
		password 	: String
	}
});

User.methods.hash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

module.exports = mongoose.model('User', User);