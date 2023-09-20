'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tree.hasMany(models.Tree, { as: "parent", foreignKey: "parent_id" })
    }
  }
  Tree.init({
    name: DataTypes.STRING,
    desc_1: DataTypes.STRING,
    desc_2: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};