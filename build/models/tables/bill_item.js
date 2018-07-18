"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.BillItem = base_1.sequelize.define('tbl_bill_item', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    product_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_product',
            key: 'id'
        },
        allowNull: false
    },
    bill_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_bill',
            key: 'id'
        },
        allowNull: false
    },
    price: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    amount: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
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
//# sourceMappingURL=bill_item.js.map