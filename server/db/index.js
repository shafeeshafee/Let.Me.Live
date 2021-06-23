const mongoose = require("mongoose");

let MONGODB_URI =
	process.env.PROD_MONGODB ||
	process.MONGODB ||
	`mongodb+srv://shafee:${process.env.MONGO_KEY}@firstcluster.rjcvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const uri = process.env.MONGODB_URI;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("Database connected!"))
	.catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;
