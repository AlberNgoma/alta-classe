'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {

    static associate(models) {
      this.hasOne(models.client, { foreignKey: 'profile_id', as: 'client' })
    }
  }
  profile.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.ENUM('admin', 'client')

  }, {
    sequelize,
    modelName: 'profile',
    freezeTableName: true
  });
  return profile;
};