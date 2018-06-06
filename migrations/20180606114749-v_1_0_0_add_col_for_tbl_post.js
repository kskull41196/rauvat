'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addColumn('tbl_post', 'list_image', {
      type: Sequelize.ARRAY({type:Sequelize.STRING}),
        validate:{
          isUrl:true
        }
    });
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('tbl_post', 'list_image');
  }
};