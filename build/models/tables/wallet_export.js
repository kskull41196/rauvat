"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.WalletExport = base_1.sequelize.define('tbl_wallet_export', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    wallet_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_wallet',
            key: 'id'
        },
        allowNull: false
    },
    employee_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_employee',
            key: 'id'
        },
        allowNull: false
    },
    address: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    longitude: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0,
        },
        defaultValue: 0,
        allowNull: false
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0,
        },
        defaultValue: 0,
        allowNull: false
    },
    amount: {
        type: base_1.Sequelize.BIGINT,
        validate: {
            min: 0,
        },
        defaultValue: 0,
        allowNull: false
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
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
//# sourceMappingURL=wallet_export.js.map