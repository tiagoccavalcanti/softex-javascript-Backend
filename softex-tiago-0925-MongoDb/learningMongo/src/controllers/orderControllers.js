const express = require("express");
const mongoose = require("mongoose");
const {OrderModel} = require("../mongo/order");

function welcome (req,res){
    res.send("welcome")
}

async function showOrders (req,res){
    const orders = await OrderModel.find({}).exec();
    if(orders.length === 0){
        return res.status(404).send("no orders found");
    }
    return res.send(orders);
}

async function postOrders(req,res){
    const order = new OrderModel(req.body);
    await order.save();
    return res.send(order);
}

async function showOrderById(req,res){
    const order = await OrderModel.findById(req.params.id).exec();
    if(!order){
        return res.status(404).send("order not found");
    }
    return res.send(order)
}

async function updateOrderById(req,res){
    const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec();
    if(!order){
        return res.status(404).send("order not found");
    }
    return res.send(order)
}

async function deleteOrderById(req,res){
    const order = await OrderModel.findByIdAndDelete(req.params.id).exec();
    if(!order){
        return res.statur(404).send("order not found")
    }
    return res.send(order);

}

module.exports = {
    welcome,
    showOrders,
    postOrders,
    showOrderById,
    updateOrderById,
    deleteOrderById
}