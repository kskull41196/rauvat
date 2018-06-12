'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.addColumn('tbl_user', 'latest_updated_membership', {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }, {
          transaction
        })

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.removeColumn('tbl_user', 'latest_updated_membership', {
        transaction
      })
    })
  }
};
