const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const spaceSchema= new Schema({
        country:{
           type: String,
           
       },
        state:{
           type: String,
           
       },
       district:{
           type: String,
       },
       street:{
           type: String,
       },
       propertynumber:{
           type: String,
       },
       postalcode:{
           type: String,
       }
    },

{timestamps:true});

const spaceModel = db.model('space',spaceSchema);
module.exports = spaceModel;