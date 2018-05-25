'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_global_area','parent_id',{
      type: Sequelize.UUID,
      allowNull: true
    })
   
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_global_area','parent_id',{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      allowNull: true
    })
    
  }
};