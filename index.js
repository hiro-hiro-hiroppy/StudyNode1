var http = require('http'); //httpオブジェクトを生成
var fs = require('fs');

var indexPage = fs.readFileSync('./index.html', 'utf-8');
var nextPage = fs.readFileSync('./next.html', 'utf-8');

var server = http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' }); //ヘッダを書き出す
    //res.write('Hello World1234'); //
    //res.end();
    
    var target = '';

    switch(req.url){
        case '/':
        case '/index':
            target = indexPage;
            break;
        case '/next':
            target = nextPage;
            break;
        default: res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end('not found'); 
            return;
    }

    // fs.readFile(target, 'utf-8', function(err, data){
    //     res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});

    //     res.write(data);
    //     res.end();

    // });
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});

    res.write(target);
    res.end();

}); //serverオブジェクトを生成

server.listen(1234);  //ポート番号
console.log('サーバを起動しました');