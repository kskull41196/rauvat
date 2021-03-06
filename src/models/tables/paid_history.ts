import {
  sequelize,
  Sequelize
} from '../base'

export const PaidHistory = sequelize.define(
  'tbl_paid_history',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    bill_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_bill',
        key: 'id'
      },
      allowNull: false
    },
    vnpay_history_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_vnpay_history',
        key: 'id'
      },
      allowNull: true
    },
    pay_amount: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM,
      values: [
        'PARTIAL', 'FULL'
      ],
      defaultValue: 'PARTIAL',
      allowNull: false
    },
    remain_amount: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0,
      allowNull: false
    },
    payment_method: {
      type: Sequelize.ENUM,
      values: ['COD', 'ONLINE', 'WALLET'],
      defaultValue: 'COD',
      allowNull: false
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
