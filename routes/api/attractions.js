const router = require("express").Router();
const attractionController = require("../../controllers/attractionController");

router.route("/")
  .post(attractionController.getAttractions)

module.exports = router;
