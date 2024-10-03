const express = require("express");
const router = express.Router();
const controllers = require("../controllers/orderControllers");

router.get("/", controllers.welcome);
router.get("/orders", controllers.showOrders);
router.post("/orders", controllers.postOrders);
router.get("/orders/:id", controllers.showOrderById);
router.put("/orders/:id", controllers.updateOrderById);
router.delete("/orders/:id", controllers.deleteOrderById);

module.exports = {router};