const fs = require('fs')
const csv = require('csv-parser');
const filepath = "input_countries.csv"
fs.unlink('canada.txt',
    (err) => {
        if (err) {
            console.log(`file doesn't exist`)
        } else {
            console.log(`File deleted Successfully `)
        }
    }
)
fs.unlink('usa.txt',
    (err) => {
        if (err) {
            console.log(`file doesn't exist`)
        } else {
            console.log(`File deleted Successfully `)
        }
    }
)

const storeResult = [];
var canadaRes = [];
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => storeResult.push(data))
    .on('end', () => {
        for (var result of storeResult) {
            var dataBuffer = Buffer.from("Canada",'utf-8')
            if (result.country = dataBuffer) {
                canadaRes.push(result)
            }
        }
           const writeStream = fs.createWriteStream('canada.txt');
           canadaRes.forEach(result => writeStream.write(`${result.country}, ${result.year}, ${result.population}\n`));
           writeStream.end();
    });

const storeVal = [];
var USARes = [];
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => storeVal.push(data))
    .on('end', () => {
        for (var result of storeVal) {
            var dataBuffer = Buffer.from("United States",'utf-8')
            if (result.country = dataBuffer) {
                USARes.push(result)
            }
        }
           const writeStream = fs.createWriteStream('usa.txt');
           USARes.forEach(result => writeStream.write(`${result.country}, ${result.year}, ${result.population}\n`));
           writeStream.end();
    });