const express = require('express');
const app = express();
const port = 4000;

//connection string  mongodb://localhost:27017
//mongo client

const MongoClient = require('mongodb').MongoClient;


//SETUP MONGOOSE
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/crudapp';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('database connection successful')
    }
})

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



app.listen(port, () => console.log(`App is up and running on port ${port}`));
