const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [[true,], `Please enter a name`],
        },
        username: {
            type: String,
            required: [[true,], `please enter a username`],

            validate(value) {
                //this is working
                const criteria = /^[a-zA-Z0-9]{4,}$/
                if (!criteria.test(value)) {
                    throw new Error(`username must be at least 4 and letters`)
                }
            }
        },
        email: {//review
            type: String,
            required: [[true,], `please enter an email`],
            validate(value) {
                //this is working
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!regex.test(value)) {
                    throw new Error(`this is not a valid email `)
                }
            }
        },
        address: {
            street: {
                type: String,
                required: [true, `please enter an address`]
            },
            suite: {
                type: String,//it might include letters
                required: [true, `please enter a suite`]
            },
            city: {
                type: String,
                required: [true, `please enter a city`],
                validate(value) {
                    //this is done
                    const regex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
                    if (!regex.test(value)) {
                        throw new Error(`invalid city name`)
                    }
                }
            },
            zipcode: {
                type: String,
                required: [true, `please enter a zipcode`],
                validate(value) {
                    //this is done 
                    const regex = /^\d{5}-\d{4}$/
                    if (!regex.test(value)) {
                        throw new Error(`enter a valid zip number 55555-5555 `)
                    }
                }
            },
            geo: {
                lat: {
                    type: Number,
                    required: [true, `please enter a lat`]
                },
                lng: {
                    type: Number,
                    required: [true, `please enter a lng`]
                }
            }
        },
        phone: {
            type: String,
            required: [true, `phone`],
            validate(value) {
                //this is done
                const regex = /^\d{1}-\d{3}-\d{3}-\d{4}$/
                if (!regex.test(value)) {
                    throw new Error(`enter a valid phone number 5-555-555-5555 `)
                }
            }
        },
        website: {
            type: String,
            required: [true, `website is required`],
            validate(value) {
                //this is done
                const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if (!regex.test(value)) {
                    throw new Error(`enter a valid website `)
                }
            }
        },
        company: {
            name: {
                type: String,
                required: [true, `please enter a company name`]
            },
            catchPhrase: {
                type: String,
                required: [true, `please enter a catchPhrase`]
            },
            bs: {
                type: String,
                required: [true, `please enter a bs`]
            }
        }
    }
)

module.exports = mongoose.model(`User`, userSchema)
