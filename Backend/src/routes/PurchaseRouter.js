const express = require("express");
const PurchaseController = require("../controllers/PurchaseController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.use(authMiddleware);

router.post("/", PurchaseController.createPurchase);
router.get("/", PurchaseController.getAll);
router.get("/priceSum", PurchaseController.sumOfPrice);
router.get("/weightSum", PurchaseController.sumOfWeight);
router.get("/:id", PurchaseController.getByID);
router.put("/:id", PurchaseController.editPurchase);
router.delete("/:id", PurchaseController.deletePurchase);

module.exports = router;
