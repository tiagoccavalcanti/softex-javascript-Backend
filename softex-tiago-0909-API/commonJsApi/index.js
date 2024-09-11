const express = require("express");
const app = express();
const {clients} = require("./src/generic_models");

app.use(express.json())

app.get("/", (req,res) => {
    res.send("helloWorld");
});

app.get("/clients", function(req,res){
    res.send(clients)
});

app.get("/clients/:id", function(req, res){
    res.send(clients[req.params.id-1])
});

app.post("/postclients", function (req,res){
    const { name } = req.body;
    const id = clients.length + 1
    clients.push({name, id});
    res.send("client added succefully");
})

app.listen(3000 , () => {
    console.log("server running on port 3000")
});
