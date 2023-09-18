const jsonServer = require('json-server');
const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
  console.log("heelo");
});

server.listen(3000, () => {
  console.log('الخادم جاهز ويعمل على المنفذ 3000');
});
