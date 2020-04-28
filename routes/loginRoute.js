const router = require('express').Router();
const joi = require('@hapi/joi');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

//Login
router.post('/', async (req, res) => {
    let user = req.body;
    console.log(user);
    const schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().min(8).max(1024).required()
    });
    let details = schema.validate(user);
    
    //If error in validation
    if(details.error){
        res.status(400).send("Error : Enter valid details");
    }
    //No error in validation
    else{
        //check if email and password are right
        console.log(user.email);
        let currentUser = await User.findOne({email : user.email});
        if(currentUser == null){
            res.status(400).send("Error : User is not found. Please register!");
        }
        else if(user.password == currentUser.password){
            jwt.sign({_id:currentUser._id},"teju",(err,token)=>{
                console.log(token);
                res.header("auth-token", token).send({"token" : token});
            })
        }
        else
        {
            res.send("Login unsuccessful");
        }
    }
});

module.exports = router;