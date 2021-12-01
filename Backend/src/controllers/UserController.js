const User = require("../models/userModel");

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.status(201).send(user);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};
