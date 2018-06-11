'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn('tbl_user', 'user_type', {
        transaction
      })
      await queryInterface.sequelize.query('DROP TYPE enum_tbl_user_user_type;', { transaction })
      return await queryInterface.addColumn('tbl_user', 'user_type', {
        type: Sequelize.ENUM,
        values: [
          'NORMAL',
          'PREMIUM'
        ],
        defaultValue: 'NORMAL'
      }, {
          transaction
        })

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn('tbl_user', 'user_type', {
        transaction
      })
      await queryInterface.sequelize.query('DROP TYPE enum_tbl_user_user_type;', { transaction })
      return await queryInterface.addColumn('tbl_user', 'user_type', {
        type: Sequelize.ENUM,
        values: [
          ['Normal', 'Silver', 'Gold', 'Diamond']
        ],
        defaultValue: 'Normal'
      }, {
          transaction
        })
    })
  }
};
