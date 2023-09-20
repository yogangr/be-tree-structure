const { treeStructureService, showTreeStructureService, showPrivateTreeStructureService } = require("../service/treeStructureService")
const jwt = require("jsonwebtoken")
const secretKey = "rahasia"

module.exports = class treeStructureController {
    static async createTree(req, res) {
        try {
            const authheader = req.header("Authorization")
            const tokenUser = authheader && authheader.split(" ")[1]
            const decoded = jwt.decode(tokenUser, secretKey)
            const user = decoded.userId
            const tree_structure = req.body
            const data = await treeStructureService(tree_structure, user)

            return res.status(200).json({
                status: true,
                message: "Tree Structure has been created succesfully",
                data: data
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message,
            })
        }
    }

    static async showTree(req, res) {
        try {
            const data = await showTreeStructureService()
            return res.status(200).json({
                status: true,
                message: "Get all data succesfully",
                data: data
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message,
            })
        }
    }

    static async showPrivateTree(req, res) {
        try {
            const authheader = req.header("Authorization")
            const tokenUser = authheader && authheader.split(" ")[1]
            const decoded = jwt.decode(tokenUser, secretKey)
            const user_id = decoded.userId
            const data = await showPrivateTreeStructureService(user_id)
            return res.status(200).json({
                status: true,
                message: "Get private data succesfully",
                data: data
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Private data is only visible to the owner",
            })
        }
    }
}