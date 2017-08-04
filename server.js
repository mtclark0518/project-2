var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	passport = require('passport'),
	flash = require('connect-flash'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session');


app.use(morgan('dev'));
app.use(cookieParser()); 

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view-engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'PROJECT-2'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use(routes);

app.listen(3000, function () {
    console.log("listening at http://localhost:3000");
});


