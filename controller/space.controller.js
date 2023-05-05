const spaceServices = require("../services/space.service");
exports.createSpace =  async (req,res,next)=>{
    try {
        const { userEmail,country,state,district,street,propertynumber,postalcode,spacename,capacity } = req.body;
        let spaceData = await spaceServices.addspace(userEmail,country,state,district,street,propertynumber,postalcode,spacename,capacity);
        res.json({status: true,success:spaceData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};
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

