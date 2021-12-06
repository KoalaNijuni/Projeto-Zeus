const Purchase = require("../models/purchaseModel");
const User = require("../models/userModel");

module.exports = {
  createPurchase: async (req, res) => {
    req.body.price = parseFloat(req.body.price).toFixed(2);
    req.body.weight = parseFloat(req.body.weight).toFixed(2);
    try {
      const purchase = req.body;

      const user = await User.findById(req.userId);
      user.purchases.push(purchase);
      await user.save();
      return res.status(200).send(user);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await User.findById(req.userId);
      const getPurchase = user.purchases;
      return res.send(getPurchase);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(req.userId);
      const getID = await user.purchases.findById(id);
      return res.status(200).send(getID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  editPurchase: async (req, res) => {
    try {
      const { id } = req.params;
      const EditByID = await Purchase.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).send(EditByID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  deletePurchase: async (req, res) => {
    try {
      const { id } = req.params;
      const DeleteID = await Purchase.findByIdAndDelete(id);
      return res.status(200).send(DeleteID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  sumOfPrice: async (req, res) => {
    try {
      let total = 0;
      let dbItems = await Purchase.find();
      for (let i = 0; i < dbItems.length; i++) {
        total += dbItems[i].price;
      }
      total = total.toFixed(2);
      return res.status(200).send({ total });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  sumOfWeight: async (req, res) => {
    try {
      let total = 0;
      let dbItems = await Purchase.find();
      for (let i = 0; i < dbItems.length; i++) {
        total += dbItems[i].weight;
      }
      total = total.toFixed(2);
      return res.status(200).send({ total });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};
