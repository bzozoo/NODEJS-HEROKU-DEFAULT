const http = require('http');
const port = process.env.PORT || 3000;
const welcomeString = '<h1>Hello World</h1>' + process.env.ownvar;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(welcomeString);
});

server.listen(port,() => {
  console.log(`Welcome on server. Used port is ::: `+port);
});
