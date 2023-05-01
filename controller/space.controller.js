const spaceServices = require('../services/space.service');
exports.createSpace =  async (req,res,next)=>{
    try {
        const { country,state,district,street,propertynumber,postalcode } = req.body;
        let spaceData = await spaceServices.addspace(country,state,district,street,propertynumber,postalcode);
        res.json({status: true,success:spaceData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};

