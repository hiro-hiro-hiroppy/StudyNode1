var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var main = fs.readFileSync('./main.ejs', 'utf-8');
var sub = fs.readFileSync('./sub.ejs', 'utf8')
var server = http.createServer(function (req, res) {
    var data = ejs.render(main, {
        contents: ejs.render(sub, {

            data: '<p>hogehoge</p>'
        })
    });
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    res.write(data);
    res.end();
});

server.listen(1234);
console.log('サーバを起動しました');