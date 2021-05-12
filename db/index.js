/**
 * 1. create a connection function for mongodb
 * 2. Start a local mongodb server connection
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;


// Create the connection function
/*const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then( () => {
        console.log("MongoDB connected...");

        //Seed data
    })
    .catch( (err) => {
        console.log(err.message);

        //Exit with failure
        process.exit(1);
    })
} */

// Async mongoose connection 
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false 

        });

        console.log("MongoDB connected...");

        //Seed data

    } catch (error) {
        console.error(err.message);

        //Exit with failure;
        process.exit(1);
    }
}


module.exports = connectDB;

// CREATE SCHEMA
const crudSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String
})
const Crud = mongoose.model('Crud', crudSchema);

Crud.create({
    name: " First name ",
    email: "abc@gmail.com",
    country: "Eritrea"
}, (err, crud) => {
    if (err) {
        console.log(err)
    }else {
        console.log(crud)
    }
})


