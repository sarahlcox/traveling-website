const router = require("express").Router();
const hotelController = require("../../controllers/hotelController");

router.route("/")
  .post(hotelController.getHotelList)

module.exports = router;
