const { gql } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');


exports.typeDefs = gql `

   type Hotel {
     id: ID!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     username: Int!
     
   }
   type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    
  }
  type Booking{
     booking_date: Date!
     booking_start:Date!
     booking_end:Date!
     user_id: Int!
     hotel_id: Int!
  }

   type Query {
     getHotel: [Hotel]
     getHotelByHotel_Name(hotel_name: String!):[Hotel]
     getHotelByCity(city: String!): [Hotel]
     getUser: [User]
     getBooking:[Booking]
     
    
   }
   scalar Date
   type Mutation {
  
     addHotel(
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username:Int!
        ) :Hotel
        
        addUser(
         username: String!
         password: String!
         email: String!
          ):User     
        
       addBooking(
         booking_date: Date!
         booking_start:Date!
         booking_end: Date!
         user_id: Int!
         hotel_id: Int!
       ):Booking
      
      
     
  
   }
  

 
`