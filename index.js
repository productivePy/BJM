const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

server.listen(5000, '192.168.1.4', () => {
  console.log('Server is running on http://192.168.1.4:5000');
});
