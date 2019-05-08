


// create my first server in nodejs

var http = require('http');

var server = http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<center style="margin-top:80px;color:orange;"><h2>Hi This is First Node server..!</h2></center>');
    res.end();
}).listen(3000);

