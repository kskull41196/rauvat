'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_user', 'longitude', {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_user', 'latitude', {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_like', {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_comment', {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_order', {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_purchase', {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0
    })
   
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_user', 'longitude', {
      type: Sequelize.DOUBLE
    })
    await queryInterface.changeColumn('tbl_user', 'latitude', {
      type: Sequelize.DOUBLE
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_like', {
      type: Sequelize.INTEGER
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_comment', {
      type: Sequelize.INTEGER
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_order', {
      type: Sequelize.INTEGER
    })
    await queryInterface.changeColumn('tbl_user', 'amount_of_purchase', {
      type: Sequelize.INTEGER
    })
    
  }
};