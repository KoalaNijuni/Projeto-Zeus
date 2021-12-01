const express = require("express");
const PurchaseController = require("../controllers/PurchaseController");

const router = express.Router();

router.post("/", PurchaseController.createPurchase);
router.get("/", PurchaseController.getAll);
router.get("/:id", PurchaseController.getByID);
router.put("/:id", PurchaseController.editPurchase);
router.delete("/:id", PurchaseController.deletePurchase);
router.get("/sum", PurchaseController.sumOfPrice);
router.get("/weightSum", PurchaseController.sumOfWeight);

module.exports = router;
