const mongoose = require("mongoose");
const { BaseTransaction, BaseTransactionSchema } = require("./Transaction");
const { Schema, model } = mongoose;

const extendSchema = require('mongoose-extend-schema');

const lendingSchema = new extendSchema(BaseTransactionSchema, {
  from: { type: Schema.Types.ObjectId, ref: "User", required: true },
  to: { type: Schema.Types.ObjectId, ref: "User", required: true },
  dueDate: { type: Date },
  interest: { type: Number },
  // amount:{type: Number},
  // date:{type:Date},
}, {timestamps:true});

const lending = model("lendingTransaction", lendingSchema);
module.exports = lending;
