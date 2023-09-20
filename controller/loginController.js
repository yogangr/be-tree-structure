const loginService = require("../service/loginService")
const jwt = require("jsonwebtoken")
const secretKey = "rahasia"

module.exports = class loginController {
    static async login(req, res) {
        const { email, password } = req.body
        try {
            const user = await loginService(email, password)
            if (!user) {
                return res.status(400).json({
                    errors: [
                        {
                            message: "wrong password",
                            field: "password"
                        }
                    ]
                })
            }
            const accessToken = jwt.sign({
                userId: user.id,
                name: user.name,
                email: user.email,
            }, secretKey, {
                expiresIn: "10d"
            })
            return res.status(200).json({
                status: true,
                accessToken,
                expiredAt: "10 days"
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message,
            })
        }
    }
}