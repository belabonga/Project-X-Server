'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate : "cascade",
        onDelete : "cascade"
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 5
      },
      cover: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 5
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5
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
    await queryInterface.dropTable('Transactions');
  }
};