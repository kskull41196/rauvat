'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_post', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_user',
          key: 'id'
        },
        allowNull: false
      },
      amount_of_like: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
        },
        defaultValue: 0,
        allowNull: false
      },
      amount_of_comment: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
        },
        defaultValue: 0,
        allowNull: false
      },
      is_from_store: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      privacy: {
        type: Sequelize.ENUM,
        values: ['PUBLIC', 'FRIEND', 'ONLY_ME'],
        defaultValue: 'PUBLIC',
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
    return await queryInterface.dropTable('tbl_post');
  }
};