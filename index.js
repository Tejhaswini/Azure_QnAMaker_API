const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = 3000;
console.log(port);

//Import routes
const KBRoute = require('./routes/kbRoute');
const UserRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');

// DataBase Connection
const uri = "mongodb+srv://studentUser:studentUser12345@studentcluster-7tq6p.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true}, () => 
console.log("connected to database!")
);

//Middleware
bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//Route Middlewares with JWT authentication 
app.use('/knowledgebases', KBRoute);
app.use('/users', UserRoute);
app.use('/login', loginRoute);

//Port 
app.listen(port, () => console.log('Server up and running'));