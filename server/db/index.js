const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let MONGODB_URI =
	process.env.PROD_MONGODB ||
	process.MONGODB ||
	`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@firstcluster.rjcvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
	console.log("Successfully connected to MongoDB.");
});

const db = mongoose.connection;
module.exports = db;
