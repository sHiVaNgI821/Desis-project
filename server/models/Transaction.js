const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const TransactionSchema = new Schema({
    amount:{type: Number},
    to:{type: String},
    from:{type: String},
    interest:{type:Number},
    date:{type:Date},
    category:{type: String},
    dueDate: {type:Date},
},{
    timestamps:true,
});

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;
