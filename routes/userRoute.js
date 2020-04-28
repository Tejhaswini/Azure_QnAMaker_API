const router = require('express').Router();
const joi = require('@hapi/joi');
const User = require('../model/User');

router.post('/', async (req, res) => {
    let user = req.body;
    const schema = joi.object({
        name: joi.string().min(1).required(),
        email: joi.string().required().email(),
        password: joi.string().min(8).max(1024).required()
    });
    let details = schema.validate(user);
    //If error in validation
    if(details.error){
        res.status(400).send("Error : Please enter valid details");
    }
    //No error in validation
    else{
        //check if email already exists 
        let isExists = await User.findOne({email : user.email});
        if(isExists == null){
            let newUser = new User({
                name : user.name,
                email : user.email,
                password : user.password
            });
            let isSaved = await newUser.save();
            if(isSaved){
                res.send(isSaved.name + " is registered successfully");
            }
        }else{
            res.status(400).send("Error : Email already exists");
        }
    }

});

module.exports = router;