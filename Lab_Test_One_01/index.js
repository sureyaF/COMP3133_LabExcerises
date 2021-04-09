//set up the server
const express = require(`express`)
const app = express()
const port = 8090 || process.env.PORT
const path = require(`path`)
const http = require(`http`)
const socketio = require(`socket.io`)
const router = express.Router();
const moment = require(`moment`)
const formatMessage = require(`./utils/messages`)
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require(`./utils/users`)
const server = http.createServer(app)
const Chat = require(`./model/Chat`)
const mongoose = require(`mongoose`)



const url = ``
mongoose.connect(url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => { console.log(`Connected to DB..`) }
)


//this is the static folder
app.use(express.static(path.join(__dirname, `public`)))

const io = socketio(server)
const roomName = "Lab Test 01"


io.on(`connection`,
    (socket) => {
        socket.on(`joinRoom`, ({ username, room }) => {
            const user = userJoin(socket.id, username, room)
            socket.join(user.room)
            //this is for the client 
            socket.emit(`message`, formatMessage(roomName, ` Welcome to chat app`))

            //broadcast for all clients that are on the same socket
            socket.broadcast.to(user.room).emit(`message`, formatMessage(roomName, ` ${user.username} has joined the chat`))
            io.to(user.room).emit(`roomUsers`, {
                room: user.room,
                users: getRoomUsers(user.room)
            })
            //broadcast to all the clients on the server
            //io.emit()
        })
        socket.on(`isTyping`, (status) => {
            const user = getCurrentUser(socket.id);
            //io.broadcast.to(user.room).emit(`typingStat`, status)
            socket.broadcast.to(user.room).emit(`typingStat`, status)
        })
        //listen to client
        //log the input message into the console
        socket.on(`chatMessage`, (msg) => {
            const user = getCurrentUser(socket.id);

            io.to(user.room).emit('message', formatMessage(user.username, msg))
            //mongo start

            const chat = new Chat({
                "from": `${user.username}`,
                "room": `${user.room}`,
                "message": `${msg}`,
                "date": `${moment().format(`MM-DD-YYYY h:m a`)}`
            })
            try {
                chat.save()
            } catch (err) {
                console.log(err)
            }

            //mongo end
        })

        //disconnet
        socket.on(`disconnect`, () => {
            const user = userLeave(socket.id)
            if (user) {
                io.to(user.room).emit(`message`, formatMessage(roomName, `${user.username} has left the chat`))
                io.to(user.room).emit(`roomUsers`, {
                    room: user.room,
                    users: getRoomUsers(user.room)
                })
            }

        })
    })








server.listen(port, () => { console.log(`Server is running at: ${port}`) })