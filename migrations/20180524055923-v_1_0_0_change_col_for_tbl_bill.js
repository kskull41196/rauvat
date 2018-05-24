'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_bill','longitude',{
      type: Sequelize.DOUBLE
    })
    await queryInterface.changeColumn('tbl_bill','latitude',{
      type: Sequelize.DOUBLE
    })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_bill','longitude',{
      type: Sequelize.INTEGER
    })
    await queryInterface.changeColumn('tbl_bill','latitude',{
      type: Sequelize.INTEGER
    })
  }
};