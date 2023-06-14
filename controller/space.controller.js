const spaceServices = require("../services/space.service");
const {Buffer}=require('buffer');
const fs = require('fs');
exports.createSpace =  async (req,res,next)=>{
    try {
        const cloudinary = require('cloudinary').v2;
        cloudinary.config({ 
            cloud_name: 'dkydtkued', 
            api_key: '615639781883824', 
            api_secret: 'JnPT3QBXjUif1h1-2txILus7TEs' 
          });
          const { userEmail,country,state,district,street,propertynumber,postalcode,spacename,capacity} = req.body;
          const file = req.body.image;
          const imageBuffer = Buffer.from(file, 'base64');
          const tempFilePath = './assets/tempImage.jpg';
          fs.writeFileSync(tempFilePath, imageBuffer);

          const result = await cloudinary.uploader.upload(tempFilePath, {
            resource_type: 'auto'});
            console.log(result);
            const imageurl=result.secure_url;
            fs.unlinkSync(tempFilePath);
        
        let spaceData = await spaceServices.addspace(userEmail,country,state,district,street,propertynumber,postalcode,spacename,capacity,imageurl);
        res.json({status: true,success:spaceData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};
exports.getSpaceById =  async (req,res,next)=>{
    try {
        const {id} = req.body;
        let spaceData = await spaceServices.getSpaceById(id);
        res.json({status: true,success:spaceData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
exports.getSpaceList =  async (req,res,next)=>{
    try {
        const { userEmail } = req.body;
        let spaceData = await spaceServices.getUserSpaceList(userEmail);
        res.json({status: true,success:spaceData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
exports.getSpaces =  async (req,res,next)=>{
    try {
        const { userEmail } = req.body;
        let spaceData = await spaceServices.getUserSpaceFull(userEmail);
        res.json({status: true,success:spaceData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
exports.deleteSpace =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deletedData = await spaceService.deleteSpace(id);
        res.json({status: true,success:deletedData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
exports.searchSpace =  async (req,res,next)=>{
    try {
        const { query } = req.body;
        let searchResult = await spaceServices.searchSpaces(query);
        res.json({status: true,success:searchResult});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
    
}
exports.bookSpace =async (req,res,next)=>{
    try {
        const { spaceId,useremail,bookingdate } = req.body;
        let booking = await spaceServices.bookSpace(spaceId,useremail,bookingdate);
        res.json({status: true,success:booking});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}
exports.getBookedSpaces =async (req,res,next)=>{
    try {
        const { useremail } = req.body;
        let bspaces = await spaceServices.getBookedSpaces(useremail);
        res.json({status: true,success:bspaces});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }}

