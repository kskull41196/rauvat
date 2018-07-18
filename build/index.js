"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const expressValidator = require("express-validator");
const config_1 = require("@/config");
const routers_1 = require("./routers");
const cors = require("cors");
var Raven = require('raven');
Raven.config('https://3a369651752640bfa3527eb4391e948c@sentry.io/1218239').install();
console.log("Starting server with at " + process.pid + " on port " + config_1.config.server.port);
// Connect Database
// const MongoStore = mongo(session)
// console.log('mongo', config.database.mongo)
// mongoose.connect(config.database.mongo)
/**
 * Express configuration.
 */
const app = express();
app.use(logger('common', {
    skip: function (req, res) {
        if (req.url == '/_ah/health') {
            return true;
        }
        else {
            return false;
        }
    }
}));
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}));
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: config.database.sessionSecret,
//     store: new MongoStore({
//         url: config.database.mongo,
//         autoReconnect: true
//     })
// }))
app.use(expressValidator());
app.use('/api/*', cors());
app.use('/api', routers_1.default);
app.set('port', config_1.config.server.port);
app.get('/', function (request, response) {
    response.send('App is running');
}).listen(app.get('port'), function () {
    console.log(`${config_1.config.server.name} started at ${config_1.config.server.protocol}://${config_1.config.server.host}:${app.get('port')}`);
});
//# sourceMappingURL=index.js.map