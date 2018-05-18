import {
    sequelize,
    Sequelize
} from '../base'

export const User = sequelize.define(
    'tbl_user',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        fullname: {
            type: Sequelize.STRING
          },
          avatar: {
            type: Sequelize.STRING
          },
          sex: {
            type: Sequelize.ENUM,
            values: ['Male', 'Female', 'Other']
          },
          birthday: {
            type: Sequelize.DATE
          },
          phone: {
            type: Sequelize.STRING
          },
          address: {
            type: Sequelize.STRING
          },
          longitude: {
            type: Sequelize.DOUBLE
          },
          latitude:{
            type: Sequelize.DOUBLE
          },
          user_type: {
            type: Sequelize.ENUM,
            values: ['Normal', 'Silver', 'Gold','Diamond']
          }, 
          email: {
            type: Sequelize.STRING
          },
          amount_of_like:{
            type: Sequelize.INTEGER
          },
          amount_of_comment:{
            type: Sequelize.INTEGER
          },
          amount_of_order:{
            type: Sequelize.INTEGER
          },
          amount_of_purchase:{
            type: Sequelize.INTEGER
          },
          username: {
            type: Sequelize.STRING
          },
          password: {
            type: Sequelize.STRING
          },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
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
    },
    {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        defaultScope: {
            attributes: { exclude: ['deleted_at'] }
        },
        scopes: {
            deleted: {
                where: { deleted_at: { $ne: null } },
                paranoid: false
            }
        }
    }
)
