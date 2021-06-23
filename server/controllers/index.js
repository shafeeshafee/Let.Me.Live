const ReportModel = require("../models/Report");

const getAllReports = async (req, res) => {
	try {
		const reports = await ReportModel.find();
		return res.status(200).send({ reports });
	} catch (err) {
		res.status(500).send(`There was an error: ${err}`);
	}
};

const createReport = async (req, res) => {
	try {
		const report = await new ReportModel(req.body);
		await report.save();

		console.log(req.body);

		return res.status(200).send(report);
	} catch (err) {
		return res.status(500).json({ error: `${err}` });
	}
};

const deleteReport = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await Item.findByIdAndDelete(id);
		if (deleted) {
			return res.status(200).send("Item deleted");
		}
		throw new Error("Item not found");
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	getAllReports,
	createReport,
	deleteReport,
};
