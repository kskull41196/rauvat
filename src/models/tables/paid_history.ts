import {
  sequelize,
  Sequelize
} from '../base'

export const Paid_history = sequelize.define(
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
    pay_amount: {
      type: Sequelize.BIGINT,
      validate: {
        min:0,
      },
      defaultValue:0,
      allowNull: false
    },
    retain_amount: {
      type: Sequelize.BIGINT,
      validate: {
        min:0,
      },
      defaultValue:0,
      allowNull: false
    },
    payment_method: {
      type: Sequelize.ENUM,
      values: ['COD', 'ONLINE','WALLET'],
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
