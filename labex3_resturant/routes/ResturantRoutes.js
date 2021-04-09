const express = require('express');

const resturantModel = require('../models/Resturant');
const app = express();

app.post('/restaurant/', async (req, res) => {
  const restaurant = new resturantModel(req.body);

  try {
    await restaurant.save((err) => {
      if(err){
        //Custome error handling
       
        res.send(err)
      }else{
        res.send(restaurant);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
// find all 
app.get('/restaurants', async (req, res) => {
  const resturant = await resturantModel.find({});
  console.log(req.query.id);
 
  try {
    res.send(resturant);
  } catch (err) {
    res.status(500).send(err);
  }
});
//http://localhost:3000/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/Japanese', async(req,res)=>{
  const resturant = await  resturantModel.find({}).where("cuisine").equals('Japanese');
     
    try {
    
      if(resturant.length != 0){
        res.send(resturant);
      }else{
        res.send(JSON.stringify({status:false, message: "No data found"}))
      }
    }
     catch (err) {
      res.status(500).send(err);
    }
  
});
//http://localhost:3000/restaurants/cuisine/Bakery
app.get('/restaurants/cuisine/Bakery', async(req,res)=>{
  const resturant = await resturantModel.find({}).where("cuisine").equals('Bakery');
  
    
  try {
 
    if(resturant.length != 0){
      res.send(resturant);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}))
    }
  } catch (err) {
    res.status(500).send(err);
  }

});
//http://localhost:3000/restaurants/cuisine/Italian
app.get('/restaurants/cuisine/Italian', async(req,res)=>{
  const resturant = await resturantModel.find({})
  .where("cuisine").
  equals('Italian');
    
  try {
  
  
    if(resturant.length != 0){
      res.send(resturant);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}))
    }
  } catch (err) {
    res.status(500).send(err);
  }

});
//6 DOESNT WORK 
// http://localhost:3000/restaurants?sortBy=ASC
//http://localhost:3000/restaurants?sortBy=DESC
app.get('/restaurants?sortBy=DESC', async (req, res) => {
  const resturant = await resturantModel.find({})
            .in("id cuisine name city restaurant_id").where({"restaurant_id":-1})
    try {
     
    if(resturant.length != 0){
        res.send(resturant);
      }else{  
        res.send(JSON.stringify({status:false, message: "No data found"}))
    } 
    } catch (err) {
      res.status(500).send(err);
    }
  
});


app.get('/restaurants?sortBy=ASC', async (req, res) => {
  const resturant = await resturantModel.find({})
  .in("id cuisine name city restaurant_id").where({restaurant_id:1})
  try{
  

    if(resturant.length != 0){
    res.status(200).send(resturant);
  }else{ 
    res.send(JSON.stringify({status:false, message: "No data found"}))
  }
} catch (err) {
    res.status(500).send(err);
  }
});

app.get('/restaurants/Delicatessen', async(req,res)=>{
  const resturant = await resturantModel.find({"city": {$ne: "Brooklyn"}})
  .where("cuisine").
  equals('Delicatessen');
    
  try {
  
  
    if(resturant.length != 0){
      res.send(resturant);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}))
    }
  } catch (err) {
    res.status(500).send(err);
  }

});

module.exports = app