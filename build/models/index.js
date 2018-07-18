"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
//export * from './base.mongo'
__export(require("./base.pg"));
//export * from './collections'
__export(require("./tables"));
require("./associates");
//# sourceMappingURL=index.js.map