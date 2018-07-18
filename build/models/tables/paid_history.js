"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.PaidHistory = base_1.sequelize.define('tbl_paid_history', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    bill_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_bill',
            key: 'id'
        },
        allowNull: false
    },
    vnpay_history_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_vnpay_history',
            key: 'id'
        },
        allowNull: true
    },
    pay_amount: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0,
        },
        defaultValue: 0,
        allowNull: false
    },
    type: {
        type: base_1.Sequelize.ENUM,
        values: [
            'PARTIAL', 'FULL'
        ],
        defaultValue: 'PARTIAL',
        allowNull: false
    },
    remain_amount: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0,
        },
        defaultValue: 0,
        allowNull: false
    },
    payment_method: {
        type: base_1.Sequelize.ENUM,
        values: ['COD', 'ONLINE', 'WALLET'],
        defaultValue: 'COD',
        allowNull: false
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
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
//# sourceMappingURL=paid_history.js.map