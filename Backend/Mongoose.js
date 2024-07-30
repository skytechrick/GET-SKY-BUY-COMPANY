require('dotenv').config();
const mongoose = require("mongoose");
const URL = process.env.MongodbConnectionString;
mongoose.connect(URL);
const db = mongoose.connection;
db.on('error',(error) => {
    console.log('MongoDB connection error:');
});
db.once('open',() => {
    console.log('Connected to MongoDB database.');
});
const User = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
        default: "No ID Specified",
        trim:true,
    },
    PersonalData:{
        First_Name: {type: String, required: true},
        Last_Name: {type: String, required: true},
        Mobile_Number: {type: String, required: true},
    },
    Password:{
        type: String,
        required: true,
        default: "No Password Specified",
        trim:true,
    },
    Email:{
        type: String,
        required: true,
        default: "Unauthorized Creation",
        trim:true,
    },
    Ban:{
        type:String,
        required: true,
        default: "No",
        trim:true,
        enum: ['Yes', 'No'],
    },
    Verified:{
        type:String,
        required: true,
        default: "No",
        trim: true,
        enum: ['Yes', 'No'],
    },
    createdAt: {
        type: Date,
    },
    LoggedIn:{type:Object},
    Cart:{type:Object},
    BuyNow:{type:Object},
    Order_IDs:{type:Object},
    Address_List:{type:Object},
    Search_History:{type:Object},
    Interested_Products:{type:Object},
    Notification:{type:Object},
    Favourite:{type:Object},
    Wishlist:{type:Object},
    SBCoins:{type:Object},
    Bank:{type:Object},
});

const User1 = mongoose.model("User", User);

module.exports = {
    User:User1
}

