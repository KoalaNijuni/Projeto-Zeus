const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

module.exports = {
  createUser: async (req, res) => {
    const { email } = req.body;
    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: "Esse email já existe" });
      }
      const user = await User.create(req.body);

      // user.password = undefined;

      return res.status(201).send(user);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).send({ error: "Usuário não encontrado" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Senha inválida" });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user._id }, authConfig.secret, {
      expiresIn: 86400,
    });

    res.send({ user, token });
  },
};
