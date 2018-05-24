'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addColumn('tbl_bill_item', 'bill_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_bill',
        key: 'id'
      },
      allowNull: false
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('tbl_bill_item', 'bill_id');
  }
};