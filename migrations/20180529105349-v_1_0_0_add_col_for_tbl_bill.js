'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn('tbl_bill', 'current_paid_history_id', {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_paid_history',
          key: 'id'
        }
      }, {
          transaction
        })
      return await queryInterface.addColumn('tbl_bill', 'current_bill_activity_id', {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_bill_activity',
          key: 'id'
        }
      }, {
          transaction
        })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn('tbl_bill', 'current_paid_history_id', {
        transaction
      })
      return await queryInterface.removeColumn('tbl_bill', 'current_bill_activity_id', {
        transaction
      })
    })
  }
};
