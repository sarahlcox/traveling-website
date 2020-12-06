const router = require("express").Router();
const saveController = require("../../controllers/saveController");

// save search route
router.route("/save").post(saveController.saveSearch);

module.exports = router;
