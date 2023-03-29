const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const AuthSchema = new Schema({
    name:{
        type:String,
        required:[true,'please enter your name'],
    },
    email:{
        type:String,
        required:[true,'please enter your email'],
        unique:[true,'email already in use']
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        minlength:[8,'please enter 8 or more characters ']
    },
    passwordConfirm:{
    type:String,
    required:[true,'please enter a password'],
    minlength:[8,'please enter 8 or more characters'],
    validate:{
        validator:function (pass) {
            return pass == this.password
        },
        message:'please enter the correct password confirmation'
    }
    },
    location:{
        type:{
            type:String,
            default:'Point',
            enum:['Point']
        },
        coordinates:[Number],
        address:String,
        description:String
    }
})
AuthSchema.pre('save',async function (next) {
    if(!this.isModified('password')) return next();
  this.password =  await  bcrypt.hash(this.password,10);
    this.passwordConfirm = undefined;
    next();
})

AuthSchema.methods

const Authmodel = mongoose.model('user',AuthSchema);
module.exports = Authmodel;