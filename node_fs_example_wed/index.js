const fs = require('fs')

//Read File
fs.readFileSync("input.txt", (err, data) => {
    if(err)
    {
        console.error(err)
    }else{
        console.log(data.toString('utf8'))
        console.log(data[0])
        console.log(data.toString('utf8', 0, 5))
        console.log(data.toString('utf8', 0, 12))
    }
})

//Write
/*
fs.writeFile("output.txt", "Hello World", (err) => {
    console.log("Write Success")
})
*/

//Append data to file
fs.appendFile("output.txt", "Hello World TEST", (err) => {
    console.log("Append Success")
})

//Remove the file
/*
fs.unlink("output.txt", (err) => {
    console.log("File Deleted Successfully...")
})
*/

//fs.rmdirSync("test")
console.log("--END--")

fs.open("input.txt", "a+", (err, fd) => {
    if(err)
    {
        console.log("error while opening file")
    }else{
        var dataBuffer = Buffer.alloc(100)
        //console.log(dataBuffer)
        fs.read(fd, dataBuffer, 0, dataBuffer.length, 0, (err) => {
            console.log(`DATA : ${dataBuffer.toString()}`)
        })

        //Write data as buffer
        const inputBuffer = Buffer.from("\r\nWrite Data")
        fs.write(fd, inputBuffer, (err) => {
            if(err)
            {
                console.error(err)
            }else{
                console.log("WRITE : Success")
            }
        })
    }
})

//Listing the directory
fs.readdir(".", (err, listOfFiles) => {
    console.log(listOfFiles)

   listOfFiles.map(path => {
        //Use statSync
        if (fs.statSync(path).isFile()) {
            console.log(`${path} is a file`)
        }else{
            console.log(`${path} is a directory`)
        }
    })
})