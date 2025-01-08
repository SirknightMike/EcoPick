'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', [
    {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'Admin',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Jack Louw',
      email: 'jacklouw43@gmail.com',
      password: 'password123',
      role: 'Admin',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
