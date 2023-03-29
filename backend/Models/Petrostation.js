const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PetroSchema = new Schema({
    name:{
        type:String,
        required:[true,'please enter your petrostation name'],
    },
    fuelTypes:{
        type:String,
        required:[true,'please enter fuel available'],
    },
    services:{
        type:String
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
PetroSchema.index({ location: '2dsphere' });
const Petromodel = mongoose.model('petrostation',PetroSchema);
module.exports = Petromodel;