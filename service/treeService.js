const { Tree } = require("../models")

const treeService = async (name, desc_1, desc_2, tree_structure_id) => {
    const response = await Tree.create({
        name,
        desc_1,
        desc_2,
        parent_id: Tree.id,
        tree_structure_id
    })
    return response
}

module.exports = treeService 