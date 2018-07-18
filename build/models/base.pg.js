"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@/config");
const Sequelize = require("sequelize");
exports.Sequelize = Sequelize;
let option = undefined;
if (process.env.NODE_ENV === "production") {
    option = {
        host: config_1.config.database.sql['host'],
        dialect: config_1.config.database.sql['dialect'],
        // default setting
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+07:00",
    };
}
else {
    option = {
        host: config_1.config.database.sql['host'],
        dialect: config_1.config.database.sql['dialect'],
        // default setting
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+07:00",
    };
}
const sequelize = new Sequelize(config_1.config.database.sql['database'], config_1.config.database.sql['username'], config_1.config.database.sql['password'], option);
exports.sequelize = sequelize;
//# sourceMappingURL=base.pg.js.map