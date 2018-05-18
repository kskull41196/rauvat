import * as mongoose from "mongoose"
export type BaseModel = mongoose.Document & {
    createAt: Date,
    status: string,
    updateAt: Date,
};

export type Model = mongoose.Model<BaseModel>
export type DocumentQuery = mongoose.DocumentQuery<any, any>