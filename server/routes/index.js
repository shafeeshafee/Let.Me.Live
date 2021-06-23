const controllers = require("../controllers");

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
	res.send("This is the root");
});

router.get("/viewreports", controllers.getAllReports);
router.post("/submit-report", controllers.createReport);

module.exports = router;
