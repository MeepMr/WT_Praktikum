let http = require("http");
let fs = require("fs");

http.createServer(function (request, response) {

    if(request.method === "GET") {

        let sUrl = request.url;
        console.log(sUrl);

        if(sUrl === '/') {

            writeHttp(response, './public/index.html');
        } else if(sUrl === '/roomList.html') {

            writeHttp(response, './roomList.html');
        } else{

            writeHttp(response, `.${sUrl}`);
        }
    }
}).listen(8020, "127.0.0.1");


function writeHttp(response, path) {

    fs.readFile(path, res);

    function res(error, data) {

        if(error == null) {

            response.writeHead(200);
            response.write(data);
            response.end();
        } else {

            response.writeHead(404);
            fs.readFile('./public/404.html', res);
            console.log(error);
        }
    }
}
