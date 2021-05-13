'use strict';

module.exports = {
  up: async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('lecturers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      lecturer_no: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable('lecturers');
  }
};