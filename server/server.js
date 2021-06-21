const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db");
const app = express();

const PORT = process.env.PORT || 5000;

db.on("error", console.error.bind(console, "MongoDB connection error."));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => console.log("Listening on Port " + PORT));
