const express = require('express');
const mongoose = require('mongoose')
const app = express()
const router = express.Router();






mongoose.
connect('mongodb://localhost:27017/mcrecords')
.then(() =>{
    app.listen(3000, ()=>{
        console.log('API running on port 3000....')
    });
    console.log('Connected to MongoDB datatbase')
}).catch((error) =>{
    console.log(error)
})
