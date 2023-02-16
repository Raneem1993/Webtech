const express = require('express');
const router = express.Router();
const User = require('./../models/users');


router.get('/users', async(req,res)=>{
    res.send({ message: "Hallo FIW"})
})

router.post('/users', async(req, res)=>{
    console.log(' in post')
    console.log('req', req.body)

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: req.body.password,
        status: req.body.status,
        role: req.body.role,

    })
    console.log('newUser', newUser)
    await newUser.save();
    res.send(newUser);

});




module.exports = router;