'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_user_setting', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_user',
          key: 'id'
        },
        allowNull: false
      },
      support_toi_payment: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      support_cod_payment: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      allow_being_followed: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      show_seen_when_chat: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      allow_being_commented: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      allow_being_made_friend: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      deleted_at: { type: 'TIMESTAMP' }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.dropTable('tbl_user_setting');
  }
};