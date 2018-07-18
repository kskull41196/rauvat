"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.User = base_1.sequelize.define('tbl_user', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    fullname: {
        type: base_1.Sequelize.STRING
    },
    avatar: {
        type: base_1.Sequelize.STRING
    },
    sex: {
        type: base_1.Sequelize.ENUM,
        values: ['Male', 'Female', 'Other']
    },
    birthday: {
        type: base_1.Sequelize.DATE
    },
    phone: {
        type: base_1.Sequelize.STRING
    },
    address: {
        type: base_1.Sequelize.STRING
    },
    longitude: {
        type: base_1.Sequelize.DOUBLE
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE
    },
    user_type: {
        type: base_1.Sequelize.ENUM,
        values: [
            'NORMAL', 'SILVER', 'GOLD', 'DIAMOND'
        ],
        defaultValue: 'NORMAL'
    },
    email: {
        type: base_1.Sequelize.STRING
    },
    amount_of_like: {
        type: base_1.Sequelize.INTEGER
    },
    amount_of_comment: {
        type: base_1.Sequelize.INTEGER
    },
    amount_of_order: {
        type: base_1.Sequelize.INTEGER
    },
    amount_of_purchase: {
        type: base_1.Sequelize.INTEGER
    },
    username: {
        type: base_1.Sequelize.STRING
    },
    password: {
        type: base_1.Sequelize.STRING
    },
    registation_id: {
        type: base_1.Sequelize.STRING
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
    },
    latest_updated_membership: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    deleted_at: { type: 'TIMESTAMP' }
}, {
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
});
//# sourceMappingURL=user.js.map