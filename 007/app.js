// const http = require('http');
// const server = http.createServer(function(req, res){
//     console.log('server가 구동중입니다.');
//     console.log(req);
//     console.log(req.headers);
//     console.log(req.method);
//     console.log(req.url);
    
//     // get과 post 둘 다 테스트
    
//     // post에 관련된 내용은 아래 공식문서 링크 참고
//     // https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/

//     // write 여러줄에 end 마지막 한 줄 가능합니다.
//     res.write(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//         <title>test</title>
//     </head>
//     <body>
//         <form action="/" method="post">
//             id : <input type="text" name='id_value'><br>
//             pw : <input type="pw" name='pw_value'><br>
//             <input type="submit" value="login">
//         </form>
//     </body>
//     </html>
//     `);
//     res.end();
// });

// server.listen(8080);


const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    // get과 post 둘 다 테스트
    if(req.method == 'GET') {
        fs.readFile('./test.html', 'utf8', (err, data) => {
            console.log(err);
            //writeHead대신 setHeader를 사용하여 type을 보낼 수 있음
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }) 
    } else if(req.method =='POST') {
        req.on('data', function(chunk) { 
            console.log(chunk.toString()); 
            let data = querystring.parse(chunk.toString()); 
            console.log(data);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(`id : ${data.id_value}, pw : ${data.pw_value}`);
            res.end(); 
        }); 
    }
});

server.listen(8080);