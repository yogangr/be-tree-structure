const registerService = require("../service/registerService")

module.exports = class registerController {
    static async register(req, res) {
        const user = await registerService(req.body)
        if (user) {
            return res.status(201).json({
                status: true,
                message: "the user has successfully registered",
                data: user
            })
        } else {
            return res.status(400).json({
                status: false,
                message: "user failed to register, enter the form correctly",
                data: {}
            })
        }
    }
}