import {
  sequelize,
  Sequelize
} from '../base'

export const Wallet_export = sequelize.define(
  'tbl_wallet_export',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    wallet_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_wallet',
        key: 'id'
      },
      allowNull: false
    },
    employee_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_employee',
        key: 'id'
      },
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    longitude: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0,
      allowNull: false
    },
    latitude: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0,
      allowNull: false
    },
    amount: {
      type: Sequelize.BIGINT,
      validate: {
        min: 0,
      },
      defaultValue: 0,
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
