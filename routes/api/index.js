const router = require("express").Router();
const flightsRoute = require("./flights");

// Book routes
router.use("/flights", flightsRoute);

module.exports = router;
