'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.addIndex('tbl_following', ['user_id', 'follower_id'], {
      indexName: 'tbl_following_user_id_follower_id_key',
      indicesType: 'UNIQUE',
      where: {
        deleted_at: null
      }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.removeIndex(
      'tbl_following', 
      'tbl_following_user_id_follower_id_key')
  }
};