// declaration
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const authRouter = require('./routes/auth/auth.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// implement API part
app.get('/', (req, res) => {
	res.send('youyou');
})

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use('/auth/', authRouter);

// start the server node
let server = app.listen(process.env.PORT || 3000, function(){
	console.log('listening on port' + server.address().port);
})