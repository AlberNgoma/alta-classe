'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice_item extends Model {

    static associate(models) {
      this.belongsTo(models.product, { foreignKey: 'product_id', as: 'product' })
      this.belongsTo(models.invoice, { foreignKey: 'invoice_id', as: 'invoice' })
    }
  }
  invoice_item.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMA(10, 2)
  }, {
    sequelize,
    modelName: 'invoice_item',
    freezeTableName: true
  });
  return invoice_item;
};