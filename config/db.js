const mongoose = require('mongoose');
// mongoose.set('debug', true);


const connection = mongoose.createConnection(`mongodb+srv://sarthakoberoiofficial:password12345678@cluster0.itn3z44.mongodb.net/db1`).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection;