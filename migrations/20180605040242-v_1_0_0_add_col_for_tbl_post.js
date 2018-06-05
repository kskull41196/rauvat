'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addColumn('tbl_post', 'product_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_product',
        key: 'id'
      }
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('tbl_post', 'product_id');
  }
};