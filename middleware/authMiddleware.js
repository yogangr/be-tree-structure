const jwt = require("jsonwebtoken")
const secretKey = "rahasia"

const authMiddleware = async (req, res, next) => {
    const authheader = req.header("Authorization")
    if (!authheader) {
        return res.status(401).json({
            error: {
                name: "empty credentials",
                message: "please login or enter your credentials"
            }
        })
    }
    const tokenUser = authheader.split(" ")[1]
    jwt.verify(tokenUser, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                error: {
                    name: err.name,
                    message: err.message,
                }
            })
        }
        req.user = {
            id: decoded.userId,
            name: decoded.name,
            email: decoded.email
        }
        next()
    })
}

module.exports = authMiddleware