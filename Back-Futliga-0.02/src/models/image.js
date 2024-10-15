'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Asociación con la tabla equipo
      this.belongsTo(models.equipo, {
        foreignKey: 'equipo_id',
        as: 'equipo'
      });
    }
  }
  image.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    equipo_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'image',
    tableName: 'images',
    timestamps: true
  });
  return image;
};