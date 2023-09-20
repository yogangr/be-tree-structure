const { User } = require("../models")
const bcrypt = require("bcrypt")

const registerService = async (user) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(user.password, salt)
    const response = await User.create({
        name: user.name,
        email: user.email,
        telephone: user.telephone,
        password: hashPassword,
    })
    return response
}

module.exports = registerService