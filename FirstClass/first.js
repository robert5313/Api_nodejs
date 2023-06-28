const http = require('http');
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
	res.send('Welcome to my first Node.js Application!');
});

app.listen(port, () => {
	console.log(`Server running on ${port}`)
});
