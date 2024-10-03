const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        number: { type:String, required: true },
        email: { type:String, required: true }
    }
)

const orderSchema = new Schema(
    {
        repair: { type:Boolean, required: true },
        exchange: { type:Boolean, required: true },
        extendWarranty: { type:Boolean, required: true },
        purchaseDate: { type:Date, required: true },
        productType: { type:String, required: true },
        invoiceNumber: { type:String, required: true },
        purchaseValue: { type:Number, required: true },
    }
);

const costumerschema = new Schema(
    {
        name: { type:String, required:true },
        cpf: { type:String, required:true },
        adress: { type:String, required:true },
        contact: { type:contactSchema, required:true },
        order: { type:orderSchema, required:true } 
    }
);

const OrderModel = mongoose.model('Order', costumerschema);
module.exports = {OrderModel}