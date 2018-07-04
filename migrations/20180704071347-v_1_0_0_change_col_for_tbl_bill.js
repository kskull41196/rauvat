'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tbl_bill', 'origin_id', 'updated_id')
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tbl_bill', 'updated_id', 'origin_id')
  }
};