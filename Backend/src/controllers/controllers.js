const Entry = require("../models/models");

module.exports = {
  create: async (req, res) => {
    req.body.price = parseFloat(req.body.price).toFixed(2);
    req.body.weight = parseFloat(req.body.weight).toFixed(2);
    try {
      const createEntry = await Entry.create(req.body);
      return res.status(201).send(createEntry);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const getEntry = await Entry.find();
      return res.send(getEntry);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const getID = await Entry.findById(id);
      return res.status(200).send(getID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const EditByID = await Entry.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).send(EditByID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const DeleteID = await Entry.findByIdAndDelete(id);
      return res.status(200).send(DeleteID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  sumOfPrice: async (req, res) => {
    try {
      let total = 0;
      let dbItems = await Entry.find();
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
      let dbItems = await Entry.find();
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
