const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/getUser", UserController.getUserList);
router.post("/register", UserController.createUser);
router.post("/login", UserController.login);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
