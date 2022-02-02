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
      'Flowers',
      [
        {
          fName: 'Белая роза',
          descr: 'Прекрасный цветок для домохозяек',
          pic: './images/flowers/CR5w1PWWsAAJqL_.jpg',
          price: 200,
          popular: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fName: 'Ромашка',
          descr: 'Отлично подходит девочкам до 15 лет',
          pic: './images/flowers/romaska.jpeg',
          price: 150.5,
          popular: false,
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
     await queryInterface.bulkDelete('Flowers', null, {});
  },
};
