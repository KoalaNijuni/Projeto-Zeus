const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/getByID/:id", controller.getByID);
router.put("/editByID/:id", controller.edit);
router.delete("/deleteID/:id", controller.delete);
router.get("/sum", controller.sumOfPrice);
module.exports = router;
