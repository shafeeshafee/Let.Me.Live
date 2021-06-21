const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => res.send("Welcome to root."));

router.get("/viewreports", controllers.getAllReports);
router.post("/submit-report", controllers.createReport);

module.exports = router;
