const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema( {
  username: {
    type: String,
    required: [true, 'Please enter first name'],
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
  }
} );

const User = mongoose.model( "User", UserSchema );
module.exports = User;