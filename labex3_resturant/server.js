
const express = require('express');
const mongoose = require('mongoose');

const resturantRouter = require('./routes/ResturantRoutes.js');

const bodyParser = require('body-parser');

const app = express();
app.use(express.json()); // Make sure it comes back as json


//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://sureyaF:UnicornFarah369@cluster0.v5ecj.mongodb.net/labEx3_Mongo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


 
app.use(resturantRouter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());

app.listen(8093, () => { console.log('Server is running...') });
