const mongoose = require('mongoose');
const User= require('./User');
const Hotel= require('./Hotel')
const BookingSchema = new mongoose.Schema({
    booking_date: {
    type: Date,
    default: Date.now,
    alias: 'Todays Date'
    
  },
  booking_start: {
    type: Date,
    default: Date.now,
    alias: 'Start Date'
   
  },
  
  booking_end: {
    type: Date,
    required: true,
    alias: 'End Date'
   
  },
  
  user_id: {
    type: {User},
    required: true,
    trim: true,
    unique:true
   
  },
  
  hotel_id: {
    type: {Hotel},
    trim: true,
    unique: true,
    required: true
   
  }
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;