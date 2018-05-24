'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product','longitude',{
      type: Sequelize.DOUBLE
    })
    await queryInterface.changeColumn('tbl_product','latitude',{
      type: Sequelize.DOUBLE
    })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product','longitude',{
      type: Sequelize.INTEGER
    })
    await queryInterface.changeColumn('tbl_product','latitude',{
      type: Sequelize.INTEGER
    })
  }
};