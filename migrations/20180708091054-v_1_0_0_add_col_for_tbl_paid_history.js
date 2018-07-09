'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_paid_history', 'vnpay_history_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_vnpay_history',
        key: 'id'
      },
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_paid_history', 'vnpay_history_id');
  }
};
