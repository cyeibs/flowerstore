'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Bins',
      [
        {
          userId: 2,
          flowerId: 2,
          count: 7,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          flowerId: 1,
          count: 5,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          flowerId: 1,
          count: 5,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          flowerId: 1,
          count: 5,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Bins', null, {});
  },
};
