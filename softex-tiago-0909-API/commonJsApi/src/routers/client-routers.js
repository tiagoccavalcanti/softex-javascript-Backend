const express = require('express');
const router = express.Router();
const controllers = require("../controllers/client-controllers");

router.get("/", controllers.hellowolrd );
router.get("/clients", controllers.showClients);
router.get("/clients/:id", controllers.showClientById);
router.post("/postclients", controllers.post)
router.put("/update/:id", controllers.update)
router.delete("/delete/:id", controllers.deletar)

module.exports = {router}