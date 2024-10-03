const express = require("express");
const mongoose = require('mongoose');
const {connect} = require("./src/db/connection")
const {router} = require("./src/router/orderRouters")
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(router);

app.listen(process.env.port, ()=>{
    connect()
    console.log(`server running: http://localhost:${process.env.port}/`)
});