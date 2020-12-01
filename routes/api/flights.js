const router = require("express").Router();
const flightController = require("../../controllers/flightController");
// Matches with "/api/books"
router.route("/")
  .post(flightController.getPrice)
//   .post(flightController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(flightController.findById)
//   .put(flightController.update)
//   .delete(flightController.remove);

module.exports = router;
