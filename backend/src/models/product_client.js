'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_client.init({
    product_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_client',
  });
  return product_client;
};