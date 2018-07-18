"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const express = require("express");
const _ = require("lodash");
const versions = fs.readdirSync(__dirname);
const route = express.Router();
versions.forEach(version => {
    const versionDir = path.join(__dirname, version);
    if (fs.lstatSync(versionDir).isDirectory()) {
        const modules = fs.readdirSync(versionDir);
        const subRoute = express.Router();
        modules.forEach(module => {
            if (_.endsWith(module, '.map'))
                return;
            const { default: Router } = require(path.join(__dirname, version, module));
            const router = new Router();
            module = module.split('.')[0];
            subRoute.use(`/${module}`, router.router);
        });
        route.use('/' + version, subRoute);
    }
});
exports.default = route;
//# sourceMappingURL=index.js.map