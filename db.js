const mongoose = require("mongoose");

// var mongoDBURL = 'mongodb+srv://talantiarun:arunmgDB@cluster0.0gfwmw5.mongodb.net/test'

var mongoDBURL = 'mongodb+srv://test:test123@cluster0.0gfwmw5.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose
