import {
  sequelize,
  Sequelize
} from '../base'

export const Bill_item = sequelize.define(
  'tbl_bill_item',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    product_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_product',
        key: 'id'
      },
      allowNull: false
    },
    bill_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_bill',
        key: 'id'
      },
      allowNull: false
    },
    price: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    amount: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
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
