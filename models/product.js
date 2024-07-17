
const mongoose  = require('mongoose');

const mySchema = new mongoose.Schema({
    product_name:{type: String ,require:true},
    product_type: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    unit: { type: String, required: true },
},{versionKey: false,timestamps: true });

module.exports = mongoose.model('Product',mySchema);