const spaceModel = require("../models/space.model");
const jwt = require("jsonwebtoken");

class spaceServices{
 
    static async addspace(userEmail,country,state,district,street,propertynumber,postalcode)
    {   try{
                console.log("----userEmail,spacename,country,state,district,street,propertynumber,postalcode,capacity-----",userEmail,country,state,district,street,propertynumber,postalcode);
                
                const createNewSpace = new spaceModel({userEmail,country,state,district,street,propertynumber,postalcode});
                return await createNewSpace.save();
        }catch(err){
            throw err;
        }
    }
    static async getSpacesById(_id){
        try{
            return await spaceModel.findOne({_id});
        }catch(err){
            console.log(err);
        }
    }

    static async getUserSpaceList(userEmail){
        const spaceList = await spaceModel.find({userEmail})
        return spaceList;
   }
   static async deleteSpace(id){
    const deleted = await spaceModel.findByIdAndDelete({_id:id})
    return deleted;
}

   
}

module.exports = spaceServices;