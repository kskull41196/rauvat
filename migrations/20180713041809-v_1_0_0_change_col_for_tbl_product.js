'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'price', {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'price', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  }
};