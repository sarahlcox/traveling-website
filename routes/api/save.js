const router = require("express").Router();
const saveController = require("../../controllers/saveController");

// save search route
router.route("/")
    .post(saveController.saveSearch)
    
router.route("/:id")
    .get(saveController.getSearch)

module.exports = router;
