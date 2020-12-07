// this is our middleware 
const router = require("express").Router();
const { route } = require("./flights");
const flightsRoute = require("./flights");
const hotelsRoute = require("./hotels");
const newsRoute = require("./news");
const attractionsRoute = require("./attractions");
const saveRoute = require("./save");

// Book routes
router.use("/flights", flightsRoute);
router.use("/news", newsRoute);
router.use("/hotels", hotelsRoute);
router.use("/attractions", attractionsRoute);
router.use("/save", saveRoute);

module.exports = router;
