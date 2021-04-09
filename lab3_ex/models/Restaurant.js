const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    "address": {
        "building": {
            type: Number,
            required: false
        },
        "street": {
            type: String,
            required: false
        },
        "zipcode": {
            type: Number,
            required: false
        }
    },
    "city": {
        type: String,
        required: false
    },
    "cuisine": {
        type: String,
        required: false
    },
    "name": {
        type: String,
        required: false
    },
})

module.exports = mongoose.model(`Restaurant`, RestaurantSchema)