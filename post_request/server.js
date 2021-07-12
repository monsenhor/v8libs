const http = require('http')
const qs = require('querystring')
const fs = require('fs')

const PORT = 3000

console.log("Server listening at http://127.0.0.1:"+PORT)

http.createServer(function (req, res) {
  let html_code = '<h3>My first form processing.</h3>'
  let body = ''
  if(req.method === 'POST' && req.url === '/process_form') {
     req.on('data', (data) => {
            body += data;
     });
     req.on('end', () => {
       let p = qs.parse(body);
       html_code += "<p>Welcome "+p.username+"! Your email is "+p.email+"</p>"
       console.log(html_code)
       console.log(p)
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(html_code);
       res.end();       
     }) 
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + "/index.html", (err,data) => {
      res.end(data);
    })
  }
}).listen(PORT);
