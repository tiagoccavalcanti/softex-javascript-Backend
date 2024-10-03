const express = require("express");
const mongoose = require('mongoose');
const {orders} = require("./models/orders")
const {connect} = require("./db/connection")
const {OrderModel} = require("./mongo/order");
const { ReadConcern } = require("mongodb");
require("dotenv").config();
const app = express();


app.use(express.json());

app.get("/", (req,res)=>{
    res.send("welcome")
})

app.get("/orders", async (req,res)=>{
    const orders = await OrderModel.find({}).exec();
    if(orders.length === 0){
        return res.status(404).send("no orders found");
    }
    return res.send(orders);
});

app.post("/orders", async (req,res)=>{
    const order = new OrderModel(req.body);
    await order.save();
    return res.send(order);
});

app.get("/orders/:id", async (req,res) =>{
    const order = await OrderModel.findById(req.params.id).exec();
    if(!order){
        return res.status(404).send("order not found");
    }
    return res.send(order)
});

app.put("/orders/:id", async (req,res) =>{
    const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec();
    if(!order){
        return res.status(404).send("order not found");
    }
    return res.send(order)
});

app.delete("/orders/:id", async (req,res)=>{
    const order = await OrderModel.findByIdAndDelete(req.params.id).exec();
    if(!order){
        return res.statur(404).send("order not found")
    }
    return res.send(order);

});

app.listen(process.env.port, ()=>{
    connect()
    console.log(`server running: http://localhost:${process.env.port}/`)
});