//include module
const http = require('http');
const shell = require('../modules/shellexec');

//create http server
http.createServer(function(req, res)
{
    res.writeHead(200,{'Contenet-Type':'text/html'});
    var ip = shell.shecllCommand();
    res.end('Learning Server Up..... '+ip);
}).listen(8080);