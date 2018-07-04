'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tbl_product', 'origin_id', 'updated_id')
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tbl_product', 'updated_id', 'origin_id')
  }
};