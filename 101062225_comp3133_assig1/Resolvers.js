const Hotel = require( './models/Hotel' );
const User = require( './models/User' );
const Booking = require( './models/Booking' );


exports.resolvers = {
    Query: {
        getHotel: async ( parent, args ) => {
            return await Hotel.find( {} );
        },
        getHotelByHotel_Name: (parent, args) => Hotel.findById(args.hotel_name),
        getHotelByCity: async ( parent, args ) => {
            return await Hotel.find( { "city": args.city } );
        },
        getUser: async ( parent, args ) => {
            return await User.find( {} );
        },
        getBooking: async ( parent, args ) => {
            return await Booking.find( {} );
        },



    },
    Mutation: {
        addHotel: async ( parent, args ) => {
            let newHotel = new Hotel( {
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username
            } );
            return await newHotel.save();
        },
        addUser: async ( parent, args ) => {
            let newUser = new User( {
                username: args.username,
                password: args.password,
                email: args.email,
            } );
            return await newUser.save();
        },
        addBooking: async ( parent, args ) => {
            let newBooking = new Booking( {
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id,
                hotel_id: args.hotel_id
            } );
            return await newBooking.save();
        },
    }
}