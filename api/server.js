const fs = require('fs');
const http = require('http');
const url = require('url');
const jsonServer = require('json-server');
const jsonServer = require('json-server');
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {fs.writeFile('board.json', 'محتوى الملف', (err) => {
  if (err) throw err;
  console.log("create")
});
fs.appendFile('board.json', 'النص الإضافي', (err) => {
  if (err) throw err;
  console.log('تمت إضافة النص بنجاح');
});

  
});

server.listen(3000, () => {
  console.log('الخادم جاهز ويعمل على المنفذ 3000');
});
