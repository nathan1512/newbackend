const spaceModel = require("../models/space.model");
const jwt = require("jsonwebtoken");

class spaceServices{
 
    static async addspace(userEmail,country,state,district,street,propertynumber,postalcode,spacename,capacity,imageurl)
    {   try{
                console.log("----userEmail,spacename,country,state,district,street,propertynumber,postalcode,capacity,imageurl-----",userEmail,country,state,district,street,propertynumber,postalcode,spacename,capacity,imageurl);
                
                const createNewSpace = new spaceModel({userEmail,country,state,district,street,propertynumber,postalcode,spacename,capacity,imageurl});
                return await createNewSpace.save();
        }catch(err){
            throw err;
        }
    }
    static async getSpaceById(id){
        try{
            return await spaceModel.findOne({_id:id});
        }catch(err){
            console.log(err);
        }
    }

    static async getUserSpaceList(useremail){
        const spaceList = await spaceModel.find({userEmail:useremail})
        return spaceList;
   }
   static async getUserSpaceFull(useremail){
    const spaceList = await spaceModel.find({userEmail:useremail})
    return spaceList;
}
   static async deleteSpace(id){
    const deleted = await spaceModel.findByIdAndDelete({_id:id})
    return deleted;
}
static async searchSpaces(input){
    const searchResults = await spaceModel.find({spacename:input})
    return searchResults;
   
}}

module.exports = spaceServices;