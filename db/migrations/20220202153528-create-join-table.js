'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JoinTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flowerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Flowers',
          key: 'id',
        },
      },
      catId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cats',
          key: 'id',
        },
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
    await queryInterface.dropTable('JoinTables');
  }
};