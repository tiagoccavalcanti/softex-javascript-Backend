const {clients} = require("../generic_models");
const {conection} = require("../../database/conection")


function hellowolrd (req,res){
    res.send("helloWorld");
}

function showClients (req,res){
    const sql = 'SELECT * FROM clients'
    conection.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
}

function showClientById(req, res){
    res.send(clients[req.params.id-1])
}

function post (req,res){
    const { name } = req.body;
    const id = clients.length + 1
    clients.push({name, id});
    res.send("client added succefully");
}
 
function update (req,res){
    const { name } = req.body
    clients[req.params.id-1].name = name
    res.send("client updated")
}

function deletar (req,res){
    clients.splice(req.params.id-1, 1);
    res.send("client deleted")
}

module.exports = {
    hellowolrd,
    showClients,
    showClientById,
    post,
    update,
    deletar,
}