
var passport = require('passport');

//GET
function getSignup(request, response, next) {
	response.render('signup.ejs', {message: request.flash('signupMessage') });
}

function postSignup(request, response, next) {
	var signUpStrategy = passport.authenticate('local-signup', {
		successRedirect : '/',
		failureRedirect : '/signup',
		failureFlash : true
	});
	return signUpStrategy(request, response, next);
}


// function getLogin(, unction(response) {

// }

// function postLogin('/signup', function(response) {

// }

// function getLogout('/signup', function(response) {

// }


module.exports = {
	getSignup : getSignup,
	postSignup : postSignup,
	// getLogin : getLogin,
	// postLogin : postLogin,
	// getLogout : getLogout
};