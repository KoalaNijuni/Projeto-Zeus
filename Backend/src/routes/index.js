const express = require("express");

const UserRouter = require("./UserRouter");
const PurchaseRouter = require("./PurchaseRouter");

const router = express.Router();

router.use("/user", UserRouter);
router.use("/purchase", PurchaseRouter);

module.exports = router;
