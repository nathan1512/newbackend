const spaceServices = require("../services/space.service");
exports.createSpace =  async (req,res,next)=>{
    try {
        const { userId,country,state,district,street,propertynumber,postalcode } = req.body;
        let spaceData = await spaceServices.addspace(userId,country,state,district,street,propertynumber,postalcode);
        res.json({status: true,success:spaceData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};
exports.getSpaceList =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let spaceData = await spaceService.getUserSpaceList(userId);
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

