'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {

    static associate(models) {
      this.belongsTo(models.profile, { foreignKey: 'profile_id', as: 'profile' });
      this.belongsToMany(models.product, { through: models.product_client, foreignKey: 'client_id', as:'products' })
    }
  }
  client.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'client',
    freezeTableName: true
  });
  return client;
};