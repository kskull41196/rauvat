import {
  sequelize,
  Sequelize
} from '../base'

export const ExportRequest = sequelize.define(
  'tbl_export_request',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_user',
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
      allowNull: true
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 50000,
      }
    },
    bank_user_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bank_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bank_serial: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bank_branch: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bank_province: {
      type: Sequelize.STRING,
      allowNull: false
    },
    employee_feedback: {
      type: Sequelize.STRING,
      allowNull: true
    },
    state: {
      type: Sequelize.ENUM,
      values: ['EXPORTED', 'DENIED', 'NONE'],
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
