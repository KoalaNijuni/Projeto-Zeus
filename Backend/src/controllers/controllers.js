const Entry = require("../models/models");

module.exports = {
  create: async (req, res) => {
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
      const getID = await Entry.findById(req.params.id);
      return res.status(200).send(getID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  edit: async (req, res) => {
    try {
      const EditByID = await Entry.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(EditByID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const DeleteID = await Entry.findByIdAndDelete(req.params.id);
      return res.status(200).send(DeleteID);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};
