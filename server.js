/**
 * 1. Creating an express server
 * 2. COnnect to mongodb
 * 3. Initialisze express
 * 4. Initialize express middleware
 * 5. Create a simple get request route (optional)
 * 6. Inject our routes
 * 7. Listen to our app connection
 */

 const express = require('express');
 const connectDB = require('./db');
 require('dotenv').config(); //allows us to use the environment variales in .env
 const { PORT } = process.env;


 //Connect to db
 connectDB();

 //Initialise express

 // Initialise express middleware
 app.use(express.json({ extended: false}));


 //Initiallise express
 const app = express()

 //PORT
 const port = process.env.PORT || PORT;
 
 // !important! 
 // you need to install the following libraries |express|[dotenv > if required]
 // or run this command >> npm i express dotenv 
 
 // Create a basic express route
 app.get('/' , (req , res) => res.json({ message: "Welcome to the CRUD database"}));
 
 
 app.listen(port , () => console.log( `app up and running on port ${port}`));