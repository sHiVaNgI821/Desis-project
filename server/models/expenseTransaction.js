const mongoose = require("mongoose");
const { BaseTransaction, discriminator } = require("./Transaction");
const { Schema, model } = mongoose;

const expenseSchema = new Schema({
  from: { type: Schema.Types.ObjectId, ref: "User" },
  to: { type: String },
  amount:{type: Number},
  date:{type:Date},
  category:{type: String},
}, {timestamps:true});

const expenses = model("expenseTransaction", expenseSchema);
module.exports = expenses;
