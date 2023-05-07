const adminUserServices = require('../services/adminUser.service');

exports.adminLogin = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Parameter are not correct');
        }
        let adminUser = await adminUserServices.checkadminUser(email);
        if (!adminUser) {
            throw new Error('adminUser does not exist');
        }

        const isPasswordCorrect = await adminUser.comparePassword(password);

        if (isPasswordCorrect === false) {
            throw new Error(`adminUsername or Password does not match`);
        }

        // Creating Token

        let tokenData;
        tokenData = { _id: adminUser._id, email: adminUser.email };
    

        const token = await adminUserServices.generateAccessToken(tokenData,"secret","1h")

        res.status(200).json({ email: adminUser.email,status: true, success: "sendData", token: token });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}