const spaceModel = require("../models/space.model");
const jwt = require("jsonwebtoken");

class spaceServices{
 
    static async addspace(country,state,district,street,propertynumber,postalcode)
    {   try{
                console.log("----userId,spacename,country,state,district,street,propertynumber,postalcode,capacity-----",country,state,district,street,propertynumber,postalcode);
                
                const createNewSpace = new spaceModel({country,state,district,street,propertynumber,postalcode});
                return await createNewSpace.save();
        }catch(err){
            throw err;
        }
    }

    
   
}

module.exports = spaceServices;