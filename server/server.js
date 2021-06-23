const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(logger("dev"));

const PORT = process.env.PORT || 5000;

app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB connection failure."));

db.once("open", function () {
	console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
