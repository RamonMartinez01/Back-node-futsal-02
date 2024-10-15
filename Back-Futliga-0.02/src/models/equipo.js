'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definir las asociaciones aquí

      //asociación con modelo image
      this.hasMany(models.image, {
        foreignKey: 'equipo_id',
        as: 'image'
      });
    }
  }
  equipo.init({
    nombre_equipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'equipo',
    tableName: 'equipos',
    timestamps: true
  });
  return equipo;
};