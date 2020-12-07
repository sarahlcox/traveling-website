const router = require("express").Router();
const newsController = require("../../controllers/newsController");

router.route("/:stateCode")
  .get(newsController.getNews)

module.exports = router;
