const { Router } = require("express")
const router = Router()

const auth = require("./auth")
const tree = require("./tree")

router.get("/", (req, res) => {
    return res.status(200).json({
        status: true,
        message: "server running"
    })
})

router.use("/v1/api", auth)
router.use("/v1/api", tree)


module.exports = router