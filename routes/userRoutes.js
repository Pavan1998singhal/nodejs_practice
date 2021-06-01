const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

router.post('/signup', async(req, res) => {
    const body = req.body;

    if(!(body.email && body.password))
        return res.status(400).send({error: "Data not formatted properly"});

    const user = new User(body);
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    user.save().then((doc) => res.status(201).send(doc));

});

router.post('/login', async(req, res) => {
    const body = req.body;

    const user = await User.findOne({email: body.email});
    if(user){
        const validPassword = await bcrypt.compare(body.password, user.password);
        if(validPassword)
            res.status(200).send({message: "Login successfully !!"});
        else
            res.status(400).send({error: "Invalid Password"});
    }else{
        res.status(401).send({error: "User not exits"});
    }
});

module.exports = router;