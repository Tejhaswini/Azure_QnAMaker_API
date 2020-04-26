const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
console.log(port);

//Import routes
const KBRoute = require('./routes/kbRoute');
const UserRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');

// DataBase Connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true , useUnifiedTopology: true}, () => 
console.log("connected to database!")
);

//Middleware
app.use(express.json());

//Route Middlewares with JWT authentication 
app.use('/api/knowledgebases', KBRoute);
app.use('/api/users', UserRoute);
app.use('/api/login', loginRoute);

//Port 
app.listen(port, () => console.log('Server up and running'));