import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as session from "express-session"
import * as logger from 'morgan'
import * as mongo from "connect-mongo"
import * as mongoose from "mongoose"
import expressValidator = require('express-validator')
import { config } from '@/config'
import api from './routers'
import * as cors from 'cors'

console.log("Starting server with at " + process.pid + " on port " + config.server.port);
// Connect Database
// const MongoStore = mongo(session)
// console.log('mongo', config.database.mongo)
// mongoose.connect(config.database.mongo)
/**
 * Express configuration.
 */
const app = express()
app.use(logger('common', {
    skip: function (req, res) {
      if (req.url == '/_ah/health') {
        return true;
      } else {
        return false;
      }
    }
  }))
app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}))
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: config.database.sessionSecret,
//     store: new MongoStore({
//         url: config.database.mongo,
//         autoReconnect: true
//     })
// }))
app.use(expressValidator())
app.use('/api/*', cors())
app.use('/api', api)
app.set('port', config.server.port)
app.get('/', function(request, response) {
    response.send('App is running');
}).listen(app.get('port'), function () {
    console.log(`${config.server.name} started at ${config.server.protocol}://${config.server.host}:${app.get('port')}`)
})
