
const path = require('path');
const http = require('http');
const express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const socketio = require('socket.io');
const formatMess = require('./app/messages.js');

const {userJoin,getCurrentUser, userLeave, getRoomUsers} = require('./app/users.js');

const app = express();
const server = http.createServer(app);

// place static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const io = socketio(server);



var dbUrl = 'mongodb+srv://sureyaF:UnicornFarah369@cluster0.v5ecj.mongodb.net/lab_test2?retryWrites=true&w=majority'
mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
      console.log('mongodb connected',err);
  }else{
      console.log('Successfully mongodb connected');
  }
});
//Declare MongoDB Schemas
var MessageSchema = mongoose.Schema({
  from_user : String,
  msg: String,
  room: String
});
var Chat = mongoose.model('Message' ,MessageSchema);

//http://localhost:3003/chat.html?username=admin&room=news


const userName= 'Lab Test 1 App';
// run when client connects
io.on('connect',socket=>{

    //joins room
    socket.on('join',({username,room})=>{
        const user = userJoin(socket.id ,username,room);
        socket.join(user.room);
      

        

        // welcome current user 
          socket.emit('message',formatMess(userName,'Welcome to Chat Room'));
        
          //broad cast when user connect
          socket.broadcast.to(user.room).emit('message',formatMess(userName,`${user.username} has joined the chat`));
          io.to(user.room).emit('roomUsers',{
            room: user.room,
            users: getRoomUsers(user.room)}
          );
           socket.on(`isTyping`, (status) => {
            const user = getCurrentUser(socket.id);
            //io.broadcast.to(user.room).emit(`typingStat`, status)
            socket.broadcast.to(user.room).emit(`typingStat`, status)
            
        });
      
        });
          //listen for chat mess
          socket.on('chatMessage',(msg)=>{
            const user = getCurrentUser(socket.id)
              console.log(msg);
              var newMsg = new Chat({msg:msg,from_user:user.username, room: user.room});
              newMsg.save(function(err){
                if(err) throw err;
              io.to(user.room).emit('message',formatMess(user.username,msg));
              newMsg.save()
              });
          });
         
    // runs when client disconnects 
        socket.on('disconnect',()=>{
          const user = userLeave(socket.id);
              if(user){
            io.to(user.room).emit('message',formatMess(userName,`${user.username} has left the chat`));
            io.to(user.room).emit('roomUsers',{
              room:user.room,
              users: getRoomUsers(user.room)})
           
      
            }
          })
          });

     

   
    

const PORT = 3003 || process.env.PORT;
server.listen(PORT,()=>
{
    console.log(`server running on port ${PORT}`)
  });