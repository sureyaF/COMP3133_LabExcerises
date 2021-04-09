const fs = require('fs');
const server = require('http').createServer();

//Make file size >=400 MB
/*
server.on('request', (req, res) => {
  fs.readFile('input_Data.txt', (err, data) => {
    if (err){
         throw err;
    }
    res.end(data);
  });
});
*/

server.on('request', (req, res) => {
    const src = fs.createReadStream('input_Data.txt');
    src.pipe(res);
  });
  

server.listen(8088);