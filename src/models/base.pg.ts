import { config } from '@/config'
import * as Sequelize from 'sequelize'

let option = undefined
if (process.env.NODE_ENV === "production") {
    option = {
        host: config.database.sql['host'],
        dialect: config.database.sql['dialect'],
        // default setting
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+07:00",
        "dialectOptions": {
          "ssl": {
              "require": true
          }
        }
    }
} else {
    option = {
        host: config.database.sql['host'],
        dialect: config.database.sql['dialect'],
        // default setting
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+07:00",
        "dialectOptions": {
          "ssl": {
              "require": true
          }
        }
    }
}
const sequelize = new Sequelize(
    config.database.sql['database'],
    config.database.sql['username'],
    config.database.sql['password'],
    option
)

export {
    Sequelize,
    sequelize
}