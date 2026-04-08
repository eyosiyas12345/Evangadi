const http = require('http');
const fs = require('fs');

console.log("node logged out");
const server = http.createServer (
  (req,res)=>{
    console.log("Request Received");
    fs.readFile('index.html', function(data, err){
      if(err){
        console.log("errors occured");
        return;
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    })
  }
)
server.listen(8080, console.log("Listening..."));