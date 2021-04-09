var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Declare MongoDB Schemas
var Message = mongoose.model('Message',{
    name : String,
    message : String
  })

var dbUrl = 'mongodb+srv://sureyaF:UnicornFarah369@cluster0.v5ecj.mongodb.net/lab_test2?retryWrites=true&w=majority'
app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{ 
    if(err)
    {
      //sendStatus(500);
      console.log(err)
    }

    //Send Message to all users
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

io.on('connection', (socket) => {
  console.log(`A NEW user is connected: ${socket.id}`)
  //console.log(socket.rooms);
  //socket.join("room1")
  //console.log(socket.rooms);
})

mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb connected',err);
    }else{
        console.log('Successfully mongodb connected');
    }
})

var server = http.listen(3001, () => {
  console.log('server is running on port', server.address().port);
});