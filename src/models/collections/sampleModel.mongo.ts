import * as mongoose from "mongoose"
import { BaseModel } from '../base'

const Schema = mongoose.Schema

export type SampleModel = BaseModel & {
    string: string,
    number: number,
    enum: "a" | "b" ,
}

const sampleSchema = new Schema({
    string: { type: String },
    number: { type: Number },
    enum: { type: String, enum: ["a", "b"] },

    status: { type: String, enum: ["active", "deactive"], default: "deactive" }
})

export let Sample: mongoose.Model<SampleModel> = mongoose.model('Sample', sampleSchema)