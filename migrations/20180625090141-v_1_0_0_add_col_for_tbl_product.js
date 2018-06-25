'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'origin_id', {
      type: Sequelize.UUID,
      allowNull: true
    });
    return await queryInterface.addColumn('tbl_product', 'edittor', {
      type: Sequelize.UUID,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'origin_id');
    return await queryInterface.removeColumn('tbl_product', 'edittor');
  }
};
