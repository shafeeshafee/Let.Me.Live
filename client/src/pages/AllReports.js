import { useState, useEffect } from "react";
import axios from "axios";
import ReportCard from "../components/ReportCard";

function AllReports() {
	const [reportData, setReportData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/viewreports")
			.then((res) => {
				setReportData(res.data.reports);
			})
			.catch((err) => console.log("Error: " + err));
	}, []);

	return (
		<div className="pt-5 pb-24">
			<h1 className="text-6xl font-bold font-bodySans py-10">Community Reports</h1>
			<div className="border flex p-3 flex-wrap">
				{reportData.map((report) => (
					<div className="flex flex-wrap xl:w-1/3 p-10 text-left">
						<ReportCard {...report} />
					</div>
				))}
			</div>
		</div>
	);
}

export default AllReports;
