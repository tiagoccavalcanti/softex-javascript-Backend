const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () =>{
    try{
        await mongoose.connect(`mongodb+srv://taigocavalcanti:${process.env.mongo_key}@cluster0.cbqt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("connected to database");
    }
    catch(erro){
        console.log("error connecting to database")
    }
}

module.exports = {connect}