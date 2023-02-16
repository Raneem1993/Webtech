const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use(cors());










const PORT = 3000;




app.listen(PORT, (error)=>{
    if(error){
        console.log(error);

    }else{
        console.log(`Server started und listening on Port ${PORT}`)
    }
})

mongoose.connect( process.env.DB_CONNECTION,{ dbName: process.env.DB_NAME })

const db = mongoose.connection;
db.on('error', err=>{
    console.log(err);
});
db.once('open', ()=>{
    console.log('connected to DB')
});

