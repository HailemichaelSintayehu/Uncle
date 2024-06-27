// const redis_client = require("../controllers/user_controller").redis_client;

async function require_auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send("Unauthorized access.");
  } else {
    return next();
  }
}

module.exports = {
  require_auth: require_auth,
};
