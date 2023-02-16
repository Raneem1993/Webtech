const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email: String,
        contactNumber: String,
        password: String,
        status: String,
        role: String,

    }
    
    );
    module.exports = mongoose.model('User', schema);