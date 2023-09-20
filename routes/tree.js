const { Router } = require("express")
const router = Router()

const treeStructureController = require("../controller/treeStructureController")
const treeController = require("../controller/treeController")

router.post("/tree/create", treeStructureController.createTree)
router.get("/tree/getdata", treeStructureController.showTree)
router.get("/tree/getprivatedata", treeStructureController.showPrivateTree)
router.post("/tree/item/create", treeController.createTree)

module.exports = router