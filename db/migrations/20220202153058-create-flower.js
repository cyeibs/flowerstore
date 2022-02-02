'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fName: {
        type: Sequelize.STRING
      },
      descr: {
        type: Sequelize.STRING
      },
      pic: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL(6, 2)
      },
      popular: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Flowers');
  }
};