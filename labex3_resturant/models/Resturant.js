const mongoose = require('mongoose');

const ResturantSchema = new mongoose.Schema({

      address: {
        type: "object",
        properties: {
          building: { 
            type:Number,
            trim: true,
            required:true,
           },
          street:{
            type: String,
            required: true,
            trim: true,
            lowercase: true},
          zipcode:{
            type:Number,
            required: true,
            trim: true,
            validate(value) {
              var zipRegex = /^\d{5}$|^\d{5}-\d{4}$/;
              return zipRegex.test(value);
            }

          }
        },
        required: ["building", "street", "zipcode"]  
    
  },
    city:{
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    cuisine: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    }, 
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    restaurant_id:{
      type:Number,
      required: true,
      trim: true,
    }
  });
 
  
 ResturantSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
  ResturantSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  
  ResturantSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });
  ResturantSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });

  const Resturant = mongoose.model("Restaurants", ResturantSchema);
  module.exports = Resturant;