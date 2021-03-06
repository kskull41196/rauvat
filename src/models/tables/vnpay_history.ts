import {
  sequelize,
  Sequelize
} from '../base'

export const VnpayHistory = sequelize.define(
  'tbl_vnpay_history',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    session_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    amount: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      allowNull: false,
      validate: {
        min: 0
      }
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
