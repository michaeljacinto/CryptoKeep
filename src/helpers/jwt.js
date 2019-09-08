const expressJwt = require("express-jwt");
const config = require("config.json");
const userMethods = require("../routes/user.route");

module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: ["/"]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userMethods.getById(payload.sub);

  if (!user) {
    return done(null, true);
  }

  done();
}
