'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tbl_post', 'origin_id', 'updated_id')
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tbl_post', 'updated_id', 'origin_id')
  }
};