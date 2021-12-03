const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  createUser: async (req, res) => {
    const { email } = req.body;
    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: "Esse email já existe" });
      }
      const user = await User.create(req.body);

      user.password = undefined;

      return res
        .status(201)
        .send({ user, token: generateToken({ id: user._id }) });
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

    res.send({
      user,
      token: generateToken({ id: user._id }),
    });
  },
  getUserList: async (req, res) => {
    try {
      const list = await User.find();

      return res.status(200).send(list);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const DeleteUser = await User.findOneAndDelete(id);

      DeleteUser.password = undefined;

      return res.status(200).send(DeleteUser);
    } catch (err) {
      return res.status(200).send({ error: err.message });
    }
  },
};
