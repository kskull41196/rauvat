'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addColumn('tbl_product', 'global_area_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_global_area',
        key: 'id'
      }
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('tbl_product', 'global_area_id');
  }
};