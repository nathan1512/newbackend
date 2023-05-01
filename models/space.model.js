const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const spaceSchema= new Schema({

country:{
           type: String,
           required:true
       },
state:{
           type: String,
           required:true
},
district:{
           type: String,
           required:true
       },
street:{
           type: String,
           required:true
       },
propertynumber:{
           type: String,
           required:true
       },
postalcode:{
           type: String,
           required:true
       }
    },
);

const spaceModel = db.model('space',spaceSchema);
module.exports = spaceModel;