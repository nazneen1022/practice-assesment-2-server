const { Router } = require("express");
const HomePage = require("../models").homePage;
const StoryPage = require("../models").storyPage;

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const allHomePages = await HomePage.findAll();
    if (!allHomePages) {
      response.status(404).send("No Homepages found!!");
    } else {
      response.json(allHomePages);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:homepageId", async (request, response, next) => {
  const { homepageId } = request.params;
  try {
    const storyPage = await HomePage.findOne({
      include: [
        {
          model: StoryPage,
          where: { homepageId },
        },
      ],
      order: [[{ model: StoryPage }, "createdAt", "DESC"]],
    });
    if (!storyPage) {
      response.status(404).send({});
    } else {
      response.json(storyPage);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
