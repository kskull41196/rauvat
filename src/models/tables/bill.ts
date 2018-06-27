import {
  sequelize,
  Sequelize
} from '../base'

export const Bill = sequelize.define(
  'tbl_bill',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    promotion_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_global_promotion',
        key: 'id'
      }
    },
    buyer_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_user',
        key: 'id'
      },
      allowNull: false
    },
    seller_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_user',
        key: 'id'
      },
      allowNull: false
    },
    current_paid_history_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_paid_history',
        key: 'id'
      }
    },
    current_bill_activity_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_bill_activity',
        key: 'id'
      }
    },
    
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    feedback_from_buyer: {
      type: Sequelize.TEXT
    },
    feedback_from_seller: {
      type: Sequelize.TEXT
    },
    total_price: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    sub_fee: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    address: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    longitude: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    latitude: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    received_time: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    note: {
      type: Sequelize.TEXT
    },
    origin_id: {
      type: Sequelize.UUID,
      allowNull: true
    },
    editor_type: {
      type: Sequelize.ENUM,
      values: ['USER', 'EMPLOYEE'],
      allowNull: true
    },
    editor: {
      type: Sequelize.UUID,
      allowNull: true
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
