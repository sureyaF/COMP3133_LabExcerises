//we can create a database but we are keeping things in memory
const users = [];


//user join
function userJoin(id, username, room) {
    const user = { id, username, room }
    users.push(user)
    return user
}


//user leaves
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

//getroom users 
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

//get the current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
}