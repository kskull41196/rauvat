'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'bank_user_name', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('tbl_user', 'bank_name', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('tbl_user', 'bank_serial', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('tbl_user', 'bank_branch', {
      type: Sequelize.STRING,
      allowNull: true
    });
    return await queryInterface.addColumn('tbl_user', 'bank_province', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'bank_user_name');
    await queryInterface.removeColumn('tbl_user', 'bank_name');
    await queryInterface.removeColumn('tbl_user', 'bank_serial');
    await queryInterface.removeColumn('tbl_user', 'bank_branch');
    return await queryInterface.removeColumn('tbl_user', 'bank_province');
  }
};
