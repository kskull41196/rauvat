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
      },
      allowNull: false
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
    rating: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    feedback_from_buyer: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    feedback_from_seller: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    total_price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    sub_fee: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    address: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    longitude: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    latitude: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    received_time: {
      type: 'TIMESTAMP',
      allowNull: false
    },
    note: {
      type: Sequelize.TEXT,
      allowNull: false
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
