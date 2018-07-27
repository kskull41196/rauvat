// import * as mongoose from "mongoose"
// import { BaseModel } from '../base'
// const Schema = mongoose.Schema
// export type SampleModel = BaseModel & {
//     string: string,
//     number: number,
//     enum: "a" | "b" ,
// }
// const sampleSchema = new Schema({
//     string: { type: String },
//     number: { type: Number },
//     enum: { type: String, enum: ["a", "b"] },
//     status: { type: String, enum: ["active", "deactive"], default: "deactive" }
// })
// export let Sample: mongoose.Model<SampleModel> = mongoose.model('Sample', sampleSchema)
//# sourceMappingURL=sampleModel.mongo.js.map
"use strict";

var cov_f62d8s7aa = function () {
  var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/collections/sampleModel.mongo.js",
      hash = "dd0e3122f79fba5a7113c361de1b9e146cf802ff",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/collections/sampleModel.mongo.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();
//# sourceMappingURL=sampleModel.mongo.js.map