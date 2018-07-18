"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// export * from './queryMiddleware-mongo' // use mongo query middleware
__export(require("./queryMiddleware-postgres")); // use postgresql query middleware
//# sourceMappingURL=queryMiddleware.js.map