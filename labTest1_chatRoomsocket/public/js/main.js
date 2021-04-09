const chatForm =  document.getElementById('chat-form');
const chatMess = document.querySelector('.chat-messages');
const typingstatus=document.getElementById(`typingstatus`);
const inputTyping=document.getElementById(`msg`);
const userList = document.getElementById('users');
const roomName = document.getElementById('room-name');

// get user name and room
const {username, room} = Qs.parse(location.search,{
    ignoreQueryPrefix: true
});
const socket = io();
// joins room
socket.emit('join',{username,room});
socket.on('roomUsers',({room,users})=>{
    outputRoomName(room);
    outputUsers(users);
});
socket.on('message',message=>{
    console.log(message)
    outputMessage(message)
    //scroll
    chatMess.scrollTop= chatMess.scrollHeight;

});
socket.on(`typingStat`,(status)=>{
    
    typingstatus.innerHTML=`${status}`
  })


chatForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value
    console.log(msg);
    //emits to server 
    socket.emit('chatMessage',msg);
    // clear input
    e.target.elements.msg.value ='';
    //listen for typing
    socket.emit(`isTyping`,'')
   
    e.target.elements.msg = focus();
    
});

inputTyping.addEventListener("keypress",(e)=>{
    //e.preventDefault();
  
    const status=`${username} is typing`
    const noStatus = '';
  
        socket.emit(`isTyping`,status)
    
  })
  
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML =`<p class="meta">${message.username}<span>${message.time}</span></p>
    <p class="text">
       ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}
function outputRoomName(room){
    roomName.innerText= room;


}
function outputUsers(users){
    userList.innerHTML = `${users.map(user=>`<li>${user.username}</li>`).join('')}`;
}