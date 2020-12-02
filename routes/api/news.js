const router = require("express").Router();
const newsController = require("../../controllers/newsController");
console.log("this is backend news.js",newsController);
// Matches with "/api/books"
router.route("/get")
  .get(newsController.getNews)
//   .post(flightController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(flightController.findById)
//   .put(flightController.update)
//   .delete(flightController.remove);

module.exports = router;
