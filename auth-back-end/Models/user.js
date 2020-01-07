const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
   
    firstName: {
        type: String,
        //required: true,
        //trim: true
    },
    lastName: {
        type: String,
        //required: true,
        //trim: true
    },
    username: {
        type: String,
        //required: true,
        //trim: true
    },
    email: {
        type: String,
        // required: true,
        // trim: true,
        // lowercase: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error('Email is invalid')
        //     }
        // }
    },
    password: {
        type: String,
        // required: true,
        // minlength: 7,
        // trim: true,
        // validate(value) {
        //     if (value.toLowerCase().includes('password')) {
        //         throw new Error('Password cannot contain "password"')
        //     }
        // }
    },
     //phoneNumber: {
       //  type: Number,
    //     default: 0,
    //     validate(value) {
    //         if (value < 0) {
    //             throw new Error('Age must be a postive number')
    //         }
    //     }
    // },
//      dateofBirth: {
//         type: Date,
//    //     default: 0,
//    //     validate(value) {
//    //         if (value < 0) {
//    //             throw new Error('Age must be a postive number')
//    //         }
//    //     }
//     },
    // department:{
    //     type: String
    // },
    // gender:{
    //     type: String
    // },
    // contact:{
    //     type : String
    // }
    
})

module.exports = User