const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {type:String, required:true, min : 4, unique:true},
    password: {type:String, required:true},
    name:{type:String, required : true},
    college:{type:String},
    yearOfStudy :{type:String},
    limit: {type:Number},
    balance: {type: Number, default: 0},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
