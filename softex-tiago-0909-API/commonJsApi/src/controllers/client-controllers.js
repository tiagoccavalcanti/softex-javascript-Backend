const {clients} = require("../models/generic_models");
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
    const sql = `SELECT * FROM clients WHERE id=${req.params.id}`
    conection.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
    
}

function post (req,res){
    const { name } = req.body;
    const sql = `INSERT INTO clients (name) VALUES ('${name}')`;
    conection.query(sql, (err, result)=>{
        if (err) throw err;
        res.send("client added succefully");
    })
}
 
function update (req,res){
    const { name } = req.body
    const sql = `UPDATE CLIENTS SET name='${name}' WHERE id=${req.params.id}`
    conection.query(sql, (err, result)=>{
        if(err) throw err;
        res.send("client updated")
    })
}

function deletar (req,res){
    const sql = `DELETE FROM clients WHERE id=${req.params.id}`
    conection.query(sql, (err, result)=>{
        if(err) throw err;
        res.send("client deleted")
    })
}

module.exports = {
    hellowolrd,
    showClients,
    showClientById,
    post,
    update,
    deletar,
}