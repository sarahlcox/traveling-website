const router = require("express").Router();
const hotelController = require("../../controllers/hotelController");

router.route("/")
  .get(hotelController.getHotels)

module.exports = router;
