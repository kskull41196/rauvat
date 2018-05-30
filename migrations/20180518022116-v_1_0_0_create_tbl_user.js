'use strict';

module.exports = {
    up: async function (queryInterface, Sequelize) {
        return await queryInterface.createTable('tbl_user', {
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
            sex: {
              type: Sequelize.ENUM,
              values: ['Male', 'Female', 'Other'],
              allowNull: false
            },
            birthday: {
              type: Sequelize.DATE,
              allowNull: true
            },
            phone: {
              type: Sequelize.STRING,
              allowNull: false
            },
            address: {
              type: Sequelize.STRING,
              allowNull: false
            },
            longitude: {
              type: Sequelize.DOUBLE,
              allowNull: true
            },
            latitude:{
              type: Sequelize.DOUBLE,
              allowNull: true
            },
            user_type: {
              type: Sequelize.ENUM,
              values: ['Normal', 'Silver', 'Gold','Diamond'],
              defaultValue: 'Normal'
            }, 
            email: {
              type: Sequelize.STRING,
              allowNull: true
            },
            amount_of_like:{
              type: Sequelize.INTEGER,
              allowNull: false
            },
            amount_of_comment:{
              type: Sequelize.INTEGER,
              allowNull: false
            },
            amount_of_order:{
              type: Sequelize.INTEGER,
              allowNull: false
            },
            amount_of_purchase:{
              type: Sequelize.INTEGER,
              allowNull: false
            },
            username: {
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
        return await queryInterface.dropTable('tbl_user');
    }
};