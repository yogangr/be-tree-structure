const { Router } = require("express")
const router = Router()

const registerValidation = require("../validation/registerValidation")
const loginValidation = require("../validation/loginValidation")
const handleValidation = require("../validation/handleValidation")
const registerController = require("../controller/registerController")
const loginController = require("../controller/loginController")

router.post("/auth/register", registerValidation, handleValidation, registerController.register)
router.post("/auth/login", loginValidation, handleValidation, loginController.login)

module.exports = router