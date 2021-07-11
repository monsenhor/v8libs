const http = require('http')
const url = require('url')

const PORT = 3000

console.log("Server listening at http://127.0.0.1:"+PORT)

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  var html_code = '<h3>Hello World!</h3>'
  if (queryObject.name){
     html_code = '<h3>Helllo, '+queryObject.name+'!</h3>'    
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(html_code);
  res.end();
}).listen(PORT);
