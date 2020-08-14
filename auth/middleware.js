const User = require("../models").user;
const HomePage = require("../models").homePage;
const StoryPage = require("../models").storyPage;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  console.log("Nazneen req.headers.:", req.headers);
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");

  if (!auth || !auth[0] === "Bearer" || !auth[1]) {
    res.status(401).send({
      message:
        "This endpoint requires an Authorization header with a valid token",
    });
  }

  try {
    const data = toData(auth[1]);
    //const user = await User.findByPk(data.userId);
    const user = await User.findByPk(data.userId, {
      include: [{ model: HomePage, include: [StoryPage] }],
    });
    if (!user) {
      return res.status(404).send({ message: "User does not exist" });
    }

    // add user object to request
    req.user = user;
    // next handler
    return next();
  } catch (error) {
    console.log("ERROR IN AUTH MIDDLEWARE", error);

    switch (error.name) {
      case "TokenExpiredError":
        return res
          .status(401)
          .send({ error: error.name, message: error.message });

      case "JsonWebTokenError":
        return res
          .status(400)
          .send({ error: error.name, message: error.message });

      default:
        return res.status(400).send({
          message: "Something went wrong, sorry",
        });
    }
  }
}

module.exports = auth;
