http = require('http');
fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    console.log('...incoming ' +  req.url);
    res.end();
  })
}).listen(8080);


console.log('Server running at port 8080')