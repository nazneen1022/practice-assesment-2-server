const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const HomePage = require("../models").homePage;
const StoryPage = require("../models").storyPage;
const { toData } = require("../auth/jwt");

const router = new Router();

router.get("/:homepageId", async (request, response, next) => {
  try {
    const homepageId = parseInt(request.params.homepageId);
    const homepage = await HomePage.findByPk(homepageId);
    if (!homepage) {
      response.status(404).send(`Home page for id: ${homepageId} not found`);
    } else {
      response.send(homepage.dataValues);
    }
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/:homepageId",
  authMiddleware,
  async (request, response, next) => {
    const auth =
      request.headers.authorization && request.headers.authorization.split(" ");

    if (!auth || !auth[0] === "Bearer" || !auth[1]) {
      response.status(401).send({
        message:
          "This endpoint requires an Authorization header with a valid token",
      });
    }
    try {
      const data = toData(auth[1]);

      const homepageId = parseInt(request.params.homepageId);
      const updated = await HomePage.update(
        { ...request.body },
        { where: { id: homepageId } }
      );
      if (updated > 0) {
        const updatedHomepage = await User.findByPk(data.userId, {
          include: [{ model: HomePage, include: [StoryPage] }],
        });
        response.send({ rowsupdated: updated, homePage: updatedHomepage });
      } else {
        response.status(500).send("No rows updated");
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post("/:homepageId", authMiddleware, async (request, response, next) => {
  console.log("request.headers:", request.headers);
  const auth =
    request.headers.authorization && request.headers.authorization.split(" ");

  if (!auth || !auth[0] === "Bearer" || !auth[1]) {
    response.status(401).send({
      message:
        "This endpoint requires an Authorization header with a valid token",
    });
  }
  try {
    const data = toData(auth[1]);
    console.log("request.body:", request.body);
    const paramId = parseInt(request.params.homepageId);
    const userExist = await User.findByPk(data.userId, {
      include: [{ model: HomePage }],
    });
    if (userExist) {
      const newStory = await StoryPage.create(request.body);
      const { name, content, imageUrl } = request.body;
      console.log("newStory:", newStory.dataValues, "paramId:", paramId);
      if (!newStory) {
        response.status(400).send("unable to create new story");
      } else {
        response.send({
          name,
          content,
          imageUrl,
          id: newStory.dataValues.id,
          homepageId: paramId,
        });
      }
    } else {
      response.status(400).send("Invalid user");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
