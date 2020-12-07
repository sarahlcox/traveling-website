const router = require("express").Router();
const flightController = require("../../controllers/flightController");

router.route("/")
  .post(flightController.getPrice)

module.exports = router;
