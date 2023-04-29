const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const spaceSchema= new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    spacename: {
        type: String,
        required: true
    },
    addr:{
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
    capacity:{
        type:Number,
        required:true
    }
},
{timestamps:true});

const space = db.model('space',spaceSchema);
module.exports = space;