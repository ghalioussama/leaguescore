const jsonServer = require('json-server');
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query; // استخراج المتغيرات من عنوان الطلب

  // التحقق من وجود متغير "points" في متغيرات GET
  if (query.points !== undefined) {
    const pointsToAdd = parseInt(query.points, 10); // تحويل قيمة points إلى عدد صحيح

    // قراءة الملف JSON
       const filePath = path.join(__dirname, 'db.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('خطأ في قراءة الملف:', err);
        return;
      }

      const jsonData = JSON.parse(data);

      // زيادة النقاط بناءً على القيمة الممررة في متغير "points"
      for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].code === "MA") {
          // زيادة النقاط هنا
          jsonData[i].points += pointsToAdd;
        }
      }

      // حفظ التغييرات في الملف
      const updatedData = JSON.stringify(jsonData, null, 2); // null و 2 تجعل التنسيق أكثر قراءة
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error('خطأ في حفظ الملف:', err);
          return;
        }
        console.log('تم زيادة النقاط بنجاح.');
      });
    });

    // إجراء رد الاستجابة إلى المستخدم
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('تم زيادة النقاط بنجاح.');
  } else {
    // إذا لم يتم تمرير متغير "points" في الطلب
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('الرجاء تمرير متغير "points" في الطلب.');
  }
});

server.listen(3000, () => {
  console.log('الخادم جاهز ويعمل على المنفذ 3000');
});

