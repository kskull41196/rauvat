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
            type: Sequelize.STRING,
            defaultValue: 'MALE',
            validate: {
              isIn: [
                [
                  'MALE',
                  'FEMALE',
                  'OTHER'
                ]
              ]
            }
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
        latitude: {
            type: Sequelize.DOUBLE
        },
        user_type: {
            type: Sequelize.ENUM,
            values: [
                'NORMAL', 'SILVER', 'GOLD', 'DIAMOND'
            ],
            defaultValue: 'NORMAL'
        },
        email: {
            type: Sequelize.STRING
        },
        amount_of_like: {
            type: Sequelize.INTEGER
        },
        amount_of_comment: {
            type: Sequelize.INTEGER
        },
        amount_of_order: {
            type: Sequelize.INTEGER
        },
        amount_of_purchase: {
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        registation_id: {
            type: Sequelize.STRING
        },
        bank_user_name: {
            type: Sequelize.STRING
        },
        bank_name: {
            type: Sequelize.STRING
        },
        bank_serial: {
            type: Sequelize.STRING
        },
        bank_branch: {
            type: Sequelize.STRING
        },
        bank_province: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        latest_updated_membership: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
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
