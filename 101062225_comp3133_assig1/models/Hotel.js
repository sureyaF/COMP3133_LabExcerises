const mongoose = require( 'mongoose' );
const User = require( './User' )
const HotelSchema = new mongoose.Schema( {
  hotel_name: {
    type: String,
    required: [true, 'Please enter hotel name'],
  
  },
  street: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  postal_code: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  price: {
    type: Number,
    default: 0.0,

  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
  },
  username: {
    type: { User },
    required: [true, 'Please enter user name'],
    unique: [true, 'User already exist Sorry']

  }
} );

const Hotel = mongoose.model( "Hotel", HotelSchema );
module.exports = Hotel;