const router = require("express").Router();

// save search route
router.post("/save", (req, res) => {
    const { isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.json({});
    }
})

module.exports = router;
