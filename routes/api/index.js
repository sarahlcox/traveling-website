const router = require("express").Router();
const flightsRoute = require("./flights");
const hotelsRoute = require("./hotels");

// Book routes
router.use("/flights", flightsRoute);
router.use("/hotels", hotelsRoute);

module.exports = router;
