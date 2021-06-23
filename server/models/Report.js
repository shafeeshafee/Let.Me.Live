const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
	whatHappened: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	feeling: {
		type: String,
		required: true,
	},
	soughtResources: {
		type: String,
		required: true,
	},
	plan: {
		type: String,
		required: true,
	},
	time: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("reports", reportSchema);
