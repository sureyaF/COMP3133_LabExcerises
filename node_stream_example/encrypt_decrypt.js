var crypto = require('crypto');
var fs = require('fs');
const SECRET_PASSWORD = "mysecret"
const IV_LENGTH = 16;

//Encrypting data stream with aes-256
//Get your password from safe store
let iv = crypto.randomBytes(IV_LENGTH);
let password = crypto.createHash('sha256').update(String(SECRET_PASSWORD)).digest('base64').substr(0, 32);

var aes = crypto.createCipheriv('aes-256-ctr', password, iv);
var rstream = fs.createReadStream('crypto_input.txt');
var wstream = fs.createWriteStream('myfile.encrypted');

rstream   // reads from myfile.txt
  .pipe(aes)  // encrypts with aes256
  .pipe(wstream)  // writes to myfile.encrypted
  .on('finish', function () {  // finished
    console.log('done encrypting');
});

//DONE some hack to get the output
function function2() {
    // all the stuff you want to happen after that pause
    console.log('Blah blah blah blah extra-blah');
    //Decrypting data stream with aes-256
//Get your password from safe store
//password =  Buffer.from(SECRET_PASSWORD);
aes = crypto.createDecipheriv('aes-256-ctr', password, iv);
rstream = fs.createReadStream('myfile.encrypted');

rstream   // reads from myfile.txt
  .pipe(aes)  // decrypt with aes256
  .pipe(process.stdout);  // output stdout

console.log("---- DONE ----")
}

// call the rest of the code and have it execute after 3 seconds
setTimeout(function2, 3000);
