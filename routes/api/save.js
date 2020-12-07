const router = require("express").Router();
const saveController = require("../../controllers/saveController");

// save search route
router.route("/")
    .post(saveController.saveSearch)

// get saved searches route
router.route("/:id")
    .get(saveController.getSearch)

module.exports = router;
