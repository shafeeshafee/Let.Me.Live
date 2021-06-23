const db = require("../db");
const ReportModel = require("../models/Report");

db.on("error", console.error.bind(console, "MongoDB failed to connect."));

const main = async () => {
	const reports = [
		{
			whatHappened:
				"I was neglected by the my landlord in Brooklyn even though I paid off all my rent dues. The heating in our house wasn't working for weeks. It still isn't fixed. I don't know what to do about this. Many others complained of the same thing.",
			location: "Brooklyn",
			feeling: "Helpless and frustrated. I feel as if nobody in my apartment complex is getting the help they need.",
			soughtResources: false,
			plan: "I will have to speak to the landlord again about this.",
		},
		{
			whatHappened:
				"Little brother 15 was harassed when he was walking upstairs to his apartment. Hanging out at the corner store with his friends when he got home the landlord smelled the weed. Brother did not have weed on him, just hung around people that did. He was verbally abused and told that he would be kicked out of any drugs were on him. Damaged my brothers sense of security. It was unacceptable.",
			location: "Bronx",
			feeling: "Angry. Agitated. Upset.",
			soughtResources: true,
			plan: "Appealed to landlord's brother who owns a building across the street, and more friendly and kind.",
		},
		{
			whatHappened:
				"I went to speak to my landlord about the insect infestation happening around my house. Instead of helping me, he commented on my body parts and said we should continue it 'at his place'. I was neglected of my needs and sexually harassed. This man needs to be kept on check as many women live here.",
			location: "Queens",
			feeling: "Violated!!! Uncomfortable.",
			soughtResources: true,
			plan: "Told landlord if he continues to do this behavior, I would report him to the police for sexual harassment.",
		},
	];

	await ReportModel.insertMany(reports);
	console.log("Created reports!");
};

const run = async () => {
	await main();
	db.close();
};

run();
