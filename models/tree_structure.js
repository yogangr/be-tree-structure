'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree_structure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tree_structure.belongsTo(models.User, { as: "user", foreignKey: "user_id" })
      Tree_structure.belongsTo(models.Tree, { as: "tree", foreignKey: "tree_id" })
    }
  }
  Tree_structure.init({
    tree_name: DataTypes.STRING,
    is_private: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    tree_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tree_structure',
  });
  return Tree_structure;
};