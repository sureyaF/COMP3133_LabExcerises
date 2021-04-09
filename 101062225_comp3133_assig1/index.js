const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./Schemas');
const Resolvers = require('./Resolvers');

const { ApolloServer } = require('apollo-server-express');
const bodyParser = require("body-parser")


//Store sensetive information to env variables
const dotenv = require('dotenv');
dotenv.config();

//mongoDB Atlas Connection String
const url = process.env.MONGODB_URL;

//Connect to mongoDB Atlas
const connect = mongoose.connect(url, 
{ 
      useNewUrlParser: true,
      useUnifiedTopology: true
});

connect.then((db) => {
      console.log('Connected correctly to server!');
}, (err) => {
      console.log(err);
});

//Define Apollo Server
const server = new ApolloServer({
      typeDefs: TypeDefs.typeDefs,
      resolvers: Resolvers.resolvers
});

//Define Express Server
const app = express();

server.applyMiddleware({ app });
app.use(bodyParser.urlencoded({ extended: true }));
app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));