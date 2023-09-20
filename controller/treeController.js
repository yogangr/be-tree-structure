const treeService = require("../service/treeService")

module.exports = class treeController {
    static async createTree(req, res) {
        const { name, desc_1, desc_2, tree_structure_id } = req.body
        try {
            const data = await treeService(name, desc_1, desc_2, tree_structure_id)
            return res.status(200).json({
                status: true,
                message: "Tree has been created succesfully",
                data: data
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message,

            })
        }
    }
}