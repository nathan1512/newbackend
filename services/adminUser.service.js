const adminUserModel = require("../models/adminUser.model")

class adminUserServices{
 

    static async getadminUserByEmail(email){
        try{
            return await adminUserModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }

    static async checkadminUser(email){
        try {
            return await adminUserModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }
}

module.exports = adminUserServices;