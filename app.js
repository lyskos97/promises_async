const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.listen(3000, function() {
	console.log('Server is on port 3000');
});