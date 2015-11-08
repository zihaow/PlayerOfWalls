// ============
// Dependencies
// ============
// Package Dependencies
var express = require('express');
var app = express();
var sass				= require('node-sass-middleware');

// =============
// Configuration
// =============
// Variables
var sassObject = {
	root: __dirname + '/app/public/stylesheets',
	src: '/',
	dest: '/css',
	debug: true,
	sourceComments: true,
	outputStyle: 'expanded'
};

// Env Setup
if (process.env.NODE_ENV === 'production') {
	sassObject.outputStyle = 'compressed';
	sassObject.sourceComments = false;
	sassObject.debug = false;
}

// Set & Use
app.set('views', __dirname + '/app/public/views');
app.set('view engine', 'jade');
app.use(sass(sassObject));

// Static File
app.use(express.static(__dirname + '/app/public/images'));
app.use(express.static(__dirname + '/app/public/javascripts'));
app.use(express.static(__dirname + '/app/public/javascripts/vendor'));
app.use(express.static(__dirname + '/app/public/stylesheets/css'));
app.use(express.static(__dirname + '/app/public/views/pages'));

// ======
// Routes
// ======
app.use(require('./app/controllers'));

// ===============
// Starting Server
// ===============
app.listen(process.env.PORT);
console.log('zihaow Listening On Port ' + process.env.PORT);