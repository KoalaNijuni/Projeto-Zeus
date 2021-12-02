const express = require("express");
const PurchaseController = require("../controllers/PurchaseController");

const router = express.Router();

router.post("/", PurchaseController.createPurchase);
router.get("/aaa", PurchaseController.getAll);
router.get("/priceSum", PurchaseController.sumOfPrice);
router.get("/weightSum", PurchaseController.sumOfWeight);
router.get("/:id", PurchaseController.getByID);
router.put("/:id", PurchaseController.editPurchase);
router.delete("/:id", PurchaseController.deletePurchase);

module.exports = router;
