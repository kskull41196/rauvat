'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_like');
    return await queryInterface.createTable('tbl_like', {
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
      entity_type: {
        type: Sequelize.STRING,
        validate: {
          isIn: [
            [
              'POST',
              'CMT'
            ]
          ]
        }

      },
      entity_id: {
        type: Sequelize.UUID
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
    await queryInterface.dropTable('tbl_like');
    return await queryInterface.createTable('tbl_like', {
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
      entity_type: {
        type: Sequelize.STRING,
        validate: {
          isIn: [
            [
              'POST',
              'CMT'
            ]
          ]
        }

      },
      entity_id: {
        type: Sequelize.UUID
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
  }
};