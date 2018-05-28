'use strict';

module.exports = {
    up: async function (queryInterface, Sequelize) {
        return await queryInterface.createTable('tbl_employee', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true
            },
            fullname: {
              type: Sequelize.STRING,
              allowNull: false
            },
            avatar: {
              type: Sequelize.STRING,
              allowNull: true
            },
            phone: {
              type: Sequelize.STRING,
              allowNull: false
            },
            email: {
              type: Sequelize.STRING,
              allowNull: false
            },
            password: {
              type: Sequelize.STRING,
              allowNull: false
            },    
            status :{
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
        return await queryInterface.dropTable('tbl_employee');
    }
};