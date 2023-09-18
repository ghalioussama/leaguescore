const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  fs.writeFile('board.json', 'محتوى الملف', (err) => {
  if (err) throw err;
  console.log("create")
});
fs.appendFile('board.json', 'النص الإضافي', (err) => {
  if (err) throw err;
  console.log('تمت إضافة النص بنجاح');
});

});

const port = 3000; // يمكنك تغيير المنفذ إلى الرقم الذي تفضله
server.listen(port, () => {
  console.log(`الخادم يعمل على المنفذ ${port}`);
});
