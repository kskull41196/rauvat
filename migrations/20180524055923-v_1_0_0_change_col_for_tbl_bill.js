'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_bill','longitude',{
      type: Sequelize.DOUBLE,
        validate: {
          min: 0,
        },
        defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_bill','latitude',{
      type: Sequelize.DOUBLE,
        validate: {
          min: 0,
        },
        defaultValue: 0
    })
    
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_bill','longitude',{
      type: Sequelize.DOUBLE
    })
    await queryInterface.changeColumn('tbl_bill','latitude',{
      type: Sequelize.DOUBLE
    })
  }
};