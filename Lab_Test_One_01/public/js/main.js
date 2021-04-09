
//catch the input
const chatForm = document.getElementById(`chat-form`)
//catch messages div
const chatMessages = document.querySelector(`.chat-messages`)

//catch istyping div
const typingstatus=document.getElementById(`typingstatus`)
const inputTyping=document.getElementById(`msg`)
//get username and room from url
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
})


const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
console.log(username, room)


//connect client to the server socket
const socket = io()

//join chat room 
socket.emit('joinRoom', { username, room })

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

//catch socket responds from the server on specific event
//socket.on on client side is to listen to the server
socket.on(`message`,
  (message) => {
    ouputMessage(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  })
socket.on(`typingStat`,(status)=>{
  typingstatus.innerHTML=`${status}`
})

//message submit
chatForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  //get message
  const msg = e.target.elements.msg.value;
  //send this message to the payload
  //socket.emit on the client side is to call the server
  socket.emit(`chatMessage`, msg)
  //clear input 
  typingstatus.innerHTML=''
  socket.emit(`isTyping`,'')
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
})

//messagetyping
inputTyping.addEventListener("keypress",(e)=>{
  //e.preventDefault();
  const status=`${username} is typing`
  socket.emit(`isTyping`,status)
})


//from server functions
function ouputMessage(message) {
  const div = document.createElement(`div`)
  div.classList.add(`message`)
  div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p><p class="text">${message.text}</p>`;
  document.querySelector(`.chat-messages`).appendChild(div)
  //mongo add start

  //mongo add end

}

//leave the room:
//Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});








// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}


// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}