'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice extends Model {

    static associate(models) {
      this.hasMany(models.invoice_item, { foreignKey: 'invoice_id', as: 'invoices_item' })
      this.hasOne(models.payment, { foreignKey: 'invoice_id', as: 'payment' })
    }
  }
  invoice.init({
    total: DataTypes.STRING,
    status: DataTypes.ENUM('pago', 'pendente', 'recusado')

  }, {
    sequelize,
    modelName: 'invoice',
    freezeTableName: true
  });
  return invoice;
};