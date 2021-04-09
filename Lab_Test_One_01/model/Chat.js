const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    "from": {
        type: String,
        required: true
    },
    "room": {
        type: String,
        required: false
    },
    "message": {
        type: String,
        required: false
    },
    "date": {
        type: String,
        required: false
    }
})

module.exports = mongoose.model(`Chat`, ChatSchema)


