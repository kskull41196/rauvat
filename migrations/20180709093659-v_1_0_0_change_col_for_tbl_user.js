'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'sex');
    await queryInterface.sequelize.query('DROP TYPE enum_tbl_user_sex;');
    return await queryInterface.addColumn('tbl_user', 'sex', {
      type: Sequelize.STRING,
      defaultValue: 'MALE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'sex');
    return await queryInterface.addColumn('tbl_user', 'sex', {
      type: Sequelize.STRING,
      defaultValue: 'MALE'
    })
  }
};
