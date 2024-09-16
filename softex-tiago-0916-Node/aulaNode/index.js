import express from "express";
const port = 3000;
const app = express();
import {users} from "./src/models/user.js"
import {router} from "./src/routers/user-routers.js"

//usado para garantir que os dados trafegados estao no formato json, sem isso as requisições podem vir erradas e pa
app.use(express.json());
app.use(router)


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});