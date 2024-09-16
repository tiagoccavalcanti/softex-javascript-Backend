const express = require("express");
const app = express();
const {clients} = require("./src/generic_models");
const conection = require("./database/conection")
const controllers = require("./src/routers");

app.use(express.json())

app.get("/", controllers.hellowolrd );
app.get("/clients", controllers.showClients);
app.get("/clients/:id", controllers.showClientById);
app.post("/postclients", controllers.post)
app.put("/update/:id", controllers.update)
app.delete("/delete/:id", controllers.deletar)

app.listen(3000 , () => {
    conection.connect((err) => {
        if (err){
            console.error('erro ao se conectar com o banco de dados:', err.stack);
            return;
        }
        console.log('conectado ao banco de dados com ID', comection.threadId);
    });

    console.log('server running on port 3000')
});
