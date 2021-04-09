// Node.js program to demonstrate      
// the chaining of streams using 
// readable.pipe() method 
   
// Accessing fs and zlib module 
var fs = require("fs"); 
var zlib = require('zlib'); 
  
// Compress the file input.text to  
// input.txt.gz using pipe() method 
fs.createReadStream('input_data.txt') 
   .pipe(zlib.createGzip()) 
   .pipe(fs.createWriteStream('input_data.txt.gz')); 
    
console.log("File Compressed."); 