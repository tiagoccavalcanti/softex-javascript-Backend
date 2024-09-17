const express = require("express");
const app = express();
const {conection} = require("./database/conection")
const {router} = require("./src/routers/client-routers")

app.use(express.json())
app.use(router)

app.listen(3000 , () => {
    conection.connect((err) => {
        if (err){
            console.error('erro ao se conectar com o banco de dados:', err.stack);
            return;
        }
        console.log('conectado ao banco de dados com ID', conection.threadId);
    });

    console.log('server running on port 3000')
});
