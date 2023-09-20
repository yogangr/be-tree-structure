const { Tree_structure, User, Tree } = require("../models")

const treeStructureService = async (tree_structure, user) => {
    const response = await Tree_structure.create({
        tree_name: tree_structure.name,
        is_private: tree_structure.is_private,
        user_id: user
    })
    return response
}

const showTreeStructureService = async () => {
    const response = await Tree_structure.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: { is_private: false },
        include: [
            {
                model: User,
                as: "user",
                attributes: { exclude: ["createdAt", "updatedAt", "password", "email"] }
            },
            {
                model: Tree,
                as: "tree",
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include: [
                    {
                        model: Tree,
                        as: "parent",
                        attributes: { exclude: ["createdAt", "updatedAt"] },
                    }
                ]
            }
        ]
    })
    return response
}

const showPrivateTreeStructureService = async (user_id) => {
    const response = await Tree_structure.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: { user_id: user_id, is_private: true },
        include: [
            {
                model: User,
                as: "user",
                attributes: { exclude: ["createdAt", "updatedAt", "password", "email"] }
            }
        ]
    })
    return response
}

module.exports = { treeStructureService, showTreeStructureService, showPrivateTreeStructureService }