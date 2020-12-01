const router = require("express").Router();
const hotelController = require("../../controllers/hotelController");

router.route("/")
  .post(hotelController.getHotels)

module.exports = router;
