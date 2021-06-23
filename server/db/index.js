const mongoose = require("mongoose");

let MONGODB_URI =
	process.env.PROD_MONGODB ||
	process.MONGODB ||
	"mongodb://localhost:27017/LetMeLiveReports?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
	console.log("Successfully connected to MongoDB.");
});

const db = mongoose.connection;
module.exports = db;
