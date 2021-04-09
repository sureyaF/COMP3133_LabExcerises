var fs = require("fs");

var readStream = fs.createReadStream("input_data.txt");
var data = ''
// Set the encoding to be utf8.
readStream.setEncoding('UTF8');

readStream.on("data", function(rawData) {
    var chunk = rawData.toString();
    data += chunk
    //console.log(`chunk : ${chunk}\n`);
    console.log("Data read continue...");
}); 

//Handling readable event 
readStream.on('readable', () => { 
    console.log(`readable: ${readStream.read()}`); 
  }); 

readStream.on('end',function() {
    console.log("Data read ends");
    //console.log(data);
 });
 
readStream.on('error', function(err) {
    console.log("Data read error");
    console.log(err.stack);
 });

var writeStream = fs.createWriteStream("output_data.txt");

/*
writeStream.write("Tutorial on Node.js")
writeStream.write("Introduction")
writeStream.write("Events")
writeStream.write("Generators")
writeStream.write("Data Connectivity")
writeStream.write("Using Jasmine")
*/

//Using Pipes to read -> write data

// Handling pipe event 
writeStream.on("pipe", readable => { 
    console.log("Piped!"); 
}); 

readStream.pipe(writeStream)

writeStream.on('finish', function() {
    console.log("Data write finished");
 });