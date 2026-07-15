'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {

    static associate(models) {
      this.belongsToMany(models.client, { through: models.product_client, foreignKey: 'product_id', as: 'clients' })
      this.hasMany(models.invoice_item, { foreignKey: 'product_id', as: 'invoces' })
    }
  }
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    category: DataTypes.ENUM('higiene', 'protecao', 'decorativo', 'tratamento'),
    picture: DataTypes.STRING,
    madeIn : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
    freezeTableName: true
  });
  return product;
};