const { Router } = require("express")
const router = Router()

const treeStructureController = require("../controller/treeStructureController")

router.post("/tree/create", treeStructureController.createTree)
router.get("/tree/getdata", treeStructureController.showTree)
router.get("/tree/getprivatedata", treeStructureController.showPrivateTree)

module.exports = router