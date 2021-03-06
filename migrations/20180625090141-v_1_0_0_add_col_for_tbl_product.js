'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'origin_id', {
      type: Sequelize.UUID,
      allowNull: true
    });
    await queryInterface.addColumn('tbl_product', 'editor_type', {
      type: Sequelize.ENUM,
      values: ['USER', 'EMPLOYEE'],
      allowNull: true
    });
    return await queryInterface.addColumn('tbl_product', 'editor', {
      type: Sequelize.UUID,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'origin_id');
    await queryInterface.removeColumn('tbl_product', 'editor_type');
    return await queryInterface.removeColumn('tbl_product', 'editor');
  }
};
