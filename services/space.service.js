const spaceModel = require("../models/space.model");
const jwt = require("jsonwebtoken");

class spaceServices{
 
    static async addspace(userId,spacename,country,state,district,street,propertynumber,postalcode,capacity)
    {   try{
                console.log("----userId,spacename,country,state,district,street,propertynumber,postalcode,capacity-----",userId,spacename,country,state,district,street,propertynumber,postalcode,capacity);
                
                const createNewSpace = new UserModel({userId,spacename,addr:{country,state,district,street,propertynumber,postalcode},capacity});
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

    static async getUserSpaceList(userId){
        const spaceList = await spaceModel.find({userId})
        return spaceList;
   }
   static async deleteSpace(id){
    const deleted = await spaceModel.findByIdAndDelete({_id:id})
    return deleted;
}

   
}

module.exports = spaceServices