'use strict';

module.exports = {
  up: async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_type: {
        type: Sequelize.ENUM('lecturer', 'demo', 'student'),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};