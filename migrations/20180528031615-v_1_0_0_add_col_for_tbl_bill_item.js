'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addColumn('tbl_bill_item', 'paid_history_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_paid_history',
        key: 'id'
      },
      allowNull: false
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('tbl_bill_item', 'paid_history_id');
  }
};