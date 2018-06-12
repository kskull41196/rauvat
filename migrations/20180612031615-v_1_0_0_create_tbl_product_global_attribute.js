'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.createTable('tbl_product_global_attribute', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true
        },
        product_id: {
          type: Sequelize.UUID,
          references: {
            model: 'tbl_product',
            key: 'id'
          }
        },
        global_attribute_id: {
          type: Sequelize.UUID,
          references: {
            model: 'tbl_global_attribute',
            key: 'id'
          }
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
      return await queryInterface.dropTable('tbl_product_global_attribute', {
        transaction
      })
    })
  }
};
