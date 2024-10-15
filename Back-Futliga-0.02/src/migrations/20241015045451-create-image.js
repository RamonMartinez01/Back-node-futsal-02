'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      equipo_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'equipos', // Nombre de la tabla a la que referencia
          key: 'id' // Columna clave primaria en la tabla equipos
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Si se elimina un equipo, el valor en equipo_id será null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('images');
  }
};