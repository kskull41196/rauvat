"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.Bill = base_1.sequelize.define('tbl_bill', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    promotion_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_global_promotion',
            key: 'id'
        }
    },
    buyer_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_user',
            key: 'id'
        },
        allowNull: false
    },
    seller_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_user',
            key: 'id'
        },
        allowNull: false
    },
    current_paid_history_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_paid_history',
            key: 'id'
        }
    },
    current_bill_activity_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_bill_activity',
            key: 'id'
        }
    },
    rating: {
        type: base_1.Sequelize.INTEGER,
        defaultValue: 0
    },
    feedback_from_buyer: {
        type: base_1.Sequelize.TEXT
    },
    feedback_from_seller: {
        type: base_1.Sequelize.TEXT
    },
    total_price: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    sub_fee: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    address: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    longitude: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    received_time: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    note: {
        type: base_1.Sequelize.TEXT
    },
    updated_id: {
        type: base_1.Sequelize.UUID,
        allowNull: true
    },
    editor_type: {
        type: base_1.Sequelize.ENUM,
        values: ['USER', 'EMPLOYEE'],
        allowNull: true
    },
    editor: {
        type: base_1.Sequelize.UUID,
        allowNull: true
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
//# sourceMappingURL=bill.js.map