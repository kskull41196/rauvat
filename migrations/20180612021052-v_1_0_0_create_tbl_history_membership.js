'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.createTable('tbl_history_membership', {
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
          }
        },
        type: {
          type: Sequelize.ENUM,
          values: [
            'UPGRADE',
            'DOWNGRADE'
          ],
          defaultValue: 'UPGRADE'
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
      }, {
          transaction
        })

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.dropTable('tbl_history_membership', {
        transaction
      })
    })
  }
};
