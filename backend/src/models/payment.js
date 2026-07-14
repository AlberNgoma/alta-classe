'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
   
    static associate(models) {
      this.belongsTo(models.invoice, {foreignKey : 'invoice_id', as : 'invoice'})
    }
  }
  payment.init({
    invoice_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payment',
    freezeTableName: true
  });
  return payment;
};