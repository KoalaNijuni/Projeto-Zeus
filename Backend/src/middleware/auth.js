const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "Token não providenciado" });
  }

  const [_, token] = authHeader.split(" ");

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      req.userId = decoded.id;
      return next();
    });
  } catch (err) {
    return res.status(401).send({ error: "Token inválido" });
  }
};
